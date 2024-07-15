const express = require('express')
const app = express()




//#1
app.get('/greetings/:username', (req, res) => {
     res.send(`Hello there, ${req.params.username} !`)


})


//#2
app.get('/roll/:number', (req, res) => {

    const num = req.params.number;

    if(isNaN(num)){
         res.send('<h2>You must specify a number</h2>');
    }
else{
    const max = parseInt(num);

    const randomNum = Math.floor(Math.random() * (max + 1));
    res.send(`You rolled a ${randomNum}`)
}

})





//#3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {

    const index = parseInt(req.params.index);

    if(index < collectibles.length ){
        const item =  collectibles[index];
        res.send(`So, you want the ${item.name} ? For $${item.price} , it can be yours! `);
    }

    else {
        res.send('This item is not yet in stock. Check back soon! ');
    }

})

//#4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {

    const min = parseInt(req.query['min-price'])
    const max = parseInt(req.query['max-price'])
    const type = req.query.type;
 filtered = shoes;

if (min)
    filtered=filtered.filter(shoe => shoe.price >= (min));


if (max)
    filtered=filtered.filter(shoe => shoe.price <= (max));


if (type)
    filtered=filtered.filter(shoe => shoe.type===type)

    res.send(filtered)


})








/////
app.listen(3000, () => {
    console.log('Listening on port 3000')
})






