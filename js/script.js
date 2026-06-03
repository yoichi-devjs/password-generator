// Password Generator

// This function generates a random password of a specified length using letters, numbers, and symbols.
export function generatePassword(num) { // the parameter 'num' specifies the desired length of the generated password
    // Define the characters that can be used in the password
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // define the numbers
    const numbers = "0123456789";
    // define symbols
    const symbols = ".,:;/?@'`=+()*&%$£!~}{[]><";
    // combine the variables to create one source of "truth"
    const combined = alphabet + symbols + numbers;
    // Initialize an empty string to store the generated password
    let result = "";

    // Loop 'num' times to generate a password of the desired length
    for(let i = 1; i <= num; i++){
        
        // Generate a random index to select a character from the 'alphabet' string
        const randomIndex = Math.floor(Math.random() * combined.length);

        // Get the character at the random index and append it to the result string
        const char = combined[randomIndex]; 
    
        // Append the selected character to the result string
        result = result + char;
    }
  return result;
}
// test run before adding UI and module
// const password = generatePassword(17);
// console.log(`Generated password: ${password}`);

// add a check strength function
export function checkStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
}
