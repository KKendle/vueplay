let GithubUserProfile = {
  template: '#github-user-profile-template',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    axios.get(`https://api.github.com/users/${this.username}`)
    .then(response => {
      console.log(response);
      this.user = response.data
    })
    .catch(error => {
      console.log(error);
    })
  }
}

new Vue({
  el: '#app',
  components: {
    'github-user-profile': GithubUserProfile
  }
})
