const imageCount = 4;
const apiKey = 'OgAQ6-8y5HfoySxLQB4ALafTyU6Ay_slat1a7FKgclc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;

async function getPhotos(){
    try{
        let response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}

getPhotos();

