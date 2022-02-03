import {
  WTSC,
  implReturn,
  Parsers,
  ParsersError,
  ParsersReturnType,
} from '../../core'
import U, { filterUnitByBasicsUnit } from '../../unit/BasicsUnit'
import { fourValueDetcetor } from '../../unit/Detector'
import {
  DefineSizeParsers,
  SizeParsersWTSCType,
  ValueType,
} from '../DefineSizeParsers'

export function createWTSC(): SizeParsersWTSCType {
  const wtsc: SizeParsersWTSCType = new WTSC(new SizeParsersImpl())
  return wtsc
}

export class SizeParsersImpl
  extends Parsers
  implements DefineSizeParsers<implReturn>
{
  wtsc: SizeParsersWTSCType = {} as unknown as SizeParsersWTSCType
  constructor() {
    super()
    this.name = 'SizeParsersImpl'
  }

  filterUnitByBasicsUnit(
    value: ValueType,
    unit: U = U.PX,
    cssName: string
  ): string {
    if (typeof value === 'string') {
      if (filterUnitByBasicsUnit(value)) {
        return value
      } else {
        this.error("您输入的类型不正确'" + value + "'", cssName)
      }
    } else if (typeof value === 'number') {
      return value.toString() + unit
    } else {
      this.error('传入了未知类型，这不该出现的，假如你操作正确的话', cssName)
    }
  }

  error(msg: string, cssName: string): void {
    throw new SizeParsersError(
      '',
      cssName,
      this.wtsc.groupName,
      this.wtsc.groupId
    )
  }

  ['width'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'width')
  }

  ['max-width'](value: string | number, unit: U): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'max-width')
  }

  ['min-width'](value: string | number, unit: U): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'min-width')
  }

  ['height'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'height')
  }

  ['max-height'](value: string | number, unit?: U): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'max-height')
  }

  ['min-height'](value: string | number, unit?: U): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'min-height')
  }

  ['margin'](...rest: Array<ValueType | U>): ParsersReturnType {
    const cssName = 'margin'
    try {
      return fourValueDetcetor(rest)
    } catch (e: any) {
      this.error(e.message, cssName)
    }
  }

  ['margin-top'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'margin-top')
  }

  ['margin-right'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'margin-right')
  }

  ['margin-bottom'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'margin-bottom')
  }

  ['margin-left'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'margin-left')
  }

  ['padding'](...rest: Array<string | number>): ParsersReturnType {
    const cssName = 'padding'
    try {
      return fourValueDetcetor(rest)
    } catch (e: any) {
      this.error(e.message, cssName)
    }
  }

  ['padding-top'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'padding-top')
  }

  ['padding-right'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'padding-right')
  }

  ['padding-bottom'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'padding-bottom')
  }

  ['padding-left'](value: ValueType, unit: U = U.PX): ParsersReturnType {
    return this.filterUnitByBasicsUnit(value, unit, 'padding-left')
  }
}

class SizeParsersError extends ParsersError {
  constructor(
    msg?: string,
    cssName?: string,
    groupName?: string,
    groupId?: number,
    error?: Error
  ) {
    super(msg, cssName, 'SizeParsers', groupName, groupId)
  }
}
