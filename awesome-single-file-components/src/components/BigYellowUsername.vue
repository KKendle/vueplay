<template>
  <p class="username">{{username}}</p>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
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
