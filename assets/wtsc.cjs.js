'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * it can check whether is a undefine type ,
 * it till you.
 *
 * 检查是不是undefine
 *
 * @param v it object to be checked.
 * @returns it is undefine will return true;
 */
function isUndef(v) {
    return v === undefined;
}
/**
 * 不是undefine
 *
 * @param v 传入任何值
 * @returns 如果不是未定义返回true
 */
function isNotUndef(v) {
    return !isUndef(v);
}
/**
 *  是函数
 *
 * @param v 传入任何类型
 * @returns 如果是函数返回true
 */
function isFunction(v) {
    return typeof v === "function";
}
/**
 *  值绝对等于false，没有类型转换
 *
 * @param v
 * @returns v = false return true;
 */
function equalToFalse(v) {
    return v === false;
}
/**
 * 检查是不是数组
 *
 * @param v
 * @returns 是则返回true
 */
function isArray(v) {
    return Array.isArray(v);
}
/**
 *  检查是不是object
 *
 * @param v
 * @returns 是则返回true
 */
function isObject(v) {
    return v !== null && typeof v === "object";
}
/**
 * if is a string type,it will return true.
 * 检查是不是string
 *
 * @param v \
 * @returns
 */
function isString(x) {
    return typeof x === "string";
}
/**
 * if is a number type ,it is return true;
 * 检查是不是number
 *
 * @param v
 * @returns
 */
function isNumber(v) {
    return typeof v === "number";
}

/**
 * 缓存方法，传入一个函数，要求传入的函数的第一个参数为一个str，用作key
 * 返回一个函数，调用函数，你可以向内传入值来调用以前缓存的内容，第一个值为缓存值的key
 *
 * 缓存是在内存中的，根据场合使用
 *
 * 请不要滥用！！！
 * 会持续占用内存
 *
 * @param handle  处理函数
 * @returns 返回一个函数
 */
function cached(handle) {
    const cache = Object.create(null);
    const cachecd = function (str, ...rest) {
        const obj = cache[str];
        return isNotUndef(obj) ? obj : (cache[str] = handle(str, ...rest));
    };
    return cachecd;
}
/**
 * 每一次缓存时都给予选项是否懒加载，定义传入的高级函数时，
 * 请在最后一个设置为布尔便可
 *
 * 传入一个(...args:any[],isCached:boolean)=>{}
 *
 * @param fun  (str: string, ...rest: A ,isCached:boolean) => R
 * ...rest  ...args:any[],isCached:boolean
 * @returns R
 */
function selectCached(fun) {
    const cacheds = cached(fun);
    return (str, ...rest) => {
        if (equalToFalse(rest[rest.length - 1])) {
            return fun(str, ...rest);
        }
        else {
            return cacheds(str, ...rest);
        }
    };
}

/**
 * 让自执行函数懒加载
 *
 * 懒函数也不要滥用！！！
 *
 * @param fun 要懒加载的自执行函数
 * @param rest1 要懒加载的自执行函数的参数
 * @returns 返回一个函数，执行后初始化，加第一次调用一起执行
 */
function lazyFun(fun, ...rest1) {
    //存储传入的高级函数返回的函数， 你是不是晕了，我写的时候也把自己绕进去了
    let rf = (...rest2) => (rf = fun(...rest1))(...rest2);
    //这里目前简化不了只能返回高级函数， 是无法直接返回我们传入的高级函数里面返回的高级函数的，
    //因为使用者已经将其放到了变量里，我们改不了他的变量,只能套一层改自己的了变量了
    return (...rest2) => rf(...rest2);
}
/**
 * 驼峰命名转横线命名法
 */
const hypnenate = lazyFun(selectCached, (str, isCached = true) => {
    /**
     * 大写字母
     */
    const hypnenateRE = /([A-Z])/;
    return str
        .replace(hypnenateRE, (r) => {
        return `-${r}`;
    })
        .toLowerCase();
});

const WTSCObject = Symbol('WTSCObject');

function createInjectStorage(parent, obj = {}) {
    const o = obj;
    o.provider = new WeakMap();
    if (parent)
        o.parent = parent;
    return o;
}

// export type defWTSCStorage<T extends object> = (
//   name?: string,
//   o?: T,
//   parent?: WTSCStorage
// ) => WTSCStorage & T
function createWTSCStorage(name = 'root', parent, obj = {}) {
    const o = createInjectStorage(parent, obj);
    o.id = Symbol('');
    o.name = name;
    o.style = {};
    return obj;
}

const choice = Symbol('choice');

/**
 * 类唯一辨认属性等于它代表就是这个类
 */
const injectObject = Symbol('injectObject');

/**
 * InjectKey 键
 */
const IK = Symbol('IK');
/**
 * InjectKey值 主要是存储类型的，没有类型接收，很多类型运算都失效了，目前不传这个参数也不会出现问题
 */
const IV = Symbol('WTSCIV');
/**
 * 检查是不是 @InjectKey 类型
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is InjectKey<any>}
 */
function isInjectKey(v) {
    if (isObject(v) && IK in v) {
        return true;
    }
    return false;
}
/**
 * 第一个值是否响应，第二值描述
 * @author meke
 * @export
 * @template Value
 * @template IsAssertionExisted 如果为true代表断言一定存在这个属性
 * @param {boolean} [isReactive=true]
 * @param {string} [describe='']
 * @return {*}  {InjectKey<Value, IsAssertionExisted>}
 */
function defInjKey(isReactive = true, describe = '') {
    return Object.setPrototypeOf({
        [IK]: Symbol(describe ),
        isReactive,
    }, InjKeyPrototype);
}
const InjKeyPrototype = {
    out(w) {
        return w.inject(this);
    },
};

function uniteClassSelectors(ClassSelectors, className) {
    return `${ClassSelectors}.${className}`;
}
function uniteClassNames(classNames, className) {
    return `${classNames} ${className}`.trim();
}
function uniteSelectors(selectors, selector) {
    return `${selectors} ${selector}`.trim();
}
function uniteHoxClassNames(hoxClassNames, name) {
    if (hoxClassNames === '') {
        return name;
    }
    return `${hoxClassNames}-${name}`;
}

const nextTickData = [];
let timouter = setTimeout(() => { });
function nextTick(f) {
    nextTickData.push(f);
    clearTimeout(timouter);
    timouter = setTimeout(nextTickRun, 0);
}
function nextTickRun() {
    let f = nextTickData.pop();
    while (f) {
        f();
        f = nextTickData.pop();
    }
}

function newClass(Class) {
    return (...rest) => {
        return new Class(...rest);
    };
}
/**
 * 生成一个hash
 * @author meke
 * @export
 * @param {number} [length=6]
 * @param {number} [base=36]
 * @return {*}  {string}
 */
function genHash(length = 6, base = 36) {
    return Math.floor(Math.random() * (Math.pow(base, length) - 1))
        .toString(base)
        .padStart(length, '0');
}
const isBrowser = (() => {
    try {
        return !!document;
    }
    catch (_a) {
        return false;
    }
})();
function mixin(o1, o2) {
    Object.keys(o2).forEach((k) => {
        o1[k] = o2[k];
    });
    Object.getOwnPropertySymbols(o2).forEach((k) => (o1[k] = o2[k]));
    return o1;
}
function setPrototypeOf(o, parent) {
    return Object.setPrototypeOf(o, parent);
}
function isOutValue(v) {
    return isObject(v) && 'out' in v;
}
function genPack(prefix, suffix) {
    return (v) => {
        return `${prefix}${v}${suffix}`;
    };
}

