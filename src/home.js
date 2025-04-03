
const homePageContent = (function () {
    const content = document.getElementById("content");

    const generateTitle = () => {
        const titleDiv = document.createElement("div");
        content.appendChild(titleDiv);

        const title = document.createElement("h1");
        title.textContent = "Inferno Pizzeria";
        titleDiv.appendChild(title);
    }

    const generateInfo = () => {
        const infoDiv = document.createElement("div");
        content.appendChild(infoDiv);

        const info = document.createElement("p");
        info.textContent = `Inferno Pizzeria is a bold, flame-kissed pizza joint specializing in wood-fired pizzas with
            crispy, charred crusts and unique, mouthwatering toppings. Whether you're craving a classic Margherita or 
            something a little more daring—like our Spicy Honey Pepperoni—Inferno brings the heat with every bite.`;

        const slogan = document.createElement("p");
        slogan.textContent = "Where Every Slice Is Fire!";

        infoDiv.appendChild(info);
        infoDiv.appendChild(slogan);
    }

    const generateHours = () => {
        const hoursDiv = document.createElement("div");
        content.appendChild(hoursDiv);

        const hours = document.createElement("h2");
        hours.textContent = "Hours";
        hoursDiv.appendChild(hours);

        const monday = document.createElement("p");
        const tuesday = document.createElement("p");
        const wednesday = document.createElement("p");
        const thursday = document.createElement("p");
        const friday = document.createElement("p");
        const saturday = document.createElement("p");
        const sunday = document.createElement("p");

        monday.textContent = ("11:00AM - 10:00PM");
        tuesday.textContent = ("11:00AM - 10:00PM");
        wednesday.textContent = ("11:00AM - 10:00PM");
        thursday.textContent = ("11:00AM - 11:00AM");
        friday.textContent = ("11:00AM - 12:00AM");
        saturday.textContent = ("12:00PM - 12:00AM");
        sunday.textContent = ("12:00PM - 9:00AM");

        hoursDiv.appendChild(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    }

    const generateLocation = () => {
        const locationDiv = document.createElement("div");
        content.appendChild(locationDiv);

        const locationHeader = document.createElement("h2");
        locationHeader.textContent = "Location";
        locationDiv.appendChild(locationHeader);

        const location = document.createElement("p");
        location.textContent = "1325 Firestone Blvd, Ember City, FL 32890"
        locationDiv.appendChild(location);
    }

    return {
        generateTitle, generateInfo, generateHours, generateLocation
    }
})();

export { homePageContent };