var blogContainer = document.getElementById('blog-container')
var templatePost = document.getElementById('blog-post');

templatePost.style.display = "none"

function cloneNode61323(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "blog-2")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].id = "date2"
    children[1].id = "tags2"    

    children[2].children[0].id = "header2"
    children[3].children[0].id = "content2"

    children[4].children[0].id = "href2"
    children[4].children[0].children[0].id = "link2"
    

    date2.textContent = "June 13, 2023 · 1 min read"
    tags2.textContent = allTags[2]
    
    header2.textContent = "Snoopy bookends"
    content2.textContent = "Sometimes you come across a treasure that you just need to keep for yourself - like these vintage hand carved Snoopy bookends."

    href2.setAttribute('href', 'images/products/snoopy.jpg')
    link2.textContent = "See attached image"
}
cloneNode61323()

function cloneNode61223(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "blog-1")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].id = "date1"
    children[1].id = "tags1"    

    children[2].children[0].id = "header1"
    children[3].children[0].id = "content1"

    children[4].children[0].id = "href1"
    children[4].children[0].children[0].id = "link1"

    date1.textContent = "June 12, 2023 · 1 min read"
    tags1.textContent = allTags[0]
    
    header1.textContent = "Upcycled wooden camera"
    content1.textContent = "It's been a little while since we've done an upcycled wooden camera. This one was dropped off to the booth yesterday."

    href1.setAttribute('href', 'images/products/upcycled_camera.jpg')
    link1.textContent = "See attached image"
}
cloneNode61223()

function cloneNode61123(){
    //creating blog
    var newPost = templatePost.cloneNode(true);
    newPost.setAttribute('id', "blog-0")

    newPost.style.display = "block"

    blogContainer.appendChild(newPost);

    //blog content
    let children = newPost.children
    children[0].id = "date0"
    children[1].id = "tags0"    
    children[2].children[0].id = "header0"
    children[3].children[0].id = "content0"
    children[4].children[0].id = "href0"
    children[4].children[0].children[0].id = "link0"

    date0.textContent = "June 11, 2023 · 1 min read"
    tags0.textContent = allTags[0]
    
    header0.textContent = "Handcrafted wood table"
    content0.textContent = "Dropped this gorgeous handcrafted piece off at the booth today. I love all the character on the boards.\nIt's made from reclaimed wood and would make a great bar, island, or shelving system. I have a similar one that we made a few years ago that is used as a coffee bar."

    href0.setAttribute('href', 'images/products/upcycled_table.jpg')
    link0.textContent = "See attached image"
}
cloneNode61123()




