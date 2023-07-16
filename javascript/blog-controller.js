const blogContainer = document.querySelector('#blog-container')

function setBlogInnerHTML(){
    blogContainer.innerHTML += '<div class="blog-post" id="blog-6"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-5"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-4"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-3"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-2"></div>'
    blogContainer.innerHTML += '<div class="blog-post" id="blog-1"></div>'
}

function renderPosts(){
    function showPost6(){

        let blog6 = document.querySelector('#blog-6')

        blog6.innerHTML += '<div class="blog-dates">    July 12, 2023 · 1 min read </div>'
        blog6.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[5]+ '</span>'  + '</div>'
        blog6.innerHTML += '<div class="blog-header">   <h3>Snellen Eye Chart</h3> </div>'
        blog6.innerHTML += '<div class="blog-content">' + "<p>If you're looking for a unique vintage piece to hang on your wall head to DeFrance Antiques on Beal. This Snellen Eye Chart is still available. The frame is made using legs from an antique ironing board.</p>" + '</div>'
        blog6.innerHTML += '<div class="blog-cta">      <a class="view-img" href="images/products/eye_chart.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog6
    }

    function showPost5(){

        let blog5 = document.querySelector('#blog-5')

        blog5.innerHTML += '<div class="blog-dates">    July 9, 2023 · 1 min read </div>'
        blog5.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[0]+ '</span>' + '<span>' + categoryTags[5] + '</span>' + '</div>'
        blog5.innerHTML += '<div class="blog-header">   <h3>Mosaic pieces</h3> </div>'
        blog5.innerHTML += '<div class="blog-content">  <p>Yesterday we worked on a few mosaic pieces that will be hitting the booth soon. Each piece is hand cut, glued down and hand painted.</p> </div>'
        blog5.innerHTML += '<div class="blog-cta">      <a class="view-img" href="images/products/eye_chart.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog5
    }

    function showPost4(){

        let blog4 = document.querySelector('#blog-4')

        blog4.innerHTML += '<div class="blog-dates">    June 30, 2023 · 1 min read </div>'
        blog4.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[0]+ '</span>'  + '</div>'
        blog4.innerHTML += '<div class="blog-header">   <h3>Musical decor</h3> </div>'
        blog4.innerHTML += '<div class="blog-content">  <p>Any musicians out there? Great decor for you! Find them at booth #228 in DeFrance Antiques on Beal.</p> </div>'
        blog4.innerHTML += '<div class="blog-cta">      <a class="view-img" href="images/products/musician.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog4
    }

    function showPost3(){

        let blog3 = document.querySelector('#blog-3')

        blog3.innerHTML += '<div class="blog-dates">    June 13, 2023 · 1 min read </div>'
        blog3.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[2]+ '</span>'  + '</div>'
        blog3.innerHTML += '<div class="blog-header">   <h3>Snoopy bookends</h3> </div>'
        blog3.innerHTML += '<div class="blog-content">  <p>Sometimes you come across a treasure that you just have to keep for yourself - like these vintage hand carved snoopy bookends.</p> </div>'
        blog3.innerHTML += '<div class="blog-cta">      <a class="view-img" href="../hdmain/images/products/snoopy.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog3
    }

    function showPost2(){

        let blog2 = document.querySelector('#blog-2')

        blog2.innerHTML += '<div class="blog-dates">    June 12, 2023 · 1 min read </div>'
        blog2.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[0]+ '</span>'  + '</div>'
        blog2.innerHTML += '<div class="blog-header long">   <h3>Handcrafted wooden camera</h3> </div>'
        blog2.innerHTML += '<div class="blog-content">' + "<p>It's been a while since we've done an upcycled wooden camera. This one was dropped off to the booth yesterday.</p>"   + ' </div>'
        blog2.innerHTML += '<div class="blog-cta">      <a class="view-img" href="../hdmain/images/products/upcycled_camera.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog2
    }

    function showPost1(){

        let blog1 = document.querySelector('#blog-1')

        blog1.innerHTML += '<div class="blog-dates">    June 11, 2023 · 1 min read </div>'
        blog1.innerHTML += '<div class="blog-tags">' +  '<span>' + categoryTags[0]+ '</span>'  + '</div>'
        blog1.innerHTML += '<div class="blog-header long">   <h3>Hancrafted wooden table</h3> </div>'
        blog1.innerHTML += '<div class="blog-content">' + "<p>Dropped this gorgeous piece off at the booth today. I love all the character in the boards.\n It's made from some refined wood and would make a great bar, island, or shelving system. I have a similar one that we made a while back into a coffee bar..</p>"  + '</div>'
        blog1.innerHTML += '<div class="blog-cta">      <a class="view-img" href="../hdmain/images/products/upcycled_table.jpg" target="_blank"> <span class="cta-text cta">See attached image</span> </a> </div>'

        return blog1
    }

    showPost6()
    showPost5()
    showPost4()
    showPost3()
    showPost2()
    showPost1()
}

setBlogInnerHTML()
renderPosts()







