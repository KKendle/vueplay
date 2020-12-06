<template v-if="showUsername">
  <div v-if="showUsername">
    <p class="username">{{username}}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showUsername: false
    }
  }
}
</script>

<style scoped lang="scss">
  .username {
    color: #666610;
    font-size: 5rem;
  }
</style>
