console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {
    basket.push(item);
    console.log("adding item:", item);
    console.log("updated cart", basket);
    return true;
}

addItem("bananas");
addItem("coffee");