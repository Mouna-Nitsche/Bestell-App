// lädt und generiert die einzelnen Menu Karten
function iterateDishes() {
    const wrapper_content_Ref = document.getElementById("menu_card_wrapper");

        for (let Dishesindex = 0; Dishesindex < myDishes.length; Dishesindex++) {
        wrapper_content_Ref.innerHTML += foodCard(Dishesindex);
    }
}

//template von dem Sektionsbalken und der Warenkorb wird rein geschrieben und angezeigt
function displayBasket() {
    let categorie_wrapperRef = document.getElementById("categorie_wrapper");
    categorie_wrapperRef.innerHTML += basketCard()
}


//Schreibt den Name des Gerichts aus dem Array, in ein P Tag für menu details.
//Fügt den Namen in das Array Warenkorb cardItems hinzu
function addToBasket(Dishesindex, item) {
    console.log("addToBasekt Conso Log!");

    amountOf(Dishesindex)
    renderBasketCardItem()
}

function amountOf(Dishesindex) {
    //Filterfunktion nutzen für den Namen vom Gericht
    //Amount erhöhen
    //arrow function funktioniert wie eine for loop sucht den Namen
    //push x Dish Name into the basketDishes array

    let foundMenu = warenkorb.cardItems.find(cardItme => cardItme.name === `${myDishes[Dishesindex].name}`)

    if (foundMenu) {
        foundMenu.amount ++;
    } else {
    let choosenMenu = {
        name: myDishes[Dishesindex].name,
        price: myDishes[Dishesindex].price,
        amount: myDishes[Dishesindex].amount
    };
    warenkorb.cardItems.push(choosenMenu)
    console.log("Gewählten Menus in CardItmes:" + warenkorb.cardItems);
    }
}

function renderBasketCardItem() {
        let menu_basketRef = document.getElementById("menu_basket")
        //Mit der Zeile werden Werte nicht mehr Doppelt geladen ?
        menu_basketRef.innerHTML = "";

        //Überprüfen ob Warenkorb nicht leer ist, als Bedingung um die Berechnung der Items auszuführen.

        let subtotal_sum = 0;

        for (let i = 0; i < warenkorb.cardItems.length; i++) {
        let item = warenkorb.cardItems[i];
        console.log(warenkorb.cardItems[i]);
        menu_basketRef.innerHTML += generateSingleCardItem(item);

        let subtotal_item_calc = item.amount * item.price;
        
        //jede subtotal vom Gericht darauf rechnen
        subtotal_sum += subtotal_item_calc;

        console.log(warenkorb.subtotal);
        
    }
    let final_total = subtotal_sum + warenkorb.delivery_fee
    warenkorb.total = final_total;
// }

// function updateBasketTotals(subtotal_sum, final_total) {
    document.getElementById("subtotal").innerHTML = subtotal_sum.toFixed(2) + " €";
    document.getElementById("total_price").innerHTML = final_total.toFixed(2) + " €";
    document.getElementById("buy_btn").innerHTML = "Buy now " + "(" + final_total.toFixed(2) + ")" + " €";
}

console.log("WK cardItme value " + warenkorb.cardItems.length);


function openOrderDialog() {
    const dialogRef = document.getElementById("myDialog");
    dialogRef.showModal();
}

function closeOrderDialog() {
    const dialogRef = document.getElementById("myDialog");
    dialogRef.close();
}