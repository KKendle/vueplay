let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'The Hacker',
            required: true
        },
        price: Number,
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
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
            plans: ['The Hacker', 'The Single', 'The Addict'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPicker
    }
})
