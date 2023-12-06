/*
Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.
Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// PARTE DI MILESTONE2
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
function tres(postId) {
    const filteredPosts = posts.filter(post => post.id === parseInt(postId));
    console.log(filteredPosts);

    if (filteredPosts.length > 0) {
        const post = filteredPosts[0]; // Prendi il primo elemento dell'array

        let imgElement;

        if (post.author.image === null) {
            // Se l'immagine è null
            const nome = post.author.name.split(' ').map(nome => nome[0]).join(" ");
            imgElement = `<img  alt="${nome}" class="profile-pic cerchio">`;
        } else {
            // Altrimenti
            imgElement = `<img src="${post.author.image}" alt="${post.author.name}" class="profile-pic">`;
        }

        return imgElement;
    }
}



// MILESTONE 1
posts.forEach((element) => {
    const newelement = `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">${tres(`${parseInt(element.id)}`)}</div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#boh" data-postid="${element.id}" >
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`;
    console.log(parseInt(element.likes))
    document.getElementById("container").innerHTML += newelement;
});


// MILESTONE 2 WITH BONUS 3
const vetLike = [];
const buttonPremuto = document.querySelectorAll('a[data-postid]');
buttonPremuto.forEach(element => {
    element.addEventListener('click',
        function () {
            const postId = element.getAttribute('data-postid');
            const likesz = document.getElementById(`like-counter-${postId}`);
            let contatore;
            if (!(vetLike).includes(postId)) {
                vetLike.push(postId);
                element.classList.add("like-button--liked")
                contatore = likesz.textContent;
                contatore++;
                likesz.textContent = contatore;
                // DEBUG
                // console.log(vetLike);
            }
            else if (vetLike.includes(postId)) {
                vetLike.pop(postId);
                element.classList.remove("like-button--liked")
                contatore = likesz.textContent;
                contatore--;
                likesz.textContent = contatore;
                // DEBUG
                // console.log(vetLike);
            }
            console.log("datapost-ID dei Button con mi piace: ", vetLike);
        }
    );

});


