console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {   //function adds items to an array
    basket.push(item);
    console.log("adding item:", item);
    console.log("updated cart", basket);    //output entire basket contents
    return true;
}

addItem("bananas");
addItem("coffee");

function listItems (array) {
    console.log("list out entire basket array", basket);
    for (let item of array) {
        console.log(item);  //log each item individually in the array
    }
    return true;
}

listItems(basket);

function empty (array) {    //function clears all items from array
    array.length = 0;     //clear contents of the array
    return array;
}

empty(basket);
console.log("Basket should be empty now:",basket);

const maxItems = 5;

function isFull (){     //function to check if basket is full
    if(basket < maxItems){
        return false
    }
    else return true;
}

console.log("Check if basket is full (expect false)", isFull());
addItem("oatmeal");
addItem("grapes");
addItem("poptarts");
addItem("chicken");
addItem("broccoli");
console.log("Check if basket is full (expect true)", isFull());