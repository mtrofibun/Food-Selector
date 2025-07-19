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
        photo : 'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg',
    },
    {
        name : 'Chicken Parmesan',
        type : 'chicken',
        country : 'american',
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
        country : 'american',
        site : 'https://www.allrecipes.com/recipe/22469/barbecue-ribs/',
        video : 'https://www.youtube.com/watch?v=DSCziSBTl8c',
        photo : 'https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg'
    },
    {
        name : 'Buffalo Wings',
        type : 'chicken',
        country : 'american',
        site : 'https://www.budgetbytes.com/buffalo-wings/',
        video : 'https://www.youtube.com/watch?v=yctF82YBG3Q',
        photo : 'https://easychickenrecipes.com/wp-content/uploads/2023/08/featured-buffalo-wings-recipe.jpg'
    },
    {
        name : 'Torta',
        type : 'beef',
        country : 'mexican',
        site : 'https://www.spoonforkbacon.com/carne-asada-torta/',
        video : 'https://www.youtube.com/watch?v=PiPR1u_DcjY',
        photo : 'https://whatsgabycooking.com/wp-content/uploads/2023/06/Weber-__-Loaded-Chicken-Torta-1200x800-1.jpg'
    },
    {
        name : 'Tostada',
        type : 'beef',
        country : 'mexican',
        site : 'https://tastesbetterfromscratch.com/tostada/',
        video : 'https://www.youtube.com/watch?v=34tfm13mN78',
        photo : 'https://www.mexicanplease.com/wp-content/uploads/2022/06/Easy-Ground-Beef-Tostadas-18.jpg'
    },
    {
        name : 'Bai Qie Ji',
        type : 'chicken',
        country : 'chinese',
        site : 'https://www.madewithlau.com/recipes/white-cut-chicken',
        video : 'https://www.youtube.com/watch?v=PIX8it0BIao',
        photo : 'https://www.chinasichuanfood.com/wp-content/uploads/2015/08/white-cut-chicken-7th.jpg'
    },
    {
        name : 'Osso Buco',
        type : 'pork',
        country : 'italy',
        site : 'https://www.simplyrecipes.com/recipes/osso_buco/',
        video : 'https://www.youtube.com/watch?v=iui7kLThhSQ',
        photo : 'https://www.simplyrecipes.com/thmb/2AjZWxY7oJ7jkMRtrSjtkQAtvQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__12__Osso-Buco-LEAD-5-a816159cbe9740a5b21f3c1e515f9da2.jpg',
    },
    {
        name : 'Tilapia Milanese',
        type : 'fish',
        country : 'italy',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/tilapia-milanese-recipe-1973433',
        video : 'https://www.youtube.com/watch?v=pYpUAgCbmFM',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/0/RX-FNM_030111-Weeknight-Dinners-043_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539764964.webp'
    },
    {
        name : 'Lemony Roasted Cauliflower Risotto',
        type : 'nonmeat',
        country : 'italy',
        site : 'https://cookieandkate.com/lemony-roasted-cauliflower-risotto/',
        video : 'https://www.youtube.com/watch?v=d8AlmZ6GGH0',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/3/RX-FNM_030111-Weeknight-Dinners-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539850185.webp'
    }
]

const homefoodbutton = document.getElementById('homefoodbutton');
const cuisineBoxes = document.querySelectorAll('.culture input[type="checkbox"');
const meatBoxes = document.querySelectorAll('.meatops input[type="checkbox"');

const meattypes = ['nonmeat','chicken','beef','pork','fish']
const culturetypes = ['japanese','chinese','italitan','american','mexico']

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
    let [cusisneCount, filtersCusisne] = filtering(cuisineBoxes,culturetypes.length);
    let [meatCount, filtersMeat] = filtering(meatBoxes,meattypes.length);
    
    console.log(filtersMeat,filtersCusisne);
    console.log(meatCount,cusisneCount)
    let newHomeFood = homefood;
    console.log(newHomeFood)
    if(meatCount && cusisneCount){
        newHomeFood = homefood.filter(item => filtersMeat.includes(item.type) && filtersCusisne.includes(item.country));
    }
    else if(meatCount){
        newHomeFood = homefood.filter(item => filtersMeat.includes(item.type))
    }
    else if (cusisneCount){
        newHomeFood = homefood.filter(item => filtersCusisne.includes(item.country))
    }

    if(newHomeFood.length <= 0){
        document.getElementById('error').textContent = 'Ran out of ideas'
    }
    else{
        document.getElementById('error').textContent = ''
    }

    foodPicked = newHomeFood[Math.floor(Math.random() * newHomeFood.length)]

    

    document.getElementById('foodName').textContent = foodPicked.name
    document.getElementById('show').style.display = 'block'
    document.getElementById('show1').style.display = 'block'
    document.getElementById('image').style.display = 'inline'
    document.getElementById('image').src = foodPicked.photo
    document.getElementById('site').href = foodPicked.site
    document.getElementById('video').href = foodPicked.video

    homefood = homefood.filter(item => item !== foodPicked)
    console.log(newHomeFood)

})
   
})