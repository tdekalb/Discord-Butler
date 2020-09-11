const Discord = require("discord.js");
const client = new Discord.Client();

const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

function randomAnswer(answers) {
  return answers[Math.floor(Math.random() * answers.length)];
}

client.once("ready", () => {
  console.log("Ready!");
});

client.login("API Token Goes Here");

client.on("message", (message) => {
  if (message.content === "!roll") {
    let roll = Math.floor(Math.random() * 6 + 1);
    let user = message.member.user.username;
    let res = "```fix\n" + user + " Rolled: " + roll + "\n```";
    message.channel.send(res);
  }

  if (message.content === "!rollBig") {
    let roll = Math.floor(Math.random() * 20 + 1);
    let user = message.member.user.username;
    let res = "```fix\n" + user + " Rolled: " + roll + "\n```";
    message.channel.send(res);
  }

  if (message.content === "!shake") {
    let roll = randomAnswer(answers);
    let user = message.member.user.username;
    let res = "```fix\n" + user + ": " + roll + "\n```";
    message.channel.send(res);
  }
});
