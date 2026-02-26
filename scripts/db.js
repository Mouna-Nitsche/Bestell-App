

const myDishes =
[
    {
        name: "Veggie mushroom black burger",
        describtion: "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        price: 16.9,
        id: 1
    },
    {
        name: "All meat burger",
        describtion:
            "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        price: 16.9,
        id: 2
    },
    {
        name: "Beef red burger",
        describtion: "Beef, Cheese, Tomatoes, Lettuce, Onion",
        price: 14.9,
        id: 3
    },
    {
        name: "Big chicken burger",
        describtion: "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        price: 15.9,
        id: 4
    },
];

let basketDishes = [
    {name:"x"}
];

        // {
 
        // }


//array for the basket to display added dishes

/* menu ist ein Objekt
{ : }
name
desc
price
id
*/

/* BerechnungsDaten
Das ist ein Array? []
besteht aus string und numbers
sub total number
delivery fee number
total number
*/

//In cardItmes sollen alle Gerichte stehen die mit dem Plus hinzugefügt wurden.

//Template-struktur für den Warenkorb?
let warenkorb = {
    cardItmes:[],

    // calculation:{}
    subtotal: 42,
    delivery_fee: 4.99,
    total: 0
}

console.log(warenkorb);

console.log("total wert " + warenkorb.total)
 