class ParsersError extends Error {
    /**
     *
     * @param msg 错误信息
     * @param cssNmae css名字
     * @param parsersName parsers名字
     * @param groupName 组名
     * @param groupId 组id
     * @param error
     */
    constructor(msg = 'Parser错误', cssNmae = '', parsersName = '', groupName = 'wtsc', groupId = -1, error = undefined) {
        super(msg);
        this.msg = msg;
        this.cssNmae = cssNmae;
        this.parsersName = parsersName;
        this.groupName = groupName;
        this.groupId = groupId;
        this.error = error;
    }
    static throw() {
        throw new ParsersError();
    }
    toString() {
        let str = 'PARSER ERROR:' + this.msg + '\n';
        if (this.cssNmae !== '') {
            str += "CSS属性：'" + this.cssNmae + "'发生了错误\n";
        }
        str += "组名：'" + this.groupName + "'组内发生了一个错误\n";
        if (this.groupId !== -1) {
            str += "组ID：第'" + this.groupId.toString() + "'个组发生了错误";
        }
        if (this.parsersName !== '') {
            str += "解析器:'" + this.parsersName + "'发生了一个错误\n";
        }
        return str;
    }
}
function skip(...rest) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new ParsersSkip(rest.join(' '));
}
class ParsersSkip extends Error {
    constructor(msg = '') {
        super(msg);
    }
}

let currentCSSKey = '';
const CSSParserHeap = [];
function parserSpaceStart(name) {
    CSSParserHeap.unshift(currentCSSKey);
    currentCSSKey = name;
}
function parserSpaceEnd() {
    var _a;
    currentCSSKey = (_a = CSSParserHeap.shift()) !== null && _a !== void 0 ? _a : '';
}
function getParserKey() {
    return currentCSSKey;
}
/**
 * 全局 parsers 前缀处理，可以在任何位置通过@getCurrCSSKey()得到key
 *
 * @export
 * @param {string} cssKey
 * @param {() => void} f
 */
function parserSpace(cssKey, f) {
    parserSpaceStart(cssKey);
    try {
        return f();
    }
    catch (E) {
        {
            if (E instanceof ParsersSkip) {
                parserSpaceWarn(E.message);
            }
            else if (E instanceof ParsersError) {
                parserSpaceWarn(E.toString());
            }
            else if (E instanceof TypeError) {
                parserSpaceWarn(E.message);
            }
            else {
                throw E;
            }
        }
    }
    finally {
        parserSpaceEnd();
    }
}

function warn(msg, ...args) {
    {
        console.warn(msg, ...args);
    }
}
function parserSpaceWarn(msg, ...args) {
    warn(`WTSC>parserSpace>${getParserKey()}: ${msg}`, ...args);
}

/* eslint-disable no-extra-boolean-cast */
exports.pack = function (value, pack) {
    return value;
};
exports.unpack = function (value) {
    return value;
};
/**
 * 传入一个ref，定义ref打包器
 * @author meke
 * @export
 * @param {RefFun} _ref
 * @return {*}  {void}
 */
function defRefPackager(_ref) {
    exports.pack = (value, pack) => {
        if (pack) {
            pack.value = value;
            return pack;
        }
        return _ref(value);
    };
    exports.unpack = (pack) => {
        return pack.value;
    };
}
let isWarn = true;
// 自动添加响应
try {
    const test = [
        () => {
            //@ts-ignore
            if (vue) {
                //@ts-ignore
                return autoInpurt(vue);
            }
            return false;
        },
        () => {
            //@ts-ignore
            if (Vue) {
                //@ts-ignore
                return autoInpurt(Vue);
            }
            return false;
        },
        () => {
            //@ts-ignore
            if (!!require) {
                autoInpurt(require('vue'));
                return false;
            }
            return false;
        },
    ];
    const r = test.reduce((previousValue, currentValue) => {
        if (previousValue) {
            return true;
        }
        try {
            return currentValue();
        }
        catch (_a) {
            return false;
        }
    }, false);
    if (!r) {
        throw new Error('');
    }
    function autoInpurt(v) {
        const [main] = v.version.split('.');
        if (main === '3') {
            //@ts-ignore
            const { ref } = v;
            //自动引入测试代码
            const s = Symbol('');
            const test = ref(s);
            if (test.value === s) {
                //@ts-ignore
                defRefPackager(ref);
                return true;
            }
        }
        return false;
    }
}
catch (_a) {
    {
        nextTick(() => {
            if (isWarn) {
                warn('自动添加响应vue失败，您可能不在一个vue您可以使用defRefPackager(ref)来定义ref响应,使用turnOffAutoImportWarning()来关闭警告');
            }
        });
    }
}
function turnOffAutoImportWarning() {
    isWarn = false;
}

function _inject(injectKey, storage) {
    const v = storage.provider.get(injectKey);
    if (v) {
        if (injectKey.isReactive) {
            return exports.unpack(v);
        }
        return v;
    }
    else {
        const _storage = storage.parent;
        if (_storage) {
            return _inject(injectKey, _storage);
        }
    }
    return undefined;
}
const inject = function (injectKey, defau) {
    var _a;
    return (_a = _inject(injectKey, this)) !== null && _a !== void 0 ? _a : defau;
};
let that$1;
function _depInject(objKey, memory = new WeakMap()) {
    if (isInjectKey(objKey)) {
        return that$1.inject(objKey);
    }
    if (isObject(objKey)) {
        // dep memory, Prevent circulation
        if (memory.get(objKey)) {
            return objKey;
        }
        memory.set(objKey, true);
        // array
        if (isArray(objKey)) {
            const arr = [];
            for (let i = 0; i < objKey.length; i++) {
                arr.push(_depInject(objKey[i], memory));
            }
            return arr;
        }
        // object
        const ret = {};
        for (const k in objKey) {
            ret[k] = _depInject(objKey[k], memory);
        }
        return ret;
    }
    return objKey;
}
const depInject = function (objkey) {
    that$1 = this;
    return _depInject(objkey);
};

const provide = function (value, injectKey = defInjKey(true, 'provide' )) {
    if (injectKey.isReactive) {
        const ov = this.provider.get(injectKey);
        const nv = exports.pack(value, ov);
        this.provider.set(injectKey, nv);
    }
    else {
        this.provider.set(injectKey, value);
    }
    return injectKey;
};
let that;
/**
 * @author meke
 * @template KEYAPI
 * @param {KEYAPI} objKey
 * @param {GetObjInjectValue<KEYAPI>} value
 * @memberof Inject
 */
