let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'The Hacker',
            required: true
        },
        price: Number
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
            this.selected = true
        }
    }
}

let PlanPicker = {
    template: '#plan-picker-template',
    components: {
        'plan-component': PlanComponent
    },
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Addict']
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPicker
    }
})
