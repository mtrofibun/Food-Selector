document.addEventListener('DOMContentLoaded', function() {

let homefood = [
    {
        name : 'Gyoza',
        type : 'pork',
        site : 'https://www.recipetineats.com/gyoza-japanese-dumplings-potstickers/',
        video : 'https://www.youtube.com/watch?v=5-yt7tFpHPY',
        photo : 'https://japanesetaste.com/cdn/shop/articles/how-to-make-gyoza-japanese-dumplings-at-home-japanese-taste.jpg?v=1694487043&width=5760'
    },
    {
        name : 'Beef Tacos',
        type : 'beef',
        site : 'https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/',
        video : 'https://www.youtube.com/watch?v=mUlipJl5iOQ',
        photo : 'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg'
    },
    {
        name : 'Chicken Parmesan',
        type : 'chicken',
        site : 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/',
        video : 'https://www.youtube.com/watch?v=8LgA6gsXR7w',
        photo : 'https://www.thecookierookie.com/wp-content/uploads/2019/04/crispy-chicken-parmesan-recipe-6-of-14.jpg'
    },
    {
        name : 'Lasagne',
        type : 'beef',
        site : 'https://www.spendwithpennies.com/easy-homemade-lasagna/',
        video : 'https://www.youtube.com/watch?v=l1Q-zzCgCwY&pp=0gcJCdgAo7VqN5tD',
        photo : 'https://www.recipetineats.com/tachyon/2017/05/Lasagne-recipe-3-main-square.jpg?resize=500%2C500'
    },
    {
        name : '',
        type : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        site : '',
        video : '',
        photo : ''
    },
]

const homefoodbutton = document.getElementById('homefoodbutton');
const cuisineBoxes = document.querySelectorAll('.culture');
const meatBoxes = document.querySelectorAll('.meatops');
const meattypes = ['nonmeat','chicken','beef','pork']
const culturetypes = ['japanese','chinese','italitan','amercian']

function filtering(boxes){
    let falsecount = 0;
    filters = []
    boxes.forEach(box=>{
        if (box.checked) {
            filters.push(box.value);
        }
        else{
            falsecount += 1;
            
        }
    })
}


homefoodbutton.addEventListener('click',function(){
    let falsecountCuisine = 0;
     cuisineBoxes.forEach(box=>{
        if (box.checked) {
            filters.push(box.value);
        }
        else{
            falsecountCuisine += 1;
            
        }
    })

    let 
})

})