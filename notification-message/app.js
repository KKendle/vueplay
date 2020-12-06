let NotificationMessageTemplate = {
  template: '#notification-message-template',
  props: {
    type: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'notification-message': NotificationMessageTemplate
  }
})
