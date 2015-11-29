var user = {
    name: "mr smith",
    profession: "dandy fella",
    age: 100000,
    //___________________________<---add reset() method here
    // restore initial values
      reset: function() {
          this.name = '-';
          this.profession = '-';
          this.age = '-';
      }

}


//___________________________________The result should look like this:

//user.reset();

//undefined variable
alert(user.banana); //________________________undefined


//alert(user.name); //________________________undefined
//alert(user.profession); //__________________undefined
//alert(user.age); //_________________________undefined