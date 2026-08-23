const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
  .then(console.log("Connection build sucessfully."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let allchat = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hey Bob, are we still on for lunch?",
  },
  {
    from: "Charlie",
    to: "Diana",
    message: "Can you send over the latest report?",
  },
  {
    from: "Eve",
    to: "Frank",
    message: "Happy birthday! Have a great day.",
  },
  {
    from: "Grace",
    to: "Henry",
    message: "Where are you?",
  },
  {
    from: "Ivy",
    to: "Jack",
    message: "I'll be 5 minutes late.",
  },
  {
    from: "Karen",
    to: "Alice",
    message: "Did you see the game last night?",
  },
  {
    from: "Bob",
    to: "Charlie",
    message: "Call me when you get this.",
  },
  {
    from: "Diana",
    to: "Eve",
    message: "Let's reschedule our meeting.",
  },
  {
    from: "Frank",
    to: "Grace",
    message: "Check out this cool link I found.",
  },
  {
    from: "Henry",
    to: "Ivy",
    message: "Thanks for your help earlier.",
  },
  {
    from: "Jack",
    to: "Karen",
    message: "Sounds like a plan!",
  },
];


chat.insertMany(allchat);