function _depProvide(objKey, value, memory = new WeakMap()) {
    try {
        if (isInjectKey(objKey)) {
            // 默认情况下传进来的undefined会忽略处理，
            // 也就是说不可以使用depProvide将一个值改为undefined
            if (isUndef(value)) {
                if (true) {
                    warn('depProvider发现了一个undefined', value);
                }
                return;
            }
            that.provide(value, objKey);
            return;
        }
        if (isObject(objKey) && isObject(value)) {
            // dep memory, Prevent circulation
            if (memory.get(objKey)) {
                return;
            }
            memory.set(objKey, true);
            // array
            if (isArray(objKey)) {
                for (let i = 0; i < objKey.length; i++) {
                    _depProvide(objKey[i], value[i], memory);
                }
                return;
            }
            // object
            for (const k in objKey) {
                _depProvide(objKey[k], value[k], memory);
            }
        }
    }
    catch (_a) {
        {
            warn('depProvide运行时报错');
        }
    }
}
/**
 * 传入任何的树形结构，需要输入数据，数据类型要符合树形结构，将所有对应InjectKey的数据全部存储
 * @author meke
 * @template KEYAPI
 * @param {KEYAPI} objKey
 * @param {GetObjInjectValue<KEYAPI>} value
 * @return {*}  {KEYAPI}
 * @memberof Inject
 */
const depProvide = function (value, objKey) {
    that = this;
    _depProvide(objKey, value);
    return objKey;
};

function isInject(v) {
    return isObject(v) && injectObject in v;
}
const injectPrototype = {
    [injectObject]: true,
    delete(injectKey) {
        this.provider.delete(injectKey);
    },
    has(injectKey) {
        return this.provider.has(injectKey);
    },
    inject,
    depInject,
    provide,
    depProvide,
    ownInject(injectKey) {
        const v = this.provider.get(injectKey);
        if (v) {
            if (injectKey.isReactive) {
                return exports.unpack(v);
            }
        }
        return v;
    },
};
function createInject() {
    return Object.setPrototypeOf(createInjectStorage(), injectPrototype);
}

function defSetThemeFunction() {
    return function setTheme(r1, r2 = choice) {
        const themeList = this.themeList;
        try {
            // 输入的第一项如果是模式
            if (r1 in themeList) {
                // 选择到当前色彩模式主题
                themeList[choice] = themeList[r1];
                // 选择当前模式主题
                themeList[choice][choice] = themeList[choice][r2];
                this.setup(themeList[choice][choice]);
                return;
            }
            // 输入的第一项如果不是模式，就要在颜色列表里搜寻需要的颜色方案
            for (const modeKey in themeList) {
                const modeValue = themeList[modeKey];
                if (!(r1 in modeValue)) {
                    continue;
                }
                // 选择到当前色彩模式主题
                themeList[choice] = themeList[modeKey];
                // 选择当前模式主题
                themeList[choice][choice] = themeList[modeKey][r1];
                // 当然两个都选好了就直接使用选择的主题就好了
                this.setup(themeList[choice][choice]);
            }
        }
        catch (_a) {
            warn('警告设置失败可能没有这个主题');
        }
    };
}

function defThemePrototype(options) {
    const example = Object.assign(Object.assign({}, injectPrototype), { the: undefined, themeList: undefined, setup(theme) {
            this.depProvide(theme, this.the);
        }, setTheme: defSetThemeFunction() });
    return example;
}
function initDefThemeKeys(options, example, prototype) {
    var _a, _b, _c;
    prototype.the = ((_b = (_a = options.defThemeKeys) === null || _a === void 0 ? void 0 : _a.call(example, example.provide.bind(example))) !== null && _b !== void 0 ? _b : {});
    const defaul = example.depInject(prototype.the);
    const themeList = (_c = options.themeList) !== null && _c !== void 0 ? _c : {};
    themeList.default = { [choice]: defaul };
    // 初始化选中主题
    Object.keys(themeList).forEach((key) => {
        var _a;
        themeList[key][choice] = (_a = theFirstOne(themeList[key])) !== null && _a !== void 0 ? _a : defaul;
    });
    prototype.themeList = themeList;
}
function theFirstOne(o) {
    const keys = Object.keys(o);
    if (keys.length <= 0) {
        return undefined;
    }
    else {
        return o[keys[0]];
    }
}

/**
 * @author meke
 * @private
 * @template F
 * @param {string} key
 * @param {F} handle
 * @param {...any[]} rest
 * @return {*}  {WTSC<T>}
 * @memberof WTSC
 */
function parsersResultHandle(...rest) {
    return toHandle(rest);
}
function toHandle(rest) {
    parserSpace(preAddKey, () => {
        wtsc.addAny(preAddKey, ...rest);
    });
    return wtsc;
}
function Add(key, ...rest) {
    return wtsc.addAny(key, ...rest);
}
let _wtsc;
function styleValueToString(wtsc, styleValue) {
    _wtsc = wtsc;
    return isAddRestList(styleValue)
        ? addRestListToString(styleValue)
        : addRestToString(styleValue);
}
function addRestListToString(addRestList) {
    return addRestList.map((addRest) => addRestToString(addRest)).join(',');
}
function isAddRestList(v) {
    {
        if (v.length <= 0) {
            return false;
        }
        const b = isArray(v[0]);
        if (b) {
            v.forEach((item, i) => {
                if (!isArray(item)) {
                    notAddRestWarning(i);
                }
            });
        }
        return b;
    }
}
let index;
function addRestToString(addRest) {
    return addRest
        .map((v, _index) => {
        index = _index;
        if (isInjectKey(v)) {
            // undefine跳过本条css不处理，通用错误处理会记录处理情况
            const addValue = wtsc.inject(v);
            {
                if (isUndef(addValue)) {
                    theInjectkeyGetsAnUndefinedWarning(index);
                }
            }
            return addValueTostring(addValue);
        }
        return addValueTostring(v);
    })
        .join(' ');
}
function addValueTostring(addValue) {
    if (isString(addValue)) {
        return addValue;
    }
    if (typeof addValue === 'number') {
        return addValue.toString();
    }
    return outValueToString(addValue);
}
function outValueToString(outValue) {
    {
        if (isUndef(outValue)) {
            aUndefWarning(index);
        }
    }
    {
        if (!isFunction(outValue.out)) {
            notAFunctionWarn(index);
        }
    }
    return outValue.out(_wtsc);
}
function warningForStyleToString(index, msg) {
    skip(`第${index}个参数，`, msg);
}
function theInjectkeyGetsAnUndefinedWarning(index) {
    warningForStyleToString(index, 'Injectkey返回了一个undefined');
}
function aUndefWarning(index) {
    warningForStyleToString(index, `第${index}个参数是一个undefined`);
}
function notAFunctionWarn(index) {
    warningForStyleToString(index, `当前正在处理的StyleValue的第${index}个参数，既不是string也不具有out方法，\
本css将会被忽略，请查看您是否有强制类型转换来解决问题`);
}
function notAddRestWarning(index) {
    warningForStyleToString(index, `RestList的第${index}个参数，不是一个AddRest`);
}

/**
 * 将会以css的形式格式化
 * @author meke
 * @param {string} [selectors=this.name]
 * @param {string} [prefix='']
 * @return {*}  {string}
 * @memberof WTSC
 */
function styleToString(style) {
    let styleString = '';
    for (const key in style) {
        const cssValue = style[key];
        styleString += `${hypnenate(key)}: ${cssValue};`;
    }
    return styleString;
}

const selectorDataInj = defInjKey(false);
function addClassSelectorData(w, className, global) {
    const styleData = getStyleData(w);
    w.provide(createClassSelectorData(styleData, className, w.outStyle(), global), selectorDataInj);
}
/**
 * 创建 SelectorData
 * @author meke
 * @export
 * @param {StyleData} styleData
 * @param {string} className
 * @param {*} style
 * @return {*}  {SelectorData}
 */
