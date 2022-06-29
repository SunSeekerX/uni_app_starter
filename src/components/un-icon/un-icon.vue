<template>
  <iconpark-icon :size="size" :icon-id="name" />
</template>

<script>
import './icons-svg'
export default {
  name: 'UnIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: '36',
    },
  },
}
</script>
