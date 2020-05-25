<template>
  <div>
    <input type="text" v-model="test">
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['testVal'],
  data() {
    return {

    }
  },
  computed: {
    test: {
      get() {
        return this.testVal
      },
      set(val) {
        this.$emit('input1', val)
      }
    }
  }
}
</script>