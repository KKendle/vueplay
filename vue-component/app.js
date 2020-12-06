Vue.component('plan-component', {
    template: '#plan-template',
    props: ['name']
})

new Vue({
    el: '#app',
    data: {
        plans: ['The Hacker', 'The Single', 'The Addict']
    }
})
