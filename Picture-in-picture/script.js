const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaSteam() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (e) {
        console.log(e);
    }
}

button.addEventListener('click', async () =>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMediaSteam();