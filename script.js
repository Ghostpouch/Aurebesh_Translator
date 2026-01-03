// Aurebesh map: only uppercase letters are keys
const aurebeshMap = {
    A: "A", B: "B", C: "C", D: "D", E: "E",
    F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O",
    P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",

    TH: "TH",
    SH: "SH"
};

document.getElementById("translateBtn").addEventListener("click", function() {
    const input = document.getElementById("inputText").value;
    let output = "";
    let i = 0;

    while (i < input.length) {
        // Look ahead for digraphs (case-insensitive)
        if (i + 1 < input.length) {
            const pair = input[i] + input[i + 1];
            const pairUpper = pair.toUpperCase();
            if (aurebeshMap[pairUpper]) {
                // Preserve original case: if first letter is lowercase, output lowercase
                const isLower = input[i] === input[i].toLowerCase();
                output += isLower ? aurebeshMap[pairUpper].toLowerCase() : aurebeshMap[pairUpper];
                i += 2; // skip next letter
                continue;
            }
        }

        // Single letter (case-insensitive)
        const letter = input[i];
        const letterUpper = letter.toUpperCase();
        if (aurebeshMap[letterUpper]) {
            output += letter === letter.toLowerCase() ? aurebeshMap[letterUpper].toLowerCase() : aurebeshMap[letterUpper];
        } else {
            output += letter; // keep punctuation/spaces
        }
        i++;
    }

    document.getElementById("output").innerText = output;
});
