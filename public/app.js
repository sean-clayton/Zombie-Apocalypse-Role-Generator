
/*
Written by Sean Clayton
http://skulbuny.com
http://github.com/skulbuny
@_seanclayton
 */
var Challenge, buttonElement, challenges, descriptionElement, personalityElement, randomElement;

personalityElement = $('h3[data-type="personality"]');

descriptionElement = $('p[data-type="description"]');

buttonElement = $('a[data-type="generator-button"]');

Challenge = function(personality, description) {
  this.personality = personality;
  this.description = description;
  challenges.push(this);
};

challenges = [];

new Challenge("Hero", "You must take a town under your protection and keep it civil. You're the new sheriff in town.");

new Challenge("Hero", "You must find a group of hero players, and survive with them.");

new Challenge("Hero", "You are Batman. Find all the bad guys and take care of them.");

new Challenge("Hero", "You must find, stalk, and kill psychopaths. Hurt nobody else. If threatened, run away.");

new Challenge("Hero", "You are a medic! Do your best to help wounded players, in your group or outside it. Use no weapons.");

new Challenge("Good Guy", "You must spend your time finding food and giving it away.");

new Challenge("Good Guy", "You must do your best to light up a town at night time.");

new Challenge("Good Guy", "You must spend your time collecting and making newspawn start kits. Then hand them out at the beach.");

new Challenge("Good Guy", "You must find a newspawn, and help him find weapons, food, and drinks.");

new Challenge("Good Guy", "You must collect and give away backpacks to newspawns at the coast.");

new Challenge("Good Guy", "You are Robin. Go find Batman.");

new Challenge("Bad Guy", "You must find a group and befriend them. When you get the chance, you knock one of them out and steal their shit.");

new Challenge("Bad Guy", "You must find weapons, then proceed to give them away to the least trust worthy people you can find.");

new Challenge("Bad Guy", "You must start an underground fight club in a populated zone. Hire protection if needed.");

new Challenge("Bad Guy", "You must spend your time finding food and then dispose of it so nobody will find it.");

new Challenge("Bad Guy", "You must find and kill anyone using their mic to play music. If successful, you play music!");

new Challenge("Bad Guy", "You must find a sniper. Then hide near the coast, and scare newspawns by taking pot shots at them. Don't hit them. Just watch and enjoy the panic.");

new Challenge("Survivor", "You must survive as long as absolutely possible. By all means, good or bad.");

new Challenge("Survivor", "You must select a town and make it a trading post. You may need a sheriff or other forms of protection from bandits.");

new Challenge("Survivor", "You must find a group and survive with them. Bandit or hero groups.");

new Challenge("Survivor", "You must survive as long as absolutely possible, without any weapon, except for your trusty axe.");

new Challenge("Survivor", "You must survive for as long as possible. No backpack allowed.");

new Challenge("Survivor", "You must survive by being a bandit and taking stuff from people. You can only get people's things from their dead bodies.");

new Challenge("Crazy Person", "You are a vegan. Use no animal products, and tell everyone on your path about it.");

new Challenge("Crazy Person", "You must survive from trading books for food and water.");

new Challenge("Crazy Person", "You must find a bible and then walk around and spread the word of God. And you must live off of donations of food and water.");

new Challenge("Crazy Person", "You must survive only on Pipsis.");

new Challenge("Crazy Person", "You must find the ugliest clothes you possibly can, and then survive from dancing in the street for food, while blasting music in mic.");

new Challenge("Crazy Person", "You must survive only eating rotten things.");

new Challenge("Psychopath", "You are an axe murderer. You must slaughter as many people as possible with your axe.");

new Challenge("Psychopath", "You must befriend a stranger, and then kill him as he's doing something good for you or another person.");

new Challenge("Psychopath", "You are a bandit. Find sniper, find populated area, and then start sniping newspawns.");

new Challenge("Psychopath", "You must find a pistol, revolver, or sawn-off. Hide it on you. When people you meet do the friendly dance, shoot them when they turn their back on you.");

new Challenge("Psychopath", "You must kill as many people as absolutely possible, but only by shooting them in the back.");

new Challenge("Psychopath", "You must kill everyone you find, but only using a shotgun. You're the shotgun murderer.");

randomElement = Math.floor(Math.random() * challenges.length);

$(document).ready(function() {
  personalityElement.text(challenges[randomElement].personality);
  descriptionElement.text(challenges[randomElement].description);
});

buttonElement.click(function() {
  randomElement = Math.floor(Math.random() * challenges.length);
  personalityElement.text(challenges[randomElement].personality);
  descriptionElement.text(challenges[randomElement].description);
});

window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
