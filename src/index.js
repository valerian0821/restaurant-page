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
    nav.addEventListener("click", handleNavListener);
}

function handleNavListener(event) {
    if (event.target.classList.contains("nav-btn")) {
        toggleBtns();
        content.textContent = "";
        event.target.classList.toggle("active", true);
        if (event.target.id === "home") {
            generateHomePage();
        } else if (event.target.id === "menu") {
            generateMenuPage();
        } else {
            generateContactPage();
        } 
    }
}

function toggleBtns() {
    const btns = nav.children;
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("active", false);
    }
}

function initializePage() { 
    generateHomePage();
    const homeBtn = document.getElementById("home");
    homeBtn.classList.toggle("active", true);
    activateNavBar();
}

const content = document.getElementById("content");
const nav = document.querySelector("nav"); 
initializePage();
