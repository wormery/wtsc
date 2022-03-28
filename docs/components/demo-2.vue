<template >
  <div
    :class="wtsc
    .add.height(px(61))
    .add.width(px(100))
    .add.background(rgb(255, 0, 0))
    .class('class')
    .add.background(mixColor(rgb(255, 0, 0), rgb(255, 255, 255, 0.5)))
    .pseudo(':hover')
    .out()"
  ></div>
</template>
<script lang="ts" setup>

import { defWTSC, rgb, px, mixColor } from '@wormery/wtsc'
const wtsc = defWTSC({})

</script>
<style >
</style>