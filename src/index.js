import "./styles.css";
import { HomePageContent } from "./home.js";
import { MenuContent } from "./menu.js";
import { ContactContent } from "./contact.js";

function generateHomePage() {
    HomePageContent.generateTitle();
    HomePageContent.generateInfo();
    HomePageContent.generateHours();
    HomePageContent.generateLocation();
}

function generateMenuPage() {
    MenuContent.generateMenuTitle();
    MenuContent.generateStarters();
    MenuContent.generatePizzas();
    MenuContent.generateSides();
    MenuContent.generateDesserts();
    MenuContent.generateDrinks();
}

function generateContactPage() {
    ContactContent.generateContactTitle();
    ContactContent.generatefirstContact();
    ContactContent.generateSecondContact();
    ContactContent.generateThirdContact();
}

function activateNavBar() {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", handleNavListener);
}

function handleNavListener(event) {
    content.textContent = "";
    if (event.target.id === "home") {
        generateHomePage();
    } else if (event.target.id === "menu") {
        generateMenuPage();
    } else {
        generateContactPage();
    }
}

const content = document.getElementById("content");
generateHomePage();
activateNavBar();
// generateMenuPage();
// generateContactPage();
