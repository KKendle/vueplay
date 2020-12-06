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
  },
  data() {
    return {
      isClosed: false
    }
  },
  methods: {
    closeNotification: function() {
      this.isClosed = true
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'notification-message': NotificationMessageTemplate
  }
})
