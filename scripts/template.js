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
                        <button class="added-amount-plus-btn">+</button>
                    </div>
                </div>
            </div>
            `;
}
