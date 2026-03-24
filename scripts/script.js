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
    emptyBasketCard()
}


//Schreibt den Name des Gerichts aus dem Array, in ein P Tag für menu details.
//Fügt den Namen in das Array Warenkorb cardItems hinzu
function addToBasket(Dishesindex) {
    search_Generate_Dish(Dishesindex)
    renderBasketCardItem()
}

function search_Generate_Dish(Dishesindex) {
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
    }
}


function emptyBasketCard(){
            let menus_basket_cardRef = document.getElementById("menus_basket_card")
            // let basket_calculation_n_btnRef = document.getElementById("basket_calculation_n_btn")

            // basket_calculation_n_btnRef.innerHTML = "";

            if (warenkorb.subtotal === 0) {
            menus_basket_cardRef.innerHTML = ` <div class="empty_basket_message_n_img">
                                                    <div>
                                                        <p class="empty_basket_message"> Nothing here yet.<br>
                                                            Go ahead and choose something<br>
                                                            delicious!</p>
                                                    </div>
                                                    <div>
                                                        <img src="./assets/img/basket.png" alt="This is a Placeholder Picture of an Basket Symbol." class="empty_basket_img">
                                                    </div>
                                                </div>`;
            
                                                        
            return; //Funktion abbrechen
        }  
}

function renderBasketCardItem() {
    let menus_basket_cardRef = document.getElementById("menus_basket_card");
    let basket_card_calcRef = document.getElementById("basket_card_calc");

    //no duplicates
    menus_basket_cardRef.innerHTML = "";

    //Überprüfen Warenkorb nicht leer, Bedingung um die Berechnung der Items auszuführen

    let subtotal_sum = 0;

    for (let i = 0; i < warenkorb.cardItems.length; i++) {
        let item = warenkorb.cardItems[i];


        menus_basket_cardRef.innerHTML += generateSingleCardItem(item, i);

        let subtotal_item_calc = item.amount * item.price;
        subtotal_sum += subtotal_item_calc;        

    console.log(warenkorb.subtotal);
    console.log(warenkorb.cardItems[i]);

    }

    let final_total = subtotal_sum + warenkorb.delivery_fee
    warenkorb.total = final_total;

        // kürzen mit template?
    basket_card_calcRef.innerHTML = basketCalculation();
    document.getElementById("subtotal").innerHTML = subtotal_sum.toFixed(2) + " €";
    document.getElementById("total_price").innerHTML = final_total.toFixed(2) + " €";
}


function removeFromBasket(i) {
    let item = warenkorb.cardItems[i];

    if (item.amount > 1) {
        item.amount--; 
    } else {
        warenkorb.cardItems.splice(i, 1);
    }
    renderBasketCardItem();
}

function openOrderDialog() {
    let menus_basket_cardRef = document.getElementById("menus_basket_card")
    let basket_card_calcRef = document.getElementById("basket_card_calc");

    menus_basket_cardRef.innerHTML = "";
    basket_card_calcRef.innerHTML = "";

    emptyBasketCard()
    warenkorb.cardItems = [];

    const dialogRef = document.getElementById("myDialog");
    dialogRef.showModal();

    // displayBasket()
    // resetBasketTotals(subtotal, total_price, buy_btn)
}

function toggleBasket() {
    let basket = document.getElementById('basket_wrapper'); // ID deines Warenkorb-Divs
    basket.classList.toggle('d-none');
}


function resetBasketTotals(subtotal, total_price, buy_btn) {
    //resetting displayed values
    subtotal = 0;
    total_price = 0;
    buy_btn = 0;
    //resetting db values
    // warenkorb.subtotal && warenkorb.total == 0;
    //reset calculated values

    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2) + " €";
    document.getElementById("total_price").innerHTML = total_price.toFixed(2) + " €";
    document.getElementById("buy_btn").innerHTML = buy_btn.toFixed(2) + " €";
    
}


function closeOrderDialog() {
    const dialogRef = document.getElementById("myDialog");
    dialogRef.close();
}