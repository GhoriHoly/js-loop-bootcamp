for(let i = 0; i< 1000; i++){

    console.log("Jag är på varv: " + i)
}

console.log("---------------")

for(let i = 100; i>=0; i--){

    console.log("Jag är på varv: " + i)
}


console.log("---------------")

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for(iter= 0; iter <fruits.length; iter++ ){

    console.log(fruits[iter])
}

console.log("---------------")

for(iter= 0; iter <fruits.length; iter++ ){

    console.log(iter + '. ' + fruits[iter])
}

console.log("---------------")

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for(let j = 0; j< things.length; j++){
    console.log(things[j]);
}

console.log("-----For each loop----------")

things.forEach((item, index) =>{

    console.log('Index: '+ index + '== Value: '+ item)
})

//Loopa ut samtliga vänners favoritfrukter med en console.log().


let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]


for(i=0; i<friends.length; i++){
    console.log(friends[i].name + ' likes: ' + friends[i].likes)

}

console.log("Using Backticks.....")
for (i = 0; i < friends.length; i++) {
    console.log(`${friends[i].name} likes: ${friends[i].likes}`);
}


