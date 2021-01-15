class StrangerStrings {

    getHelloWorld(){
        return null;
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment);
    }

    getPrefix(input){
        //count first 3 char of Wurd
    
        //get first char of Wurd
        let firstLetter = input[0]
        //get second char of Wurd
        let secondLetter = input[1]
        //get third char of Wurd
        let thirdLetter = input[2]

        return firstLetter + secondLetter + thirdLetter;
    
    }

    getSuffix(input){
        //count last 3 char of Wurd
    
        //get thirdlast char of Wurd
        let lastLetter = input[input.length - 1];
        //get secondlast char of Wurd
        let secondLastLetter = input[input.length - 2];
        //get last char of Wurd
        let thirdLastLetter = input[input.length - 3];

        return thirdLastLetter + secondLastLetter + lastLetter;
        
    }

    getMiddleCharacter(input){
        //count all char of Wurd
        //divide char count by 2
        //subtract remaining value from input.length
        //if char count is an odd number, display value
        
        let wordLength = input.length;
        let middleLetter = Math.floor(wordLength/2);
        if(wordLength % 2 == 0){
            return input[middleLetter - 1] + input[middleLetter];
        } else {
            return input[middleLetter];
        }
        
    }

    getFirstWord(input){
        //count all char of Wurd
        //add all char in return
        let str = ""
        return null;
    }
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;