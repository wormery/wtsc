import { SingleParser, Parser } from '../../../core/WTSC/types'
import { BackgroundAttachmentValue } from './backgroundAttachment'
import { backgroundClipValueType } from './backgroundClip'
import { BackgroundOriginValue } from './backgroundOrigin'
import { BackgroundPositionRestValue } from './backgroundPosition'
import { BackgroundRepeatRestValue } from './backgroundRepeat'
import { BackgroundSizeRestValueType } from './backgroundSize'
import { BackgroundImageValue } from './backgroundImage'
import { backgroundColorValue } from './backgroundColor'

export interface BackgroundGloupIntercace<R> {
  /**
   * @author meke
   * @type {SingleParser<BackgroundAttachmentValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundAttachment: SingleParser<BackgroundAttachmentValue, R>

  /**
   * @author meke
   * @type {SingleParser<backgroundClipValueType, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundClip: SingleParser<backgroundClipValueType, R>

  /**
   * @author meke
   * @type {SingleParser<BackgroundOriginValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundOrigin: SingleParser<BackgroundOriginValue, R>

  /**
   * @author meke
   * @type {SingleParser<backgroundColorValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundColor: SingleParser<backgroundColorValue, R>

  /**
   * @author meke
   * @type {SingleParser<BackgroundImageValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundImage: SingleParser<BackgroundImageValue, R>

  /**
   * @author meke
   * @type {Parser<BackgroundPositionRestValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundPosition: Parser<BackgroundPositionRestValue, R>

  /**
   * @author meke
   * @type {Parser<BackgroundRepeatRestValue, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundRepeat: Parser<BackgroundRepeatRestValue, R>

  /**
   * @author meke
   * @type {Parser<BackgroundSizeRestValueType, R>}
   * @memberof BackgroundGloupIntercace
   */
  backgroundSize: Parser<BackgroundSizeRestValueType, R>
  background: Parser<
    Array<
      | BackgroundAttachmentValue
      | BackgroundOriginValue
      | backgroundColorValue
      | BackgroundImageValue
      | BackgroundPositionRestValue[any]
      | BackgroundRepeatRestValue[any]
      | BackgroundSizeRestValueType[any]
    >,
    R
  >
}
