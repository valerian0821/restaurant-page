
const HomePageContent = (function () {
    const content = document.getElementById("content");

    const generateTitle = () => {
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("flex-center");
        content.appendChild(titleDiv);

        const title = document.createElement("h1");
        title.textContent = "Inferno Pizzeria";
        titleDiv.appendChild(title);
    }

    const generateInfo = () => {
        const infoDiv = document.createElement("div");
        infoDiv.id = "info-div";
        content.appendChild(infoDiv);

        const info = document.createElement("p");
        info.textContent = `Inferno Pizzeria is a bold, flame-kissed pizza joint specializing in wood-fired pizzas with
            crispy, charred crusts and unique, mouthwatering toppings. Whether you're craving a classic Margherita or 
            something a little more daring—like our Spicy Honey Pepperoni—Inferno brings the heat with every bite.`;

        const slogan = document.createElement("p");
        slogan.id = "slogan";
        slogan.textContent = "'Where Every Slice Is Fire!'";

        infoDiv.appendChild(info);
        infoDiv.appendChild(slogan);
    }

    const generateHours = () => {
        const hoursDiv = document.createElement("div");
        content.appendChild(hoursDiv);

        const hours = document.createElement("h2");
        hours.textContent = "Hours";
        hoursDiv.id = "hours-div";
        hoursDiv.appendChild(hours);

        const monday = document.createElement("p");
        const tuesday = document.createElement("p");
        const wednesday = document.createElement("p");
        const thursday = document.createElement("p");
        const friday = document.createElement("p");
        const saturday = document.createElement("p");
        const sunday = document.createElement("p");

        monday.textContent = ("Monday: 11:00AM - 10:00PM");
        tuesday.textContent = ("Tueday: 11:00AM - 10:00PM");
        wednesday.textContent = ("Wednesday: 11:00AM - 10:00PM");
        thursday.textContent = ("Thursday: 11:00AM - 11:00AM");
        friday.textContent = ("Friday: 11:00AM - 12:00AM");
        saturday.textContent = ("Saturday: 12:00PM - 12:00AM");
        sunday.textContent = ("Sunday: 12:00PM - 9:00AM");

        hoursDiv.appendChild(monday);
        hoursDiv.appendChild(tuesday);
        hoursDiv.appendChild(wednesday);
        hoursDiv.appendChild(thursday);
        hoursDiv.appendChild(friday);
        hoursDiv.appendChild(saturday);
        hoursDiv.appendChild(sunday);
    }

    const generateLocation = () => {
        const locationDiv = document.createElement("div");
        locationDiv.id = "location-div";
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

export { HomePageContent };