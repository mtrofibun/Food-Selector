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
    },
    {
        name : 'Yakitori',
        type : 'chicken',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/yakitori/',
        video : 'https://www.youtube.com/watch?v=98a0A6nMQiQ&pp=ygUJI2thcml5YWtp',
        photo : 'https://int.japanesetaste.com/cdn/shop/articles/how-to-make-yakitori-grilled-chicken-skewers-japanese-taste.jpg?v=1717125599&width=5760'
    },
    {
        name : 'Tonkatsu ',
        type : 'pork',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/tonkatsu/',
        video : 'https://www.youtube.com/watch?v=AtgqMOi2Ze4',
        photo : 'https://upload.wikimedia.org/wikipedia/commons/9/93/%22Amai-Yuwaku%22_Special_Loin_Pork_Cutlet1.jpg'
    },
    {
        name : 'Miso Soup',
        type : 'nonmeat',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/homemade-miso-soup/',
        video : 'https://www.youtube.com/watch?v=wshf6yZbhwk',
        photo : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4TgpyYb4qz7LAJybB917Qu2KfCk5NC4DF8Ybu0JFX1HNFpY41u6gNvdcYO0T_eT5yD7NEMxFbPty78Cf0PgJrVCtzgLoI6JYAsaOilm4e'
    },
    {
        name : 'Chalupa',
        type : 'beef',
        country : 'mexican',
        site : 'https://www.cookingcarnival.com/homemade-chalupa/',
        video : 'https://www.tiktok.com/@nanajoe19/video/7402363186780933419?lang=en',
        photo : 'https://www.simplecomfortfood.com/wp-content/uploads/2014/01/chalupa-high.jpg'
    },
    {
        name : 'Oyako Donburi',
        type : 'chicken',
        country : 'japanese',
        site : 'https://www.foodnetwork.com/recipes/oyako-donburi-chicken-and-egg-on-rice-13344986',
        video : 'https://www.youtube.com/watch?v=yXGtttjsHNw',
        photo : 'https://www.justonecookbook.com/wp-content/uploads/2022/10/Oyakodon-0613-I.jpg'
    },
    {
        name : 'Oden',
        type : 'fish',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/oden/',
        video : 'https://www.youtube.com/watch?v=7lbAt5L6FNE',
        photo : 'https://www.edibleseattle.com/wp-content/uploads/2024/12/oden-recipe.jpg'
    },
    {
        name : 'Soba',
        type : 'nonmeat',
        country : 'japanese',
        site : 'https://www.seriouseats.com/classic-cold-soba-recipe',
        video : 'https://www.youtube.com/watch?v=0rSmR7Ctg5w',
        photo : 'https://plantbasedonabudget.com/wp-content/uploads/2015/07/Vegan-Sesame-Soba-Noodles-Plant-Based-on-a-Budget-1-3.jpg'
    },
    {
        name : 'Okonomiyaki',
        type : 'pork',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/okonomiyaki/',
        video : 'https://www.youtube.com/watch?v=afmsUXAzRtQ',
        photo : 'https://sylviawakana.com/wp-content/uploads/2021/11/Okonomiyaki-2-500x500.jpg'
    },
    {
        name : 'Char Siu(BBQ Pork)',
        type : 'pork',
        country : 'chinese',
        site : 'https://thewoksoflife.com/chinese-bbq-pork-cha-siu/',
        video : 'https://m.youtube.com/watch?v=zkCoAKTbHpQ&t=76s',
        photo : 'https://images.getrecipekit.com/20241120144335-how-to-make-chinese-cantonese-bbq-roasted-pork-char-siu-recipe.png?aspect_ratio=16:9&quality=90&'
    },
    {
        name : 'Char Siu Bao',
        type : 'pork',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/char-siu-bao-13345169',
        video : 'https://www.youtube.com/watch?v=wCiFs8Fdz1Q&pp=ygUII3N1ZWNoYXI%3D',
        photo : 'https://blog.themalamarket.com/wp-content/uploads/2022/06/chasiu-bao-newsletter-50.jpg'
    },
    {
        name : 'Siu Yuk',
        type : 'pork',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/siu-yuk-crispy-cantonese-pork-belly-20998545',
        video : 'https://www.youtube.com/watch?v=A33iR_Lp_WQ',
        photo : 'https://asianinspirations.com.au/wp-content/uploads/2018/11/R02105_Roasted-Pork-Belly.jpg'
    },
     {
        name : 'Chinese Herbal Chicken Soup',
        type : 'chicken',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/chinese-herbal-chicken-soup-19224391',
        video : 'https://m.youtube.com/watch?v=0taTsGBZkk4&pp=ygUHI2hlcmJqaQ%3D%3D',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2024/05/15/FNK_ChineseChickenSoup_V2_H.jpg.rend.hgtvcom.791.594.85.suffix/1715873560601.webp'
    },
     {
        name : 'One-Pan Mala Dry Pot',
        type : 'beef',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/healthy-one-pan-mala-dry-pot-21177268',
        video : 'https://www.youtube.com/watch?v=jvE1IGKHIHQ',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2025/01/08/mala-dry-pot_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1736368292911.webp'
    },
     {
        name : 'Moo Goo Gai Pan',
        type : 'chicken',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/moo-goo-gai-pan-19224790',
        video : 'https://static01.nyt.com/images/2023/12/13/multimedia/VC-Moo-Goo-Gai-Pan-wzfv/VC-Moo-Goo-Gai-Pan-wzfv-threeByTwoMediumAt2X.jpg',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2024/06/20/FNK_Moo-Goo-Gai-Pan_H2.jpg.rend.hgtvcom.826.620.suffix/1718905272541.webp'
    },
     {
        name : 'Ke Zi Dau Fu Bou(Tofu)',
        type : 'nonmeat',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/braised-eggplant-with-tofu-and-shiitake-mushrooms-in-a-clay-pot-16999078',
        video : 'https://www.youtube.com/watch?v=_P7HU7BAMF0',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/7/17/fnk_BRAISED_EGGPLANT_W_TOFU_AND_SHIITAKE_MUSHROOMS_IN_A_CLAY_POT_s4x3.jpg.rend.hgtvcom.826.620.suffix/1689609710354.webp'
    },
    {
        name : 'Salt and Pepper Tofu',
        type : 'nonmeat',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/salt-and-pepper-tofu-17947399',
        video : 'https://www.youtube.com/watch?v=J_men1BU9RQ',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Salt-and-Pepper-Tofu_V2.jpg.rend.hgtvcom.791.594.85.suffix/1700605199464.webp'
    },
    {
        name : 'Smashed Cucumber Salad',
        type : 'nonmeat',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/smashed-cucumber-salad-10008259',
        video : 'https://www.youtube.com/watch?v=QFX5KmaLGaE',
        photo : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_SMASHED_CUCUMBER_SALAD_H_f_s4x3.jpg.rend.hgtvcom.791.594.85.suffix/1620410624157.webp'
    },
    {
        name : 'Nikujaga',
        type : 'beef',
        country : 'japanese',
        site : 'https://www.justonecookbook.com/nikujaga/',
        video : 'https://www.youtube.com/watch?v=0DNXABd26jk&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://res.cloudinary.com/hksqkdlah/image/upload/2408B_Nikujaga_SFS_crop_hkpn7k.jpg'
    },
    {
        name : 'Chuck Roast Carne Asada with Cebollitas',
        type : 'beef',
        country : 'mexican',
        site : 'https://everydaylatina.com/chuck-roast-carne-asada-with-cebollitas/',
        video : 'https://www.tiktok.com/@eatingwithedward/video/7330027877640998187',
        photo : 'https://everydaylatina.com/wp-content/uploads/2021/09/IMG_1117-e1636348641462-500x375.jpg'
    },
    {
        name : 'Chicken Pozole Blanco',
        type : 'chicken',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/recipes/chicken_pozole/',
        video : 'https://www.youtube.com/watch?v=dQIazqRWGwA',
        photo : 'https://www.simplyrecipes.com/thmb/vG4CN_KL1BO2_AhnHFcL741-jbI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__07__chicken-pozole-horiz-a-1600-4322c9215d9045c8b1d44ffbb97cc09b.jpg'
    },
    {
        name : 'Beef Birria',
        type : 'beef',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/beef-birria-recipe-5270810',
        video : 'https://www.youtube.com/watch?v=qqKNH2HRbD4&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.simplyrecipes.com/thmb/yP8chm1p7vOF4flwj9L4OMhyLEk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Birria-LEAD-05-cf8274d9a2384d59acdcc9f152dc3256.jpg'
    },
    {
        name : 'Shrimp Ceviche',
        type : 'fish',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/recipes/shrimp_ceviche/',
        video : 'https://www.youtube.com/watch?v=Hlv4dabZGOM&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.simplyrecipes.com/thmb/Vrt9wd0qiKR0S3A3dKOpyUDZEsM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Shrimp-Ceviche-LEAD-2-Horizontal-124dec10803547ce9319590537a19599.jpg'
    },
    {
        name : 'Carnitas',
        type : 'pork',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/carnitas-recipe-6745896',
        video : 'https://www.youtube.com/watch?v=9mjCTMBmscY&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.simplyrecipes.com/thmb/uHZWM317fUSR9nfenHBeO6egA9A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Carnitas-LEAD-01-27a572e1173f47c78413e03f10bafe9d.jpg'
    },
    {
        name : 'Elotes (Grilled Mexican Street Corn)',
        type : 'nonmeat',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/recipes/grilled_mexican_street_corn_elotes/',
        video : 'https://www.youtube.com/watch?v=L1nR336Amzk',
        photo : 'https://www.sogoodblog.com/wp-content/uploads/2014/04/elote-mexican-corn-recipe.jpg'
    },
    {
        name : 'Esquites (Warm Mexican Corn Salad)',
        type : 'nonmeat',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/esquites-recipe-5649771',
        video : 'https://www.youtube.com/watch?v=11E-xkaBVR0&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.savingdessert.com/wp-content/uploads/2020/06/Mexican-Street-Corn-Salad-7.jpg'
    },
    {
        name : 'Albondigas Soup (Mexican Meatball Soup)',
        type : 'chicken',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/recipes/albondigas_soup/',
        video : 'https://www.youtube.com/watch?v=0nI7TjbXU-I',
        photo : 'https://skinnyspatula.com/wp-content/uploads/2022/11/Albondigas_Soup_Mexican_Meatballs_Soup_0-720x540.jpg'
    },
    {
        name : 'Cheese and Mushroom Quesadillas',
        type : 'nonmeat',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/recipes/crispy_cheese_and_mushroom_quesadillas/',
        video : 'https://www.youtube.com/watch?v=0PKgLKOhH10',
        photo : 'https://www.simplyrecipes.com/thmb/uWnE4zCLv763oJ8CwS7-ibr0RL8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__Mushroom-Quesadilla-LEAD-1-122477758cee4ba29b4e7b1053ca8ff6.jpg'
    },
    {
        name : 'Birria Tacos',
        type : 'beef',
        country : 'mexican',
        site : 'https://www.simplyrecipes.com/birria-tacos-recipe-5270813',
        video : 'https://www.youtube.com/watch?v=HpAANW4WzsI',
        photo : 'https://www.simplyrecipes.com/thmb/Q97gw4zEF97jQNmLltvcyNC-2Js=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Birria-Tacos-LEAD-03-20b538b9c55340c5bbdca3f6728c33f0.jpg'
    },
    {
        name : 'Mapo Tofu',
        type : 'nonmeat',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/food-network-kitchen/mapo-tofu-3630578',
        video : 'https://www.youtube.com/watch?v=ZfsZwwrTFD4&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyxB8f23e30uivXUbmJFfNLY5mKbw0yaIIvUKMUTgvstqjbP2NwGPT55wpLYZIuM-DBqfQ1TQXBcoZ_A_c3VhwfxY1GHUU5eVgu-1Gwo'
    },
    {
        name : 'Mushroom Mapo Tofu',
        type : 'nonmeat',
        country : 'chinese',
        site : 'https://www.foodnetwork.com/recipes/mushroom-mapo-tofu-12154737',
        video : 'https://www.youtube.com/watch?v=JDMjUZjFETs',
        photo : 'https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Mushroom-Mapo-Tofu-ab54c31.jpg'
    },
    {
        name : 'Green Roman-Style Gnocchi',
        type : 'nonmeat',
        country : 'italy',
        site : 'https://www.giallozafferano.com/recipes/green-roman-style-gnocchi.html',
        video : 'https://www.youtube.com/watch?v=XdYC6bwExBU',
        photo : 'https://www.giallozafferano.com/images/297-29783/green-roman-style-gnocchi_1200x800.jpg'
    },
    {
        name : 'Pasta and zucchini',
        type : 'nonmeat',
        country : 'italy',
        site : 'https://www.giallozafferano.com/recipes/pasta-and-zucchini.html',
        video : 'https://www.youtube.com/watch?v=RQ7mUzt7GrI',
        photo : 'https://www.giallozafferano.com/images/226-22692/pasta-and-zucchini_1200x800.jpg'
    },
    {
        name : 'Wisconsin Butter Burgers',
        type : 'beef',
        country : 'american',
        site : 'https://www.tasteofhome.com/recipes/wisconsin-butter-basted-burgers/',
        video : 'https://www.youtube.com/watch?v=BNDJrihWknI',
        photo : 'https://www.seriouseats.com/thmb/IIYcvhBhcAC7Q2LXAdnoLii5YNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240802-double-butter-burger-Qi-Ai-Hero-cutburger-01-closeup-SEA-001c962d916248abbe3d8944445d5c46.jpg'
    },
    {
        name : 'Philly Cheesesteak',
        type : 'beef',
        country : 'american',
        site : 'https://www.tasteofhome.com/recipes/pressure-cooker-philly-cheesesteak-sandwiches/',
        video : 'https://www.youtube.com/watch?v=kPse6Kqx5es',
        photo : 'https://static01.nyt.com/images/2024/02/06/multimedia/KD-philly-cheesesteak-mhqc/KD-philly-cheesesteak-mhqc-mediumSquareAt3X.jpg'
    },
    {
        name : 'Pulled Pork Sandwich',
        type : 'pork',
        country : 'american',
        site : 'https://www.tasteofhome.com/recipes/carolina-style-pork-barbecue/',
        video : 'https://www.youtube.com/watch?v=2OHgWmB49So',
        photo : 'https://whatsgabycooking.com/wp-content/uploads/2022/10/WGC-__-Pulled-Pork-Sammy-580x870-1.jpg'
    },
    {
        name : 'BBQ Chicken',
        type : 'chicken',
        country : 'american',
        site : 'https://www.tasteofhome.com/recipes/favorite-barbecued-chicken/',
        video : 'https://www.youtube.com/watch?v=74P-cyPfMRQ&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.allrecipes.com/thmb/APtZNY1GgOf3Ph0JUc-j4dImjrU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2467480-southern-bbq-chicken-Allrecipes-Magazine-4x3-1-3e180dccbaae446c8c2d05f708611fc6.jpg'
    },
    {
        name : `Shrimp Po Boys`,
        type : 'fish',
        country : 'american',
        site : 'https://www.simplyrecipes.com/recipes/shrimp_po_boy_sandwich/',
        video : 'https://www.youtube.com/watch?v=TLO4EYA5DCQ&pp=0gcJCfwAo7VqN5tD',
        photo : 'https://www.simplyrecipes.com/thmb/NWR2yj5F6btUCzcJ9M3r4WsZk0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Shrimp-Po-Boy-LEAD-22-33ab39c8d49249d688918b1039f72468.jpg'
    },
    {
        name : 'Southwest Rice',
        type : 'nonmeat',
        country : 'american',
        site : 'https://www.tasteofhome.com/recipes/southwestern-rice/',
        video : 'https://www.youtube.com/watch?v=DcThFJVHERs',
        photo : 'https://www.ro-tel.com/sites/g/files/qyyrlu281/files/uploadedImages/img_4796_1639.jpg'
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
    
    let newHomeFood = homefood;
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
    document.getElementById('foodName').alt = foodPicked.name
    document.getElementById('show').style.display = 'block'
    document.getElementById('show1').style.display = 'block'
    document.getElementById('image').style.display = 'inline'
    document.getElementById('image').src = foodPicked.photo
    document.getElementById('site').href = foodPicked.site
    document.getElementById('video').href = foodPicked.video

    homefood = homefood.filter(item => item !== foodPicked)

})
   
})