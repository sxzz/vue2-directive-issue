<template>
  <div v-color="'red'">
    <div>hello</div>
  </div>
</template>

<script setup lang="ts">
import { vColor } from './directives/color'
// Error in directive color bind hook: "TypeError: Bind must be called on a function"
</script>

<!--
It works!
<script lang="ts">
import { vColor } from './directives/color'
export default {
  directives: {
    color: vColor,
  },
}
</script>
-->
