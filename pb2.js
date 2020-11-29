const calculateNbCubePerephe = (nbCubeArrete)=>{
    if(nbCubeArrete === 1 ) return nbCubeArrete
    else return calculateNbCubeTotal(nbCubeArrete)-calculateNbCubeTotal(nbCubeArrete-2)
}

const calculateNbCubeTotal = (nbCubeArrete) => {
    return Math.pow(nbCubeArrete,3)
}

console.log(calculateNbCubePerephe(4))