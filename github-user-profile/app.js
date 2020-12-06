let GithubUserProfile = {
    template: '#github-user-profile-template'
}

new Vue({
    el: '#app',
    components: {
        'github-user-profile': GithubUserProfile
    }
})
