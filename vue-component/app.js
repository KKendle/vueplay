let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'The Hacker',
            required: true
        },
        price: Number
    }
}

Vue.component('plan-picker', {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Addict']
        }
    }
})

new Vue({
    el: '#app'
})