function createClassSelectorData(styleData, className, style, isGlobal) {
    if (isGlobal) {
        return {
            name: className,
            selector: uniteClassSelectors('', className),
            style: styleToString(style),
        };
    }
    return {
        name: uniteClassNames(styleData.classNames, className),
        selector: uniteClassSelectors(styleData.classSelectors, className),
        style: styleToString(style),
    };
}

let cssTemp = '';
// export const styleDom = document.createElement('style')
let styleDom = {};
// 检查到浏览器场景自动挂载style
if (isBrowser) {
    try {
        const style = document.createElement('style');
        // 设置style属性
        style.setAttribute('type', 'text/css');
        style.id = 'wtscStyle';
        style.innerHTML = cssTemp;
        // 将style样式存放到head标签
        document.getElementsByTagName('head')[0].appendChild(style);
        setStyle();
        styleDom = style;
    }
    catch (E) {
        {
            warn('在将style标签添加到页面时发生了错误', E);
        }
    }
}
function setStyle(s) {
    if (s) {
        cssTemp = s;
    }
    // nolistening = true
    styleDom.innerHTML = cssTemp;
}

function dependencyCounter(leaf) {
    const dependencyNumberMap = new WeakMap();
    leaf.forEach((item) => {
        // 第一步 当前要求是叶节点，所以叶节点全部为零
        dependencyNumberMap.set(item, 0);
        // 对本树枝的所有节点初始化
        let sd = item.parent;
        while (sd) {
            const n = dependencyNumberMap.get(sd);
            // 第二步 如果已经初始化了就+1依赖并退出这个叶节点的获取依赖进程
            if (n) {
                dependencyNumberMap.set(sd, n + 1);
                break;
            }
            // 第三步 能访问到这个父节点就肯定有一个依赖项
            dependencyNumberMap.set(sd, 1);
            // 第四步 获得父 并继续初始化
            sd = sd.parent;
        }
    });
    return dependencyNumberMap;
}

function getLeaf(toBeUpdated) {
    const leaf = [];
    const recordLeaf = new WeakSet();
    const baranchSet = new WeakSet();
    let styleData;
    while (true) {
        styleData = toBeUpdated.pop();
        if (!styleData) {
            break;
        }
        // 重复的更新
        if (recordLeaf.has(styleData)) {
            continue;
        }
        if (baranchSet.has(styleData)) {
            continue;
        }
        leaf.push(styleData);
        recordLeaf.add(styleData);
        let parent = styleData.parent;
        while (parent) {
            baranchSet.add(parent);
            parent = parent.parent;
        }
    }
    // 删除非叶子节点更新
    return (leaf
        .filter((item) => {
        return !baranchSet.has(item);
    })
        // 默认push到最后面，未了尽量不出问题，还按照原来的顺序排列
        .reverse());
}

let taskDdded = false;
const toBeUpdated = [];
function update(styleData) {
    toBeUpdated.push(styleData);
    if (taskDdded) {
        return;
    }
    nextTick(mount);
    taskDdded = true;
}
function mount() {
    setStyle(render());
    taskDdded = false;
}

const renderData = {
    id: Symbol('render'),
    name: 'render',
    classNames: '',
    hoxClassNames: '',
    classSelectors: '',
    style: {},
    part: {},
};
function isRenderData(sd) {
    return renderData.id === sd.id;
}
function render() {
    if (toBeUpdated.length === 0) {
        return cssTemp;
    }
    const renderQueue = getLeaf(toBeUpdated);
    const dependencyNumberMap = dependencyCounter(renderQueue);
    let sd = renderQueue.pop();
    while (sd) {
        const id = sd.id;
        // 第一步将style 更新渲染到part里面
        renderCurrent(sd);
        // 第二步将当前的part放到父组件的part里面
        const partStr = merge(sd);
        const parent = sd.parent;
        if (parent) {
            parent.part[id] = partStr;
        }
        else {
            // 这里的作用是检查节点是否被删除，此删除行为可能发生上一帧的某个时间段
            // ，但是在删除之前添加到队列里
            // 查看是不是root节点
            if (isRenderData(sd)) {
                return partStr;
            }
            sd = undefined;
            // 不是root节点就忽略更新，它可能是一个已经被删除的节点
            continue;
        }
        sd = next(parent, renderQueue, dependencyNumberMap);
    }
    return '';
}
function renderCurrent(sd) {
    const id = sd.id;
    const style = sd.style;
    sd.part[id] = Object.keys(style)
        .map((k) => {
        return `${k}{${style[k]}}`;
    })
        .join('\n');
}
function merge(sd) {
    const part = sd.part;
    return Object.getOwnPropertySymbols(part)
        .map((s) => {
        return part[s];
    })
        .join('\n');
}
function next(parent, renderQueue, dependencyNumberMap) {
    // 第三步父组件的依赖数减一
    const newDependencyNumber = dependencyNumberMap.get(parent);
    if (newDependencyNumber > 1) {
        dependencyNumberMap.set(parent, newDependencyNumber - 1);
        // 从队列里执行下一个
        return renderQueue.pop();
    }
    // 第四步如果这个sd已经没有依赖项了，就开始执行
    return parent;
}

const styleDataInj = defInjKey(false);
function defStyleData(name, parent = renderData, id = Symbol('StyleDataId')) {
    return {
        id,
        name,
        hoxClassNames: uniteHoxClassNames(parent.hoxClassNames, name),
        classNames: uniteClassNames(parent.classNames, name),
        classSelectors: uniteClassSelectors(parent.classSelectors, name),
        style: {},
        part: {},
        parent,
    };
}

const clearList = [];
clearList.push(selectorDataInj);
/**
 * 执行add时保存调用者信息
 */
