let featuredItem1 = document.querySelector('#post1')
let image1 = document.querySelector('#image1')
let title1 = document.querySelector('#title1')
let price1 = document.querySelector('#price1')
let   tag1 = document.querySelector  ('#tag1')

let featuredItem2 = document.querySelector('#post2')
let image2 = document.querySelector('#image2')
let title2 = document.querySelector('#title2')
let price2 = document.querySelector('#price2')
let   tag2 = document.querySelector  ('#tag2')

let featuredItem3 = document.querySelector('#post3')
let image3 = document.querySelector('#image3')
let title3 = document.querySelector('#title3')
let price3 = document.querySelector('#price3')
let   tag3 = document.querySelector  ('#tag3')

let allTags = [
    "Furniture",
    "Wall decor",
    "Decoration",
    "Lighting",
    "Other"
]

let featuredItemDesc1 = {
    postImage: "images/products/ironing_board.jpg",
    postTitle: "Refurbished ironing board",
    postPrice: "74.99",
    postTag: allTags[0]
}

let featuredItemDesc2 = {
    postImage: "images/products/tiki_chair.jpg",
    postTitle: "Children's chair",
    postPrice: "29.99",
    postTag: allTags[0]
}

let featuredItemDesc3 = {
    postImage: "images/products/elephant.jpg",
    postTitle: "Elephant",
    postPrice: "14.99",
    postTag: allTags[4]
}


function item1(){
    image1.src         = featuredItemDesc1.postImage
    title1.textContent = featuredItemDesc1.postTitle
    price1.textContent = featuredItemDesc1.postPrice
      tag1.textContent = featuredItemDesc1.postTag
}

function item2(){
    image2.src         = featuredItemDesc2.postImage
    title2.textContent = featuredItemDesc2.postTitle
    price2.textContent = featuredItemDesc2.postPrice
      tag2.textContent = featuredItemDesc2.postTag
}

function item3(){
    image3.src         = featuredItemDesc3.postImage
    title3.textContent = featuredItemDesc3.postTitle
    price3.textContent = featuredItemDesc3.postPrice
      tag3.textContent = featuredItemDesc3.postTag
}

item1()
item2()
item3()

