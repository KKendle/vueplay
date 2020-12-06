let GithubUserProfile = {
  template: '#github-user-profile-template',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  created() {
    axios.get('https://api.github.com/users/' + this.username)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
}

new Vue({
  el: '#app',
  components: {
    'github-user-profile': GithubUserProfile
  }
})
