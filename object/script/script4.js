function User(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  };
  
  
  
  
  function check() {
      let name = document.getElementById("name");
      let address = document.getElementById("address");
      let gender = document.getElementsByName("gender");
      for (let i = 0; i < gender.length; i++) {
          if(gender[i].checked === true) {
              gender = gender[i];
              break;
          }
      }
      let education = document.getElementById("education");
      let profession = document.getElementById("profession");
      let usman = new User(name.value, gender.value, address.value, education.value, profession.value);
      console.log(usman)
      name.value = "";
      address.value = "";
    };