let wtsc;
let preAddKey;
const wtscStack = [];
const preAddKeyStack = [];
function hideAddStack() {
    wtscStack.push(wtsc);
    preAddKeyStack.push(preAddKey);
}
function findAddStack() {
    wtsc = wtscStack.pop();
    preAddKey = preAddKeyStack.pop();
}
function getStyleData(w) {
    return w.inject(styleDataInj);
}
function defAdd() {
    return new Proxy(Add, {
        get(_, key) {
            // 直接返回处理器不管你传入什么key
            {
                if (!isString(key)) {
                    warn('这里只可以传一个string类型的key,将会作为css的key处理', key);
                }
            }
            preAddKey = key;
            return parsersResultHandle;
        },
        set(v) {
            {
                warn('您不能向add里面传值');
            }
            return undefined;
        },
    });
}
function defWtscPrototype(option) {
    const add = defAdd();
    const e = {
        [WTSCObject]: true,
        parent: undefined,
        root: null,
        get add() {
            wtsc = this;
            return add;
        },
        addAny(key, ...rest) {
            this.style[key] = rest;
            return this;
        },
        if(v, callback, els) {
            if (v) {
                callback();
            }
            else {
                els === null || els === void 0 ? void 0 : els();
            }
            return this;
        },
        isExisted(cssKey) {
            return !!this.style[cssKey];
        },
        selector(selector, global = true) {
            if (selector === '') {
                return this;
            }
            {
                const selectorData = this.ownInject(selectorDataInj);
                if (selectorData) {
                    warn('wtsc.selector()和wtsc.class()方法每个语句块里请使用一次');
                }
            }
            const selectorData = {
                name: selector,
                style: styleToString(this.outStyle()),
                selector: global
                    ? selector
                    : uniteSelectors(getStyleData(this).classSelectors, selector),
            };
            this.provide(selectorData, selectorDataInj);
            return this;
        },
        class(className, global) {
            if (className === '') {
                return this;
            }
            {
                const selectorData = this.ownInject(selectorDataInj);
                if (selectorData) {
                    warn('wtsc.selector()和wtsc.class()方法每个语句块里请使用一次');
                }
            }
            addClassSelectorData(this, className, global);
            return this;
        },
        pseudo(pseudo) {
            var _a;
            const selectorData = this.ownInject(selectorDataInj);
            if (!selectorData) {
                {
                    warn('需要先添加类再添加伪类');
                }
                return this;
            }
            const pseudoClass = (_a = selectorData.pseudoClass) !== null && _a !== void 0 ? _a : {};
            pseudoClass[pseudo] = styleToString(this.outStyle());
            selectorData.pseudoClass = pseudoClass;
            return this;
        },
        clearStyle() {
            this.style = {};
            return this;
        },
        clear() {
            this.clearStyle();
            clearList.forEach((item) => {
                this.delete(item);
            });
            return this;
        },
        get clean() {
            return this.clear();
        },
        scoped(name = 'scoped-' + genHash()) {
            const _wtsc = Object.setPrototypeOf(createWTSCStorage(name, this), this.root);
            _wtsc.provide(defStyleData(name, this.inject(styleDataInj), _wtsc.id), styleDataInj);
            return _wtsc;
        },
        global() {
            const _wtsc = Object.setPrototypeOf(createWTSCStorage('global', this), this.root);
            _wtsc.provide(renderData, styleDataInj);
            return _wtsc;
        },
        get box() {
            const that = this;
            const _wtsc = Object.setPrototypeOf(createWTSCStorage('box', that), that);
            return _wtsc;
        },
        shandbox(callback) {
            const w = this.box;
            return callback.call(w, w);
        },
        unmount() {
            this.delete(selectorDataInj);
            // 手动清空本作用域style
            const styleData = this.inject(styleDataInj);
            if (styleData) {
                const thisId = this.id;
                // 检查是不是当前实例创建的styleData
                if (styleData.id === thisId) {
                    // 清空样式库
                    styleData.part = {};
                    // 如果是当前实例创建的此id的话所有父作用域进入销毁流程
                    const parent = styleData.parent;
                    if (parent) {
                        // 在样式树上清楚引用
                        styleData.parent = undefined;
                        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                        delete parent.part[thisId];
                        update(parent);
                    }
                    else {
                        // 由于当前是根，卸载根会变的不一样
                        styleData.style = undefined;
                        styleData.part = undefined;
                        this.root.delete(styleDataInj);
                        update(styleData);
                        // root节点被卸载执行任何代码都会报错
                    }
                    // 删除引用
                    this.delete(styleDataInj);
                }
                else {
                    // 如果不是隔离作用域的主体的话，删除本实例创建的所有style并进入更新流程
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete styleData.part[thisId];
                    update(styleData);
                }
            }
            // 之后垃圾回收会自动清理剩余的项目
        },
        save() {
            const injectkey = this.provide(this.style, defInjKey(false, this.name + '>save' ));
            this.clearStyle();
            return injectkey;
        },
        read(key) {
            this.style = Object.assign(Object.assign({}, this.style), this.inject(key));
            return this;
        },
        outStyle() {
            const _style = this.style;
            const retStyle = {};
            Object.keys(_style).forEach((cssKey) => parserSpace(cssKey, () => {
                retStyle[cssKey] = styleValueToString(this, _style[cssKey]);
            }));
            this.clearStyle();
            return retStyle;
        },
        out() {
            const data = this.ownInject(selectorDataInj);
            const styleString = styleToString(this.outStyle());
            if (data) {
                // 现在开始处理选择器，然后从选择器列表里先删除
                this.delete(selectorDataInj);
                const styleData = getStyleData(this);
                const selector = data.selector;
                // 将剩余的styleString和之前定义的styleString全部保存到styleData
                styleData.style[selector] = data.style + styleString;
                // 伪类处理
                const pseudoClass = data.pseudoClass;
                pseudoClass &&
                    Object.keys(pseudoClass).forEach((k) => {
                        styleData.style[selector + k] = pseudoClass[k];
                    });
                update(styleData);
                return data.name;
            }
            return styleString;
        },
        toString() {
            return `WTSC<${this.name}>`;
        },
    };
    // 由于 不想执行get获取器，使用...语法会遍历导致错误执行get获取器
    return mixin(e, defThemePrototype());
}

/**
 * 是一个WTSC对象返回true
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is WTSC<any>}
 */
function isWTSC(v) {
    return isObject(v) && WTSCObject in v;
}
function defBaseWTSC(options) {
    return defWTSC(options);
}
function defTypeWTSC(options = {}) {
    return defWTSC(options);
}
/**
 * 生成wtsc
 * @author meke
 * @export
 * @template Options
 * @param {Options} [defWTSCAPIOptions={} as any as Options]
 * @return {*}  {WTSC<Options>}
 */
function defWTSC(wtscOptions = {}) {
    const wtsc = createWTSCStorage('root', undefined, defWtscPrototype());
    wtsc.root = wtsc;
    const styleData = defStyleData(wtsc.name, renderData, wtsc.id);
    initDefThemeKeys(wtscOptions, wtsc, wtsc);
    wtsc.provide(styleData, styleDataInj);
    return wtsc;
}

/**
 * 这是一个样例
 * 所有parsers都要继承此类
 * 这里实现自定义接口要传入函数返回值类型这里规定为implReturn
 * @author meke
 * @export
 * @class RootParsers
 * @implements {Parsers}
 */
class RootParsers {
    constructor() {
        /**
         * parsers名字
         * @author meke
         * @protected
         * @type {string}
         * @memberof RootParsers
         */
        this.name = 'root';
        /**
         * parsers的id
         * @author meke
         * @protected
         * @type {number}
         * @memberof RootParsers
         */
        this.id = Math.random();
    }
    /**
     * 报错方法，使用此方法后，将停止本次的添加css过程
     * @author meke
     * @protected
     * @param {string} msg
     * @param {string} cssName
     * @memberof RootParsers
     */
    error(msg) {
        throw new ParsersError(msg, getParserKey(), this.name);
    }
    arrayToString(value) {
        let str = '';
        for (let i = 0; i < value.length; i++) {
            const s = value[i];
            str += s.toString() + ' ';
        }
        return str.slice(0, str.length - 1);
    }
}

const sufUnitProtoType = {
    out() {
        return this.num.toString() + this.unit.toString();
    },
    toString() {
        return this.out();
    },
    clone() {
        return sufUnit(this.num, this.unit);
    },
    setNum(number) {
        this.num = number;
        return this;
    },
    setUnit(unit) {
        this.unit = unit;
        return this;
    },
};
function sufUnit(num, unit) {
    return setPrototypeOf({ num, unit }, sufUnitProtoType);
}

