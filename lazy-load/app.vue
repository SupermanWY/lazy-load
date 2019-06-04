<template>
  <div>
    <div :class="'a' + key" v-lazy style="width:100px;height: 100px;"><span>{{key}}</span></div>
  </div>
</template>

<script>
import Vue from 'vue'
import LazyLoad from './src'
Vue.use(LazyLoad)

export default {
  data() {
    return {
      key: 1
    }
  },

  mounted() {
    setTimeout(() => this.key++, 500)
  },

  updated() {
    console.log('update')
  },

  destroyed() {
    console.log('des')
  }
}
</script>
