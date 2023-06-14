function article1(){
    let month = document.querySelector('#month1')
    let day = document.querySelector('#day1')
    let year = document.querySelector('#year1')

    let time = document.querySelector('#time1')

    let tags = document.querySelector('#tag1')

    let header = document.querySelector('#header1')
    let content = document.querySelector('#description1')

    let cta = document.querySelector('#href1')

    month.textContent = "June"
    day.textContent = "12"
    year.textContent = "2023"
    time.textContent = "1"

    tags.textContent = allTags[1]

    header.textContent = "New upcycled wooden camera"
    content.textContent = "It's been a little while since we've done an upcycled wooden camera. This one was dropped off to the booth yesterday."

    cta.textContent = "See attached image"

    let href = "images/products/upcycled_camera.jpg"
    cta.setAttribute('href', href)
}

article1()

function article2(){
    let month = document.querySelector('#month2')
    let day = document.querySelector('#day2')
    let year = document.querySelector('#year2')

    let time = document.querySelector('#time2')

    let tags = document.querySelector('#tag2')

    let header = document.querySelector('#header2')
    let content = document.querySelector('#description2')

    let cta = document.querySelector('#href2')

    month.textContent = "June"
    day.textContent = "11"
    year.textContent = "2023"
    time.textContent = "1"

    tags.textContent = allTags[1]

    header.textContent = "New handcrafted table"
    content.textContent = "Introducing to the booth, this gorgeous piece. Personally, I love the texture in the boards. It is made from reclaimed wood and would make a great bar, island, or shelving system."


    cta.textContent = "See attached image"

    let href = "images/products/table.jpg"
    cta.setAttribute('href', href)
}

article2()

function article3(){
    //      simply adjust the number below here       [for each one]
    let month = document.querySelector('#month3')
    let day = document.querySelector('#day3')
    let year = document.querySelector('#year3')

    let time = document.querySelector('#time3')

    let tags = document.querySelector('#tag3')

    let header = document.querySelector('#header3')
    let content = document.querySelector('#description3')

    let cta = document.querySelector('#href3')

    //change the text   here to adjust the content of the post
    month.textContent = "June"
    day.textContent   = "8"
    year.textContent  = "2023"
    time.textContent  = "1"

    tags.textContent = allTags[1]

    header.textContent = "Quote blocks returning soon"
    content.textContent = "These hanging wooden quote blocks are popular sellers. Each block is hand stamped and at only $5 each they make a great gift for someone who needs a pick me up, or just for yourself. This next round will be hitting the booth tomorrow morning and will feature Bible Verses and encouraging quotes."


    cta.textContent = "See attached image"

    let href = "images/products/quote_blocks.jpg"
    cta.setAttribute('href', href)
}

article3()




