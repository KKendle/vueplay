let GithubUserProfile = {
    template: '#github-user-profile-template',
    props: {
        username: {
            type: String,
            required: true
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'github-user-profile': GithubUserProfile
    }
})
