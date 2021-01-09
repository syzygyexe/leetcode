const isPalindrome = (s) => {
    let pointerOne = 0;
    let pointerTwo = s.length - 1;
    
    while (pointerOne < pointerTwo) {
        // Move pointers and check whether they are valid or not
        while(!isValidCharacter(s.charAt(pointerOne))) {
            pointerOne++;
        }
        
        while (!isValidCharacter(s.charAt(pointerTwo))) {
            pointerTwo--;
        }
        
        if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
            return false;
        }
        
        pointerOne++;
        pointerTwo--;
    }
    
    return true;
};

let isValidCharacter = (char) => {
    let validChars = "qwertyuiopasdfghjklzxcvbnm0123456789";
    
    // If the JavaScript ofund the character, the value is greater than -1
    return validChars.indexOf(char.toLowerCase()) > -1;
}
