const impressionSuit = (nb)=>{
    let row = 1
    let number = 1
    recurssiveImpressionSuit(row,number,nb)
}

const recurssiveImpressionSuit= (row,number,nb) => {
    let stopCount = false
    let inlineString = ""
    let blank = " "
    for(let index = 0; index < row;index++){
        inlineString+= `${blank.repeat((nb.toString().length-1)-(number.toString().length-1))}${number} `
        number++
        if(number > nb) {
            stopCount = true
            break
        }
    }
    console.log(inlineString)
    if(!stopCount) recurssiveImpressionSuit(++row,number,nb)
}

impressionSuit(123)