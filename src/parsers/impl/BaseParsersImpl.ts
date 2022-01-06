import { Parsers, implReturn, WTSC } from "../../core";
import { BaseWTSC, DefineBaseParsers } from "../DefineBaseParsers";

export function createWTSC() {
  const baseWTSC: BaseWTSC = new WTSC(new BaseParsersImpl());

  return baseWTSC;
}

/**
 * 基础的代码生成
 * 使用方法
 * getBaseWtsc()
 */
export class BaseParsersImpl
  extends Parsers
  implements DefineBaseParsers<implReturn>
{
  protected wtsc: BaseWTSC = <BaseWTSC>{};
  constructor() {
    super();
    this.name = "BaseParsers";
    this.id = 1;
  }

  WebkitLineClamp(value: string): string {
    return value;
  }
  accentColor(value: string): string {
    return value;
  }
  additiveSymbols(value: string): string {
    return value;
  }
  alignContent(value: string): string {
    return value;
  }
  alignItems(value: string): string {
    return value;
  }
  alignSelf(value: string): string {
    return value;
  }
  alignTracks(value: string): string {
    return value;
  }
  all(value: string): string {
    return value;
  }
  animation(value: string): string {
    return value;
  }
  animationDelay(value: string): string {
    return value;
  }
  animationDirection(value: string): string {
    return value;
  }
  animationDuration(value: string): string {
    return value;
  }
  animationFillMode(value: string): string {
    return value;
  }
  animationIterationCount(value: string): string {
    return value;
  }
  animationName(value: string): string {
    return value;
  }
  animationPlayState(value: string): string {
    return value;
  }
  animationTimingFunction(value: string): string {
    return value;
  }
  appearance(value: string): string {
    return value;
  }
  ascentOverride(value: string): string {
    return value;
  }
  aspectRatio(value: string): string {
    return value;
  }
  backdropFilter(value: string): string {
    return value;
  }
  backfaceVisibility(value: string): string {
    return value;
  }
  background(value: string): string {
    return value;
  }
  backgroundAttachment(value: string): string {
    return value;
  }
  backgroundBlendMode(value: string): string {
    return value;
  }
  backgroundClip(value: string): string {
    return value;
  }
  backgroundColor(value: string): string {
    return value;
  }
  backgroundImage(value: string): string {
    return value;
  }
  backgroundOrigin(value: string): string {
    return value;
  }
  backgroundPosition(value: string): string {
    return value;
  }
  backgroundPositionX(value: string): string {
    return value;
  }
  backgroundPositionY(value: string): string {
    return value;
  }
  backgroundRepeat(value: string): string {
    return value;
  }
  backgroundSize(value: string): string {
    return value;
  }
  bleed(value: string): string {
    return value;
  }
  blockOverflow(value: string): string {
    return value;
  }
  blockSize(value: string): string {
    return value;
  }
  border(value: string): string {
    return value;
  }
  borderBlock(value: string): string {
    return value;
  }
  borderBlockColor(value: string): string {
    return value;
  }
  borderBlockEnd(value: string): string {
    return value;
  }
  borderBlockEndColor(value: string): string {
    return value;
  }
  borderBlockEndStyle(value: string): string {
    return value;
  }
  borderBlockEndWidth(value: string): string {
    return value;
  }
  borderBlockStart(value: string): string {
    return value;
  }
  borderBlockStartColor(value: string): string {
    return value;
  }
  borderBlockStartStyle(value: string): string {
    return value;
  }
  borderBlockStartWidth(value: string): string {
    return value;
  }
  borderBlockStyle(value: string): string {
    return value;
  }
  borderBlockWidth(value: string): string {
    return value;
  }
  borderBottom(value: string): string {
    return value;
  }
  borderBottomColor(value: string): string {
    return value;
  }
  borderBottomLeftRadius(value: string): string {
    return value;
  }
  borderBottomRightRadius(value: string): string {
    return value;
  }
  borderBottomStyle(value: string): string {
    return value;
  }
  borderBottomWidth(value: string): string {
    return value;
  }
  borderCollapse(value: string): string {
    return value;
  }
  borderColor(value: string): string {
    return value;
  }
  borderEndEndRadius(value: string): string {
    return value;
  }
  borderEndStartRadius(value: string): string {
    return value;
  }
  borderImage(value: string): string {
    return value;
  }
  borderImageOutset(value: string): string {
    return value;
  }
  borderImageRepeat(value: string): string {
    return value;
  }
  borderImageSlice(value: string): string {
    return value;
  }
  borderImageSource(value: string): string {
    return value;
  }
  borderImageWidth(value: string): string {
    return value;
  }
  borderInline(value: string): string {
    return value;
  }
  borderInlineColor(value: string): string {
    return value;
  }
  borderInlineEnd(value: string): string {
    return value;
  }
  borderInlineEndColor(value: string): string {
    return value;
  }
  borderInlineEndStyle(value: string): string {
    return value;
  }
  borderInlineEndWidth(value: string): string {
    return value;
  }
  borderInlineStart(value: string): string {
    return value;
  }
  borderInlineStartColor(value: string): string {
    return value;
  }
  borderInlineStartStyle(value: string): string {
    return value;
  }
  borderInlineStartWidth(value: string): string {
    return value;
  }
  borderInlineStyle(value: string): string {
    return value;
  }
  borderInlineWidth(value: string): string {
    return value;
  }
  borderLeft(value: string): string {
    return value;
  }
  borderLeftColor(value: string): string {
    return value;
  }
  borderLeftStyle(value: string): string {
    return value;
  }
  borderLeftWidth(value: string): string {
    return value;
  }
  borderRadius(value: string): string {
    return value;
  }
  borderRight(value: string): string {
    return value;
  }
  borderRightColor(value: string): string {
    return value;
  }
  borderRightStyle(value: string): string {
    return value;
  }
  borderRightWidth(value: string): string {
    return value;
  }
  borderSpacing(value: string): string {
    return value;
  }
  borderStartEndRadius(value: string): string {
    return value;
  }
  borderStartStartRadius(value: string): string {
    return value;
  }
  borderStyle(value: string): string {
    return value;
  }
  borderTop(value: string): string {
    return value;
  }
  borderTopColor(value: string): string {
    return value;
  }
  borderTopLeftRadius(value: string): string {
    return value;
  }
  borderTopRightRadius(value: string): string {
    return value;
  }
  borderTopStyle(value: string): string {
    return value;
  }
  borderTopWidth(value: string): string {
    return value;
  }
  borderWidth(value: string): string {
    return value;
  }
  bottom(value: string): string {
    return value;
  }
  boxDecorationBreak(value: string): string {
    return value;
  }
  boxShadow(value: string): string {
    return value;
  }
  boxSizing(value: string): string {
    return value;
  }
  breakAfter(value: string): string {
    return value;
  }
  breakBefore(value: string): string {
    return value;
  }
  breakInside(value: string): string {
    return value;
  }
  captionSide(value: string): string {
    return value;
  }
  caretColor(value: string): string {
    return value;
  }
  clear(value: string): string {
    return value;
  }
  clip(value: string): string {
    return value;
  }
  clipPath(value: string): string {
    return value;
  }
  color(value: string): string {
    return value;
  }
  colorAdjust(value: string): string {
    return value;
  }
  colorScheme(value: string): string {
    return value;
  }
  columnCount(value: string): string {
    return value;
  }
  columnFill(value: string): string {
    return value;
  }
  columnGap(value: string): string {
    return value;
  }
  columnRule(value: string): string {
    return value;
  }
  columnRuleColor(value: string): string {
    return value;
  }
  columnRuleStyle(value: string): string {
    return value;
  }
  columnRuleWidth(value: string): string {
    return value;
  }
  columnSpan(value: string): string {
    return value;
  }
  columnWidth(value: string): string {
    return value;
  }
  columns(value: string): string {
    return value;
  }
  contain(value: string): string {
    return value;
  }
  content(value: string): string {
    return value;
  }
  contentVisibility(value: string): string {
    return value;
  }
  counterIncrement(value: string): string {
    return value;
  }
  counterReset(value: string): string {
    return value;
  }
  counterSet(value: string): string {
    return value;
  }
  cursor(value: string): string {
    return value;
  }
  descentOverride(value: string): string {
    return value;
  }
  direction(value: string): string {
    return value;
  }
  display(value: string): string {
    return value;
  }
  emptyCells(value: string): string {
    return value;
  }
  fallback(value: string): string {
    return value;
  }
  filter(value: string): string {
    return value;
  }
  flex(value: string): string {
    return value;
  }
  flexBasis(value: string): string {
    return value;
  }
  flexDirection(value: string): string {
    return value;
  }
  flexFlow(value: string): string {
    return value;
  }
  flexGrow(value: string): string {
    return value;
  }
  flexShrink(value: string): string {
    return value;
  }
  flexWrap(value: string): string {
    return value;
  }
  float(value: string): string {
    return value;
  }
  font(value: string): string {
    return value;
  }
  fontDisplay(value: string): string {
    return value;
  }
  fontFamily(value: string): string {
    return value;
  }
  fontFeatureSettings(value: string): string {
    return value;
  }
  fontKerning(value: string): string {
    return value;
  }
  fontLanguageOverride(value: string): string {
    return value;
  }
  fontOpticalSizing(value: string): string {
    return value;
  }
  fontSize(value: string): string {
    return value;
  }
  fontSizeAdjust(value: string): string {
    return value;
  }
  fontStretch(value: string): string {
    return value;
  }
  fontStyle(value: string): string {
    return value;
  }
  fontSynthesis(value: string): string {
    return value;
  }
  fontVariant(value: string): string {
    return value;
  }
  fontVariantAlternates(value: string): string {
    return value;
  }
  fontVariantCaps(value: string): string {
    return value;
  }
  fontVariantEastAsian(value: string): string {
    return value;
  }
  fontVariantLigatures(value: string): string {
    return value;
  }
  fontVariantNumeric(value: string): string {
    return value;
  }
  fontVariantPosition(value: string): string {
    return value;
  }
  fontVariationSettings(value: string): string {
    return value;
  }
  fontWeight(value: string): string {
    return value;
  }
  forcedColorAdjust(value: string): string {
    return value;
  }
  gap(value: string): string {
    return value;
  }
  grid(value: string): string {
    return value;
  }
  gridArea(value: string): string {
    return value;
  }
  gridAutoColumns(value: string): string {
    return value;
  }
  gridAutoFlow(value: string): string {
    return value;
  }
  gridAutoRows(value: string): string {
    return value;
  }
  gridColumn(value: string): string {
    return value;
  }
  gridColumnEnd(value: string): string {
    return value;
  }
  gridColumnStart(value: string): string {
    return value;
  }
  gridRow(value: string): string {
    return value;
  }
  gridRowEnd(value: string): string {
    return value;
  }
  gridRowStart(value: string): string {
    return value;
  }
  gridTemplate(value: string): string {
    return value;
  }
  gridTemplateAreas(value: string): string {
    return value;
  }
  gridTemplateColumns(value: string): string {
    return value;
  }
  gridTemplateRows(value: string): string {
    return value;
  }
  hangingPunctuation(value: string): string {
    return value;
  }
  height(value: string): string {
    return value;
  }
  hyphens(value: string): string {
    return value;
  }
  imageOrientation(value: string): string {
    return value;
  }
  imageRendering(value: string): string {
    return value;
  }
  imageResolution(value: string): string {
    return value;
  }
  inherit(value: string): string {
    return value;
  }
  inherits(value: string): string {
    return value;
  }
  initial(value: string): string {
    return value;
  }
  initialLetter(value: string): string {
    return value;
  }
  initialLetterAlign(value: string): string {
    return value;
  }
  initialValue(value: string): string {
    return value;
  }
  inlineSize(value: string): string {
    return value;
  }
  inputSecurity(value: string): string {
    return value;
  }
  inset(value: string): string {
    return value;
  }
  insetBlock(value: string): string {
    return value;
  }
  insetBlockEnd(value: string): string {
    return value;
  }
  insetBlockStart(value: string): string {
    return value;
  }
  insetInline(value: string): string {
    return value;
  }
  insetInlineEnd(value: string): string {
    return value;
  }
  insetInlineStart(value: string): string {
    return value;
  }
  isolation(value: string): string {
    return value;
  }
  justifyContent(value: string): string {
    return value;
  }
  justifyItems(value: string): string {
    return value;
  }
  justifySelf(value: string): string {
    return value;
  }
  justifyTracks(value: string): string {
    return value;
  }
  left(value: string): string {
    return value;
  }
  letterSpacing(value: string): string {
    return value;
  }
  lineBreak(value: string): string {
    return value;
  }
  lineClamp(value: string): string {
    return value;
  }
  lineGapOverride(value: string): string {
    return value;
  }
  lineHeight(value: string): string {
    return value;
  }
  lineHeightStep(value: string): string {
    return value;
  }
  listStyle(value: string): string {
    return value;
  }
  listStyleImage(value: string): string {
    return value;
  }
  listStylePosition(value: string): string {
    return value;
  }
  listStyleType(value: string): string {
    return value;
  }
  margin(value: string): string {
    return value;
  }
  marginBlock(value: string): string {
    return value;
  }
  marginBlockEnd(value: string): string {
    return value;
  }
  marginBlockStart(value: string): string {
    return value;
  }
  marginBottom(value: string): string {
    return value;
  }
  marginInline(value: string): string {
    return value;
  }
  marginInlineEnd(value: string): string {
    return value;
  }
  marginInlineStart(value: string): string {
    return value;
  }
  marginLeft(value: string): string {
    return value;
  }
  marginRight(value: string): string {
    return value;
  }
  marginTop(value: string): string {
    return value;
  }
  marginTrim(value: string): string {
    return value;
  }
  marks(value: string): string {
    return value;
  }
  mask(value: string): string {
    return value;
  }
  maskBorder(value: string): string {
    return value;
  }
  maskBorderMode(value: string): string {
    return value;
  }
  maskBorderOutset(value: string): string {
    return value;
  }
  maskBorderRepeat(value: string): string {
    return value;
  }
  maskBorderSlice(value: string): string {
    return value;
  }
  maskBorderSource(value: string): string {
    return value;
  }
  maskBorderWidth(value: string): string {
    return value;
  }
  maskClip(value: string): string {
    return value;
  }
  maskComposite(value: string): string {
    return value;
  }
  maskImage(value: string): string {
    return value;
  }
  maskMode(value: string): string {
    return value;
  }
  maskOrigin(value: string): string {
    return value;
  }
  maskPosition(value: string): string {
    return value;
  }
  maskRepeat(value: string): string {
    return value;
  }
  maskSize(value: string): string {
    return value;
  }
  maskType(value: string): string {
    return value;
  }
  masonryAutoFlow(value: string): string {
    return value;
  }
  mathStyle(value: string): string {
    return value;
  }
  maxBlockSize(value: string): string {
    return value;
  }
  maxHeight(value: string): string {
    return value;
  }
  maxInlineSize(value: string): string {
    return value;
  }
  maxLines(value: string): string {
    return value;
  }
  maxWidth(value: string): string {
    return value;
  }
  maxZoom(value: string): string {
    return value;
  }
  minBlockSize(value: string): string {
    return value;
  }
  minHeight(value: string): string {
    return value;
  }
  minInlineSize(value: string): string {
    return value;
  }
  minWidth(value: string): string {
    return value;
  }
  minZoom(value: string): string {
    return value;
  }
  mixBlendMode(value: string): string {
    return value;
  }
  negative(value: string): string {
    return value;
  }
  objectFit(value: string): string {
    return value;
  }
  objectPosition(value: string): string {
    return value;
  }
  offset(value: string): string {
    return value;
  }
  offsetAnchor(value: string): string {
    return value;
  }
  offsetDistance(value: string): string {
    return value;
  }
  offsetPath(value: string): string {
    return value;
  }
  offsetPosition(value: string): string {
    return value;
  }
  offsetRotate(value: string): string {
    return value;
  }
  opacity(value: string): string {
    return value;
  }
  order(value: string): string {
    return value;
  }
  orientation(value: string): string {
    return value;
  }
  orphans(value: string): string {
    return value;
  }
  outline(value: string): string {
    return value;
  }
  outlineColor(value: string): string {
    return value;
  }
  outlineOffset(value: string): string {
    return value;
  }
  outlineStyle(value: string): string {
    return value;
  }
  outlineWidth(value: string): string {
    return value;
  }
  overflow(value: string): string {
    return value;
  }
  overflowAnchor(value: string): string {
    return value;
  }
  overflowBlock(value: string): string {
    return value;
  }
  overflowClipMargin(value: string): string {
    return value;
  }
  overflowInline(value: string): string {
    return value;
  }
  overflowWrap(value: string): string {
    return value;
  }
  overflowX(value: string): string {
    return value;
  }
  overflowY(value: string): string {
    return value;
  }
  overscrollBehavior(value: string): string {
    return value;
  }
  overscrollBehaviorBlock(value: string): string {
    return value;
  }
  overscrollBehaviorInline(value: string): string {
    return value;
  }
  overscrollBehaviorX(value: string): string {
    return value;
  }
  overscrollBehaviorY(value: string): string {
    return value;
  }
  PseudoClasses(value: string): string {
    return value;
  }
  PseudoElements(value: string): string {
    return value;
  }
  pad(value: string): string {
    return value;
  }
  padding(value: string): string {
    return value;
  }
  paddingBlock(value: string): string {
    return value;
  }
  paddingBlockEnd(value: string): string {
    return value;
  }
  paddingBlockStart(value: string): string {
    return value;
  }
  paddingBottom(value: string): string {
    return value;
  }
  paddingInline(value: string): string {
    return value;
  }
  paddingInlineEnd(value: string): string {
    return value;
  }
  paddingInlineStart(value: string): string {
    return value;
  }
  paddingLeft(value: string): string {
    return value;
  }
  paddingRight(value: string): string {
    return value;
  }
  paddingTop(value: string): string {
    return value;
  }
  pageBreakAfter(value: string): string {
    return value;
  }
  pageBreakBefore(value: string): string {
    return value;
  }
  pageBreakInside(value: string): string {
    return value;
  }
  paintOrder(value: string): string {
    return value;
  }
  perspective(value: string): string {
    return value;
  }
  perspectiveOrigin(value: string): string {
    return value;
  }
  placeContent(value: string): string {
    return value;
  }
  placeItems(value: string): string {
    return value;
  }
  placeSelf(value: string): string {
    return value;
  }
  pointerEvents(value: string): string {
    return value;
  }
  position(value: string): string {
    return value;
  }
  prefix(value: string): string {
    return value;
  }
  quotes(value: string): string {
    return value;
  }
  range(value: string): string {
    return value;
  }
  resize(value: string): string {
    return value;
  }
  revert(value: string): string {
    return value;
  }
  right(value: string): string {
    return value;
  }
  rotate(value: string): string {
    return value;
  }
  rowGap(value: string): string {
    return value;
  }
  rubyAlign(value: string): string {
    return value;
  }
  rubyMerge(value: string): string {
    return value;
  }
  rubyPosition(value: string): string {
    return value;
  }
  scale(value: string): string {
    return value;
  }
  scrollBehavior(value: string): string {
    return value;
  }
  scrollMargin(value: string): string {
    return value;
  }
  scrollMarginBlock(value: string): string {
    return value;
  }
  scrollMarginBlockEnd(value: string): string {
    return value;
  }
  scrollMarginBlockStart(value: string): string {
    return value;
  }
  scrollMarginBottom(value: string): string {
    return value;
  }
  scrollMarginInline(value: string): string {
    return value;
  }
  scrollMarginInlineEnd(value: string): string {
    return value;
  }
  scrollMarginInlineStart(value: string): string {
    return value;
  }
  scrollMarginLeft(value: string): string {
    return value;
  }
  scrollMarginRight(value: string): string {
    return value;
  }
  scrollMarginTop(value: string): string {
    return value;
  }
  scrollPadding(value: string): string {
    return value;
  }
  scrollPaddingBlock(value: string): string {
    return value;
  }
  scrollPaddingBlockEnd(value: string): string {
    return value;
  }
  scrollPaddingBlockStart(value: string): string {
    return value;
  }
  scrollPaddingBottom(value: string): string {
    return value;
  }
  scrollPaddingInline(value: string): string {
    return value;
  }
  scrollPaddingInlineEnd(value: string): string {
    return value;
  }
  scrollPaddingInlineStart(value: string): string {
    return value;
  }
  scrollPaddingLeft(value: string): string {
    return value;
  }
  scrollPaddingRight(value: string): string {
    return value;
  }
  scrollPaddingTop(value: string): string {
    return value;
  }
  scrollSnapAlign(value: string): string {
    return value;
  }
  scrollSnapStop(value: string): string {
    return value;
  }
  scrollSnapType(value: string): string {
    return value;
  }
  scrollbarColor(value: string): string {
    return value;
  }
  scrollbarGutter(value: string): string {
    return value;
  }
  scrollbarWidth(value: string): string {
    return value;
  }
  shapeImageThreshold(value: string): string {
    return value;
  }
  shapeMargin(value: string): string {
    return value;
  }
  shapeOutside(value: string): string {
    return value;
  }
  size(value: string): string {
    return value;
  }
  sizeAdjust(value: string): string {
    return value;
  }
  speakAs(value: string): string {
    return value;
  }
  src(value: string): string {
    return value;
  }
  suffix(value: string): string {
    return value;
  }
  symbols(value: string): string {
    return value;
  }
  syntax(value: string): string {
    return value;
  }
  system(value: string): string {
    return value;
  }
  tabSize(value: string): string {
    return value;
  }
  tableLayout(value: string): string {
    return value;
  }
  textAlign(value: string): string {
    return value;
  }
  textAlignLast(value: string): string {
    return value;
  }
  textCombineUpright(value: string): string {
    return value;
  }
  textDecoration(value: string): string {
    return value;
  }
  textDecorationColor(value: string): string {
    return value;
  }
  textDecorationLine(value: string): string {
    return value;
  }
  textDecorationSkip(value: string): string {
    return value;
  }
  textDecorationSkipInk(value: string): string {
    return value;
  }
  textDecorationStyle(value: string): string {
    return value;
  }
  textDecorationThickness(value: string): string {
    return value;
  }
  textEmphasis(value: string): string {
    return value;
  }
  textEmphasisColor(value: string): string {
    return value;
  }
  textEmphasisPosition(value: string): string {
    return value;
  }
  textEmphasisStyle(value: string): string {
    return value;
  }
  textIndent(value: string): string {
    return value;
  }
  textJustify(value: string): string {
    return value;
  }
  textOrientation(value: string): string {
    return value;
  }
  textOverflow(value: string): string {
    return value;
  }
  textRendering(value: string): string {
    return value;
  }
  textShadow(value: string): string {
    return value;
  }
  textSizeAdjust(value: string): string {
    return value;
  }
  textTransform(value: string): string {
    return value;
  }
  textUnderlineOffset(value: string): string {
    return value;
  }
  textUnderlinePosition(value: string): string {
    return value;
  }
  top(value: string): string {
    return value;
  }
  touchAction(value: string): string {
    return value;
  }
  transform(value: string): string {
    return value;
  }
  transformBox(value: string): string {
    return value;
  }
  transformOrigin(value: string): string {
    return value;
  }
  transformStyle(value: string): string {
    return value;
  }
  transition(value: string): string {
    return value;
  }
  transitionDelay(value: string): string {
    return value;
  }
  transitionDuration(value: string): string {
    return value;
  }
  transitionProperty(value: string): string {
    return value;
  }
  transitionTimingFunction(value: string): string {
    return value;
  }
  translate(value: string): string {
    return value;
  }
  unicodeBidi(value: string): string {
    return value;
  }
  unicodeRange(value: string): string {
    return value;
  }
  unset(value: string): string {
    return value;
  }
  userSelect(value: string): string {
    return value;
  }
  userZoom(value: string): string {
    return value;
  }
  verticalAlign(value: string): string {
    return value;
  }
  viewportFit(value: string): string {
    return value;
  }
  visibility(value: string): string {
    return value;
  }
  whiteSpace(value: string): string {
    return value;
  }
  widows(value: string): string {
    return value;
  }
  width(value: "inherit" | "initial" | "unset" | string): string {
    return value;
  }
  willChange(value: string): string {
    return value;
  }
  wordBreak(value: string): string {
    return value;
  }
  wordSpacing(value: string): string {
    return value;
  }
  wordWrap(value: string): string {
    return value;
  }
  writingMode(value: string): string {
    return value;
  }
  zIndex(value: string): string {
    return value;
  }
  zoom(value: string): string {
    return value;
  }
}
