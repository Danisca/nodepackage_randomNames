const names = [
    "Don Ramon",
    "Senor Barriga",
    "Chespirito",
    "Chilindrina",
    "Popis",
    "Paty",
    "Quico",
];

function getRandomName(){
    const randomElementIndex = Math.floor(Math.random() * names.length);
    console.log(names[randomElementIndex])
}

module.exports = {getRandomName}