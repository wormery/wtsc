import { StyleValue } from '../../core/WTSC/types'

export interface BaseParsersInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
   * https://developer.mozilla.org/zh-CN/search?q=-webkit-line-clamp
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  WebkitLineClamp(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/accent-color
   * https://developer.mozilla.org/zh-CN/search?q=accent-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  accentColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/additive-symbols
   * https://developer.mozilla.org/zh-CN/search?q=additive-symbols
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  additiveSymbols(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content
   * https://developer.mozilla.org/zh-CN/search?q=align-content
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  alignContent(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items
   * https://developer.mozilla.org/zh-CN/search?q=align-items
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  alignItems(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self
   * https://developer.mozilla.org/zh-CN/search?q=align-self
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  alignSelf(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-tracks
   * https://developer.mozilla.org/zh-CN/search?q=align-tracks
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  alignTracks(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/all
   * https://developer.mozilla.org/zh-CN/search?q=all
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  all(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
   * https://developer.mozilla.org/zh-CN/search?q=animation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay
   * https://developer.mozilla.org/zh-CN/search?q=animation-delay
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationDelay(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction
   * https://developer.mozilla.org/zh-CN/search?q=animation-direction
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationDirection(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration
   * https://developer.mozilla.org/zh-CN/search?q=animation-duration
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationDuration(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode
   * https://developer.mozilla.org/zh-CN/search?q=animation-fill-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationFillMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count
   * https://developer.mozilla.org/zh-CN/search?q=animation-iteration-count
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationIterationCount(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name
   * https://developer.mozilla.org/zh-CN/search?q=animation-name
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationName(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state
   * https://developer.mozilla.org/zh-CN/search?q=animation-play-state
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationPlayState(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function
   * https://developer.mozilla.org/zh-CN/search?q=animation-timing-function
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  animationTimingFunction(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance
   * https://developer.mozilla.org/zh-CN/search?q=appearance
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  appearance(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/ascent-override
   * https://developer.mozilla.org/zh-CN/search?q=ascent-override
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  ascentOverride(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio
   * https://developer.mozilla.org/zh-CN/search?q=aspect-ratio
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  aspectRatio(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter
   * https://developer.mozilla.org/zh-CN/search?q=backdrop-filter
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backdropFilter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility
   * https://developer.mozilla.org/zh-CN/search?q=backface-visibility
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backfaceVisibility(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
   * https://developer.mozilla.org/zh-CN/search?q=background
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  background(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment
   * https://developer.mozilla.org/zh-CN/search?q=background-attachment
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundAttachment(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-blend-mode
   * https://developer.mozilla.org/zh-CN/search?q=background-blend-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundBlendMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip
   * https://developer.mozilla.org/zh-CN/search?q=background-clip
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundClip(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color
   * https://developer.mozilla.org/zh-CN/search?q=background-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image
   * https://developer.mozilla.org/zh-CN/search?q=background-image
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundImage(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin
   * https://developer.mozilla.org/zh-CN/search?q=background-origin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundOrigin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position
   * https://developer.mozilla.org/zh-CN/search?q=background-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x
   * https://developer.mozilla.org/zh-CN/search?q=background-position-x
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundPositionX(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y
   * https://developer.mozilla.org/zh-CN/search?q=background-position-y
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundPositionY(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat
   * https://developer.mozilla.org/zh-CN/search?q=background-repeat
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundRepeat(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size
   * https://developer.mozilla.org/zh-CN/search?q=background-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  backgroundSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/bleed
   * https://developer.mozilla.org/zh-CN/search?q=bleed
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  bleed(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/block-overflow
   * https://developer.mozilla.org/zh-CN/search?q=block-overflow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  blockOverflow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/block-size
   * https://developer.mozilla.org/zh-CN/search?q=block-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  blockSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border
   * https://developer.mozilla.org/zh-CN/search?q=border
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  border(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block
   * https://developer.mozilla.org/zh-CN/search?q=border-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-color
   * https://developer.mozilla.org/zh-CN/search?q=border-block-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-end
   * https://developer.mozilla.org/zh-CN/search?q=border-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-end-color
   * https://developer.mozilla.org/zh-CN/search?q=border-block-end-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockEndColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-end-style
   * https://developer.mozilla.org/zh-CN/search?q=border-block-end-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockEndStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-end-width
   * https://developer.mozilla.org/zh-CN/search?q=border-block-end-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockEndWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-start
   * https://developer.mozilla.org/zh-CN/search?q=border-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-start-color
   * https://developer.mozilla.org/zh-CN/search?q=border-block-start-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockStartColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-start-style
   * https://developer.mozilla.org/zh-CN/search?q=border-block-start-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockStartStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-start-width
   * https://developer.mozilla.org/zh-CN/search?q=border-block-start-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockStartWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-style
   * https://developer.mozilla.org/zh-CN/search?q=border-block-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-block-width
   * https://developer.mozilla.org/zh-CN/search?q=border-block-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBlockWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-color
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottomColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-left-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom-left-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottomLeftRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-right-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom-right-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottomRightRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-style
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottomStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-width
   * https://developer.mozilla.org/zh-CN/search?q=border-bottom-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderBottomWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse
   * https://developer.mozilla.org/zh-CN/search?q=border-collapse
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderCollapse(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color
   * https://developer.mozilla.org/zh-CN/search?q=border-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-end-end-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-end-end-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderEndEndRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-end-start-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-end-start-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderEndStartRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image
   * https://developer.mozilla.org/zh-CN/search?q=border-image
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImage(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-outset
   * https://developer.mozilla.org/zh-CN/search?q=border-image-outset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImageOutset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-repeat
   * https://developer.mozilla.org/zh-CN/search?q=border-image-repeat
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImageRepeat(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-slice
   * https://developer.mozilla.org/zh-CN/search?q=border-image-slice
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImageSlice(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-source
   * https://developer.mozilla.org/zh-CN/search?q=border-image-source
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImageSource(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-width
   * https://developer.mozilla.org/zh-CN/search?q=border-image-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderImageWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline
   * https://developer.mozilla.org/zh-CN/search?q=border-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-color
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-end-color
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-end-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineEndColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-end-style
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-end-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineEndStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-end-width
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-end-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineEndWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-start-color
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-start-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineStartColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-start-style
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-start-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineStartStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-start-width
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-start-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineStartWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-style
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-inline-width
   * https://developer.mozilla.org/zh-CN/search?q=border-inline-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderInlineWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left
   * https://developer.mozilla.org/zh-CN/search?q=border-left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderLeft(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-color
   * https://developer.mozilla.org/zh-CN/search?q=border-left-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderLeftColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-style
   * https://developer.mozilla.org/zh-CN/search?q=border-left-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderLeftStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-width
   * https://developer.mozilla.org/zh-CN/search?q=border-left-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderLeftWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right
   * https://developer.mozilla.org/zh-CN/search?q=border-right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderRight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-color
   * https://developer.mozilla.org/zh-CN/search?q=border-right-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderRightColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-style
   * https://developer.mozilla.org/zh-CN/search?q=border-right-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderRightStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-width
   * https://developer.mozilla.org/zh-CN/search?q=border-right-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderRightWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-spacing
   * https://developer.mozilla.org/zh-CN/search?q=border-spacing
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderSpacing(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-start-end-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-start-end-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderStartEndRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-start-start-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-start-start-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderStartStartRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style
   * https://developer.mozilla.org/zh-CN/search?q=border-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top
   * https://developer.mozilla.org/zh-CN/search?q=border-top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-color
   * https://developer.mozilla.org/zh-CN/search?q=border-top-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTopColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-left-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-top-left-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTopLeftRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-right-radius
   * https://developer.mozilla.org/zh-CN/search?q=border-top-right-radius
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTopRightRadius(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-style
   * https://developer.mozilla.org/zh-CN/search?q=border-top-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTopStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-width
   * https://developer.mozilla.org/zh-CN/search?q=border-top-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderTopWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width
   * https://developer.mozilla.org/zh-CN/search?q=border-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  borderWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom
   * https://developer.mozilla.org/zh-CN/search?q=bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  bottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-decoration-break
   * https://developer.mozilla.org/zh-CN/search?q=box-decoration-break
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  boxDecorationBreak(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   * https://developer.mozilla.org/zh-CN/search?q=box-shadow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  boxShadow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
   * https://developer.mozilla.org/zh-CN/search?q=box-sizing
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  boxSizing(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-after
   * https://developer.mozilla.org/zh-CN/search?q=break-after
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  breakAfter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-before
   * https://developer.mozilla.org/zh-CN/search?q=break-before
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  breakBefore(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-inside
   * https://developer.mozilla.org/zh-CN/search?q=break-inside
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  breakInside(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/caption-side
   * https://developer.mozilla.org/zh-CN/search?q=caption-side
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  captionSide(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/caret-color
   * https://developer.mozilla.org/zh-CN/search?q=caret-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  caretColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear
   * https://developer.mozilla.org/zh-CN/search?q=clear
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  clear(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip
   * https://developer.mozilla.org/zh-CN/search?q=clip
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  clip(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
   * https://developer.mozilla.org/zh-CN/search?q=clip-path
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  clipPath(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/color
   * https://developer.mozilla.org/zh-CN/search?q=color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  color(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/color-adjust
   * https://developer.mozilla.org/zh-CN/search?q=color-adjust
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  colorAdjust(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/color-scheme
   * https://developer.mozilla.org/zh-CN/search?q=color-scheme
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  colorScheme(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count
   * https://developer.mozilla.org/zh-CN/search?q=column-count
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnCount(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-fill
   * https://developer.mozilla.org/zh-CN/search?q=column-fill
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnFill(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap
   * https://developer.mozilla.org/zh-CN/search?q=column-gap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnGap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule
   * https://developer.mozilla.org/zh-CN/search?q=column-rule
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnRule(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule-color
   * https://developer.mozilla.org/zh-CN/search?q=column-rule-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnRuleColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule-style
   * https://developer.mozilla.org/zh-CN/search?q=column-rule-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnRuleStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule-width
   * https://developer.mozilla.org/zh-CN/search?q=column-rule-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnRuleWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-span
   * https://developer.mozilla.org/zh-CN/search?q=column-span
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnSpan(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width
   * https://developer.mozilla.org/zh-CN/search?q=column-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columnWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns
   * https://developer.mozilla.org/zh-CN/search?q=columns
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  columns(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain
   * https://developer.mozilla.org/zh-CN/search?q=contain
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  contain(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/content
   * https://developer.mozilla.org/zh-CN/search?q=content
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  content(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/content-visibility
   * https://developer.mozilla.org/zh-CN/search?q=content-visibility
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  contentVisibility(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-increment
   * https://developer.mozilla.org/zh-CN/search?q=counter-increment
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  counterIncrement(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset
   * https://developer.mozilla.org/zh-CN/search?q=counter-reset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  counterReset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-set
   * https://developer.mozilla.org/zh-CN/search?q=counter-set
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  counterSet(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor
   * https://developer.mozilla.org/zh-CN/search?q=cursor
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  cursor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/descent-override
   * https://developer.mozilla.org/zh-CN/search?q=descent-override
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  descentOverride(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction
   * https://developer.mozilla.org/zh-CN/search?q=direction
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  direction(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/display
   * https://developer.mozilla.org/zh-CN/search?q=display
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  display(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/empty-cells
   * https://developer.mozilla.org/zh-CN/search?q=empty-cells
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  emptyCells(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/fallback
   * https://developer.mozilla.org/zh-CN/search?q=fallback
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fallback(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter
   * https://developer.mozilla.org/zh-CN/search?q=filter
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  filter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * https://developer.mozilla.org/zh-CN/search?q=flex
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flex(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis
   * https://developer.mozilla.org/zh-CN/search?q=flex-basis
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexBasis(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction
   * https://developer.mozilla.org/zh-CN/search?q=flex-direction
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexDirection(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow
   * https://developer.mozilla.org/zh-CN/search?q=flex-flow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexFlow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow
   * https://developer.mozilla.org/zh-CN/search?q=flex-grow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexGrow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink
   * https://developer.mozilla.org/zh-CN/search?q=flex-shrink
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexShrink(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap
   * https://developer.mozilla.org/zh-CN/search?q=flex-wrap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  flexWrap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/float
   * https://developer.mozilla.org/zh-CN/search?q=float
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  float(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
   * https://developer.mozilla.org/zh-CN/search?q=font
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  font(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-display
   * https://developer.mozilla.org/zh-CN/search?q=font-display
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontDisplay(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family
   * https://developer.mozilla.org/zh-CN/search?q=font-family
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontFamily(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-feature-settings
   * https://developer.mozilla.org/zh-CN/search?q=font-feature-settings
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontFeatureSettings(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-kerning
   * https://developer.mozilla.org/zh-CN/search?q=font-kerning
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontKerning(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-language-override
   * https://developer.mozilla.org/zh-CN/search?q=font-language-override
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontLanguageOverride(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-optical-sizing
   * https://developer.mozilla.org/zh-CN/search?q=font-optical-sizing
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontOpticalSizing(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
   * https://developer.mozilla.org/zh-CN/search?q=font-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size-adjust
   * https://developer.mozilla.org/zh-CN/search?q=font-size-adjust
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontSizeAdjust(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch
   * https://developer.mozilla.org/zh-CN/search?q=font-stretch
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontStretch(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style
   * https://developer.mozilla.org/zh-CN/search?q=font-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-synthesis
   * https://developer.mozilla.org/zh-CN/search?q=font-synthesis
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontSynthesis(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant
   * https://developer.mozilla.org/zh-CN/search?q=font-variant
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariant(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-alternates
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-alternates
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantAlternates(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-caps
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-caps
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantCaps(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-east-asian
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-east-asian
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantEastAsian(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-ligatures
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-ligatures
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantLigatures(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-numeric
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantNumeric(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-position
   * https://developer.mozilla.org/zh-CN/search?q=font-variant-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariantPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variation-settings
   * https://developer.mozilla.org/zh-CN/search?q=font-variation-settings
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontVariationSettings(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight
   * https://developer.mozilla.org/zh-CN/search?q=font-weight
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  fontWeight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/forced-color-adjust
   * https://developer.mozilla.org/zh-CN/search?q=forced-color-adjust
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  forcedColorAdjust(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap
   * https://developer.mozilla.org/zh-CN/search?q=gap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid
   * https://developer.mozilla.org/zh-CN/search?q=grid
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  grid(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-area
   * https://developer.mozilla.org/zh-CN/search?q=grid-area
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridArea(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-columns
   * https://developer.mozilla.org/zh-CN/search?q=grid-auto-columns
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridAutoColumns(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-flow
   * https://developer.mozilla.org/zh-CN/search?q=grid-auto-flow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridAutoFlow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows
   * https://developer.mozilla.org/zh-CN/search?q=grid-auto-rows
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridAutoRows(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column
   * https://developer.mozilla.org/zh-CN/search?q=grid-column
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridColumn(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-end
   * https://developer.mozilla.org/zh-CN/search?q=grid-column-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridColumnEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-start
   * https://developer.mozilla.org/zh-CN/search?q=grid-column-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridColumnStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row
   * https://developer.mozilla.org/zh-CN/search?q=grid-row
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridRow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-end
   * https://developer.mozilla.org/zh-CN/search?q=grid-row-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridRowEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-start
   * https://developer.mozilla.org/zh-CN/search?q=grid-row-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridRowStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template
   * https://developer.mozilla.org/zh-CN/search?q=grid-template
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridTemplate(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas
   * https://developer.mozilla.org/zh-CN/search?q=grid-template-areas
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridTemplateAreas(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns
   * https://developer.mozilla.org/zh-CN/search?q=grid-template-columns
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridTemplateColumns(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows
   * https://developer.mozilla.org/zh-CN/search?q=grid-template-rows
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  gridTemplateRows(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/hanging-punctuation
   * https://developer.mozilla.org/zh-CN/search?q=hanging-punctuation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  hangingPunctuation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
   * https://developer.mozilla.org/zh-CN/search?q=height
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  height(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens
   * https://developer.mozilla.org/zh-CN/search?q=hyphens
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  hyphens(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/image-orientation
   * https://developer.mozilla.org/zh-CN/search?q=image-orientation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  imageOrientation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/image-rendering
   * https://developer.mozilla.org/zh-CN/search?q=image-rendering
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  imageRendering(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/image-resolution
   * https://developer.mozilla.org/zh-CN/search?q=image-resolution
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  imageResolution(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit
   * https://developer.mozilla.org/zh-CN/search?q=inherit
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  inherit(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherits
   * https://developer.mozilla.org/zh-CN/search?q=inherits
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  inherits(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial
   * https://developer.mozilla.org/zh-CN/search?q=initial
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  initial(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial-letter
   * https://developer.mozilla.org/zh-CN/search?q=initial-letter
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  initialLetter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial-letter-align
   * https://developer.mozilla.org/zh-CN/search?q=initial-letter-align
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  initialLetterAlign(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial-value
   * https://developer.mozilla.org/zh-CN/search?q=initial-value
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  initialValue(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inline-size
   * https://developer.mozilla.org/zh-CN/search?q=inline-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  inlineSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/input-security
   * https://developer.mozilla.org/zh-CN/search?q=input-security
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  inputSecurity(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset
   * https://developer.mozilla.org/zh-CN/search?q=inset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  inset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-block
   * https://developer.mozilla.org/zh-CN/search?q=inset-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-block-end
   * https://developer.mozilla.org/zh-CN/search?q=inset-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-block-start
   * https://developer.mozilla.org/zh-CN/search?q=inset-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-inline
   * https://developer.mozilla.org/zh-CN/search?q=inset-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=inset-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=inset-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  insetInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/isolation
   * https://developer.mozilla.org/zh-CN/search?q=isolation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  isolation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
   * https://developer.mozilla.org/zh-CN/search?q=justify-content
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  justifyContent(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items
   * https://developer.mozilla.org/zh-CN/search?q=justify-items
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  justifyItems(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-self
   * https://developer.mozilla.org/zh-CN/search?q=justify-self
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  justifySelf(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-tracks
   * https://developer.mozilla.org/zh-CN/search?q=justify-tracks
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  justifyTracks(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/left
   * https://developer.mozilla.org/zh-CN/search?q=left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  left(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing
   * https://developer.mozilla.org/zh-CN/search?q=letter-spacing
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  letterSpacing(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-break
   * https://developer.mozilla.org/zh-CN/search?q=line-break
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  lineBreak(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-clamp
   * https://developer.mozilla.org/zh-CN/search?q=line-clamp
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  lineClamp(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-gap-override
   * https://developer.mozilla.org/zh-CN/search?q=line-gap-override
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  lineGapOverride(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height
   * https://developer.mozilla.org/zh-CN/search?q=line-height
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  lineHeight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height-step
   * https://developer.mozilla.org/zh-CN/search?q=line-height-step
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  lineHeightStep(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style
   * https://developer.mozilla.org/zh-CN/search?q=list-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  listStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-image
   * https://developer.mozilla.org/zh-CN/search?q=list-style-image
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  listStyleImage(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-position
   * https://developer.mozilla.org/zh-CN/search?q=list-style-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  listStylePosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type
   * https://developer.mozilla.org/zh-CN/search?q=list-style-type
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  listStyleType(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin
   * https://developer.mozilla.org/zh-CN/search?q=margin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  margin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-block
   * https://developer.mozilla.org/zh-CN/search?q=margin-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-block-end
   * https://developer.mozilla.org/zh-CN/search?q=margin-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-block-start
   * https://developer.mozilla.org/zh-CN/search?q=margin-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom
   * https://developer.mozilla.org/zh-CN/search?q=margin-bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginBottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-inline
   * https://developer.mozilla.org/zh-CN/search?q=margin-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=margin-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=margin-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left
   * https://developer.mozilla.org/zh-CN/search?q=margin-left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginLeft(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right
   * https://developer.mozilla.org/zh-CN/search?q=margin-right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginRight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top
   * https://developer.mozilla.org/zh-CN/search?q=margin-top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginTop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-trim
   * https://developer.mozilla.org/zh-CN/search?q=margin-trim
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marginTrim(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/marks
   * https://developer.mozilla.org/zh-CN/search?q=marks
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  marks(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask
   * https://developer.mozilla.org/zh-CN/search?q=mask
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  mask(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border
   * https://developer.mozilla.org/zh-CN/search?q=mask-border
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorder(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-mode
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-outset
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-outset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderOutset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-repeat
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-repeat
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderRepeat(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-slice
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-slice
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderSlice(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-source
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-source
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderSource(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border-width
   * https://developer.mozilla.org/zh-CN/search?q=mask-border-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskBorderWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-clip
   * https://developer.mozilla.org/zh-CN/search?q=mask-clip
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskClip(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-composite
   * https://developer.mozilla.org/zh-CN/search?q=mask-composite
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskComposite(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image
   * https://developer.mozilla.org/zh-CN/search?q=mask-image
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskImage(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-mode
   * https://developer.mozilla.org/zh-CN/search?q=mask-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-origin
   * https://developer.mozilla.org/zh-CN/search?q=mask-origin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskOrigin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-position
   * https://developer.mozilla.org/zh-CN/search?q=mask-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-repeat
   * https://developer.mozilla.org/zh-CN/search?q=mask-repeat
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskRepeat(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-size
   * https://developer.mozilla.org/zh-CN/search?q=mask-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-type
   * https://developer.mozilla.org/zh-CN/search?q=mask-type
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maskType(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/masonry-auto-flow
   * https://developer.mozilla.org/zh-CN/search?q=masonry-auto-flow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  masonryAutoFlow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/math-style
   * https://developer.mozilla.org/zh-CN/search?q=math-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  mathStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-block-size
   * https://developer.mozilla.org/zh-CN/search?q=max-block-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxBlockSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-height
   * https://developer.mozilla.org/zh-CN/search?q=max-height
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxHeight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-inline-size
   * https://developer.mozilla.org/zh-CN/search?q=max-inline-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxInlineSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-lines
   * https://developer.mozilla.org/zh-CN/search?q=max-lines
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxLines(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width
   * https://developer.mozilla.org/zh-CN/search?q=max-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-zoom
   * https://developer.mozilla.org/zh-CN/search?q=max-zoom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  maxZoom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-block-size
   * https://developer.mozilla.org/zh-CN/search?q=min-block-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  minBlockSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height
   * https://developer.mozilla.org/zh-CN/search?q=min-height
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  minHeight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-inline-size
   * https://developer.mozilla.org/zh-CN/search?q=min-inline-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  minInlineSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-width
   * https://developer.mozilla.org/zh-CN/search?q=min-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  minWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-zoom
   * https://developer.mozilla.org/zh-CN/search?q=min-zoom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  minZoom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode
   * https://developer.mozilla.org/zh-CN/search?q=mix-blend-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  mixBlendMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/negative
   * https://developer.mozilla.org/zh-CN/search?q=negative
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  negative(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
   * https://developer.mozilla.org/zh-CN/search?q=object-fit
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  objectFit(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position
   * https://developer.mozilla.org/zh-CN/search?q=object-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  objectPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset
   * https://developer.mozilla.org/zh-CN/search?q=offset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset-anchor
   * https://developer.mozilla.org/zh-CN/search?q=offset-anchor
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offsetAnchor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset-distance
   * https://developer.mozilla.org/zh-CN/search?q=offset-distance
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offsetDistance(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset-path
   * https://developer.mozilla.org/zh-CN/search?q=offset-path
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offsetPath(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset-position
   * https://developer.mozilla.org/zh-CN/search?q=offset-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offsetPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/offset-rotate
   * https://developer.mozilla.org/zh-CN/search?q=offset-rotate
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  offsetRotate(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity
   * https://developer.mozilla.org/zh-CN/search?q=opacity
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  opacity(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/order
   * https://developer.mozilla.org/zh-CN/search?q=order
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  order(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/orientation
   * https://developer.mozilla.org/zh-CN/search?q=orientation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  orientation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/orphans
   * https://developer.mozilla.org/zh-CN/search?q=orphans
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  orphans(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline
   * https://developer.mozilla.org/zh-CN/search?q=outline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  outline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-color
   * https://developer.mozilla.org/zh-CN/search?q=outline-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  outlineColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset
   * https://developer.mozilla.org/zh-CN/search?q=outline-offset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  outlineOffset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-style
   * https://developer.mozilla.org/zh-CN/search?q=outline-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  outlineStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-width
   * https://developer.mozilla.org/zh-CN/search?q=outline-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  outlineWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow
   * https://developer.mozilla.org/zh-CN/search?q=overflow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-anchor
   * https://developer.mozilla.org/zh-CN/search?q=overflow-anchor
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowAnchor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-block
   * https://developer.mozilla.org/zh-CN/search?q=overflow-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-clip-margin
   * https://developer.mozilla.org/zh-CN/search?q=overflow-clip-margin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowClipMargin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-inline
   * https://developer.mozilla.org/zh-CN/search?q=overflow-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-wrap
   * https://developer.mozilla.org/zh-CN/search?q=overflow-wrap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowWrap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-x
   * https://developer.mozilla.org/zh-CN/search?q=overflow-x
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowX(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y
   * https://developer.mozilla.org/zh-CN/search?q=overflow-y
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overflowY(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior
   * https://developer.mozilla.org/zh-CN/search?q=overscroll-behavior
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overscrollBehavior(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior-block
   * https://developer.mozilla.org/zh-CN/search?q=overscroll-behavior-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overscrollBehaviorBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior-inline
   * https://developer.mozilla.org/zh-CN/search?q=overscroll-behavior-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overscrollBehaviorInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior-x
   * https://developer.mozilla.org/zh-CN/search?q=overscroll-behavior-x
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overscrollBehaviorX(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior-y
   * https://developer.mozilla.org/zh-CN/search?q=overscroll-behavior-y
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  overscrollBehaviorY(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes
   * https://developer.mozilla.org/zh-CN/search?q=Pseudo-classes
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  PseudoClasses(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements
   * https://developer.mozilla.org/zh-CN/search?q=Pseudo-elements
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  PseudoElements(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/pad
   * https://developer.mozilla.org/zh-CN/search?q=pad
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  pad(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   * https://developer.mozilla.org/zh-CN/search?q=padding
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  padding(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-block
   * https://developer.mozilla.org/zh-CN/search?q=padding-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-block-end
   * https://developer.mozilla.org/zh-CN/search?q=padding-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-block-start
   * https://developer.mozilla.org/zh-CN/search?q=padding-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-bottom
   * https://developer.mozilla.org/zh-CN/search?q=padding-bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingBottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-inline
   * https://developer.mozilla.org/zh-CN/search?q=padding-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=padding-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=padding-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-left
   * https://developer.mozilla.org/zh-CN/search?q=padding-left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingLeft(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-right
   * https://developer.mozilla.org/zh-CN/search?q=padding-right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingRight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-top
   * https://developer.mozilla.org/zh-CN/search?q=padding-top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paddingTop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/page-break-after
   * https://developer.mozilla.org/zh-CN/search?q=page-break-after
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  pageBreakAfter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/page-break-before
   * https://developer.mozilla.org/zh-CN/search?q=page-break-before
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  pageBreakBefore(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/page-break-inside
   * https://developer.mozilla.org/zh-CN/search?q=page-break-inside
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  pageBreakInside(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/paint-order
   * https://developer.mozilla.org/zh-CN/search?q=paint-order
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  paintOrder(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective
   * https://developer.mozilla.org/zh-CN/search?q=perspective
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  perspective(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective-origin
   * https://developer.mozilla.org/zh-CN/search?q=perspective-origin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  perspectiveOrigin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-content
   * https://developer.mozilla.org/zh-CN/search?q=place-content
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  placeContent(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items
   * https://developer.mozilla.org/zh-CN/search?q=place-items
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  placeItems(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-self
   * https://developer.mozilla.org/zh-CN/search?q=place-self
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  placeSelf(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events
   * https://developer.mozilla.org/zh-CN/search?q=pointer-events
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  pointerEvents(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
   * https://developer.mozilla.org/zh-CN/search?q=position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  position(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/prefix
   * https://developer.mozilla.org/zh-CN/search?q=prefix
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  prefix(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/quotes
   * https://developer.mozilla.org/zh-CN/search?q=quotes
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  quotes(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/range
   * https://developer.mozilla.org/zh-CN/search?q=range
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  range(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
   * https://developer.mozilla.org/zh-CN/search?q=resize
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  resize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/revert
   * https://developer.mozilla.org/zh-CN/search?q=revert
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  revert(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/right
   * https://developer.mozilla.org/zh-CN/search?q=right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  right(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/rotate
   * https://developer.mozilla.org/zh-CN/search?q=rotate
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  rotate(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/row-gap
   * https://developer.mozilla.org/zh-CN/search?q=row-gap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  rowGap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/ruby-align
   * https://developer.mozilla.org/zh-CN/search?q=ruby-align
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  rubyAlign(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/ruby-merge
   * https://developer.mozilla.org/zh-CN/search?q=ruby-merge
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  rubyMerge(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/ruby-position
   * https://developer.mozilla.org/zh-CN/search?q=ruby-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  rubyPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scale
   * https://developer.mozilla.org/zh-CN/search?q=scale
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scale(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior
   * https://developer.mozilla.org/zh-CN/search?q=scroll-behavior
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollBehavior(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMargin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-block
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-block-end
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-block-start
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-bottom
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginBottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-inline
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-left
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginLeft(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-right
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginRight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin-top
   * https://developer.mozilla.org/zh-CN/search?q=scroll-margin-top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollMarginTop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPadding(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-block
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-block
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingBlock(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-block-end
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-block-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingBlockEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-block-start
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-block-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingBlockStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-bottom
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-bottom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingBottom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-inline
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-inline
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingInline(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-inline-end
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-inline-end
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingInlineEnd(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-inline-start
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-inline-start
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingInlineStart(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-left
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-left
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingLeft(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-right
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-right
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingRight(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-padding-top
   * https://developer.mozilla.org/zh-CN/search?q=scroll-padding-top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollPaddingTop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-align
   * https://developer.mozilla.org/zh-CN/search?q=scroll-snap-align
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollSnapAlign(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-stop
   * https://developer.mozilla.org/zh-CN/search?q=scroll-snap-stop
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollSnapStop(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type
   * https://developer.mozilla.org/zh-CN/search?q=scroll-snap-type
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollSnapType(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scrollbar-color
   * https://developer.mozilla.org/zh-CN/search?q=scrollbar-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollbarColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scrollbar-gutter
   * https://developer.mozilla.org/zh-CN/search?q=scrollbar-gutter
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollbarGutter(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/scrollbar-width
   * https://developer.mozilla.org/zh-CN/search?q=scrollbar-width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  scrollbarWidth(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-image-threshold
   * https://developer.mozilla.org/zh-CN/search?q=shape-image-threshold
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  shapeImageThreshold(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-margin
   * https://developer.mozilla.org/zh-CN/search?q=shape-margin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  shapeMargin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside
   * https://developer.mozilla.org/zh-CN/search?q=shape-outside
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  shapeOutside(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/size
   * https://developer.mozilla.org/zh-CN/search?q=size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  size(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/size-adjust
   * https://developer.mozilla.org/zh-CN/search?q=size-adjust
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  sizeAdjust(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/speak-as
   * https://developer.mozilla.org/zh-CN/search?q=speak-as
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  speakAs(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/src
   * https://developer.mozilla.org/zh-CN/search?q=src
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  src(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/suffix
   * https://developer.mozilla.org/zh-CN/search?q=suffix
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  suffix(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/symbols
   * https://developer.mozilla.org/zh-CN/search?q=symbols
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  symbols(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/syntax
   * https://developer.mozilla.org/zh-CN/search?q=syntax
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  syntax(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/system
   * https://developer.mozilla.org/zh-CN/search?q=system
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  system(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/tab-size
   * https://developer.mozilla.org/zh-CN/search?q=tab-size
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  tabSize(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout
   * https://developer.mozilla.org/zh-CN/search?q=table-layout
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  tableLayout(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align
   * https://developer.mozilla.org/zh-CN/search?q=text-align
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textAlign(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last
   * https://developer.mozilla.org/zh-CN/search?q=text-align-last
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textAlignLast(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-combine-upright
   * https://developer.mozilla.org/zh-CN/search?q=text-combine-upright
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textCombineUpright(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecoration(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-line
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationLine(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-skip
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-skip
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationSkip(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-skip-ink
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-skip-ink
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationSkipInk(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-thickness
   * https://developer.mozilla.org/zh-CN/search?q=text-decoration-thickness
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textDecorationThickness(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-emphasis
   * https://developer.mozilla.org/zh-CN/search?q=text-emphasis
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textEmphasis(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-emphasis-color
   * https://developer.mozilla.org/zh-CN/search?q=text-emphasis-color
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textEmphasisColor(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-emphasis-position
   * https://developer.mozilla.org/zh-CN/search?q=text-emphasis-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textEmphasisPosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-emphasis-style
   * https://developer.mozilla.org/zh-CN/search?q=text-emphasis-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textEmphasisStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent
   * https://developer.mozilla.org/zh-CN/search?q=text-indent
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textIndent(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-justify
   * https://developer.mozilla.org/zh-CN/search?q=text-justify
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textJustify(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-orientation
   * https://developer.mozilla.org/zh-CN/search?q=text-orientation
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textOrientation(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow
   * https://developer.mozilla.org/zh-CN/search?q=text-overflow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textOverflow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-rendering
   * https://developer.mozilla.org/zh-CN/search?q=text-rendering
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textRendering(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow
   * https://developer.mozilla.org/zh-CN/search?q=text-shadow
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textShadow(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust
   * https://developer.mozilla.org/zh-CN/search?q=text-size-adjust
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textSizeAdjust(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform
   * https://developer.mozilla.org/zh-CN/search?q=text-transform
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textTransform(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-underline-offset
   * https://developer.mozilla.org/zh-CN/search?q=text-underline-offset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textUnderlineOffset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-underline-position
   * https://developer.mozilla.org/zh-CN/search?q=text-underline-position
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  textUnderlinePosition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/top
   * https://developer.mozilla.org/zh-CN/search?q=top
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  top(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action
   * https://developer.mozilla.org/zh-CN/search?q=touch-action
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  touchAction(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform
   * https://developer.mozilla.org/zh-CN/search?q=transform
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transform(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-box
   * https://developer.mozilla.org/zh-CN/search?q=transform-box
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transformBox(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin
   * https://developer.mozilla.org/zh-CN/search?q=transform-origin
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transformOrigin(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style
   * https://developer.mozilla.org/zh-CN/search?q=transform-style
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transformStyle(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition
   * https://developer.mozilla.org/zh-CN/search?q=transition
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transition(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay
   * https://developer.mozilla.org/zh-CN/search?q=transition-delay
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transitionDelay(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration
   * https://developer.mozilla.org/zh-CN/search?q=transition-duration
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transitionDuration(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property
   * https://developer.mozilla.org/zh-CN/search?q=transition-property
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transitionProperty(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
   * https://developer.mozilla.org/zh-CN/search?q=transition-timing-function
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  transitionTimingFunction(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/translate
   * https://developer.mozilla.org/zh-CN/search?q=translate
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  translate(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/unicode-bidi
   * https://developer.mozilla.org/zh-CN/search?q=unicode-bidi
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  unicodeBidi(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/unicode-range
   * https://developer.mozilla.org/zh-CN/search?q=unicode-range
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  unicodeRange(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset
   * https://developer.mozilla.org/zh-CN/search?q=unset
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  unset(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select
   * https://developer.mozilla.org/zh-CN/search?q=user-select
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  userSelect(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-zoom
   * https://developer.mozilla.org/zh-CN/search?q=user-zoom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  userZoom(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align
   * https://developer.mozilla.org/zh-CN/search?q=vertical-align
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  verticalAlign(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/viewport-fit
   * https://developer.mozilla.org/zh-CN/search?q=viewport-fit
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  viewportFit(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility
   * https://developer.mozilla.org/zh-CN/search?q=visibility
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  visibility(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space
   * https://developer.mozilla.org/zh-CN/search?q=white-space
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  whiteSpace(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/widows
   * https://developer.mozilla.org/zh-CN/search?q=widows
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  widows(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
   * https://developer.mozilla.org/zh-CN/search?q=width
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  width(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change
   * https://developer.mozilla.org/zh-CN/search?q=will-change
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  willChange(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break
   * https://developer.mozilla.org/zh-CN/search?q=word-break
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  wordBreak(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing
   * https://developer.mozilla.org/zh-CN/search?q=word-spacing
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  wordSpacing(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-wrap
   * https://developer.mozilla.org/zh-CN/search?q=word-wrap
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  wordWrap(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode
   * https://developer.mozilla.org/zh-CN/search?q=writing-mode
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  writingMode(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   * https://developer.mozilla.org/zh-CN/search?q=z-index
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  zIndex(...rest: StyleValue): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/zoom
   * https://developer.mozilla.org/zh-CN/search?q=zoom
   * @author meke
   * @param {MixInjectValue<MixOutString>} value
   * @return {*} {R}
   * @memberof BaseParsersInterface
   */
  zoom(...rest: StyleValue): R
}
