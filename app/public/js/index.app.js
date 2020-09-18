var app = new Vue({
    el: '#students',
    data: {
        Photo:'',
        Name:'',
        Country:'',
        Birthday:'',
        Age:'',
        Email:'',
        Email2:'',
        Bday:'',
        stList: [],
      },

      created() {
        this.fetchUser();
      },
    methods: {
     fetchUser: function(){
        fetch("https://randomuser.me/api/?inc=picture,phone,name,nat,dob,email")
        .then( response => response.json() )
        .then( data => {
          var userData = data.results[0];
          console.log(userData);
          this.Photo = userData.picture.large;
          this.Name = userData.name.first + " " + userData.name.last;
          this.Country = userData.nat;
          this.Age = userData.dob.age;
          this.Email = 'mailto:' + userData.email;
          // line above from http://xion.io/post/code/js-mailto-urls.html
          this.Email2 = userData.email;
          this.Birthday = userData.dob.date;
        }
        );
      },
      formatDate(d) {return moment(d).format("MMM Do YY");
    }
    },
})