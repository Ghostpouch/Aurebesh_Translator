// Aurebesh map - only uppercase letters are keys
const aurebeshMap = {
    A: "A", B: "B", C: "C", D: "D", E: "E",
    F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O",
    P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",

    // Digraphs mapped to the font’s Unicode characters
    CH: "\u00E7",
    AE: "\u00E6",
    EO: "\u00CB",
    KH: "\u00FE",
    NG: "\u00F1",
    OO: "\u00F8",
    SH: "\u00DF",
    TH: "\u00F0"
};


// SET UP BUTTON CLICK AND GET INPUT

// Live translation: updates output as the user types
document.getElementById("inputText").addEventListener("input", function() {
    // Get the text the user typed in
    const input = document.getElementById("inputText").value;
    // Prepare a variable to store the translated Aurebesh output
    let output = "";
    // Index to keep track of the current character in the input
    let i = 0;



// LOOP THROUGH INPUT TO HANDLE DIGRAPHS 

    while (i < input.length) {
        /// Check if there are at least two characters left for a digraph
        if (i + 1 < input.length) {
            // Combine current and next character to form a pair
            const pair = input[i] + input[i + 1];
            // Convert pair to uppercase so it matches the Aurebesh map keys
            const pairUpper = pair.toUpperCase();
            // If the pair is a digraph (TH or SH)
            if (aurebeshMap[pairUpper]) {
                // Check if the first letter is lowercase
                const isLower = input[i] === input[i].toLowerCase();
                // Add the Aurebesh symbol, preserving lowercase if needed
                output += isLower ? aurebeshMap[pairUpper].toLowerCase() : aurebeshMap[pairUpper];
                
                i += 2; // Skip the next character since it's part of the digraph
                continue; // Go back to the start of the loop for the next character
            }
        }

        // HANDLE REMAINING CHARACTERS AND DISPLAY

        // Get the current character
        const letter = input[i];
        // Convert to uppercase to match the Aurebesh map keys
        const letterUpper = letter.toUpperCase();
        // If the original letter was lowercase, output lowercase symbol
        if (aurebeshMap[letterUpper]) {
            // Otherwise, output uppercase symbol
            output += letter === letter.toLowerCase() ? aurebeshMap[letterUpper].toLowerCase() : aurebeshMap[letterUpper];
        } else {
            output += letter; // keep punctuation and spaces
        }
        // Move to the next character
        i++;
    }

    document.getElementById("output").innerText = output;
});
