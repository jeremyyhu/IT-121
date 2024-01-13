const vowels = ["a", "e", "i", "o", "u", "y"];
let words;

/**
 * Returns word tranlated to Pig Latin.
 *  
 * @param {String} word The word to tranlate to Pig Latin.
 * @return {String} word in Pig Latin or original if unable to be translated.
 */
function translateWordToPigLatin(word) {
    if (isTranslatableWord(word)) {
        // if a word begins with a vowel
        if (vowels.includes(word[0].toLowerCase())) {
            // the letter remains in place and 'way' is appended to the end of the word
            return `${word}way`;
        // if a word begins with one consonant
        } else if (vowels.includes(word[1])) {
            // that letter is moved to the end and 'ay' is appended
            return `${word.slice(1)}${word[0]}ay`;
        // if a word begins with two consonants
        } else {
            // both letters are moved to the end and 'ay' is appended
            return `${word.slice(2)}${word[0]}${word[1]}ay`;
        }
    }
    return word;
}

/**
 * Returns true if the word can be translated to Pig Latin, otherwise false.
 * 
 * @param {String} word The word to validate if it can be tranlated to Pig Latin.
 * 
 */
function isTranslatableWord(word) {
    // Validates word is greater than 2 characters if word is not a vowel
    if (!word || word.length < 2 && !vowels.includes(word.toLowerCase())) {
        console.log(`Unable to translate input \"${word}\" to Pig Latin.`);
        return false;
    }
    return true;
}

/**
 * Prints user input translated to Pig Latin.
 */
function runner() {
    words = prompt("Enter a phrase to translate to Pig Latin\n");
    if (words !== null) {
        words = words.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = translateWordToPigLatin(words[i]);
        }
        console.log(words.toString().replace(/,/g, " "));
    }
}

function main() {
    // Run the translater until user hits 'Cancel'
    do {
        runner();
    } while (words !== null);
}