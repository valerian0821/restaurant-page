import "./styles.css";
import { homePageContent } from "./home.js";

function generateHomePage() {
    homePageContent.generateTitle();
    homePageContent.generateInfo();
    homePageContent.generateHours();
    homePageContent.generateLocation();
}

generateHomePage();

console.log("Hi");