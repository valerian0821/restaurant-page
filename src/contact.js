
const ContactContent = (function () {
    const content = document.getElementById("content");

    const generateContactTitle = () => {
        const contactDiv = document.createElement("div");
        content.appendChild(contactDiv);

        const contact = document.createElement("h1");
        contact.textContent = "Contact Us";
        contactDiv.appendChild(contact);
    }

    const generatefirstContact = () => {
        const firstContactDiv = document.createElement("div");
        content.appendChild(firstContactDiv);

        const firstContactName = document.createElement("h3");
        firstContactName.textContent = "Mario";
        firstContactDiv.appendChild(firstContactName);

        const firstContactRole = document.createElement("p");
        const firstContactNumber = document.createElement("p");
        const firstContactEmail = document.createElement("p");

        firstContactRole.textContent = "Owner";
        firstContactNumber.textContent = "555-555-5554";
        firstContactEmail.textContent = "mariorealemail@notfake.com";

        firstContactDiv.appendChild(firstContactRole);
        firstContactDiv.appendChild(firstContactNumber);
        firstContactDiv.appendChild(firstContactEmail);
    }

    const generateSecondContact = () => {
        const secondContactDiv = document.createElement("div");
        content.appendChild(secondContactDiv);

        const secondContactName = document.createElement("h3");
        secondContactName.textContent = "Luigi";
        secondContactDiv.appendChild(secondContactName);

        const secondContactRole = document.createElement("p");
        const secondContactNumber = document.createElement("p");
        const secondContactEmail = document.createElement("p");

        secondContactRole.textContent = "Head Chef";
        secondContactNumber.textContent = "555-555-5555";
        secondContactEmail.textContent = "luigirealemail@notfake.com";

        secondContactDiv.appendChild(secondContactRole);
        secondContactDiv.appendChild(secondContactNumber);
        secondContactDiv.appendChild(secondContactEmail);
    }

    const generateThirdContact = () => {
        const thirdContactDiv = document.createElement("div");
        content.appendChild(thirdContactDiv);

        const thirdContactName = document.createElement("h3");
        thirdContactName.textContent = "Wario";
        thirdContactDiv.appendChild(thirdContactName);

        const thirdContactRole = document.createElement("p");
        const thirdContactNumber = document.createElement("p");
        const thirdContactEmail = document.createElement("p");

        thirdContactRole.textContent = "Waitor";
        thirdContactNumber.textContent = "555-555-5556";
        thirdContactEmail.textContent = "wariorealemail@notfake.com";

        thirdContactDiv.appendChild(thirdContactRole);
        thirdContactDiv.appendChild(thirdContactNumber);
        thirdContactDiv.appendChild(thirdContactEmail);
    }

    return {
        generateContactTitle, generatefirstContact, generateSecondContact, generateThirdContact
    }
})();

export { ContactContent };