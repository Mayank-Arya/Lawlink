const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  lawyerId: String,
  name: String,
  email: String,
  password: String,
  address: String,
  bio: String,
  skills: [String],
  profession: String,
  gender: String,
  phone: Number,
  image: String,
  price: String,
  languages: [String],
  rating: Number,
  experience: String,
  email: String,
  Rank: Number,
  messages: [
    {
      userEmail: String,
      chats: [
        {
          textMsg: String,
          sendBy: String,
        },
      ],
    },
  ],
});

const Vakeel = mongoose.model("lawyer", schema);

module.exports = { Vakeel };



  





// [
//   {
//     lawyerId: "2",
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     password: "pass123",
//     address: "456 Elm Street",
//     bio: "Dedicated lawyer specializing in family law and divorce cases.",
//     skills: ["Family Law", "Divorce", "Mediation"],
//     profession: "Attorney",
//     gender: "Female",
//     phone: 9876543210,
//     image: "profile_image.jpg",
//     price: "$180/hour",
//     languages: ["English", "French"],
//     rating: 4.9,
//     experience: "15+ years",
//     Rank: 2,
//     messages: [
//       {
//         userEmail: "user@example.com",
//         chats: [
//           {
//             textMsg: "Hello, I need legal assistance for a divorce case.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "Of course, I can help you with that. Can you provide some details about your situation?",
//             sendBy: "lawyer",
//           },
//           {
//             textMsg: "Sure, my spouse and I are looking to separate amicably but need help with asset division.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "Understood. Let's schedule a consultation to discuss your case in depth. When works for you?",
//             sendBy: "lawyer",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     lawyerId: "1",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password123",
//     address: "123 Main Street",
//     bio: "Experienced lawyer with expertise in various legal areas.",
//     skills: ["Litigation", "Contracts", "Intellectual Property"],
//     profession: "Attorney",
//     gender: "Male",
//     phone: 1234567890,
//     image: "profile_image.jpg",
//     price: "$200/hour",
//     languages: ["English", "Spanish"],
//     rating: 4.7,
//     experience: "10+ years",
//     Rank: 1,
//     messages: [
//       {
//         userEmail: "user@example.com",
//         chats: [
//           {
//             textMsg: "Hello, I need legal advice regarding a contract issue.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "Sure, I can assist you with that. Could you provide more details?",
//             sendBy: "lawyer",
//           },
//           {
//             textMsg: "Certainly! It's a contract related to a software development project.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "Understood. Let's discuss your concerns in detail. When are you available for a consultation?",
//             sendBy: "lawyer",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     lawyerId: "3",
//     name: "Michael Johnson",
//     email: "michael.johnson@example.com",
//     password: "securepass",
//     address: "789 Oak Avenue",
//     bio: "Experienced criminal defense attorney with a proven track record of successful cases.",
//     skills: ["Criminal Law", "Defense", "Trials"],
//     profession: "Attorney",
//     gender: "Male",
//     phone: 5551234567,
//     image: "profile_image.jpg",
//     price: "$250/hour",
//     languages: ["English", "Spanish"],
//     rating: 4.5,
//     experience: "20+ years",
//     Rank: 3,
//     messages: [
//       {
//         userEmail: "user@example.com",
//         chats: [
//           {
//             textMsg: "Hi, I'm facing criminal charges and need legal representation.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "I can assist you with that. Please provide more details about your case and the charges against you.",
//             sendBy: "lawyer",
//           },
//           {
//             textMsg: "Certainly! I've been charged with fraud, and I'm seeking advice on building a strong defense.",
//             sendBy: "user",
//           },
//           {
//             textMsg: "Understood. Let's schedule a meeting to discuss your case in detail and start working on your defense strategy.",
//             sendBy: "lawyer",
//           },
//         ],
//       },
//     ],
//   },
// ]
