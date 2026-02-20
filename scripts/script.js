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

function checkBasket () {
    if (warenkorb.cardItmes.value > cardItmes.length){

    }
}

//calc the warenkorb.total
function calculation() {
    let result = warenkorb.subtotal + warenkorb.delivery_fee
    warenkorb.total = result
}


function displayBasket() {
    let categorie_wrapperRef = document.getElementById("categorie_wrapper");
    categorie_wrapperRef.innerHTML += basketCard()
}


function addToBasket(Dishesindex) {
    let menu_basketRef = document.getElementById("menu_basket")

    menu_basketRef.innerHTML = "1 x " + myDishes[Dishesindex].name;

    //push x into the basketDishes array

}

console.log(myDishes);
