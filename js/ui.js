// import the logic file
import { generatePassword, checkStrength } from "./script.js";

// select all the elements
const inputLength = document.getElementById("input-length");
const inputBtn = document.getElementById("input-btn");
const outputParagraph = document.getElementById("output-password");
const strengthParagraph = document.getElementById("strength");
const strengthFill = document.getElementById("strength-fill");
const copyBtn = document.getElementById("copy-btn");
const copyStatus = document.getElementById("copy-status");
const assignedPassword = document.getElementById("assigned-password");


// generate password button
inputBtn.addEventListener("click", () => {

    const convertedInput = Number(inputLength.value);

    // validation
    if (inputLength.value.trim() === "") {
        outputParagraph.textContent = "ERROR - Enter a valid number";
        return;
    }

    if (isNaN(convertedInput)) {
        outputParagraph.textContent = "Output must be a number";
        return;
    }

    if (convertedInput <= 0) {
        outputParagraph.textContent = "Length must be greater than zero.";
        return;
    }

    if (!Number.isInteger(convertedInput)) {
        outputParagraph.textContent = "Length must be a whole number.";
        return;
    }

    if (convertedInput > 100) {
        outputParagraph.textContent = "Maximum allowed length is 100.";
        return;
    }

    // password generator
    const result = generatePassword(convertedInput);
    outputParagraph.textContent = result;

    // strenght check
    const strengthScore = checkStrength(result);

    if (strengthScore <= 1) {
        strengthParagraph.textContent = "Strength: Weak";
        strengthFill.style.width = "25%";
        strengthFill.style.background = "#ef4444"; // red
    }
    else if (strengthScore === 2) {
        strengthParagraph.textContent = "Strength: Medium";
        strengthFill.style.width = "50%";
        strengthFill.style.background = "#f59e0b"; // amber
    }
    else if (strengthScore === 3) {
        strengthParagraph.textContent = "Strength: Strong";
        strengthFill.style.width = "75%";
        strengthFill.style.background = "#10b981"; // green
    }
    else {
        strengthParagraph.textContent = "Strength: Very Strong";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "#059669"; // dark green
    }
});


// copy button
copyBtn.addEventListener("click", () => {

    const password = outputParagraph.textContent;

    if (!password || password === "ERROR") {
        copyStatus.textContent = "Nothing to copy.";
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            copyStatus.textContent = "Copied!";

            // Save masked password
            const masked = "*".repeat(password.length);
            assignedPassword.textContent = masked;
        })
        .catch(() => {
            copyStatus.textContent = "Failed to copy.";
        });
});
