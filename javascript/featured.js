const featuredContainer = document.querySelector('.featured-container')

const featuredTags = [
    "Furniture",  //0
    "Wall decor", //1
    "Decoration", //2
    "Lighting",   //3
    "Other"       //4
]

function setFeaturedInnerHTML(){
    featuredContainer.innerHTML += '<div class="featured" id="featured-1"></div>'
    featuredContainer.innerHTML += '<div class="featured" id="featured-2"></div>'
    featuredContainer.innerHTML += '<div class="featured" id="featured-3"></div>'
}

function renderFeatured(){
    function showFeatured1(){

        let featured1 = document.querySelector('#featured-1')

        featured1.innerHTML += '<div class="featured-image">   <img src="../images/products/ironing_board.jpg" alt="May be an image of an ironing board refurbished into a table." width="100" height="100"> </div>'
        featured1.innerHTML += '<div class="featured-heading"> <h3>Ironing board table</h3> </div>'
        featured1.innerHTML += '<div class="featured-footer">   <span>$19.99</span>' + '<span>' +" · " +  featuredTags[0] + '</span>' + '</div>'

        return featured1
    }

    function showFeatured2(){

        let featured2 = document.querySelector('#featured-2')

        featured2.innerHTML += '<div class="featured-image">   <img src="../images/products/tiki_chair.jpg" alt="May be an image of a blue chair with flowers painted on it and the chair base is made of straw." width="100" height="100"> </div>'
        featured2.innerHTML += '<div class="featured-heading">' + "<h3>Children's chair</h3>" +  '</div>'
        featured2.innerHTML += '<div class="featured-footer">   <span>$14.99</span>' + '<span>' +" · " +  featuredTags[0] + '</span>' + '</div>'

        return featured2
    }

    function showFeatured3(){

        let featured3 = document.querySelector('#featured-3')

        featured3.innerHTML += '<div class="featured-image">   <img src="../images/products/elephant.jpg" alt="May be an image of a small pink elephant with flowers inside." width="100" height="100"> </div>'
        featured3.innerHTML += '<div class="featured-heading"> <h3>Pink elephant</h3> </div>'
        featured3.innerHTML += '<div class="featured-footer">   <span>$4.99</span>' + '<span>' +" · " +  featuredTags[0] + '</span>' + '</div>'

        return featured3
    }

    showFeatured1()
    showFeatured2()
    showFeatured3()
}

setFeaturedInnerHTML()
renderFeatured()

