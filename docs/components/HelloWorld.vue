<template >
  <div
    :style="wtsc
    .add.height(px(61))
    .add.width(px(100))
    .add.background(rgb(255, 0, 0))
    .out()"
  ></div>
</template>
<script lang="ts" setup>

import { defWTSC, rgb, px } from '@wormery/wtsc'
const wtsc = defWTSC({})

</script>
<style >
</style>