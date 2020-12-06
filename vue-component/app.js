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
    el: '#app',
    data: {
        plans: ['The Hacker', 'The Single', 'The Addict']
    }
})
