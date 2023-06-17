var blogContainer = document.getElementById('shop-container')
var templatePost = document.getElementById('shop-item');

templatePost.style.display = "none"

function cloneNodeFish(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "shop-3")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].children[0].id = "image3"
    image3.setAttribute('src', 'images/products/goldfish.jpg')
    image3.setAttribute('alt', "May be an image containing gold-colored metal fish which is hung on a white-colored, wooden board wall.")

    children[1].children[0].id = "header3"
    children[2].id = "tags3"    

    
    children[3].children[0].id = "content3"

    tags3.textContent = priceTags[0]
    
    header3.textContent = "Golden Fish"
    content3.textContent = "Interested in fishing and ocean animals? This golden fish will match nicely with your style."

}
cloneNodeFish()

function cloneNodeTable(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "shop-2")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].children[0].id = "image2"
    image2.setAttribute('src', 'images/products/table_chair.jpg')
    image2.setAttribute('alt', "May be an image containing a teal-blue colored chair and table. A white pillow with a heart knitted onto it sits in the chair. Both table and chair rest on a carpet.")

    children[1].children[0].id = "header2"
    children[2].id = "tags2"    

    
    children[3].children[0].id = "content2"

    tags2.textContent = priceTags[5]
    
    header2.textContent = "Refurbished table"
    content2.textContent = "Looking for a table to stylize your room? This rustic, Mint Julep colored, vintage table and chair collection will fit your room nicely."

}
cloneNodeTable()

function cloneNodeQuoteBlocks(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "shop-1")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].children[0].id = "image1"
    image1.setAttribute('src', 'images/products/quote_blocks.jpg')
    image1.setAttribute('alt', "Pieces of wood with motivational quotes and bible verses imprinted on them using stamps that are shaped like letters.")

    children[1].children[0].id = "header1"
    children[2].id = "tags1"    

    
    children[3].children[0].id = "content1"

    tags1.textContent = priceTags[1]
    
    header1.textContent = "Quote blocks"
    content1.textContent = "Need a little pick-me-up gift for a friend? Or just need a little motivation for yourself? These motivational blocks and bible verses will satisfy your desires."

}
cloneNodeQuoteBlocks()


function cloneNodeFlag(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "shop-0")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].children[0].id = "image0"

    image0.setAttribute('src', 'images/products/flag.jpg')
    image0.setAttribute('alt', "Pieces of wood with motivational quotes and bible verses imprinted on them using stamps that are shaped like letters.")

    children[1].children[0].id = "header0"
    children[2].id = "tags0"    

    
    children[3].children[0].id = "content0"

    tags0.textContent = priceTags[2]
    
    header0.textContent = "American Flag"
    content0.textContent = "Looking for some Fourth of July house decor? This wood flag will gladly and proudly represent the independence of our nation."

}
cloneNodeFlag()




