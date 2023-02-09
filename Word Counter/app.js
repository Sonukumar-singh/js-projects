const textArea = document.querySelector('#textarea');
const charCount = document.querySelector('#char');
const wordsCount = document.querySelector('#words');

textArea.addEventListener('input', function () {


    // --- Number of  Words count- --  

    let words = textArea.value;
    words = words.trim();
    splitword = words.replace(/[\t\n\r\.\?\!]/gm, ' ');
    let split1 = splitword.split(' ');
    let splitWords = split1.filter(function (elm) {
        return elm != "";
    });
    let numberOfWords = splitWords.length;
    if (splitWords[0] == 0) {
        numberOfWords = 0;
    }
    wordsCount.innerHTML = numberOfWords;


    // --- Number of  character count- --
    let char = this.value;
    let trimmedChar = char.trim();
    let numberOfChar = trimmedChar.length
    charCount.innerHTML = numberOfChar;
});