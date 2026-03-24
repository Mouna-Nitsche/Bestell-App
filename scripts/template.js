function foodCard(Dishesindex) {
    // Displayed food Card with price, description and Add button
    return `
            <div id="menu_card-${Dishesindex}" class="menu_card_styling">
                <div class="menu_card_positions">
                    <img
                        src="./assets/img/veggie_mushroom_black_burger.jpg"
                        alt="A picture of the veggie mushroom black burger"
                        class="veggie_mushroom_black_burger_img"
                    />
                    <div class="menu_details">
                        <div id="meal_headline_n_description" class="meal_headline_n_description">
                            <p class="meal_headline">
                                ${myDishes[Dishesindex].name}
                            </p>
                            <p class="meal_description">
                                ${myDishes[Dishesindex].describtion}
                            </p>
                        </div>
                        <div class="price_state_add">
                            <p class="meal_headline">${myDishes[Dishesindex].price.toFixed(2)}€</p>
                            <button id="adding_basket" class="added-amount-plus-btn pointer" onclick="addToBasket(${Dishesindex})">Add to basket +</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
}

function basketCard() {
    // Category and basket Calculation
    return  `
                <div class="categorie_nr_1">
                    <div>
                        <img
                            src="assets/img/burger.svg"
                            alt="a picture of a simple painted burger"
                            class="catetorie_picture_size"
                        />
                    </div>
                    <div class="slogan_headline">
                        <h2>Burger <span class="responsive-style">& Sandwiches</span></h2>
                    </div>
                    <section id="basket_wrapper" class="basket_wrapper">
                        <h2 class="basket_heading">Your Basket</h2>
                        <div class="basket_details">
                            <div id="menus_basket_card" class="menus_basket_card">

                            </div>
                            <div id="basket_card_calc" class="basket_card_calc">
                                
                            </div>
                        </div>
                    </section>
                </div>
            `;
}

function generateSingleCardItem(item, i) {
    // dishes in the basket called CardItems
    return `
                <div class="single_CardItem">
                    <div class="basket_card_left"> 
                        <span>${item.amount}x ${item.name}</span>
                    </div>
                    <div class="basket_card_right">                
                        <img src="./assets/icons/bin.png" class="trash_icon pointer" onclick="removeFromBasket(${i})"> 
                        <span class="card_price">${item.price.toFixed(2)} €</span>
                    </div>
                </div>
            `;
}


function basketCalculation() {
    // Calculation all CardItem and buy button
    return `
                    <div class="basket_calc_positioning">
                        <div>
                            <p>Subtoal </p>
                            <p>Delivery fee </p>
                            <p class="divider">Total </p>
                        </div>
                        <div>
                            <p id="subtotal">0.00 €</p>
                            <p id="delivery_fee">${warenkorb.delivery_fee} €</p>
                            <p id="total_price" class="divider">0.00 €</p>
                        </div>
                    </div>
                    <button id="buy_btn" class="buy_button added-amount-plus-btn pointer" onclick="openOrderDialog()">Buy now (${warenkorb.total.toFixed(2)} €)</button>

            `;
}
