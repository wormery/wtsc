import { DefineParsers, DefineWTSC, implReturn } from "../core";
export type BaseWTSC = DefineWTSC<DefineBaseParsers<BaseWTSC>>;
export interface DefineBaseParsers<R extends implReturn | BaseWTSC>
  extends DefineParsers<R> {
  WebkitLineClamp(value: string): R;
  accentColor(value: string): R;
  additiveSymbols(value: string): R;
  alignContent(value: string): R;
  alignItems(value: string): R;
  alignSelf(value: string): R;
  alignTracks(value: string): R;
  all(value: string): R;
  animation(value: string): R;
  animationDelay(value: string): R;
  animationDirection(value: string): R;
  animationDuration(value: string): R;
  animationFillMode(value: string): R;
  animationIterationCount(value: string): R;
  animationName(value: string): R;
  animationPlayState(value: string): R;
  animationTimingFunction(value: string): R;
  appearance(value: string): R;
  ascentOverride(value: string): R;
  aspectRatio(value: string): R;
  backdropFilter(value: string): R;
  backfaceVisibility(value: string): R;
  background(value: string): R;
  backgroundAttachment(value: string): R;
  backgroundBlendMode(value: string): R;
  backgroundClip(value: string): R;
  backgroundColor(value: string): R;
  backgroundImage(value: string): R;
  backgroundOrigin(value: string): R;
  backgroundPosition(value: string): R;
  backgroundPositionX(value: string): R;
  backgroundPositionY(value: string): R;
  backgroundRepeat(value: string): R;
  backgroundSize(value: string): R;
  bleed(value: string): R;
  blockOverflow(value: string): R;
  blockSize(value: string): R;
  border(value: string): R;
  borderBlock(value: string): R;
  borderBlockColor(value: string): R;
  borderBlockEnd(value: string): R;
  borderBlockEndColor(value: string): R;
  borderBlockEndStyle(value: string): R;
  borderBlockEndWidth(value: string): R;
  borderBlockStart(value: string): R;
  borderBlockStartColor(value: string): R;
  borderBlockStartStyle(value: string): R;
  borderBlockStartWidth(value: string): R;
  borderBlockStyle(value: string): R;
  borderBlockWidth(value: string): R;
  borderBottom(value: string): R;
  borderBottomColor(value: string): R;
  borderBottomLeftRadius(value: string): R;
  borderBottomRightRadius(value: string): R;
  borderBottomStyle(value: string): R;
  borderBottomWidth(value: string): R;
  borderCollapse(value: string): R;
  borderColor(value: string): R;
  borderEndEndRadius(value: string): R;
  borderEndStartRadius(value: string): R;
  borderImage(value: string): R;
  borderImageOutset(value: string): R;
  borderImageRepeat(value: string): R;
  borderImageSlice(value: string): R;
  borderImageSource(value: string): R;
  borderImageWidth(value: string): R;
  borderInline(value: string): R;
  borderInlineColor(value: string): R;
  borderInlineEnd(value: string): R;
  borderInlineEndColor(value: string): R;
  borderInlineEndStyle(value: string): R;
  borderInlineEndWidth(value: string): R;
  borderInlineStart(value: string): R;
  borderInlineStartColor(value: string): R;
  borderInlineStartStyle(value: string): R;
  borderInlineStartWidth(value: string): R;
  borderInlineStyle(value: string): R;
  borderInlineWidth(value: string): R;
  borderLeft(value: string): R;
  borderLeftColor(value: string): R;
  borderLeftStyle(value: string): R;
  borderLeftWidth(value: string): R;
  borderRadius(value: string): R;
  borderRight(value: string): R;
  borderRightColor(value: string): R;
  borderRightStyle(value: string): R;
  borderRightWidth(value: string): R;
  borderSpacing(value: string): R;
  borderStartEndRadius(value: string): R;
  borderStartStartRadius(value: string): R;
  borderStyle(value: string): R;
  borderTop(value: string): R;
  borderTopColor(value: string): R;
  borderTopLeftRadius(value: string): R;
  borderTopRightRadius(value: string): R;
  borderTopStyle(value: string): R;
  borderTopWidth(value: string): R;
  borderWidth(value: string): R;
  bottom(value: string): R;
  boxDecorationBreak(value: string): R;
  boxShadow(value: string): R;
  boxSizing(value: string): R;
  breakAfter(value: string): R;
  breakBefore(value: string): R;
  breakInside(value: string): R;
  captionSide(value: string): R;
  caretColor(value: string): R;
  clear(value: string): R;
  clip(value: string): R;
  clipPath(value: string): R;
  color(value: string): R;
  colorAdjust(value: string): R;
  colorScheme(value: string): R;
  columnCount(value: string): R;
  columnFill(value: string): R;
  columnGap(value: string): R;
  columnRule(value: string): R;
  columnRuleColor(value: string): R;
  columnRuleStyle(value: string): R;
  columnRuleWidth(value: string): R;
  columnSpan(value: string): R;
  columnWidth(value: string): R;
  columns(value: string): R;
  contain(value: string): R;
  content(value: string): R;
  contentVisibility(value: string): R;
  counterIncrement(value: string): R;
  counterReset(value: string): R;
  counterSet(value: string): R;
  cursor(value: string): R;
  descentOverride(value: string): R;
  direction(value: string): R;
  display(value: string): R;
  emptyCells(value: string): R;
  fallback(value: string): R;
  filter(value: string): R;
  flex(value: string): R;
  flexBasis(value: string): R;
  flexDirection(value: string): R;
  flexFlow(value: string): R;
  flexGrow(value: string): R;
  flexShrink(value: string): R;
  flexWrap(value: string): R;
  float(value: string): R;
  font(value: string): R;
  fontDisplay(value: string): R;
  fontFamily(value: string): R;
  fontFeatureSettings(value: string): R;
  fontKerning(value: string): R;
  fontLanguageOverride(value: string): R;
  fontOpticalSizing(value: string): R;
  fontSize(value: string): R;
  fontSizeAdjust(value: string): R;
  fontStretch(value: string): R;
  fontStyle(value: string): R;
  fontSynthesis(value: string): R;
  fontVariant(value: string): R;
  fontVariantAlternates(value: string): R;
  fontVariantCaps(value: string): R;
  fontVariantEastAsian(value: string): R;
  fontVariantLigatures(value: string): R;
  fontVariantNumeric(value: string): R;
  fontVariantPosition(value: string): R;
  fontVariationSettings(value: string): R;
  fontWeight(value: string): R;
  forcedColorAdjust(value: string): R;
  gap(value: string): R;
  grid(value: string): R;
  gridArea(value: string): R;
  gridAutoColumns(value: string): R;
  gridAutoFlow(value: string): R;
  gridAutoRows(value: string): R;
  gridColumn(value: string): R;
  gridColumnEnd(value: string): R;
  gridColumnStart(value: string): R;
  gridRow(value: string): R;
  gridRowEnd(value: string): R;
  gridRowStart(value: string): R;
  gridTemplate(value: string): R;
  gridTemplateAreas(value: string): R;
  gridTemplateColumns(value: string): R;
  gridTemplateRows(value: string): R;
  hangingPunctuation(value: string): R;
  height(value: string): R;
  hyphens(value: string): R;
  imageOrientation(value: string): R;
  imageRendering(value: string): R;
  imageResolution(value: string): R;
  inherit(value: string): R;
  inherits(value: string): R;
  initial(value: string): R;
  initialLetter(value: string): R;
  initialLetterAlign(value: string): R;
  initialValue(value: string): R;
  inlineSize(value: string): R;
  inputSecurity(value: string): R;
  inset(value: string): R;
  insetBlock(value: string): R;
  insetBlockEnd(value: string): R;
  insetBlockStart(value: string): R;
  insetInline(value: string): R;
  insetInlineEnd(value: string): R;
  insetInlineStart(value: string): R;
  isolation(value: string): R;
  justifyContent(value: string): R;
  justifyItems(value: string): R;
  justifySelf(value: string): R;
  justifyTracks(value: string): R;
  left(value: string): R;
  letterSpacing(value: string): R;
  lineBreak(value: string): R;
  lineClamp(value: string): R;
  lineGapOverride(value: string): R;
  lineHeight(value: string): R;
  lineHeightStep(value: string): R;
  listStyle(value: string): R;
  listStyleImage(value: string): R;
  listStylePosition(value: string): R;
  listStyleType(value: string): R;
  margin(value: string): R;
  marginBlock(value: string): R;
  marginBlockEnd(value: string): R;
  marginBlockStart(value: string): R;
  marginBottom(value: string): R;
  marginInline(value: string): R;
  marginInlineEnd(value: string): R;
  marginInlineStart(value: string): R;
  marginLeft(value: string): R;
  marginRight(value: string): R;
  marginTop(value: string): R;
  marginTrim(value: string): R;
  marks(value: string): R;
  mask(value: string): R;
  maskBorder(value: string): R;
  maskBorderMode(value: string): R;
  maskBorderOutset(value: string): R;
  maskBorderRepeat(value: string): R;
  maskBorderSlice(value: string): R;
  maskBorderSource(value: string): R;
  maskBorderWidth(value: string): R;
  maskClip(value: string): R;
  maskComposite(value: string): R;
  maskImage(value: string): R;
  maskMode(value: string): R;
  maskOrigin(value: string): R;
  maskPosition(value: string): R;
  maskRepeat(value: string): R;
  maskSize(value: string): R;
  maskType(value: string): R;
  masonryAutoFlow(value: string): R;
  mathStyle(value: string): R;
  maxBlockSize(value: string): R;
  maxHeight(value: string): R;
  maxInlineSize(value: string): R;
  maxLines(value: string): R;
  maxWidth(value: string): R;
  maxZoom(value: string): R;
  minBlockSize(value: string): R;
  minHeight(value: string): R;
  minInlineSize(value: string): R;
  minWidth(value: string): R;
  minZoom(value: string): R;
  mixBlendMode(value: string): R;
  negative(value: string): R;
  objectFit(value: string): R;
  objectPosition(value: string): R;
  offset(value: string): R;
  offsetAnchor(value: string): R;
  offsetDistance(value: string): R;
  offsetPath(value: string): R;
  offsetPosition(value: string): R;
  offsetRotate(value: string): R;
  opacity(value: string): R;
  order(value: string): R;
  orientation(value: string): R;
  orphans(value: string): R;
  outline(value: string): R;
  outlineColor(value: string): R;
  outlineOffset(value: string): R;
  outlineStyle(value: string): R;
  outlineWidth(value: string): R;
  overflow(value: string): R;
  overflowAnchor(value: string): R;
  overflowBlock(value: string): R;
  overflowClipMargin(value: string): R;
  overflowInline(value: string): R;
  overflowWrap(value: string): R;
  overflowX(value: string): R;
  overflowY(value: string): R;
  overscrollBehavior(value: string): R;
  overscrollBehaviorBlock(value: string): R;
  overscrollBehaviorInline(value: string): R;
  overscrollBehaviorX(value: string): R;
  overscrollBehaviorY(value: string): R;
  PseudoClasses(value: string): R;
  PseudoElements(value: string): R;
  pad(value: string): R;
  padding(value: string): R;
  paddingBlock(value: string): R;
  paddingBlockEnd(value: string): R;
  paddingBlockStart(value: string): R;
  paddingBottom(value: string): R;
  paddingInline(value: string): R;
  paddingInlineEnd(value: string): R;
  paddingInlineStart(value: string): R;
  paddingLeft(value: string): R;
  paddingRight(value: string): R;
  paddingTop(value: string): R;
  pageBreakAfter(value: string): R;
  pageBreakBefore(value: string): R;
  pageBreakInside(value: string): R;
  paintOrder(value: string): R;
  perspective(value: string): R;
  perspectiveOrigin(value: string): R;
  placeContent(value: string): R;
  placeItems(value: string): R;
  placeSelf(value: string): R;
  pointerEvents(value: string): R;
  position(value: string): R;
  prefix(value: string): R;
  quotes(value: string): R;
  range(value: string): R;
  resize(value: string): R;
  revert(value: string): R;
  right(value: string): R;
  rotate(value: string): R;
  rowGap(value: string): R;
  rubyAlign(value: string): R;
  rubyMerge(value: string): R;
  rubyPosition(value: string): R;
  scale(value: string): R;
  scrollBehavior(value: string): R;
  scrollMargin(value: string): R;
  scrollMarginBlock(value: string): R;
  scrollMarginBlockEnd(value: string): R;
  scrollMarginBlockStart(value: string): R;
  scrollMarginBottom(value: string): R;
  scrollMarginInline(value: string): R;
  scrollMarginInlineEnd(value: string): R;
  scrollMarginInlineStart(value: string): R;
  scrollMarginLeft(value: string): R;
  scrollMarginRight(value: string): R;
  scrollMarginTop(value: string): R;
  scrollPadding(value: string): R;
  scrollPaddingBlock(value: string): R;
  scrollPaddingBlockEnd(value: string): R;
  scrollPaddingBlockStart(value: string): R;
  scrollPaddingBottom(value: string): R;
  scrollPaddingInline(value: string): R;
  scrollPaddingInlineEnd(value: string): R;
  scrollPaddingInlineStart(value: string): R;
  scrollPaddingLeft(value: string): R;
  scrollPaddingRight(value: string): R;
  scrollPaddingTop(value: string): R;
  scrollSnapAlign(value: string): R;
  scrollSnapStop(value: string): R;
  scrollSnapType(value: string): R;
  scrollbarColor(value: string): R;
  scrollbarGutter(value: string): R;
  scrollbarWidth(value: string): R;
  shapeImageThreshold(value: string): R;
  shapeMargin(value: string): R;
  shapeOutside(value: string): R;
  size(value: string): R;
  sizeAdjust(value: string): R;
  speakAs(value: string): R;
  src(value: string): R;
  suffix(value: string): R;
  symbols(value: string): R;
  syntax(value: string): R;
  system(value: string): R;
  tabSize(value: string): R;
  tableLayout(value: string): R;
  textAlign(value: string): R;
  textAlignLast(value: string): R;
  textCombineUpright(value: string): R;
  textDecoration(value: string): R;
  textDecorationColor(value: string): R;
  textDecorationLine(value: string): R;
  textDecorationSkip(value: string): R;
  textDecorationSkipInk(value: string): R;
  textDecorationStyle(value: string): R;
  textDecorationThickness(value: string): R;
  textEmphasis(value: string): R;
  textEmphasisColor(value: string): R;
  textEmphasisPosition(value: string): R;
  textEmphasisStyle(value: string): R;
  textIndent(value: string): R;
  textJustify(value: string): R;
  textOrientation(value: string): R;
  textOverflow(value: string): R;
  textRendering(value: string): R;
  textShadow(value: string): R;
  textSizeAdjust(value: string): R;
  textTransform(value: string): R;
  textUnderlineOffset(value: string): R;
  textUnderlinePosition(value: string): R;
  top(value: string): R;
  touchAction(value: string): R;
  transform(value: string): R;
  transformBox(value: string): R;
  transformOrigin(value: string): R;
  transformStyle(value: string): R;
  transition(value: string): R;
  transitionDelay(value: string): R;
  transitionDuration(value: string): R;
  transitionProperty(value: string): R;
  transitionTimingFunction(value: string): R;
  translate(value: string): R;
  unicodeBidi(value: string): R;
  unicodeRange(value: string): R;
  unset(value: string): R;
  userSelect(value: string): R;
  userZoom(value: string): R;
  verticalAlign(value: string): R;
  viewportFit(value: string): R;
  visibility(value: string): R;
  whiteSpace(value: string): R;
  widows(value: string): R;
  width(value: "width" | string): R;
  willChange(value: string): R;
  wordBreak(value: string): R;
  wordSpacing(value: string): R;
  wordWrap(value: string): R;
  writingMode(value: string): R;
  zIndex(value: string): R;
  zoom(value: string): R;
}
