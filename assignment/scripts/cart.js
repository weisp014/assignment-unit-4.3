console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem (item) {   //function adds items to an array
    if (!isFull()){
    basket.push(item);
    console.log("adding item:", item);
    console.log("updated cart", basket);    //output entire basket contents
    return true;
    }
    else {
        console.log("No room in cart to add item:", item); //cart is full
        return false;
    }
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



function isFull (){     //function to check if basket is full
    if(basket.length < maxItems){
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
console.log(basket);

addItem("cookies");

function removeItem (item){
    let index = basket.indexOf(item);   //find first matching item
    if (index === -1){  //didn't find a match
        console.log("No match found in basket for:", item);
        return null;
    }
    else {
        basket.splice(index, 1);    //remove 1 item at first found match index
        console.log(`Removed ${item} from basket`);
        return item;
    }
}

removeItem("strawberries");
removeItem("chicken");