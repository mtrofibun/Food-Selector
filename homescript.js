document.addEventListener('DOMContentLoaded', function() {

let homefood = [
    {
        name : 'Gyoza',
        type : 'pork',
        country : 'japanese',
        site : 'https://www.recipetineats.com/gyoza-japanese-dumplings-potstickers/',
        video : 'https://www.youtube.com/watch?v=5-yt7tFpHPY',
        photo : 'https://japanesetaste.com/cdn/shop/articles/how-to-make-gyoza-japanese-dumplings-at-home-japanese-taste.jpg?v=1694487043&width=5760'
    },
    {
        name : 'Beef Tacos',
        type : 'beef',
        country : 'mexican',
        site : 'https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/',
        video : 'https://www.youtube.com/watch?v=mUlipJl5iOQ',
        photo : 'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg'
    },
    {
        name : 'Chicken Parmesan',
        type : 'chicken',
        country : 'amercian',
        site : 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/',
        video : 'https://www.youtube.com/watch?v=8LgA6gsXR7w',
        photo : 'https://www.budgetbytes.com/wp-content/uploads/2024/04/Chicken-Parmesan-Overhead.jpg'
    },
    {
        name : 'Lasagna',
        type : 'beef',
        country : 'italy',
        site : 'https://www.spendwithpennies.com/easy-homemade-lasagna/',
        video : 'https://www.youtube.com/watch?v=l1Q-zzCgCwY&pp=0gcJCdgAo7VqN5tD',
        photo : 'https://www.recipetineats.com/tachyon/2017/05/Lasagne-recipe-3-main-square.jpg?resize=500%2C500'
    },
    {
        name : 'Tamales',
        type : 'chicken',
        country : 'mexican',
        site : 'https://tastesbetterfromscratch.com/mexican-tamales/',
        video : 'https://www.youtube.com/watch?v=4xiwU4mNDwY&pp=ygUII2ZlaXRvcm8%3D',
        photo : 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-12-tamales%2Ftamales-151'
    },
    {
        name : 'Grilled Cheese',
        type : 'nonmeat',
        country : 'american',
        site : 'https://www.recipetineats.com/grilled-cheese-sandwich/',
        video : 'https://www.youtube.com/watch?v=Jfr5EdXVKU4',
        photo : 'https://www.allrecipes.com/thmb/pnEUcAXDg5GUJ77fUDzZp41NWkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-238891-Grilled-Cheese-Sandwich-beauty-4x3-362f705972e64a948b7ec547f7b2a831.jpg'
    },
    {
        name : 'Southern Fried Chicken',
        type : 'chicken',
        country : 'american',
        site : 'https://www.thecountrycook.net/the-best-southern-fried-chicken/',
        video : 'https://www.youtube.com/watch?v=AJbJYwEduso',
        photo : 'https://www.thecountrycook.net/wp-content/uploads/2021/02/thumbnail-Southern-Fried-Chicken-scaled.jpg'
    },
    {
        name : 'BBQ Ribs',
        type : 'pork',
        country : 'amercian',
        site : 'https://www.allrecipes.com/recipe/22469/barbecue-ribs/',
        video : 'https://www.youtube.com/watch?v=DSCziSBTl8c',
        photo : 'https://www.spendwithpennies.com/wp-content/uploads/2022/06/Oven-Baked-Ribs-SpendWithPennies-4.jpg'
    },
    {
        name : 'Buffalo Wings',
        type : 'chicken',
        country : 'amercian',
        site : 'https://www.budgetbytes.com/buffalo-wings/',
        video : 'https://www.youtube.com/watch?v=yctF82YBG3Q',
        photo : 'https://easychickenrecipes.com/wp-content/uploads/2023/08/featured-buffalo-wings-recipe.jpg'
    },
    {
        name : 'Torta',
        type : 'beef',
        country : 'mexico',
        site : 'https://www.spoonforkbacon.com/carne-asada-torta/',
        video : 'https://www.youtube.com/watch?v=PiPR1u_DcjY',
        photo : 'https://whatsgabycooking.com/wp-content/uploads/2023/06/Weber-__-Loaded-Chicken-Torta-1200x800-1.jpg'
    },
    {
        name : 'Tostada',
        type : 'beef',
        country : 'mexico',
        site : 'https://tastesbetterfromscratch.com/tostada/',
        video : 'https://www.youtube.com/watch?v=34tfm13mN78',
        photo : 'https://www.mexicanplease.com/wp-content/uploads/2022/06/Easy-Ground-Beef-Tostadas-18.jpg'
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
    {
        name : '',
        type : '',
        country : '',
        site : '',
        video : '',
        photo : ''
    },
]

const homefoodbutton = document.getElementById('homefoodbutton');
const cuisineBoxes = document.querySelectorAll('.culture input[type="checkbox"');
const meatBoxes = document.querySelectorAll('.meatops input[type="checkbox"');

const meattypes = ['nonmeat','chicken','beef','pork','fish']
const culturetypes = ['japanese','chinese','italitan','amercian','mexico']

function filtering(boxes){
    count = 0;
    filters = []
    isChecked = false
    boxes.forEach(box=>{
        if (box.checked) {
            filters.push(box.value);
            count += 1;
        }
        
       
    })
     if(count > 0){
            isChecked = true;
        }
    return [isChecked, filters];
}


homefoodbutton.addEventListener('click',function(){
    let filtersFinal = [];
    let [cusisneCount, filtersCusisne] = filtering(cuisineBoxes,culturetypes.length);
    let [meatCount, filtersMeat] = filtering(meatBoxes,meattypes.length);
    
    console.log(filtersMeat,filtersCusisne);
    filtersFinal = [...filtersMeat, ...filtersCusisne];
    
    const newHomeFood = homefood.filter(item => filtersFinal.includes(item.type) || filtersFinal.includes(item.country));

    if(!meatCount && !cusisneCount){
        foodPicked = homefood[Math.floor(Math.random() * homefood.length)]
    }
    else{
        foodPicked = newHomeFood[Math.floor(Math.random() * newHomeFood.length)]
    }

    document.getElementById('foodName').textContent = foodPicked.name
    document.getElementById('show').style.display = 'block'
    document.getElementById('show1').style.display = 'block'
    document.getElementById('image').src = foodPicked.photo
    document.getElementById('site').href = foodPicked.site
    document.getElementById('video').href = foodPicked.video

    homefood = homefood.filter(item => item !== foodPicked)
    console.log(newHomeFood)

})
   
})