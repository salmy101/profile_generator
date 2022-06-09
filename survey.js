

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
}); 

////////////
// Event Handling for User Input

////////////
rl.question('What\s an activity you love doing? Or what is your favourite past time? ', (answer1) => {
  console.log(`${answer1} sounds like so much fun!`);
  rl.question(`Opps! what was your name again? `, (answer2) => {
    console.log(`${answer2}! its so nice to meet you! 😅 Sorry ahaha im a bit of a forgetful computer...`);
    rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer3) => {
      console.log(`${answer3}, oh goodie! mee too ;)`)
      rl.question(`Whats your favourite thing to have at ${answer3}?`, (answer4) => {
        console.log(`${answer4}!YUh-Me 🤤 ! ugh sometimes i wish i knew what real food besides computer chips tasted like :(`); 
        rl.question(`Okay, one last question bestie! If you could have any superpower, what would it be?!`, (answer5) => {
          console.log(`Awesome Sauce! I think ive built you a spanking new profile, here it is! ${answer2} is a lover of all things cool. They enjoy ${answer1}, and if they could have any superpower it would be ${answer5}. Their fav meal of the day is ${answer3} where they like to enjoy and nice serving of ${answer4}.`);
          rl.close() //rl.close the interface or else it will start looping
        })
      })
    })
  });
}); 



