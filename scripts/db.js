

const myDishes =
[
    {
        name: "Veggie mushroom black burger",
        describtion: "Mixed green salad, Tomatoes, Edamame, <br class='responsive-br'> Mushrooms",
        price: 16.90,
        id: 1,
        amount: 1
    },
    {
        name: "All meat burger",
        describtion:
            "Beef, Bacon, Dill pickles, Smoked cheese,<br class='responsive-br'> Ketchup, BBQ souse",
        price: 16.90,
        id: 2,
        amount: 1
    },
    {
        name: "Beef red burger",
        describtion: "Beef, Cheese, Tomatoes, Lettuce, <br class='responsive-br'> Onion",
        price: 14.90,
        id: 3,
        amount: 1

    },
    {
        name: "Big chicken burger",
        describtion: "Chicken, Cheese, Tomatoes, Lettuce, Onion,<br class='responsive-br'> Bell pepper",
        price: 15.90,
        id: 4,
        amount: 1

    },
];

console.log(myDishes);


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
    cardItems:[],

    // calculation:{}
    subtotal: 0,
    delivery_fee: 4.99,
    total: 0
}

console.log("Hier cardItems Inhalt: " + warenkorb.cardItems);

// console.log("sub wert " + warenkorb.subtotal)
 