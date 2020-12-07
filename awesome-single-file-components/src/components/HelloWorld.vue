<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <big-yellow-username username="kkendle"></big-yellow-username>
  </div>
</template>

<script>
export default {
  components: {
    BigYellowUsername: () => import(/* webpackChunkname: "BigYellowUsername" */'./BigYellowUsername.vue')
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
