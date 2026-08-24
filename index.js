const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const chat = require("./models/chat.js");
const methodoverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

//call the main function for connect database
main()
  .then(console.log("Connection build sucessfully."))
  .catch((err) => console.log(err));

//connecting database function
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

//chats url for the all chats
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("index.ejs", { chats });
});

//starting page
app.get("/", (req, res) => {
  res.send("Root is working!!");
  console.log("root working!!");
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create Route
app.post("/chats", (req, res) => {
  let { from, message, to } = req.body;
  let newchat = new chat({
    from: from,
    to: to,
    message: message,
  });

  newchat
    .save()
    .then((res) => {
      //if we use then it means it's working automatically.
      console.log("Chat Save sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//Edit Routes
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;

  let chats = await chat.findById(id);

  res.render("edit.ejs", { chats });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;

  let { from, message, to } = req.body;

  // console.log("id :", id);
  // console.log("Message",message);
  // console.log("To",to);

  let updatedchat = await chat.findByIdAndUpdate(
    id,
    {
      from: from,
      message: message,
      to: to,
    },
    { new: true },
  );

  // console.log("UpdatedChat :", updatedchat);

  res.redirect("/chats");
});


//destroy routes
app.delete("/chats/:id",async (req, res) =>{
  let {id} = req.params;

  let deletechat = await chat.findByIdAndDelete(id);

  console.log(deletechat);

  res.redirect("/chats");
})

app.listen(8000, () => {
  console.log("Server is listing on port 8000");
});
