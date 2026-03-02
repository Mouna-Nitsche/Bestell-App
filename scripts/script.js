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
function addToBasket(Dishesindex) {
    console.log("addToBasekt Conso Log!");

    amountOf(Dishesindex)
    renderBasketCardItem()
}

function renderBasketCardItem() {
        let menu_basketRef = document.getElementById("menu_basket")
    
        //Mit der Zeile werden Werte nicht mehr Doppelt geladen ?
        menu_basketRef.innerHTML = "";

        for (let i = 0; i < warenkorb.cardItems.length; i++) {
        let item = warenkorb.cardItems[i];
        console.log(warenkorb.cardItems[i]);
        
        menu_basketRef.innerHTML += generateSingleCardItem(item);
    }
}


//Überprüfen ob Warenkorb nicht leer ist, als Bedingung um die Berechnung der Items auszuführen.

console.log("WK cardItme value " + warenkorb.cardItems.length);


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


//calc the warenkorb.total
function calculation() {
    let calcResult = warenkorb.subtotal + warenkorb.delivery_fee
    // warenkorb.total.push(calcResult)
    warenkorb = {total : calcResult}
    console.log("Warenkorb Total " + warenkorb.total);

    // push.warenkorb.total(result.value);
}
