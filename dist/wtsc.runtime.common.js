'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 这是一个样例
 * 所有parsers都要继承此类
 * 这里实现自定义接口要传入函数返回值类型这里规定为implReturn
 *
 */
class Parsers {
    constructor() {
        /**
         * 这里定义实例类型
         *
         *
         * @type {WTSC}
         * @memberof Parsers
         */
        this.wtsc = {};
        /**
         * parsers名字
         */
        this.name = "";
        /**
         * parsers的id
         */
        this.id = Math.random();
    }
    error(msg, cssName) {
        throw new ParserError(msg, cssName, this.name, this.wtsc.groupName, this.wtsc.groupId);
    }
}

class ParserError extends Error {
    /**
     *
     * @param msg 错误信息
     * @param cssNmae css名字
     * @param parsersName parsers名字
     * @param groupName 组名
     * @param groupId 组id
     * @param error
     */
    constructor(msg = "Parser错误", cssNmae = "", parsersName = "", groupName = "wtsc", groupId = -1, error = undefined) {
        super(msg);
        this.msg = msg;
        this.cssNmae = cssNmae;
        this.parsersName = parsersName;
        this.groupName = groupName;
        this.groupId = groupId;
        this.error = error;
    }
    toString() {
        let str = "PARSER ERROR:" + this.msg + "\n";
        if (this.cssNmae != "") {
            str += "CSS属性：'" + this.cssNmae + "'发生了错误\n";
        }
        str += "组名：'" + this.groupName + "'组内发生了一个错误\n";
        if (this.groupId != -1) {
            str += "组ID：第'" + this.groupId + "'个组发生了错误";
        }
        if (this.parsersName != "") {
            str += "解析器:'" + this.parsersName + "'发生了一个错误\n";
        }
        return str;
    }
}

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 */
class WTSC {
    constructor(parsers) {
        this._style = {};
        this.groupName = "wtsc";
        this.groupId = 0;
        this.groupCount = 0;
        this.add = this.proxify(parsers);
    }
    /**
     * 负责代理
     *
     * @param target
     * @param handle
     * @returns
     */
    proxify(_target) {
        const _this = this;
        /**
         * 缓存函数类
         */
        const parsersHandler = {};
        let handle = {
            get(target, prop) {
                //检测到如果是函数的话就会认为是parser
                //parser会被代理并将返回结果变为<WTSC<T,P>>this,
                //并将返回结果变为css的值,以函数名作为css的属性名
                if (typeof _target[prop] === "function") {
                    return (parsersHandler[prop] ||
                        (parsersHandler[prop] = function (...rest) {
                            try {
                                const ret = _target[prop](...rest);
                                if (ret !== null || ret !== undefined) {
                                    _this.addCSS(prop, ret);
                                }
                                else {
                                }
                            }
                            catch (E) {
                                if (E instanceof ParserError) {
                                    console.error(E.toString());
                                }
                                else {
                                    throw E;
                                }
                            }
                            finally {
                                return _this;
                            }
                        }));
                }
                else if (prop === "wtsc") {
                    return _this;
                }
                //这里可能在访问自身的属性
                return target[prop];
            },
        };
        return new Proxy(_target, handle);
    }
    /**
     * 这里可以输入组名，未来可能会有一个功能，
     * 组列表，我们可以生成常用的css组比如居中代码等，
     * 输入对应组名就可以直接生成对应的css代码
     *
     * @param cssGroupName 组名
     */
    setClassName(cssGroupName) {
        this.groupName = cssGroupName;
    }
    /**
     * 合并两个类型为一个，可让开发者先合并css解析器，
     * 然后生成本类，本类是核心不负责css解析器的工作
     *
     * @param first
     * @param second
     * @returns
     */
    static mergeType(first, second) {
        let result = {};
        console.log(Object.keys(first));
        for (let id in first) {
            console.log(id);
            result[id] = first[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    /**
     * 给css添加属性
     *
     * @param {WTSC<T>} this
     * @param {CSSKey<T>} cssKey
     * @param {CSSValueType} cssValue
     * @param {Object} [config]
     * @return {*}  {AddCSSState}
     * @memberof WTSC
     */
    addCSS(cssKey, cssValue, config = DEFAULT_ADD_CSS_CONFIG) {
        try {
            if (this.isExistedBeCSS(cssKey)) {
                if (config.isAllowOverride) {
                    this.setCSS(cssKey, cssValue);
                    return AddCSSState.REDEFINE_SUCCEEDED;
                }
                else {
                    return AddCSSState.REWRITE_FAILED;
                }
            }
            else {
                this.setCSS(cssKey, cssValue);
                return AddCSSState.SUCCEEDED;
            }
        }
        catch (_a) {
            return AddCSSState.ERROR;
        }
        finally {
            return AddCSSState.UNKNOWN;
        }
    }
    /**
     * 拆分方法添加属性
     *
     * @private能希望自定义基于Error的异常类型，使得你能够 throw new MyError() 并可以使用 instanceof MyError 来检查
     * @memberof WTSC
     */
    setCSS(cssName, cssValue) {
        this._style[cssName] = cssValue;
    }
    /**
     * 检查是否存在此css
     *
     * @param {CSSKey<T>} cssKey
     * @return {*}
     * @memberof WTSC
     */
    isExistedBeCSS(cssKey) {
        return !!this._style[cssKey];
    }
    /**
     * 返回css属性
     *
     * @return {*}
     * @memberof WTSC
     */
    return() {
        return this._style;
    }
    /**
     * 清空css
     */
    clear(newGroupName) {
        this.groupCount += 1;
        this.groupId = this.groupCount;
        if (newGroupName == undefined) {
            newGroupName = "WTSC" + this.groupId;
        }
        this.groupName = newGroupName;
        this._style = {};
    }
}
/**
 * 添加css后的状态信息
 */
var AddCSSState;
(function (AddCSSState) {
    /**
     * 添加CSS成功
     */
    AddCSSState[AddCSSState["SUCCEEDED"] = 0] = "SUCCEEDED";
    /**
     * 重写CSS成功
     */
    AddCSSState[AddCSSState["REDEFINE_SUCCEEDED"] = 1] = "REDEFINE_SUCCEEDED";
    /**
     * 重写失败或禁止重写
     */
    AddCSSState[AddCSSState["REWRITE_FAILED"] = 2] = "REWRITE_FAILED";
    /**
     * 未知原因失败
     */
    AddCSSState[AddCSSState["FAILED"] = 3] = "FAILED";
    /**
     * 出错了
     */
    AddCSSState[AddCSSState["ERROR"] = 4] = "ERROR";
    /**
     * 我不知道这种情况应该不可能发生
     */
    AddCSSState[AddCSSState["UNKNOWN"] = 5] = "UNKNOWN";
})(AddCSSState || (AddCSSState = {}));
/**
 * 配置的默认值
 */
const DEFAULT_ADD_CSS_CONFIG = {
    isAllowOverride: true,
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Parsers: Parsers,
  ParsersError: ParserError,
  WTSC: WTSC
});

function createWTSC() {
    const baseWTSC = new WTSC(new BaseParsersImpl());
    return baseWTSC;
}
/**
 * 基础的代码生成
 * 使用方法
 * getBaseWtsc()
 */
class BaseParsersImpl extends Parsers {
    constructor() {
        super();
        this.wtsc = {};
        this.name = "BaseParsers";
        this.id = 1;
    }
    WebkitLineClamp(value) {
        return value;
    }
    accentColor(value) {
        return value;
    }
    additiveSymbols(value) {
        return value;
    }
    alignContent(value) {
        return value;
    }
    alignItems(value) {
        return value;
    }
    alignSelf(value) {
        return value;
    }
    alignTracks(value) {
        return value;
    }
    all(value) {
        return value;
    }
    animation(value) {
        return value;
    }
    animationDelay(value) {
        return value;
    }
    animationDirection(value) {
        return value;
    }
    animationDuration(value) {
        return value;
    }
    animationFillMode(value) {
        return value;
    }
    animationIterationCount(value) {
        return value;
    }
    animationName(value) {
        return value;
    }
    animationPlayState(value) {
        return value;
    }
    animationTimingFunction(value) {
        return value;
    }
    appearance(value) {
        return value;
    }
    ascentOverride(value) {
        return value;
    }
    aspectRatio(value) {
        return value;
    }
    backdropFilter(value) {
        return value;
    }
    backfaceVisibility(value) {
        return value;
    }
    background(value) {
        return value;
    }
    backgroundAttachment(value) {
        return value;
    }
    backgroundBlendMode(value) {
        return value;
    }
    backgroundClip(value) {
        return value;
    }
    backgroundColor(value) {
        return value;
    }
    backgroundImage(value) {
        return value;
    }
    backgroundOrigin(value) {
        return value;
    }
    backgroundPosition(value) {
        return value;
    }
    backgroundPositionX(value) {
        return value;
    }
    backgroundPositionY(value) {
        return value;
    }
    backgroundRepeat(value) {
        return value;
    }
    backgroundSize(value) {
        return value;
    }
    bleed(value) {
        return value;
    }
    blockOverflow(value) {
        return value;
    }
    blockSize(value) {
        return value;
    }
    border(value) {
        return value;
    }
    borderBlock(value) {
        return value;
    }
    borderBlockColor(value) {
        return value;
    }
    borderBlockEnd(value) {
        return value;
    }
    borderBlockEndColor(value) {
        return value;
    }
    borderBlockEndStyle(value) {
        return value;
    }
    borderBlockEndWidth(value) {
        return value;
    }
    borderBlockStart(value) {
        return value;
    }
    borderBlockStartColor(value) {
        return value;
    }
    borderBlockStartStyle(value) {
        return value;
    }
    borderBlockStartWidth(value) {
        return value;
    }
    borderBlockStyle(value) {
        return value;
    }
    borderBlockWidth(value) {
        return value;
    }
    borderBottom(value) {
        return value;
    }
    borderBottomColor(value) {
        return value;
    }
    borderBottomLeftRadius(value) {
        return value;
    }
    borderBottomRightRadius(value) {
        return value;
    }
    borderBottomStyle(value) {
        return value;
    }
    borderBottomWidth(value) {
        return value;
    }
    borderCollapse(value) {
        return value;
    }
    borderColor(value) {
        return value;
    }
    borderEndEndRadius(value) {
        return value;
    }
    borderEndStartRadius(value) {
        return value;
    }
    borderImage(value) {
        return value;
    }
    borderImageOutset(value) {
        return value;
    }
    borderImageRepeat(value) {
        return value;
    }
    borderImageSlice(value) {
        return value;
    }
    borderImageSource(value) {
        return value;
    }
    borderImageWidth(value) {
        return value;
    }
    borderInline(value) {
        return value;
    }
    borderInlineColor(value) {
        return value;
    }
    borderInlineEnd(value) {
        return value;
    }
    borderInlineEndColor(value) {
        return value;
    }
    borderInlineEndStyle(value) {
        return value;
    }
    borderInlineEndWidth(value) {
        return value;
    }
    borderInlineStart(value) {
        return value;
    }
    borderInlineStartColor(value) {
        return value;
    }
    borderInlineStartStyle(value) {
        return value;
    }
    borderInlineStartWidth(value) {
        return value;
    }
    borderInlineStyle(value) {
        return value;
    }
    borderInlineWidth(value) {
        return value;
    }
    borderLeft(value) {
        return value;
    }
    borderLeftColor(value) {
        return value;
    }
    borderLeftStyle(value) {
        return value;
    }
    borderLeftWidth(value) {
        return value;
    }
    borderRadius(value) {
        return value;
    }
    borderRight(value) {
        return value;
    }
    borderRightColor(value) {
        return value;
    }
    borderRightStyle(value) {
        return value;
    }
    borderRightWidth(value) {
        return value;
    }
    borderSpacing(value) {
        return value;
    }
    borderStartEndRadius(value) {
        return value;
    }
    borderStartStartRadius(value) {
        return value;
    }
    borderStyle(value) {
        return value;
    }
    borderTop(value) {
        return value;
    }
    borderTopColor(value) {
        return value;
    }
    borderTopLeftRadius(value) {
        return value;
    }
    borderTopRightRadius(value) {
        return value;
    }
    borderTopStyle(value) {
        return value;
    }
    borderTopWidth(value) {
        return value;
    }
    borderWidth(value) {
        return value;
    }
    bottom(value) {
        return value;
    }
    boxDecorationBreak(value) {
        return value;
    }
    boxShadow(value) {
        return value;
    }
    boxSizing(value) {
        return value;
    }
    breakAfter(value) {
        return value;
    }
    breakBefore(value) {
        return value;
    }
    breakInside(value) {
        return value;
    }
    captionSide(value) {
        return value;
    }
    caretColor(value) {
        return value;
    }
    clear(value) {
        return value;
    }
    clip(value) {
        return value;
    }
    clipPath(value) {
        return value;
    }
    color(value) {
        return value;
    }
    colorAdjust(value) {
        return value;
    }
    colorScheme(value) {
        return value;
    }
    columnCount(value) {
        return value;
    }
    columnFill(value) {
        return value;
    }
    columnGap(value) {
        return value;
    }
    columnRule(value) {
        return value;
    }
    columnRuleColor(value) {
        return value;
    }
    columnRuleStyle(value) {
        return value;
    }
    columnRuleWidth(value) {
        return value;
    }
    columnSpan(value) {
        return value;
    }
    columnWidth(value) {
        return value;
    }
    columns(value) {
        return value;
    }
    contain(value) {
        return value;
    }
    content(value) {
        return value;
    }
    contentVisibility(value) {
        return value;
    }
    counterIncrement(value) {
        return value;
    }
    counterReset(value) {
        return value;
    }
    counterSet(value) {
        return value;
    }
    cursor(value) {
        return value;
    }
    descentOverride(value) {
        return value;
    }
    direction(value) {
        return value;
    }
    display(value) {
        return value;
    }
    emptyCells(value) {
        return value;
    }
    fallback(value) {
        return value;
    }
    filter(value) {
        return value;
    }
    flex(value) {
        return value;
    }
    flexBasis(value) {
        return value;
    }
    flexDirection(value) {
        return value;
    }
    flexFlow(value) {
        return value;
    }
    flexGrow(value) {
        return value;
    }
    flexShrink(value) {
        return value;
    }
    flexWrap(value) {
        return value;
    }
    float(value) {
        return value;
    }
    font(value) {
        return value;
    }
    fontDisplay(value) {
        return value;
    }
    fontFamily(value) {
        return value;
    }
    fontFeatureSettings(value) {
        return value;
    }
    fontKerning(value) {
        return value;
    }
    fontLanguageOverride(value) {
        return value;
    }
    fontOpticalSizing(value) {
        return value;
    }
    fontSize(value) {
        return value;
    }
    fontSizeAdjust(value) {
        return value;
    }
    fontStretch(value) {
        return value;
    }
    fontStyle(value) {
        return value;
    }
    fontSynthesis(value) {
        return value;
    }
    fontVariant(value) {
        return value;
    }
    fontVariantAlternates(value) {
        return value;
    }
    fontVariantCaps(value) {
        return value;
    }
    fontVariantEastAsian(value) {
        return value;
    }
    fontVariantLigatures(value) {
        return value;
    }
    fontVariantNumeric(value) {
        return value;
    }
    fontVariantPosition(value) {
        return value;
    }
    fontVariationSettings(value) {
        return value;
    }
    fontWeight(value) {
        return value;
    }
    forcedColorAdjust(value) {
        return value;
    }
    gap(value) {
        return value;
    }
    grid(value) {
        return value;
    }
    gridArea(value) {
        return value;
    }
    gridAutoColumns(value) {
        return value;
    }
    gridAutoFlow(value) {
        return value;
    }
    gridAutoRows(value) {
        return value;
    }
    gridColumn(value) {
        return value;
    }
    gridColumnEnd(value) {
        return value;
    }
    gridColumnStart(value) {
        return value;
    }
    gridRow(value) {
        return value;
    }
    gridRowEnd(value) {
        return value;
    }
    gridRowStart(value) {
        return value;
    }
    gridTemplate(value) {
        return value;
    }
    gridTemplateAreas(value) {
        return value;
    }
    gridTemplateColumns(value) {
        return value;
    }
    gridTemplateRows(value) {
        return value;
    }
    hangingPunctuation(value) {
        return value;
    }
    height(value) {
        return value;
    }
    hyphens(value) {
        return value;
    }
    imageOrientation(value) {
        return value;
    }
    imageRendering(value) {
        return value;
    }
    imageResolution(value) {
        return value;
    }
    inherit(value) {
        return value;
    }
    inherits(value) {
        return value;
    }
    initial(value) {
        return value;
    }
    initialLetter(value) {
        return value;
    }
    initialLetterAlign(value) {
        return value;
    }
    initialValue(value) {
        return value;
    }
    inlineSize(value) {
        return value;
    }
    inputSecurity(value) {
        return value;
    }
    inset(value) {
        return value;
    }
    insetBlock(value) {
        return value;
    }
    insetBlockEnd(value) {
        return value;
    }
    insetBlockStart(value) {
        return value;
    }
    insetInline(value) {
        return value;
    }
    insetInlineEnd(value) {
        return value;
    }
    insetInlineStart(value) {
        return value;
    }
    isolation(value) {
        return value;
    }
    justifyContent(value) {
        return value;
    }
    justifyItems(value) {
        return value;
    }
    justifySelf(value) {
        return value;
    }
    justifyTracks(value) {
        return value;
    }
    left(value) {
        return value;
    }
    letterSpacing(value) {
        return value;
    }
    lineBreak(value) {
        return value;
    }
    lineClamp(value) {
        return value;
    }
    lineGapOverride(value) {
        return value;
    }
    lineHeight(value) {
        return value;
    }
    lineHeightStep(value) {
        return value;
    }
    listStyle(value) {
        return value;
    }
    listStyleImage(value) {
        return value;
    }
    listStylePosition(value) {
        return value;
    }
    listStyleType(value) {
        return value;
    }
    margin(value) {
        return value;
    }
    marginBlock(value) {
        return value;
    }
    marginBlockEnd(value) {
        return value;
    }
    marginBlockStart(value) {
        return value;
    }
    marginBottom(value) {
        return value;
    }
    marginInline(value) {
        return value;
    }
    marginInlineEnd(value) {
        return value;
    }
    marginInlineStart(value) {
        return value;
    }
    marginLeft(value) {
        return value;
    }
    marginRight(value) {
        return value;
    }
    marginTop(value) {
        return value;
    }
    marginTrim(value) {
        return value;
    }
    marks(value) {
        return value;
    }
    mask(value) {
        return value;
    }
    maskBorder(value) {
        return value;
    }
    maskBorderMode(value) {
        return value;
    }
    maskBorderOutset(value) {
        return value;
    }
    maskBorderRepeat(value) {
        return value;
    }
    maskBorderSlice(value) {
        return value;
    }
    maskBorderSource(value) {
        return value;
    }
    maskBorderWidth(value) {
        return value;
    }
    maskClip(value) {
        return value;
    }
    maskComposite(value) {
        return value;
    }
    maskImage(value) {
        return value;
    }
    maskMode(value) {
        return value;
    }
    maskOrigin(value) {
        return value;
    }
    maskPosition(value) {
        return value;
    }
    maskRepeat(value) {
        return value;
    }
    maskSize(value) {
        return value;
    }
    maskType(value) {
        return value;
    }
    masonryAutoFlow(value) {
        return value;
    }
    mathStyle(value) {
        return value;
    }
    maxBlockSize(value) {
        return value;
    }
    maxHeight(value) {
        return value;
    }
    maxInlineSize(value) {
        return value;
    }
    maxLines(value) {
        return value;
    }
    maxWidth(value) {
        return value;
    }
    maxZoom(value) {
        return value;
    }
    minBlockSize(value) {
        return value;
    }
    minHeight(value) {
        return value;
    }
    minInlineSize(value) {
        return value;
    }
    minWidth(value) {
        return value;
    }
    minZoom(value) {
        return value;
    }
    mixBlendMode(value) {
        return value;
    }
    negative(value) {
        return value;
    }
    objectFit(value) {
        return value;
    }
    objectPosition(value) {
        return value;
    }
    offset(value) {
        return value;
    }
    offsetAnchor(value) {
        return value;
    }
    offsetDistance(value) {
        return value;
    }
    offsetPath(value) {
        return value;
    }
    offsetPosition(value) {
        return value;
    }
    offsetRotate(value) {
        return value;
    }
    opacity(value) {
        return value;
    }
    order(value) {
        return value;
    }
    orientation(value) {
        return value;
    }
    orphans(value) {
        return value;
    }
    outline(value) {
        return value;
    }
    outlineColor(value) {
        return value;
    }
    outlineOffset(value) {
        return value;
    }
    outlineStyle(value) {
        return value;
    }
    outlineWidth(value) {
        return value;
    }
    overflow(value) {
        return value;
    }
    overflowAnchor(value) {
        return value;
    }
    overflowBlock(value) {
        return value;
    }
    overflowClipMargin(value) {
        return value;
    }
    overflowInline(value) {
        return value;
    }
    overflowWrap(value) {
        return value;
    }
    overflowX(value) {
        return value;
    }
    overflowY(value) {
        return value;
    }
    overscrollBehavior(value) {
        return value;
    }
    overscrollBehaviorBlock(value) {
        return value;
    }
    overscrollBehaviorInline(value) {
        return value;
    }
    overscrollBehaviorX(value) {
        return value;
    }
    overscrollBehaviorY(value) {
        return value;
    }
    PseudoClasses(value) {
        return value;
    }
    PseudoElements(value) {
        return value;
    }
    pad(value) {
        return value;
    }
    padding(value) {
        return value;
    }
    paddingBlock(value) {
        return value;
    }
    paddingBlockEnd(value) {
        return value;
    }
    paddingBlockStart(value) {
        return value;
    }
    paddingBottom(value) {
        return value;
    }
    paddingInline(value) {
        return value;
    }
    paddingInlineEnd(value) {
        return value;
    }
    paddingInlineStart(value) {
        return value;
    }
    paddingLeft(value) {
        return value;
    }
    paddingRight(value) {
        return value;
    }
    paddingTop(value) {
        return value;
    }
    pageBreakAfter(value) {
        return value;
    }
    pageBreakBefore(value) {
        return value;
    }
    pageBreakInside(value) {
        return value;
    }
    paintOrder(value) {
        return value;
    }
    perspective(value) {
        return value;
    }
    perspectiveOrigin(value) {
        return value;
    }
    placeContent(value) {
        return value;
    }
    placeItems(value) {
        return value;
    }
    placeSelf(value) {
        return value;
    }
    pointerEvents(value) {
        return value;
    }
    position(value) {
        return value;
    }
    prefix(value) {
        return value;
    }
    quotes(value) {
        return value;
    }
    range(value) {
        return value;
    }
    resize(value) {
        return value;
    }
    revert(value) {
        return value;
    }
    right(value) {
        return value;
    }
    rotate(value) {
        return value;
    }
    rowGap(value) {
        return value;
    }
    rubyAlign(value) {
        return value;
    }
    rubyMerge(value) {
        return value;
    }
    rubyPosition(value) {
        return value;
    }
    scale(value) {
        return value;
    }
    scrollBehavior(value) {
        return value;
    }
    scrollMargin(value) {
        return value;
    }
    scrollMarginBlock(value) {
        return value;
    }
    scrollMarginBlockEnd(value) {
        return value;
    }
    scrollMarginBlockStart(value) {
        return value;
    }
    scrollMarginBottom(value) {
        return value;
    }
    scrollMarginInline(value) {
        return value;
    }
    scrollMarginInlineEnd(value) {
        return value;
    }
    scrollMarginInlineStart(value) {
        return value;
    }
    scrollMarginLeft(value) {
        return value;
    }
    scrollMarginRight(value) {
        return value;
    }
    scrollMarginTop(value) {
        return value;
    }
    scrollPadding(value) {
        return value;
    }
    scrollPaddingBlock(value) {
        return value;
    }
    scrollPaddingBlockEnd(value) {
        return value;
    }
    scrollPaddingBlockStart(value) {
        return value;
    }
    scrollPaddingBottom(value) {
        return value;
    }
    scrollPaddingInline(value) {
        return value;
    }
    scrollPaddingInlineEnd(value) {
        return value;
    }
    scrollPaddingInlineStart(value) {
        return value;
    }
    scrollPaddingLeft(value) {
        return value;
    }
    scrollPaddingRight(value) {
        return value;
    }
    scrollPaddingTop(value) {
        return value;
    }
    scrollSnapAlign(value) {
        return value;
    }
    scrollSnapStop(value) {
        return value;
    }
    scrollSnapType(value) {
        return value;
    }
    scrollbarColor(value) {
        return value;
    }
    scrollbarGutter(value) {
        return value;
    }
    scrollbarWidth(value) {
        return value;
    }
    shapeImageThreshold(value) {
        return value;
    }
    shapeMargin(value) {
        return value;
    }
    shapeOutside(value) {
        return value;
    }
    size(value) {
        return value;
    }
    sizeAdjust(value) {
        return value;
    }
    speakAs(value) {
        return value;
    }
    src(value) {
        return value;
    }
    suffix(value) {
        return value;
    }
    symbols(value) {
        return value;
    }
    syntax(value) {
        return value;
    }
    system(value) {
        return value;
    }
    tabSize(value) {
        return value;
    }
    tableLayout(value) {
        return value;
    }
    textAlign(value) {
        return value;
    }
    textAlignLast(value) {
        return value;
    }
    textCombineUpright(value) {
        return value;
    }
    textDecoration(value) {
        return value;
    }
    textDecorationColor(value) {
        return value;
    }
    textDecorationLine(value) {
        return value;
    }
    textDecorationSkip(value) {
        return value;
    }
    textDecorationSkipInk(value) {
        return value;
    }
    textDecorationStyle(value) {
        return value;
    }
    textDecorationThickness(value) {
        return value;
    }
    textEmphasis(value) {
        return value;
    }
    textEmphasisColor(value) {
        return value;
    }
    textEmphasisPosition(value) {
        return value;
    }
    textEmphasisStyle(value) {
        return value;
    }
    textIndent(value) {
        return value;
    }
    textJustify(value) {
        return value;
    }
    textOrientation(value) {
        return value;
    }
    textOverflow(value) {
        return value;
    }
    textRendering(value) {
        return value;
    }
    textShadow(value) {
        return value;
    }
    textSizeAdjust(value) {
        return value;
    }
    textTransform(value) {
        return value;
    }
    textUnderlineOffset(value) {
        return value;
    }
    textUnderlinePosition(value) {
        return value;
    }
    top(value) {
        return value;
    }
    touchAction(value) {
        return value;
    }
    transform(value) {
        return value;
    }
    transformBox(value) {
        return value;
    }
    transformOrigin(value) {
        return value;
    }
    transformStyle(value) {
        return value;
    }
    transition(value) {
        return value;
    }
    transitionDelay(value) {
        return value;
    }
    transitionDuration(value) {
        return value;
    }
    transitionProperty(value) {
        return value;
    }
    transitionTimingFunction(value) {
        return value;
    }
    translate(value) {
        return value;
    }
    unicodeBidi(value) {
        return value;
    }
    unicodeRange(value) {
        return value;
    }
    unset(value) {
        return value;
    }
    userSelect(value) {
        return value;
    }
    userZoom(value) {
        return value;
    }
    verticalAlign(value) {
        return value;
    }
    viewportFit(value) {
        return value;
    }
    visibility(value) {
        return value;
    }
    whiteSpace(value) {
        return value;
    }
    widows(value) {
        return value;
    }
    width(value) {
        return value;
    }
    willChange(value) {
        return value;
    }
    wordBreak(value) {
        return value;
    }
    wordSpacing(value) {
        return value;
    }
    wordWrap(value) {
        return value;
    }
    writingMode(value) {
        return value;
    }
    zIndex(value) {
        return value;
    }
    zoom(value) {
        return value;
    }
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createBaseWTSC: createWTSC,
  BaseParsersImpl: BaseParsersImpl
});

exports.core = index$1;
exports.createBaseWTSC = createWTSC;
exports.createWTSC = createWTSC;
exports.parsers = index;
