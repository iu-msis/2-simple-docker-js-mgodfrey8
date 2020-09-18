var app = new Vue({
    el: '#momentApp',
    data: {
        someDate: '1993-07-20T09:44:18.674Z'
      },

      created() {
        this.formatDate();
      },
    methods: {
      formatDate(d) {
        return moment(d).format("MMM Do YY");
      },
    }
})