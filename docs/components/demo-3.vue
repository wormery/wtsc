<template >
  <div
    :class="wtsc
    .add.height(px(61))
    .add.width(px(100))
    .add.background(color)
    .class('twolive')
    .add.background(createHoverColor(color))
    .pseudo(':hover')
    .add.background(createPressedColor(color))
    .pseudo(':active')
    .out()"
  ></div>
</template>
<script lang="ts" setup>

import { defWTSC, rgb, px, mixColor } from '@wormery/wtsc'
import { RGBColor } from '../../src/CSSValue/color/RGBColor';
import { RGBAColor } from '../../src/CSSValue/color/RGBAColor';
const wtsc = defWTSC({})

const color = rgb(255, 0, 0)

function createHoverColor(
  color: RGBColor,
  overlayAlpha: number = 0.50
): RGBColor {
  return mixColor(color, rgb(255, 255, 255, overlayAlpha));
}

function createPressedColor(
  color: RGBColor,
  overlayAlpha: number = 0.15
): RGBAColor {
  return mixColor(color, rgb(0, 0, 0, overlayAlpha))
}

</script>
<style >
</style>