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

// generateHomePage();
// generateMenuPage();
generateContactPage();

console.log("Hi");