/* 
first: return sentence if single word - to uppercase + "!"
second: split sentence if phrase or sentence is longer than single word
third: add emoji in between each word 
fourth: join string together to output: uppercase, emoji inbetween plus !
*/
function panic(sentence) {
    const sentenceSplit = sentence.split();
    if (sentenceSplit.length === 1) {
        return sentence.toUpperCase() + "!";
    } else if (sentenceSplit.length !== 1) {
        return sentence.toUpperCase().split(' ').join(' 😱 ') + '!';
    }
}

console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

/* 
arrow function:

const panic = (sentence) => 
*/