exports.LengthUnit = void 0;
(function (LengthUnit) {
    LengthUnit["CAP"] = "cap";
    LengthUnit["CH"] = "ch";
    /**
     * 字体的一个根据设备大小改变的单位，可以手动指定
     */
    LengthUnit["EM"] = "em";
    LengthUnit["EX"] = "ex";
    LengthUnit["IC"] = "ic";
    LengthUnit["LH"] = "lh";
    LengthUnit["REM"] = "rem";
    LengthUnit["RLH"] = "rlh";
    /**
     * 屏幕的高度
     */
    LengthUnit["VH"] = "vh";
    /**
     * 屏幕的宽
     */
    LengthUnit["VW"] = "vw";
    LengthUnit["VI"] = "vi";
    LengthUnit["VB"] = "vb";
    /**
     * 屏幕长和宽最小的那个
     */
    LengthUnit["VMIN"] = "vmin";
    /**
     * 屏幕长和宽最大的那个
     */
    LengthUnit["VMAX"] = "vmax";
    /**
     * 像素单位
     */
    LengthUnit["PX"] = "px";
    /**
     * 厘米
     */
    LengthUnit["CM"] = "cm";
    /**
     * 毫米
     */
    LengthUnit["MM"] = "mm";
    /**
     * 四分之一毫米。1Q = 1/40 * 1cm
     */
    LengthUnit["Q"] = "Q";
    /**
     * 英寸
     */
    LengthUnit["IN"] = "in";
    /**
     * One pica. 1pc = 12pt = 1/6th of 1in.
     */
    LengthUnit["PC"] = "pc";
    /**
     * One point. 1pt = 1/72nd of 1in.
     */
    LengthUnit["PT"] = "pt";
    LengthUnit["MOZMM"] = "mozmm";
    LengthUnit["FR"] = "fr";
})(exports.LengthUnit || (exports.LengthUnit = {}));
function len(l, unit) {
    return sufUnit(l, unit);
}

/**
 * 表示元素字体 font 的“上限高度”（cap height，大写字母的标称高度（nominal height））。*
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function cap(l) {
    return len(l, exports.LengthUnit.CAP);
}

/**
 * 这一单位代表元素所用字体 font 中“0”这一字形的宽度（"0"，Unicode字符U+0030），更准确地说，是“0”这一字形的预测尺寸（advance measure）。
 *
 * 如果无法确定“ 0”字形的大小，则必须假定其宽为 0.5em，高为 1em。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function ch(l) {
    return sufUnit(l, exports.LengthUnit.CH);
}

/**
 * 相对长度单位，这个单位表示元素的 font-size 的计算值。如果用在font-size 属性本身，它则表示元素继承的 font-size 值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function em(l) {
    return sufUnit(l, exports.LengthUnit.EM);
}

/**
 * 这个单位表示元素font的 x-height 。在含有“X”字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，1ex ≈ 0.5em。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function ex(l) {
    return sufUnit(l, exports.LengthUnit.EX);
}

/**
 * 等于在用于渲染的字体中找到的“水”（CJK 表意文字 "水"，U + 6C34）字形的使用预先测量（used advance measure）。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function ic(l) {
    return sufUnit(l, exports.LengthUnit.IC);
}

/**
 * 等于使用它的元素的 line-height 属性的计算值，转换为绝对长度.
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function lh(l) {
    return sufUnit(l, exports.LengthUnit.LH);
}

/**
 * 这个单位代表根元素（通常为<html> 元素）的 font-size 大小。当用在根元素的 font-size 上面时 ，它代表了它的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function rem(l) {
    return sufUnit(l, exports.LengthUnit.REM);
}

/**
 * 等于根元素行高 line-height 的计算值。当用于设置根元素的行高 line-height 或是字体大小 font-size 时，该rlh指的是根元素行高 line-height 或字体大小 font-size 的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function rlh(l) {
    return sufUnit(l, exports.LengthUnit.RLH);
}

/**
 * 视口的初始包含块的高度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vh(l) {
    return sufUnit(l, exports.LengthUnit.VH);
}

/**
 * 视口的初始包含块的宽度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vw(l) {
    return sufUnit(l, exports.LengthUnit.VW);
}

/**
 * 等于初始包含块大小的 1%，在根元素的行内轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vi(l) {
    return sufUnit(l, exports.LengthUnit.VI);
}

/**
 * 等于初始包含块大小的 1%，在根元素的区块轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vb(l) {
    return sufUnit(l, exports.LengthUnit.VB);
}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最小值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vmin(l) {
    return sufUnit(l, exports.LengthUnit.VMIN);
}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最大值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function vmax(l) {
    return sufUnit(l, exports.LengthUnit.VMAX);
}

/**
 * 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。
 * 对于打印机和高分辨率屏幕，一个 CSS 像素往往占多个设备像素。
 * 一般来说，每英寸的像素的数量保持在 96 左右， 1px = 1in 的 96 分之一。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function px(l) {
    return sufUnit(l, exports.LengthUnit.PX);
}

/**
 * 一厘米。 1cm = 96px / 2.54。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function cm(l) {
    return sufUnit(l, exports.LengthUnit.CM);
}

/**
 * 一毫米。 1mm = 1/10 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function mm(l) {
    return sufUnit(l, exports.LengthUnit.MM);
}

/**
 * 四分之一毫米。1Q = 1/40 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function Q(l) {
    return sufUnit(l, exports.LengthUnit.Q);
}

/**
 * 一英寸。1in = 2.54cm = 96px。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function lin(l) {
    return sufUnit(l, exports.LengthUnit.IN);
}

/**
 * 一十二点活字（pica），六分之一英寸。 1pc = 12pt = 1/6 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function pc(l) {
    return sufUnit(l, exports.LengthUnit.PC);
}

/**
 * 一磅（point），72 分之一英寸。1pt = 1/12 * 1pc = 1/72 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function pt(l) {
    return sufUnit(l, exports.LengthUnit.PT);
}

/**
 * 一个实验单位，无论显示器的尺寸或分辨率如何，都会尝试在一毫米处进行渲染。很少会用到，但可能在移动设备上特别有用。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
function mozmm(l) {
    return sufUnit(l, exports.LengthUnit.MOZMM);
}

function fr(l) {
    return sufUnit(l, exports.LengthUnit.FR);
}

const percentageProtoType = Object.assign(Object.assign({}, sufUnitProtoType), { toFloat() {
        return this.num / 100;
    } });
function PE(pe) {
    return setPrototypeOf({ num: pe, unit: '%' }, percentageProtoType);
}

class CSave {
    constructor(...rest) {
        if (rest.length > 0) {
            this.value = rest[0];
            for (let i = 1; i < rest.length; i++) {
                this.value += ' ' + rest[i];
            }
        }
        else {
            this.value = '';
        }
    }
    toString() {
        return this.value;
    }
}
const csave = newClass(CSave);
class CVar extends CSave {
    constructor(customPropertyName, declarationValue) {
        super((() => {
            if (isUndef(declarationValue)) {
                return customPropertyName;
            }
            else {
                return customPropertyName + ', ' + declarationValue;
            }
        })());
    }
    toString() {
        return `var( ${this.value} )`;
    }
}
const cvar = newClass(CVar);
class CMin extends CSave {
    constructor(c1, c2) {
        super(`${c1.toString()},`, c2.toString());
    }
    toString() {
        return `min( ${this.value} )`;
    }
}
const cmin = newClass(CVar);
class CMax extends CSave {
    constructor(c1, c2) {
        super(`${c1.toString()},`, c2.toString());
    }
    toString() {
        return `max( ${this.value} )`;
    }
}
const cmax = newClass(CVar);

const rgbColorPrototype = {
    out() {
        return `rgb(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()},${this.a.toString()})`;
    },
    toNumbers() {
        const r = typeof this.r === 'number' ? this.r : this.r.toFloat() * 255;
        const g = typeof this.g === 'number' ? this.g : this.g.toFloat() * 255;
        const b = typeof this.b === 'number' ? this.b : this.b.toFloat() * 255;
        const a = typeof this.a === 'number' ? this.a : this.a.toFloat() * 255;
        return {
            r,
            g,
            b,
            a,
        };
    },
    clone() {
        return rgb(this.r, this.g, this.b, this.a);
    },
    setR(value) {
        this.r = value;
        return this;
    },
    setG(value) {
        this.g = value;
        return this;
    },
    setB(value) {
        this.b = value;
        return this;
    },
    setA(value) {
        this.a = value;
        return this;
    },
};
/**
 * rgb(255, 255, 255)
 *
 * @author meke
 * @export
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}  {RGB}
 */
