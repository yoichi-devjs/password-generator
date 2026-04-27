// Password Generator

// This function generates a random password of a specified length using uppercase and lowercase letters.
function generatePassword(num) { // the parameter 'num' specifies the desired length of the generated password

    // Define the characters that can be used in the password
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Initialize an empty string to store the generated password
    let result = "";

    // Loop 'num' times to generate a password of the desired length
    for(let i = 1; i <= num; i++){
        
        // Generate a random index to select a character from the 'alphabet' string
        const randomIndex = Math.floor(Math.random() * alphabet.length);

        // Get the character at the random index and append it to the result string
        const char = alphabet[randomIndex]; 
    
        // Append the selected character to the result string
        result = result + char;
    }
  return result;
}
const password = generatePassword(17);
console.log(`Generated password: ${password}`);