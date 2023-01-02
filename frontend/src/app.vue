<template>
  <router-view />
</template>

<script>
import { defineComponent, computed } from '@vue/runtime-core'
import Login from './pages/Login.vue'
import store from './store'

export default defineComponent({
  components: {
    Login
  },
  setup () {
    const state = computed(() => store.state)
    return {
      state
    }
  }
})
</script>