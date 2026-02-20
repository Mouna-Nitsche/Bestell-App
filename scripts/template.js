function foodCard(Dishesindex) {
    //if there is 1 or more coment
    return `
            <div id="menu_card-${Dishesindex}" class="menu_card_styling">
                <div class="menu_card_positions">
                    <img
                        src="/assets/img/veggie_mushroom_black_burger.jpg"
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
                            <div>
                                <p id="menu_basket"></p>
                                <p>
                                    <img src="/assets/icons/bin.png" alt="This is an Icon for an Trash Bin" class="trash_icon">
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>${warenkorb.subtotal}</p>
                            <p>${warenkorb.delivery_fee}</p>
                            <p>${warenkorb.total}</p>
                        </div>
                    </section>
                </div>
            `;
}

                                // <p>${myDishes[Dishesindex].price}€</p>
