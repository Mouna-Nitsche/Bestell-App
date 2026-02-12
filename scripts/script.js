// function categorie() {
//     //This Div displays all comments
//     const menu_card_Ref = document.getElementById("menu_card");
//     menu_card_Ref.innerHTML 
// }

function iterateDishes() {
    const wrapper_content_Ref = document.getElementById("menu_card_wrapper");

        for (let Dishesindex = 0; Dishesindex < myDishes.length; Dishesindex++) {
        wrapper_content_Ref.innerHTML += foodCard(Dishesindex);
    }
}


console.log(myDishes);