function rgb(r, g, b, a = 1) {
    return setPrototypeOf({ r, g, b, a }, rgbColorPrototype);
}
const reg = /^rgba?\((?<r>[0-9]{0,3}),(?<g>[0-9]{0,3}),(?<b>[0-9]{0,3})(,(?<a>0?\.?[0-9]{0,3})|)\)$/;
function rgbStrToRGB(c) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const ret = reg.exec(c);
    const obj = {
        r: (_b = (_a = ret === null || ret === void 0 ? void 0 : ret.groups) === null || _a === void 0 ? void 0 : _a.r) !== null && _b !== void 0 ? _b : '0',
        g: (_d = (_c = ret === null || ret === void 0 ? void 0 : ret.groups) === null || _c === void 0 ? void 0 : _c.g) !== null && _d !== void 0 ? _d : '0',
        b: (_f = (_e = ret === null || ret === void 0 ? void 0 : ret.groups) === null || _e === void 0 ? void 0 : _e.b) !== null && _f !== void 0 ? _f : '0',
        a: (_h = (_g = ret === null || ret === void 0 ? void 0 : ret.groups) === null || _g === void 0 ? void 0 : _g.a) !== null && _h !== void 0 ? _h : '1',
    };
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (obj[key].endsWith('%')) {
            const n = parseInt(value.slice(0, value.length - 1), 10);
            obj[key] = PE(isNaN(n) ? 0 : n);
        }
        else {
            const n = parseInt(value, 10);
            obj[key] = PE(isNaN(n) ? 0 : n);
        }
    });
    return rgb(obj.r, obj.g, obj.b, obj.a);
}
function toRGB(c) {
    if (typeof c === 'number') {
        return hexToRGB(c);
    }
    if (c.startsWith('#')) {
        return hexToRGB(c);
    }
    return hexToRGB(c);
}
/**
 * 混合颜色
 * @author meke
 * @export
 * @param {(RGBColor | RGBAColor)} color
 * @param {(...Array<RGBAColor | RGBColor>)} rest
 * @return {*}  {RGBColor}
 */
function mixColor(color, ...rest) {
    const rgbc = color.toNumbers();
    let mainA = rgbc.a;
    const mainColor = {
        r: rgbc.r * mainA,
        g: rgbc.g * mainA,
        b: rgbc.b * mainA,
        a: mainA,
    };
    rest.forEach((item) => {
        const c = item.toNumbers();
        const a = c.a;
        mainColor.r += c.r * a;
        mainColor.g += c.g * a;
        mainColor.b += c.b * a;
        mainA += a;
    });
    mainColor.r = mainColor.r / mainA;
    mainColor.g = mainColor.g / mainA;
    mainColor.b = mainColor.b / mainA;
    return rgb(mainColor.r, mainColor.g, mainColor.b, mainColor.a);
}
/**
 * 输入一个颜色调节它的饱和度
 * @author meke
 * @export
 * @param {(RGBColor | RGBAColor)} color
 * @param {number} saturation 饱和度 0 - infinite ,输入0输出灰色，越大色彩越饱和
 * @return {*}  {RGBColor}
 */
function saturation(color, saturation) {
    const rgbc = color.toNumbers();
    const brightness = (rgbc.r + rgbc.g + rgbc.b) / 3;
    let mainColor = [
        (rgbc.r - brightness) * saturation + brightness,
        (rgbc.g - brightness) * saturation + brightness,
        (rgbc.b - brightness) * saturation + brightness,
    ];
    if (saturation > 1) {
        let max = 255;
        mainColor.forEach((c) => {
            if (c > max) {
                max = c;
            }
        });
        mainColor = mainColor.map((c) => (c * 255) / max);
    }
    return rgb(...mainColor, rgbc.a);
}

function completeHexEcimal(hexColor) {
    const len = hexColor.length;
    // 添加#号
    if (!hexColor.startsWith('#')) {
        hexColor = '#' + hexColor;
    }
    // 补全
    if (len < 4) {
        // #000
        hexColor = hexColor.padEnd(4, '0');
    }
    else if (len < 7) {
        // #000000
        hexColor = hexColor.padEnd(7, '0');
    }
    else if (len < 9) {
        // #00000000
        hexColor = hexColor.padEnd(8, '0');
    }
    else if (len > 9) {
        // #0000000000 -> #00000000
        hexColor = hexColor.slice(0, 9);
    }
    return hexColor;
}
const regOfHexColor = /^#[0-9|a-f|A-F]{3,8}$/;
function isHexColor(value) {
    return regOfHexColor.test(value);
}
function out$6() {
    return this.value;
}
function hc(value) {
    let hcv = '';
    if (isNumber(value)) {
        hcv = value.toString(16);
    }
    hcv = completeHexEcimal(hcv);
    if (!isHexColor(hcv)) {
        throw new Error(`错误的16进制颜色值输入:${value}`);
    }
    return {
        value: hcv,
        out: out$6,
    };
}
function hexToRGB(HC) {
    let _hc = '';
    if (isString(HC)) {
        _hc = HC;
    }
    else {
        _hc = HC.toString(16);
    }
    _hc = completeHexEcimal(_hc);
    if (isHexColor(_hc)) {
        const r = parseInt(_hc.slice(1, 3), 16);
        const g = parseInt(_hc.slice(3, 5), 16);
        const b = parseInt(_hc.slice(5, 7), 16);
        const a = parseInt(_hc.slice(7, 9), 16);
        return rgb(r, g, b, isNaN(a) ? 1 : a);
    }
    throw new Error(HC.toString() + '不是一个16进制颜色值');
}

function out$5() {
    return `rgba(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()},${this.a.toString()})`;
}
/**
 * rgb(255, 255, 255)
 *
 * @author meke
 * @export
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}  {RGB}
 */
function rgba(r, g, b, a) {
    const c = rgb(r, g, b, a);
    c.out = out$5;
    return c;
}

function out$4() {
    return `hsl(${this.h.toString()}, ${this.s.toString()}, ${this.l.toString()},${this.a.toString()})`;
}
function hsla(h, s, l, a) {
    return { h, s, l, a, out: out$4 };
}

