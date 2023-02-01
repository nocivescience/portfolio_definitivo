// var cat={name:' athena'}
// function wrap(feline){
//     feline.name='Wild'
//     feline= {name:'Tabby'}
// }
// wrap(cat)
// console.log(cat.name)

let animals= [{type:'lion'}, 'tiger']
let clones= animals.slice(1)
clones[0].type='bear'
clones[1]='sheep'
// console.log(animals[0].type,clones[0].type)
// console.log(animals[1],clones[1])
console.log(clones)