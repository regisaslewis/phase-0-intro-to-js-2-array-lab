// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat(name) {
    return cats.push(name);

};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    return cats.pop();
};

function destructivelyRemoveFirstCat() {
    return cats.shift();
};

function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
};

function prependCat(name) {
    const secondNewCatsArray = [name, ...cats];
    return secondNewCatsArray;
};

function removeLastCat() {
    const lastCat = cats.slice(0, -1);
    return lastCat;
};

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;
};