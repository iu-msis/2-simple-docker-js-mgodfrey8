var app = new Vue({
    el: '#comments',
    data: {
        comments: [{
          id:'',
          commentText:''
        }],
        //uList:[],
        //newCommentForm: {},
        //newUserForm: {}
      },

    // created() {
        
    //     fetch("api/comments/")
    //     .then( response => response.json() )
    //     .then( json => {
    //       this.uList = json;

    //       console.log(json)}
    //     );

    //     this.newCommentForm = this.newCommentData();
    //     //this.newUserForm = this.newCommentData();
    //   },
    methods: {
      fetchComment(){
        fetch("api/comments/")
        .then(response => response.json())
        .then(json => {
          this.comments = json;
          console.log(this.comments)}
        );
      },
      // newUserData() {
      //   return {
      //     firstName: "",
      //     lastName: ""
      //   }
      // },
      // newCommentData() {
      //   return {
      //     commentText: "",
      //   }
      // },
      // handleNewCommentForm( evt ) {
      //   // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
  
      //   // TODO: Validate the data!
  
      //   fetch('api/comments/post.php', {
      //     method:'POST',
      //     body: JSON.stringify(this.newCommentForm),
      //     headers: {
      //       "Content-Type": "application/json; charset=utf-8"
      //     }
      //   })
      //   .then( response => response.json() )
      //   .then( json => {
      //     console.log("Returned from post:", json);
      //     // TODO: test a result was returned!
      //     this.ptList.push(json[0]);
      //     this.newPtForm = this.newCommentData();
      //   });
  
      //   console.log("Creating (POSTing)...!");
      //   console.log(this.newCommentForm);
      // },
    //   handleNewUserForm( evt ) {
    //     // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
  
    //     // TODO: Validate the data!
  
    //     fetch('api/randomUser/post.php', {
    //       method:'POST',
    //       body: JSON.stringify(this.newUserForm),
    //       headers: {
    //         "Content-Type": "application/json; charset=utf-8"
    //       }
    //     })
    //     .then( response => response.json() )
    //     .then( json => {
    //       console.log("Returned from post:", json);
    //       // TODO: test a result was returned!
    //       this.ptList.push(json[0]);
    //       this.newPtForm = this.newUserData();
    //     });
  
    //     console.log("Creating (POSTing)...!");
    //     console.log(this.newUserForm);
    //   }
     }
})
