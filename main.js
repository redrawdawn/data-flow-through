const createWoodBlock = () => {
    let woodObject = {
    type: "wood block",
    length: 10,
    material: "pine",
    purpose: "flute"
    }
    return woodObject
}

const woodBlock = createWoodBlock()

const createCarving = (object) => {
    let string = `The ${object.length}-inch, ${object.material} ${object.type} was carved into a wooden ${object.purpose}`
    return string
}
    
//const woodBlock = createWoodBlock()
    

const carvingString = createCarving(woodBlock) 

console.log(carvingString)