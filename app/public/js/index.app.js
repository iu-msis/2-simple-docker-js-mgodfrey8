var app = new Vue({
    el: '#students',
    data: {
        Photo:'',
        Name:'',
        Country:'',
        Birthday:'',
        Age:'',
        Email:'',
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
          this.Birthday = userData.dob;
          this.Age = userData.dob.age;
          this.Email = userData.email;
        }
        );
      },
    }
})