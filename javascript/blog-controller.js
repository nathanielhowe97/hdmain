// on booth rest, add <span class="material-symbols-outlined pinned">push_pin</span> in the "blog-dates" section and <span>${categoryTags[9]}</span> in the "blog-tags" section

const blogContainer = document.querySelector('#blog-container')

function setBlogInnerHTML(){
    blogContainer.innerHTML += '<div class="blog-post" id="blog-9"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-8"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-7"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-6"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-5"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-4"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-3"></div>'
    blogContainer.innerHTML += '<div class="blog-post long-head" id="blog-2"></div>'
    blogContainer.innerHTML += '<div class="blog-post long-head" id="blog-1"></div>'

    
}

function renderPosts(){
    function showPost9(){

        let blog9 = document.querySelector('#blog-9')

        blog9.innerHTML += `<div class="blog-dates">    August 8, 2023 · 2 min read <span id="pinned" class="material-symbols-outlined pinned">push_pin</span> </div>`
        blog9.innerHTML += `<div class="blog-tags">     <span>${specialTags[0]}</span> <span>${categoryTags[9]}</span> </div>`
        blog9.innerHTML += `<div class="blog-header">   <h3>Fall booth reset</h3> </div>`
        blog9.innerHTML += `<div class="blog-content">  <p>The fall booth reset is here! As we continue to get deeper into the season, you'll continue seeing some more fall decor start popping up in the booth. Check it out at booth 228 at Defrance Antiques on Beal.</p></div>`
        blog9.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00009.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog9
    }

    function showPost8(){

        let blog8 = document.querySelector('#blog-8')

        blog8.innerHTML += `<div class="blog-dates">    August 5, 2023 · 1 min read </div>`
        blog8.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog8.innerHTML += `<div class="blog-header">   <h3>Wooden jack-o-lanterns</h3> </div>`
        blog8.innerHTML += `<div class="blog-content">  <p>It might be summer outside but it's starting to feel like fall in the workshop today! These cute wooden jack-o-lanterns will soon be arriving at DeFrance Antiques on Beal.</p></div>`
        blog8.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00008.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog8
    }

    function showPost7(){

        let blog7 = document.querySelector('#blog-7')

        blog7.innerHTML += `<div class="blog-dates">    August 2, 2023 · 1 min read </div>`
        blog7.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> <span>${categoryTags[7]}</span> </div>`
        blog7.innerHTML += `<div class="blog-header">   <h3>Wooden dresser</h3> </div>`
        blog7.innerHTML += `<div class="blog-content">  <p>If you're on the hunt for a classic wooden dresser - this beauty will be added to booth 228 at DeFrance Antiques on Beal Friday morning! After sanding this down, I saw the wood was perfectly beautiful and decided to keep her in her glory by just staining with Minwax Early American.</p></div>`
        blog7.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00007.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog7
    }

    function showPost6(){

        let blog6 = document.querySelector('#blog-6')

        blog6.innerHTML += `<div class="blog-dates">    July 12, 2023 · 1 min read </div>`
        blog6.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog6.innerHTML += `<div class="blog-header">   <h3>Snellen Eye Chart</h3> </div>`
        blog6.innerHTML += `<div class="blog-content">  <p>If you're looking for a unique vintage piece to hang on your wall, be sure to head to DeFrance Antiques on Beal - this Snellen Eye Chart might fit your fancy, and is still available as of today!</p></div>`
        blog6.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00006.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog6
    }

    function showPost5(){

        let blog5 = document.querySelector('#blog-5')

        blog5.innerHTML += `<div class="blog-dates">    July 9, 2023 · 1 min read </div>`
        blog5.innerHTML += `<div class="blog-tags"> <span> ${categoryTags[0]} </span> <span>${categoryTags[5]}</span> </div>`
        blog5.innerHTML += `<div class="blog-header">   <h3>Mosaic pieces</h3> </div>`
        blog5.innerHTML += `<div class="blog-content">  <p>Yesterday we worked on a few mosaic pieces that will be hitting the booth soon. Each piece is hand cut, glued down and hand painted.</p> </div>`
        blog5.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00005.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog5
    }

    function showPost4(){

        let blog4 = document.querySelector('#blog-4')

        blog4.innerHTML += `<div class="blog-dates">    June 30, 2023 · 1 min read </div>`
        blog4.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog4.innerHTML += `<div class="blog-header">   <h3>Musical decor</h3> </div>`
        blog4.innerHTML += `<div class="blog-content">  <p>Any musicians out there? Great decor for you! Find them at booth #228 in DeFrance Antiques on Beal.</p> </div>`
        blog4.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00004.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog4
    }

    function showPost3(){

        let blog3 = document.querySelector('#blog-3')

        blog3.innerHTML += `<div class="blog-dates">    June 13, 2023 · 1 min read </div>`
        blog3.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog3.innerHTML += `<div class="blog-header">   <h3>Snoopy bookends</h3> </div>`
        blog3.innerHTML += `<div class="blog-content">  <p>Sometimes you come across a treasure that you just have to keep for yourself - like these vintage hand carved snoopy bookends.</p> </div>`
        blog3.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00003.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog3
    }

    function showPost2(){

        let blog2 = document.querySelector('#blog-2')

        blog2.innerHTML += `<div class="blog-dates">    June 12, 2023 · 1 min read </div>`
        blog2.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog2.innerHTML += `<div class="blog-header long">   <h3>Handcrafted wooden camera</h3> </div>`
        blog2.innerHTML += `<div class="blog-content"> <p>It's been a while since we've done an upcycled wooden camera. This one was dropped off to the booth yesterday.</p> </div>`
        blog2.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00002.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog2
    }

    function showPost1(){

        let blog1 = document.querySelector('#blog-1')

        blog1.innerHTML += `<div class="blog-dates">    June 11, 2023 · 1 min read </div>`
        blog1.innerHTML += `<div class="blog-tags">     <span> ${categoryTags[0]} </span> </div>`
        blog1.innerHTML += `<div class="blog-header long">   <h3>Hancrafted wooden table</h3> </div>`
        blog1.innerHTML += `<div class="blog-content"> <p>Dropped this gorgeous piece off at the booth today. I love all the character in the boards.\n It's made from some refined wood and would make a great bar, island, or shelving system. I have a similar one that we made a while back into a coffee bar.</p> </div>`
        blog1.innerHTML += `<div class="blog-cta">      <a class="view-article" href="articles/article00001.html"> <span class="cta-text cta">Read in full</span> </a> </div>`

        return blog1
    }

    showPost9() //pinned

    showPost8()
    showPost7()
    showPost6()
    showPost5()
    showPost4()
    showPost3()
    showPost2()
    showPost1()
}

setBlogInnerHTML()
renderPosts()







