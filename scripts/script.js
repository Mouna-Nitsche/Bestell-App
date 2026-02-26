// function categorie() {
//     //This Div displays all comments
//     const menu_card_Ref = document.getElementById("menu_card");
//     menu_card_Ref.innerHTML 
// }

// global variable
// let dishName = myDishes.Dishesindex.name;
// let dishDescribtion = myDishes.Dishesindex.describtion;
// let dishPrice = myDishes.Dishesindex.price;
// let dishIndex = myDishes.Dishesindex;


// lädt und generiert die einzelnen Menu Karten
function iterateDishes() {
    const wrapper_content_Ref = document.getElementById("menu_card_wrapper");

        for (let Dishesindex = 0; Dishesindex < myDishes.length; Dishesindex++) {
        wrapper_content_Ref.innerHTML += foodCard(Dishesindex);
    }
    // displayBasket(Dishesindex)

}


//basketDishes
function generateFoodCard(Dishesindex) {
    
}

//template von dem Sektionsbalken und der Warenkorb wird rein geschrieben und angezeigt
function displayBasket() {
    let categorie_wrapperRef = document.getElementById("categorie_wrapper");
    // calculation()
    categorie_wrapperRef.innerHTML += basketCard()
    //Basekt wird geladen
}


//Schreibt den Names des Gerichts aus dem Array, in ein P Tag für menu details.
//Fügt den Namen in das Array Warenkorb cardItems hinzu
function addToBasket(Dishesindex) {
    let menu_basketRef = document.getElementById("menu_basket")

    menu_basketRef.innerHTML = "1 x " + myDishes[Dishesindex].name;

    //push x´Dish Name into the basketDishes array
    warenkorb.cardItmes.push(myDishes[Dishesindex].name)
    checkBasket()
}


//Überprüfen ob Warenkorb nicht leer ist, als Bedingung um die Berechnung der Items auszuführen.
function checkBasket() {
    if (warenkorb.cardItmes.length > 0){
        //show the cardItems
        calculation()
    }
}

console.log("WK cardItme value " + warenkorb.cardItmes.length);


//calc the warenkorb.total
function calculation() {
    let calcResult = warenkorb.subtotal + warenkorb.delivery_fee
    // warenkorb.total.push(calcResult)
    warenkorb = {total : calcResult}
    console.log("Warenkorb Total " + warenkorb.total);


    // push.warenkorb.total(result.value);
}


