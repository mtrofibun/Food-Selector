document.addEventListener('DOMContentLoaded', function() {

let fastfood = [
    {
    name : 'Papa Johns',
    type : 'pizza',
    minPrice : 10.00,
    maxPrice : 15.00
},
{
    name : 'Chick-Fil-A',
    type : 'sandwich',
    minPrice : 10.00,
    maxPrice : 11.00
},
{
    name : 'McDonalds',
    type : 'snack',
    minPrice : 7.00,
    maxPrice : 11.00
},
{
    name : 'Hungry Howies',
    type : 'pizza',
    minPrice : 10.00,
    maxPrice : 13.00
},
{
    name : `Jet's Pizza`,
    type : 'pizza',
    minPrice : 12.00,
    maxPrice : 15.00
},
{
    name : 'New York Pizza and Pasta',
    type : 'pizza',
    minPrice : 10.00,
    maxPrice : 20.00
},
{
    name : 'Chex Wing and Grill',
    type : 'sandwich',
    minPrice : 10.00,
    maxPrice : 14.00
},
{
    name : 'Sabor Latin Grill',
    type : 'burgers',
    minPrice : 8.00,
    maxPrice : 11.00
},
{
    name : 'CookOut',
    type : 'burgers',
    minPrice : 6.00,
    maxPrice : 10.00
},
{
    name : 'Kaizoku',
    type : 'naf',
    minPrice : 12.00,
    maxPrice : 17.00
},
{
    name : 'ShakeShack',
    type : 'burgers',
    minPrice : 7.00,
    maxPrice : 14.00
},
{
    name : 'Chilis',
    type : 'burgers',
    minPrice : 12.00,
    maxPrice : 15.00
},
{
    name : 'Sonic',
    type : 'snack',
    minPrice : 4.00,
    maxPrice : 8.00
},
{
    name : 'Bojangles',
    type : 'sandwich',
    minPrice : 10.00,
    maxPrice : 13.00
},
{
    name : 'Panera ',
    type : 'sandwich',
    minPrice : 12.00,
    maxPrice : 17.00
},
{
    name : 'TacoBell',
    type : 'snack',
    minPrice : 4.00,
    maxPrice : 8.00
},

{
    name : 'Little Ceasers',
    type : 'snack',
    minPrice : 4.00,
    maxPrice : 6.00
},

{
    name : 'Five Guys',
    type : 'burgers',
    minPrice : 13.00,
    maxPrice : 20.00
},


]

const boxes = document.querySelectorAll('input[type="checkbox');
const fastfoodtypes = ['pizza','sandwich','burgers','snack','naf']
const foodbutton = document.getElementById('foodbutton');


foodbutton.addEventListener('click', function(){
    count = 0;
    isChecked = false;
    filters = []
        boxes.forEach(box=>{
        if (box.checked) {
            filters.push(box.value);
            count += 1
        }
        
    })

    if(count > 0){
            isChecked = true;
        }

    const newFastFood = fastfood.filter(item => filters.includes(item.type));


    if(!isChecked){
        foodPicked = fastfood[Math.floor(Math.random() * fastfood.length)]
        
    }
    else{
        foodPicked = newFastFood[Math.floor(Math.random() * newFastFood.length)]
            console.log(newFastFood);
    }

    if(newFastFood.length == 0 && isChecked || fastfood.length == 0){
        document.getElementById('error').textContent = 'Ran out of ideas'
    }else{
        document.getElementById('error').textContent = ''
    }
    document.getElementById('name').textContent = foodPicked.name
    document.getElementById('cost').textContent = `${foodPicked.minPrice} to ${foodPicked.maxPrice} USD`
    fastfood = fastfood.filter(item => item !== foodPicked)
    

})

});
