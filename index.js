const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function(){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const appendTheCats = [...cats, "Broom"];
    return appendTheCats;
}

function prependCat(){
    const prependTheCats = ["Arnold", ...cats];
    return prependTheCats;
}

function removeLastCat(){
    // const lastCatRemoved = cats.slice(0, -1);
    // return lastCatRemoved;
    return cats.slice(0,-1);
}

function removeFirstCat(){
    // const firstCatRemoved = cats.slice(1);
    // return firstCatRemoved;
    return cats.slice(1);
}