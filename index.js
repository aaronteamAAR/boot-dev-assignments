let inventory = [
  "Iron Breastplate",
  "Healing Potion",
  "Leather Scraps",
  "Shortsword",
  "Iron ore"
];

console.log(inventory[0] = "Iron Bar");


playersId = [
    "0-33",
    "0-23",
    "0-12"
]
console.log( playersId.IndexOf("0-33"))
// Pushing value into an array with a loop
let playerIds = []
for (let i = 0; i < 100; i++) {
  playerIds.push(i)
}
console.log(playerIds)

// Array Updates

let inventory = [ 'Healing Potion', 'Iron Ore', 'Bread', 'Shortsword' ]
console.log(inventory)

// update second item here

console.log(inventory)

// Pop Values

let inventory = [ 'Healing Potion', 'Iron Bar', 'Kite Shield', 'Shortsword', 'Leather Scraps', 'Tattered Cloth' ]
for (let i = inventory.length - 1; i >= 0; i--) {
  let item = inventory.pop() 
  console.log('Selling:', item)
}
console.log(inventory)


// COUNTING
let items = [ 'Potion', 'Healing Potion', 'Iron Breastplate', 'Leather Scraps', 'Iron Ore', 'Light Leather', 'Bread', 'Shortsword', 'Longsword', 'Iron Mace', 'Gold Ore', 'Bread', 'Healing Potion', 'Silk Cloth', 'Bread',  'Leather Armor Kit', 'Bread', 'Iron Boots', 'Iron Bar', 'Potion', 'Iron Breastplate', 'Leather Scraps', 'Iron Ore', 'Light Leather', 'Bread', 'Shortsword', 'Longsword', 'Iron Mace', 'Gold Ore', 'Healing Potion', 'Silk Cloth', 'Leather Armor Kit', 'Iron Boots', 'Iron Bar', 'Iron Mace', 'Gold Ore', 'Healing Potion', 'Silk Cloth', 'Leather Armor Kit', 'Iron Boots', 'Iron Bar', 'Potion', 'Iron Breastplate', 'Leather Scraps', 'Iron Ore', 'Light Leather', 'Potion', 'Iron Breastplate', 'Leather Scraps', 'Iron Ore', 'Light Leather', 'Bread', 'Shortsword', 'Longsword', 'Iron Mace', 'Gold Ore', 'Healing Potion', 'Silk Cloth', 'Leather Armor Kit', 'Iron Boots', 'Iron Bar' ]

let potionCount = 0
let breadCount = 0
let shortswordCount = 0

for (let i = 0; i < items.length; i++) {
  if (items[i] == 'Potion') {
    potionCount++
  } else if (items[i] == 'Bread') {
    breadCount++
  } else if (items[i] == 'Shortsword') {
    shortswordCount++
    
  }
}

// Don't touch below this line

console.log(`You have ${potionCount} potions in your inventory.`)
console.log(`You have ${breadCount} pieces of Bread in your inventory.`)
console.log(`You have ${shortswordCount} shortswords in your inventory.`)



// For-Of Syntax

let woods = ['oak', 'pine', 'maple']
for (let wood of woods){
  console.log(wood)
}
// prints:
// oak
// pine
// maple








// Exercise 14 of 14
// Create Array of Odd Numbers


let oddNumbers = []

for (let i = 0; i < 300; i++) {
if(i % 2 !== 0){
   oddNumbers.push(i)}
}

console.log(oddNumbers)
