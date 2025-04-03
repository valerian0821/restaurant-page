import "./styles.css";
import { HomePageContent } from "./home.js";
import { MenuContent } from "./menu.js";

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

// generateHomePage();
generateMenuPage();


console.log("Hi");