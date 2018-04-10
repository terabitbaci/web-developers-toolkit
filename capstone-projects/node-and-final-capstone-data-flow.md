# Node capstone data flow based on the file structure

* in the html document we have the button
* in the client/js we have the triggers for the button $("button-name").on("click", function(){  do stuff })
* in the client/js inside the triggers we have ajax api call $.ajax()
* in the server.js we have the api endpoint app.get("/some-url"), req, res ....
* in the server.js in the api endpoint we have the Mongo code to connect to the Mongoose schema User.create()
* Mongoose schema, inside the models folder --> user.js and there we have the schema
