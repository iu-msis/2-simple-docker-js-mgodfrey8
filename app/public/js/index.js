var app = new Vue({
    el: '#cardPaneLeft',
    data: {
        message: 'Hello Vue!',
        oneSt: {
          "patientGuid": "SOME-REALLY-LONG-1234",
          "firstName": "Sylvia",
          "lastName": "Hernandez",
          "dob": "2012-09-01",
          "sexAtBirth": "F",
          "priority": "critical"
        },
    stList: [],
    },
    created() {
        fetch("https://randomuser.me/api/?inc=picture,phone,name,nat,dob,email")
        .then( response => response.json() )
        .then( json => {this.stList = json;
    
          console.log(json)}
        );
    }
})