function out$3() {
    return `hsl(${this.h.toString()}, ${this.s.toString()}, ${this.l.toString()})`;
}
function hsl(h, s, l, a) {
    if (a) {
        return hsla(h, s, l, a);
    }
    return { h, s, l, out: out$3 };
}

function out$2() {
    return `hwb(${this.h.toString()}, ${this.w.toString()}, ${this.b.toString()}, ${this.a.toString()}`;
}
function hwba(h, w, b, a) {
    return { h, w, b, a, out: out$2 };
}

function out$1() {
    return `hwb(${this.h.toString()}, ${this.w.toString()}, ${this.b.toString()})`;
}
function hwb(h, w, b, a) {
    if (a) {
        return hwba(h, w, b, a);
    }
    return { h, w, b, out: out$1 };
}

let keyframsData;
function addKeyframe(keyFrame, w) {
    const style = w.outStyle();
    const keyfram = keyframsData.keyfram;
    const part = styleToString(style);
    if (isString(keyFrame)) {
        keyfram[keyFrame] = part;
    }
    else {
        keyfram[keyFrame.out(w)] = part;
    }
}
function out(wtsc) {
    const styleData = wtsc.inject(styleDataInj);
    const keyfromsData = this.keyfromsData;
    const keyfram = keyfromsData.keyfram;
    const part = Object.keys(keyfram)
        .map((k) => {
        return `${k} {${keyfram[k]}}`;
    })
        .join(' ');
    const pro = uniteHoxClassNames(styleData.hoxClassNames, keyfromsData.name);
    const selector = `@keyframes ${pro}`;
    styleData.style[selector] = part;
    update(styleData);
    return pro;
}
function keyframes(name, callBack, wtsc) {
    hideAddStack();
    keyframsData = { name, keyfram: {} };
    const w = wtsc === null || wtsc === void 0 ? void 0 : wtsc.box;
    callBack.call(w, addKeyframe, w);
    findAddStack();
    return {
        keyfromsData: keyframsData,
        out,
    };
}

function ms(v) {
    return sufUnit(v, 'ms');
}
function s(v) {
    return sufUnit(v, 's');
}

const cubicBezierPropoType = {
    out() {
        return `cubic-bezier(${this.value.join(',')})`;
    },
};
function cubicBezier(x1, y1, x2, y2) {
    return setPrototypeOf({ value: [x1, y1, x2, y2] }, cubicBezierPropoType);
}

const stepsPropotype = {
    out() {
        return `steps(${this.numberOfSteps}, ${this.direction})`;
    },
};
function steps(numberOfSteps, direction) {
    return Object.setPrototypeOf({ numberOfSteps, direction }, stepsPropotype);
}

var keyword = /*#__PURE__*/Object.freeze({
    __proto__: null
});

const StrPropotype = {
    out() {
        return this.value;
    },
};
function str(value) {
    return Object.setPrototypeOf({ value }, StrPropotype);
}

var CssAttributeName = /*#__PURE__*/Object.freeze({
    __proto__: null
});

const URLProtoType = {
    out() {
        return `url(${this.url})`;
    },
};
function url(url) {
    return setPrototypeOf({ url: url.toString() }, URLProtoType);
}

const pack = genPack('image(', ')');
const ImagePrototype = {
    out(wtsc) {
        const image = this.image;
        if (isOutValue(image)) {
            return pack(image.out(wtsc));
        }
        return pack(image);
    },
};
function image(image) {
    return setPrototypeOf({ image }, ImagePrototype);
}

exports.AngleUnit = void 0;
(function (AngleUnit) {
    AngleUnit["DEG"] = "deg";
    AngleUnit["GRAD"] = "grad";
    AngleUnit["RAD"] = "rad";
    AngleUnit["TURN"] = "turn";
})(exports.AngleUnit || (exports.AngleUnit = {}));
function angle(a, unit) {
    return sufUnit(a, unit);
}

/**
 * 度。一个完整的圆是 360deg。例：0deg，90deg，14.23deg。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {DEG}
 */
function deg(a) {
    return angle(a, exports.AngleUnit.DEG);
}

/**
 * 百分度。一个完整的圆是 400grad。例：0grad，100grad，38.8grad。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {GRAD}
 */
function grad(a) {
    return angle(a, exports.AngleUnit.GRAD);
}

/**
 * 弧度。一个完整的圆是 2π 弧度，约等于 6.2832rad。1rad 是 180/π 度。
 * 例：0rad，1.0708rad，6.2832rad。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {RAD}
 */
function rad(a) {
    return angle(a, exports.AngleUnit.RAD);
}

/**
 * 圈数。一个完整的圆是 1turn。例：0turn，0.25turn，1.2turn。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {TURN}
 */
function turn(a) {
    return angle(a, exports.AngleUnit.TURN);
}

const version = '2.0.0-bate.37';

exports.CMax = CMax;
exports.CMin = CMin;
exports.CSave = CSave;
exports.CVar = CVar;
exports.CssAttributeName = CssAttributeName;
exports.IK = IK;
exports.IV = IV;
exports.PE = PE;
exports.Q = Q;
exports.RootParsers = RootParsers;
exports.angle = angle;
exports.cap = cap;
exports.ch = ch;
exports.cm = cm;
exports.cmax = cmax;
exports.cmin = cmin;
exports.createInject = createInject;
exports.createInjectStorage = createInjectStorage;
exports.csave = csave;
exports.cubicBezier = cubicBezier;
exports.cvar = cvar;
exports.defBaseWTSC = defBaseWTSC;
exports.defInjKey = defInjKey;
exports.defRefPackager = defRefPackager;
exports.defTypeWTSC = defTypeWTSC;
exports.defWTSC = defWTSC;
exports.deg = deg;
exports.em = em;
exports.ex = ex;
exports.fr = fr;
exports.getParserKey = getParserKey;
exports.grad = grad;
exports.hc = hc;
exports.hsl = hsl;
exports.hsla = hsla;
exports.hwb = hwb;
exports.hwba = hwba;
exports.ic = ic;
exports.image = image;
exports.injectPrototype = injectPrototype;
exports.isInject = isInject;
exports.isInjectKey = isInjectKey;
exports.isWTSC = isWTSC;
exports.keyframes = keyframes;
exports.keyword = keyword;
exports.len = len;
exports.lh = lh;
exports.lin = lin;
exports.mixColor = mixColor;
exports.mm = mm;
exports.mozmm = mozmm;
exports.ms = ms;
exports.pc = pc;
exports.pt = pt;
exports.px = px;
exports.rad = rad;
exports.rem = rem;
exports.rgb = rgb;
exports.rgbStrToRGB = rgbStrToRGB;
exports.rgba = rgba;
exports.rlh = rlh;
exports.s = s;
exports.saturation = saturation;
exports.steps = steps;
exports.str = str;
exports.sufUnit = sufUnit;
exports.sufUnitProtoType = sufUnitProtoType;
exports.toRGB = toRGB;
exports.turn = turn;
exports.turnOffAutoImportWarning = turnOffAutoImportWarning;
exports.url = url;
exports.vb = vb;
exports.version = version;
exports.vh = vh;
exports.vi = vi;
exports.vmax = vmax;
exports.vmin = vmin;
exports.vw = vw;
