

// ======AUREBESH CHARACTER MAP======

// Maps English letters and digraphs to Aurebesh symbols (Unicode values for your font).
// Only uppercase letters are used as keys, lowercase is handled dynamically later.
const aurebeshMap = {
    A: "A", B: "B", C: "C", D: "D", E: "E",
    F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O",
    P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
    
    // Digraphs mapped to Aurebesh font Unicode
    CH: "\u00E7",
    AE: "\u00E6",
    EO: "\u00CB",
    KH: "\u00FE",
    NG: "\u00F1",
    OO: "\u00F8",
    SH: "\u00DF",
    TH: "\u00F0"
};


// ======LIVE TRANSLATION AND GET INPUT======
// Updates in real time as user types
document.getElementById("inputText").addEventListener("input", function() {
    const input = document.getElementById("inputText").value; // Get user input
    let output = ""; // Variable to build translated text 
    let i = 0; // Index to keep track of the current character in the input


// ======LOOP THROUGH INPUT======
    while (i < input.length) {
        
        // ======DIGRAPH CHECK======
        if (i + 1 < input.length) { // Check if there are two characters available for a digraph
            const pair = input[i] + input[i + 1]; // Combine two letters
            const pairUpper = pair.toUpperCase(); // Convert to uppercase to check against map
            
            // If the pair is a digraph
            if (aurebeshMap[pairUpper]) {
                const isLower = input[i] === input[i].toLowerCase(); // Preserve lowercase
                // Add the Aurebesh symbol, preserving lowercase if needed
                output += isLower ? aurebeshMap[pairUpper].toLowerCase() : aurebeshMap[pairUpper];
                i += 2; // Skip the second character in the pair
                continue; // Go back to start of loop for next characters
            }
        }


        // ======SINGLE LETTER TRANSLATION======
        // Get the current character
        const letter = input[i];
        // Convert to uppercase to match the Aurebesh map keys
        const letterUpper = letter.toUpperCase();
        // Preserve lowercase if original letter is lowercase
        if (aurebeshMap[letterUpper]) {
            output += letter === letter.toLowerCase() ? aurebeshMap[letterUpper].toLowerCase() : aurebeshMap[letterUpper];
        } else {
            output += letter; // keep punctuation and spaces
        }
        i++; // Move to the next character
    }

    // ======DISPLAY OUTPUT======
    document.getElementById("output").innerText = output;
});


// ======CLEAR BUTTON FUNCTIONALITY======
// Clears the input box and output display when CLEAR button is clicked.
document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("inputText").value = "";
    document.getElementById("output").innerText = "";

    // Play sound for user feedback
    const audio = new Audio("click.mp3");
    audio.play();
});


