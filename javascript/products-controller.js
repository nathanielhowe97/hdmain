const shopContainer = document.querySelector('#shop-container')

function setShopInnerHTML(){
    shopContainer.innerHTML += '<div class="shop-item" id="shop-6"></div>'
    shopContainer.innerHTML += '<div class="shop-item" id="shop-5"></div>'
    shopContainer.innerHTML += '<div class="shop-item" id="shop-4"></div>'
    shopContainer.innerHTML += '<div class="shop-item" id="shop-3"></div>'
    shopContainer.innerHTML += '<div class="shop-item" id="shop-2"></div>'
    shopContainer.innerHTML += '<div class="shop-item" id="shop-1"></div>'
}

function renderItems(){
    function showItem6(){

        let shop6 = document.querySelector('#shop-6')

        shop6.innerHTML += '<div class="item-img">'  + '<img src="../images/products/deepfrying_pan.jpg" alt="May be an image of a metal pan which is slightly rusty and has many holes in it, like ones of a deep frying pan.">' + '</div>'
        shop6.innerHTML += '<div class="item-header">' +  "<h3>Deep frying pan</h3>" + '</div>'
        shop6.innerHTML += '<div class="item-tags">' +  '<span>' + "$4.99 " + '</span>' + '<span>' + typeTags[4] + '</span>' + '</div>'
        
        return shop6
    }

    function showItem5(){

        let shop5 = document.querySelector('#shop-5')

        shop5.innerHTML += '<div class="item-img">'  + '<img src="../images/products/mini_dresser.jpg" alt="May be an image of a turqoise chair and table with a white pillow resting in the chair with a red heart printed on it.">' + '</div>'
        shop5.innerHTML += '<div class="item-header">' +  "<h3>Mini-dresser</h3>" + '</div>'
        shop5.innerHTML += '<div class="item-tags">' +  '<span>' + "$9.99 " + '</span>' + '<span>' + typeTags[4] + '</span>' + '</div>'
        
        return shop5
    }

    function showItem4(){

        let shop4 = document.querySelector('#shop-4')

        shop4.innerHTML += '<div class="item-img">'  + '<img src="../images/products/white_wood_table.jpg" alt="May be an image of a white, wooden table decorated with various small items, including an elephant and books.">' + '</div>'
        shop4.innerHTML += '<div class="item-header">' +  "<h3>White wooden table</h3>" + '</div>'
        shop4.innerHTML += '<div class="item-tags">' +  '<span>' + "$49.99 " + '</span>' + '<span>' + typeTags[0] + '</span>' + '</div>'
        
        return shop4
    }

    function showItem3(){

        let shop3 = document.querySelector('#shop-3')

        shop3.innerHTML += '<div class="item-img">'  + '<img src="../images/products/musician.jpg" alt="May be an image of a sign reading music is life, hung on a wooden, white wall..">' + '</div>'
        shop3.innerHTML += '<div class="item-header">' +  '<h3>"Music is life" sign</h3>' + '</div>'
        shop3.innerHTML += '<div class="item-tags">' +  '<span>' + "$24.99 " + '</span>' + '<span>' + typeTags[1] + '</span>' + '</div>'
        
        return shop3
    }

    function showItem2(){

        let shop2 = document.querySelector('#shop-2')

        shop2.innerHTML += '<div class="item-img">'  + '<img src="../images/products/butter_churn.jpg" alt="May be an image of an old-fashioned, wooden, butter churn.">' + '</div>'
        shop2.innerHTML += '<div class="item-header">' +  "<h3>Butter churn</h3>" + '</div>'
        shop2.innerHTML += '<div class="item-tags">' +  '<span>' + "$55.99 " + '</span>' + '<span>' + typeTags[5] + '</span>' + '</div>'
        
        return shop2
    }

    function showItem1(){

        let shop1 = document.querySelector('#shop-1')

        shop1.innerHTML += '<div class="item-img">'  + '<img src="../images/products/flower_painting.jpg" alt="May be an image of a flower painting, titled Le bouqet bleu.">' + '</div>'
        shop1.innerHTML += '<div class="item-header">' +  "<h3>Le Bouquet Bleu</h3>" + '</div>'
        shop1.innerHTML += '<div class="item-tags">' +  '<span>' + "$34.99" + '</span>' + '<span>' + typeTags[1] + '</span>' + '</div>'
        
        return shop1
    }

    showItem6()
    showItem5()
    showItem4()
    showItem3()
    showItem2()
    showItem1()
}

setShopInnerHTML()
renderItems()