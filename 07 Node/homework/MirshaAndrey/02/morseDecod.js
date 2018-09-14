"use strict";

let lettersSpace = "   ";
let wordSpace = "       ";
let alphabet = {
    // letters
    ". -": "a",
    "- . . .": "b",
    "- . - .": "c",
    "- . .": "d",
    ".": "e",
    ". . - .": "f",
    "- - .": "g",
    ". . . .": "h",
    ". .": "i",
    ". - - -": "j",
    "- . -": "k",
    ". - . .": "l",
    "- -": "m",
    "- .": "n",
    "- - -": "o",
    ". - - .": "p",
    "- - . -": "q",
    ". - .": "r",
    ". . .": "s",
    "-": "t",
    ". . -": "u",
    ". . . -": "v",
    ". - -": "w",
    "- . . -": "x",
    "- . - -": "y",
    "- - . .": "z",
    ". - - - -": "1",
    ". . - - -": "2",
    ". . . - -": "3",
    ". . . . -": "4",
    ". . . . .": "5",
    "- . . . .": "6",
    "- - . . .": "7",
    "- - - . .": "8",
    "- - - - .": "9",
    "- - - - -": "0",
    ". - . - . -": ".",
    "- - . . - -": ",",
    ".. - - . .": "?",
    ". - - - - .": "\'",
    "-. - . - -": "!",
    "- . . - .": "/",
    "- . - - .": "(",
    "- . - - . -": ")",
    ". - . . .": "&",
    "- - - . . .": ":",
    "- . - . - .": ";",
    "- . . . -": "=",
    ". - . - .": "+",
    "- . . . . ": "- ",
    ". . - - . -": "_",
    ". - . . - .": "\"",
    ". . . - . . -": "$",
    ". - - . - .": "@",
};

class Morse_convert {
    decode(morse_Code) {

        if (typeof morse_Code !== "string")
            return " ";
        morse_Code = morse_Code.trim();

        if (morse_Code.length == 0)
            return " ";

        let decodeResult = morse_Code.split(wordSpace).map(function (word) {
            let letters = word.split(lettersSpace);
            return word = letters.map(function (word) {
                return word in alphabet ? alphabet[word] : ""
            }).join(""), letters.length == word.length ? word : ""
        })
            .join(" ");

        return decodeResult;
    }


}

module.exports = Morse_convert;