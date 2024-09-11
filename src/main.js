const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// function getFortune(question) {
//   tell(question)
//     .then((response) => {
//       console.log(`Your question was: ${question}`);
//       console.log(`Your fortune is: ${response}`);
//     })
//     .catch((err) => {
//       console.log(`There was an error: ${err}`);
//     });
// }

async function getFortune(question) {
  try {
    const response = await tell(question);
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${response}`);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

// function fullSession(question) {
//   welcome()
//     .then(console.log)
//     .then(() => getFortune(question))
//     .then(() => goodbye())
//     .then(console.log)
//     .catch((err) => {
//       console.log(`There was an error: ${err}`);
//     });
// }

async function fullSession(question) {
  try {
    const welcomeMessage = await welcome();
    console.log(welcomeMessage);
    await getFortune(question);
    const goodbyeMessage = await goodbye();
    console.log(goodbyeMessage);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

// const question = "What this do?";
// fullSession(question);

module.exports = { getFortune, fullSession };
