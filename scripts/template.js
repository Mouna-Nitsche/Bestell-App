function foodCard(Dishesindex) {
    //if there is 1 or more coment
    return `
            <div id="menu_card-${Dishesindex}" class="menu_card_styling">
                <div class="menu_card_positions">
                    <img
                        src="./assets/img/veggie_mushroom_black_burger.jpg"
                        alt="A picture of the veggie mushroom black burger"
                        class="veggie_mushroom_black_burger_img"
                    />
                    <div id="meal_headline_n_description">
                        <p class="meal_headline">
                            ${myDishes[Dishesindex].name}
                        </p>
                        <p class="meal_description">
                            ${myDishes[Dishesindex].describtion}
                        </p>
                    </div>
                    <div class="price_state_add">
                        <p class="price meal_headline">${myDishes[Dishesindex].price}€</p>
                        <button class="added-amount-plus-btn">Add to basket</button>
                        <button id="adding_basket" class="added-amount-plus-btn" onclick="addToBasket(${Dishesindex})">+</button>
                    </div>
                </div>
            </div>
            `;
}

function basketCard() {
    return  `
                <div class="categorie_nr_1">
                    <div>
                        <img
                            src="assets/img/burger.svg"
                            alt="a picture of a simple painted burger"
                            class="catetorie_picture_size"
                        />
                    </div>
                    <div class="basket_heading">
                        <h2>Burger & Sandwiches</h2>
                    </div>
                    <section id="basket_wrapper" class="basket_wrapper">
                        <h2 class="basket_heading">Dein Warenkorb</h2>
                        <div class="basket_details">
                            <div id="menu_basket">
                            </div>
                        </div>
                        <div class="basket_calculation">
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
                        <button id="buy_btn" class="buy_button added-amount-plus-btn" onclick="openOrderDialog()"></button>
                    </section>
                </div>
            `;
}


function generateSingleCardItem(item) {
    return `
            <div class="basket_details">
                <div class="single_CardItem"> 
                    <span>${item.amount}x ${item.name}</span>
                    <span>${item.price} €</span>
                    <img src="./assets/icons/bin.png" class="trash_icon">
                </div>
            </div>
            `;
}