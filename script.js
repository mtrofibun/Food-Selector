document.addEventListener('DOMContentLoaded', function() {



let fastfood = [
    {
    name : 'Papa Johns',
    type : 'Pizza',
    minPrice : 10.00,
    maxPrice : 15.00
},
{
    name : 'Chick-Fil-A',
    type : 'Sandwich/Sub',
    minPrice : 10.00,
    maxPrice : 11.00
},
{
    name : 'McDonalds',
    type : 'Snack',
    minPrice : 7.00,
    maxPrice : 11.00
},
{
    name : 'Hungry Howies',
    type : 'Pizza',
    minPrice : 10.00,
    maxPrice : 13.00
},
{
    name : `Jet's Pizza`,
    type : 'Pizza',
    minPrice : 12.00,
    maxPrice : 15.00
},
{
    name : 'New York Pizza and Pasta',
    type : 'Pizza',
    minPrice : 10.00,
    maxPrice : 20.00
},
{
    name : 'Chex Wing and Grill',
    type : 'Sandwich/Sub',
    minPrice : 10.00,
    maxPrice : 14.00
},
{
    name : 'Sabor',
    type : 'Burgers/Beef',
    minPrice : 8.00,
    maxPrice : 11.00
},
{
    name : 'CookOut',
    type : 'Burgers/Beef',
    minPrice : 6.00,
    maxPrice : 10.00
},
{
    name : 'Kaizoku',
    type : 'Non-American Cusine',
    minPrice : 12.00,
    maxPrice : 17.00
},
{
    name : 'ShakeShack',
    type : 'Burgers/Beef',
    minPrice : 7.00,
    maxPrice : 14.00
},
{
    name : 'Chilis',
    type : 'Burgers/Beef',
    minPrice : 12.00,
    maxPrice : 15.00
}
]
let fastfoodindicators = {
    cheap : false,
    pizza : false,
    sandwich : false,
    burgers : false,
    snack : false,
    naf : false
}

let homefood = [
    {
        name : 'Gyoza',
        type : 'Japanese',
        site : 'https://www.recipetineats.com/gyoza-japanese-dumplings-potstickers/',
        video : 'https://www.youtube.com/watch?v=5-yt7tFpHPY',
        photo : 'https://japanesetaste.com/cdn/shop/articles/how-to-make-gyoza-japanese-dumplings-at-home-japanese-taste.jpg?v=1694487043&width=5760'
    }
]


const boxes = document.querySelectorAll('input[type="checkbox');


const fastfoodtypes = ['cheap','pizza','sandwich','burgers','snack','naf']
const homefoodtypes = ['']


const foodbutton = document.getElementById('foodbutton');





foodbutton.addEventListener('click', function(){
        boxes.forEach(box=>{
        let type = box.value; 
        if (box.checked) {
            fastfoodindicators[type] = true;
        }
        else{
            fastfoodindicators[type] = false;
        }
    })

    foodPicked = fastfood[Math.floor(Math.random() * fastfood.length)]
    document.getElementById('name').textContent = foodPicked.name
    delete fastfood[foodPicked];
    console.log(fastfood) 

})

});
