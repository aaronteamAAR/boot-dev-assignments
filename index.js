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
