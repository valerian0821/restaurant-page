
const MenuContent = (function () {
    const content = document.getElementById("content");

    const generateMenuTitle = () => {
        const menuDiv = document.createElement("div");
        content.appendChild(menuDiv);

        const menu = document.createElement("h1");
        menu.textContent = "Menu";
        menuDiv.appendChild(menu);
    }
    
    const generateStarters = () => {
        const startersDiv = document.createElement("div");
        content.appendChild(startersDiv);

        const starters = document.createElement("h2");
        starters.textContent = "Starters";
        startersDiv.appendChild(starters);

        const startersItem1 = document.createElement("h3");
        startersItem1.textContent = "Garlic Inferno Knots - $5.99";
        const item1Info = document.createElement("p");
        item1Info.textContent = `Wood-fired garlic knots with parmesan and spicy marinara`;

        const startersItem2 = document.createElement("h3");
        startersItem2.textContent = "Blistered Burrata - $10.99";
        const item2Info = document.createElement("p");
        item2Info.textContent = `Fire-roasted cherry tomatoes, creamy burrata, fresh basil, and balsamic glaze`;

        const startersItem3 = document.createElement("h3");
        startersItem3.textContent = "Truffle Parmesan Fries - $8.99";
        const item3Info = document.createElement("p");
        item3Info.textContent = `Crispy hand-cut fries tossed in truffle oil and parmesan`;

        startersDiv.appendChild(startersItem1);
        startersDiv.appendChild(item1Info);
        startersDiv.appendChild(startersItem2);
        startersDiv.appendChild(item2Info);
        startersDiv.appendChild(startersItem3);
        startersDiv.appendChild(item3Info);
    }

    const generatePizzas = () => {
        const pizzaDiv = document.createElement("div");
        content.appendChild(pizzaDiv);

        const pizzas = document.createElement("h2");
        pizzas.textContent = "Pizzas";
        pizzaDiv.appendChild(pizzas);

        const pizza1 = document.createElement("h3");
        pizza1.textContent = "Smoky Pepperoni - $14.99";
        const pizza1Info = document.createElement("p");
        pizza1Info.textContent = `Double pepperoni, smoked mozzarella, and chili-infused honey`;

        const pizza2 = document.createElement("h3");
        pizza2.textContent = "Triple Cheese Melt - $14.99";
        const pizza2Info = document.createElement("p");
        pizza2Info.textContent = `Mozzarella, provolone, aged parmesan, and garlic butter`;

        const pizza3 = document.createElement("h3");
        pizza3.textContent = "The Hellfire - $16.99";
        const pizza3Info = document.createElement("p");
        pizza3Info.textContent = `Ghost pepper-infused tomato sauce, spicy sausage, jalapeños, and red pepper flakes`;

        const pizza4 = document.createElement("h3");
        pizza4.textContent = "Mushroom Madness - $16.49";
        const pizza4Info = document.createElement("p");
        pizza4Info.textContent = `Wild mushrooms, garlic cream sauce, ricotta, and truffle oil`;

        const pizza5 = document.createElement("h3");
        pizza5.textContent = "The Green Inferno - $14.99";
        const pizza5Info = document.createElement("p");
        pizza5Info.textContent = `Pesto base, fresh arugula, sun-dried tomatoes, goat cheese`;

        pizzaDiv.appendChild(pizza1);
        pizzaDiv.appendChild(pizza1Info);
        pizzaDiv.appendChild(pizza2);
        pizzaDiv.appendChild(pizza2Info);
        pizzaDiv.appendChild(pizza3);
        pizzaDiv.appendChild(pizza3Info);
        pizzaDiv.appendChild(pizza4);
        pizzaDiv.appendChild(pizza4Info);
        pizzaDiv.appendChild(pizza5);
        pizzaDiv.appendChild(pizza5Info);
    }

    const generateSides = () => {
        const sidesDiv = document.createElement("div");
        content.appendChild(sidesDiv);

        const sides = document.createElement("h2");
        sides.textContent = "Sides";
        sidesDiv.appendChild(sides);

        const sides1 = document.createElement("h3");
        sides1.textContent = "Ember Caesar - $9.99";
        const sides1Info = document.createElement("p");
        sides1Info.textContent = `Grilled romaine, parmesan crisp, house-made dressing`;

        const sides2 = document.createElement("h3");
        sides2.textContent = "Caprese Explosion - $10.49";
        const sides2Info = document.createElement("p");
        sides2Info.textContent = `Fire-roasted tomatoes, fresh basil, burrata, balsamic reduction`;

        const sides3 = document.createElement("h3");
        sides3.textContent = "Charred Veggie Platter - $9.49";
        const sides3Info = document.createElement("p");
        sides3Info.textContent = `Seasonal fire-grilled vegetables with lemon aioli`;

        sidesDiv.appendChild(sides1);
        sidesDiv.appendChild(sides1Info);
        sidesDiv.appendChild(sides2);
        sidesDiv.appendChild(sides2Info);
        sidesDiv.appendChild(sides3);
        sidesDiv.appendChild(sides3Info);
    }

    const generateDesserts = () => {
        const dessertsDiv = document.createElement("div");
        content.appendChild(dessertsDiv);

        const desserts = document.createElement("h2");
        desserts.textContent = "Sides";
        dessertsDiv.appendChild(desserts);

        const desserts1 = document.createElement("h3");
        desserts1.textContent = "S'mores Calzone - $9.99";
        const desserts1Info = document.createElement("p");
        desserts1Info.textContent = `Melted marshmallow, graham cracker crumble, and dark chocolate`;

        const desserts2 = document.createElement("h3");
        desserts2.textContent = "Cinnamon Sugar Knots - $7.49";
        const desserts2Info = document.createElement("p");
        desserts2Info.textContent = `Warm dough knots coated in cinnamon sugar and served with caramel dip`;

        dessertsDiv.appendChild(desserts1);
        dessertsDiv.appendChild(desserts1Info);
        dessertsDiv.appendChild(desserts2);
        dessertsDiv.appendChild(desserts2Info);
    }

    const generateDrinks = () => {
        const drinksDiv = document.createElement("div");
        content.appendChild(drinksDiv);

        const drinks = document.createElement("h2");
        drinks.textContent = "Sides";
        drinksDiv.appendChild(drinks);

        const drinks1 = document.createElement("h3");
        drinks1.textContent = "Flaming Pineapple Mule - $9.99";
        const drinks1Info = document.createElement("p");
        drinks1Info.textContent = `Spicy ginger beer, fresh pineapple, and lime vodka`;

        const drinks2 = document.createElement("h3");
        drinks2.textContent = "House Sangria - $8.99";
        const drinks2Info = document.createElement("p");
        drinks2Info.textContent = `A mix of citrus, red wine, and a hint of fire-roasted oranges`;

        drinksDiv.appendChild(drinks1);
        drinksDiv.appendChild(drinks1Info);
        drinksDiv.appendChild(drinks2);
        drinksDiv.appendChild(drinks2Info);
    }

    return {
        generateMenuTitle, generateStarters, generatePizzas, generateSides, generateDesserts, generateDrinks
    }
})();

export { MenuContent };