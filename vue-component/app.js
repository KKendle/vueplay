Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Addict']
        }
    }
})

Vue.component('plan-component', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'The Hacker',
            required: true
        },
        price: Number
    }
})

new Vue({
    el: '#app'
})
