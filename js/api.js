document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container")
    let cardsHtml = ""

    fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((publicaciones) => {
            publicaciones.map((publicacion) => {
                const cardsTemplate = document.addEventListener("DOMContentLoaded", ()=>{
                    const cardsContainer = document.getElementById("cards-container")
                    let cardsHtml = ""
                
                    fetch("http://localhost:3000/posts")
                        .then((response )=> response.json())
                        .then((publicaciones)=>{
                            publicaciones.map((publicacion)=>{
                                const cardTemplate = `<div class="p-0 container-fluid rounded-4 border border-secondary-subtle">
                                <div class="p-0 container-fluid casiopea_art__main-post-1">
                                    <div class="p-0 container rounded-top-4 casiopea_art_post-one">
                                        <a href="/error-404.html">
                                            <img class="img-fluid p-0 rounded-top-4 d-flex align-items-end" src="/img-main/main-post.webp" alt="image-post">
                                        </a>
                                    </div>
                                </div>
                                <!-- INFORMATION MAIN POST-->
                                <div class="container p-0 pb-3 mb-0 bg-white rounded-bottom-4 casiopea_art__main-post-2">
                                    <div class="casiopea_art__main">
                                        <div class="px-3 container casiopea_art__main-info">
                                            <div class="px-0 mx-0 container casiopea_art__article-info">
                                                <div class="px-0 pt-2 pb-2 d-flex flex-row container casiopea_art__user">
                                                    <div class="pt-2 ocasiopea__img-box">
                                                        <img class="rounded-circle casiopea__img-user" src="/img-main/user_1.png" alt="user_1">
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-between container casiopea_art__article-small-inf">
                                                        <div class="fs-6 casiopea_art__information_name">
                                                            <p class="pb-0 ">${publicacion.name}}</p>
                                                        </div>
                                                        <div class="fs-6 casiopea_art__information_date">
                                                            <p class="fs-6 casiopea_art__name">May 15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- TITLE POST AND LINKS -->
                                    <div class="p-1 px-3 container lepus_art__main_post-2">
                                        <a class="link-h2" href="/error-404.html"><H2 class="lepus_art__title-article">What Are *args And **kwargs In Python - Guide With Examples</H2></a> 
                                        <div class="px-0 d-flex flex-row lepus_art__cat--tags">
                                            <a class="lepus_lnk-cat-tag" href="/error-404.html">
                                                <span class="lepus__cat--tag-p">#</span>python</a>
                                            <a class="lepus_lnk-cat-tag" href="/error-404.html">
                                                <span class="lepus__cat--tag-pr">#</span>programming</a>
                                            <a class="lepus_lnk-cat-tag" href="/error-404.html">
                                                <span class="lepus__cat--tag-tut">#</span>tutorial</a>
                                            <a class="lepus_lnk-cat-tag" href="/error-404.html">
                                                <span class="lepus__cat--tag-fun">#</span>function</a>
                                        </div>
                                        <!-- EMOJIS, COMMENTS, BOOKMARK -->
                                        <div class="px-1 py-2 pt-4 container d-flex justify-content-between Draco_art__emo-com-book">
                                            <div class="p-0 d-flex align-items-center Draco_art__emojis-fun">
                                              <div class="dreco_cont_hov ps-2 pe-2 py-1 d-flex">
                                                <span class="object-fit-scale dreco_box align-items-center rounded-circle bg-secondary-subtle">
                                                    <img class="object-fit-none" src="/img-main/unicorn.svg"  alt="emoji-unicorn">
                                                </span>
                                                <span class="dreco_box rounded-circle bg-secondary-subtle">
                                                    <img class="object-fit-none" src="/img-main/fire.svg" alt="emoji-fire">
                                                </span>
                                                <span class="dreco_box align-items-center rounded-circle bg-secondary-subtle">
                                                    <img class="object-fit-none" src="/img-main/spark-heart.svg" alt="emoji-heart">
                                                </span>
                                                <span class="px-4 pe-2 list-inline-item">
                                                    8
                                                </span>
                                              </div>
                                              <div class="dreco_cont_hov-com py-1 d-flex">
                                                <span>
                                                    <img class="px-1" src="/img-main/comment.svg" alt="icon_comments"> 
                                                </span>
                                                <span class="pe-2">
                                                    10 
                                                </span>
                                              </div>
                                                </div>
                                                <div class="p-0 px-1 container d-flex align-items-center justify-content-end Draco_art__emojis-book">
                                                    <span class="px-4">1 min read</span>
                                                    <img class="object-fit-none" src="/img-main/bookmark.svg" alt="icon_book">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>`
                                  cardsHtml += cardTemplate
                            } )
                            cardsContainer.innerHTML = cardsHtml
                        }) 
                        .catch((error)=>{
                            console.log(error);
                            cardsContainer.innerHTML = cardsHtml
                        })
                
                })
                 // concatenacion de string
                cardsHtml += cardsTemplate
            })
            // Aqui se inserta el codigo html programaticamente
            cardsContainer.innerHTML = cardsHtml  
        })
        .catch((error) => {
            console.log(error)
             // Aqui se inserta el codigo html programaticamente
            cardsContainer.innerHTML = cardsHtml
        })

    
   
   
})