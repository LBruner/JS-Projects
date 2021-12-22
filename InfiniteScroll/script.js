const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');


const imageCount = 5;
const apiKey = 'OgAQ6-8y5HfoySxLQB4ALafTyU6Ay_slat1a7FKgclc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}&orientation=squarish`;

photosArray = [];

let ready = false;
let loadedImages = 0;
let totalImages = 0;

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayImages();
    }
    catch (e) {
        console.log(e);
    }
}

function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function displayImages() {
    loadedImages = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) =>{
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        const img = document.createElement('img');
        img.addEventListener('load', ()=> imageLoaded());
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        img.src = photo.urls.regular;
        item.appendChild(img);
        
        imageContainer.appendChild(item);
    })
}

function imageLoaded()
{
    loadedImages++;
    if(loadedImages ===  totalImages)
    {
        loader.hidden = true;
        ready = true;
        imageCount = 30;
    }
}

window.addEventListener('scroll', ()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800 && ready){
        getPhotos();
        ready = false;
    }
})

getPhotos();

