var user = {
    name: "mr smith",
    profession: "dandy fella",
    age: 100000,

    // reset menthod (you can rest to "undefined" or to anything else; bellow is example with the reset to "-")
    reset: function () {
        this.name = '-'; //"this" means is refering to the above object
        this.profession = '-';
        this.age = '-';
    }

}


//run the reset function
user.reset();



//alert(user.name); // will show "-"
//alert(user.profession); // will show "-"
//alert(user.age); // will show "-"
alert(user.banana); // will show "undefined"
