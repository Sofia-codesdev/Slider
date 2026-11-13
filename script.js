let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9oEuU3h0JW6jKPf4ssqt1K-Er0xHqvoKmxqH9QS4rQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BTGFc60zleggjqB9mFue3hf5hrqYDzKCSWHejVBDMg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP693SpfWyfeQBbrECvA-YEuMrYIiQ9XilgNrgXXFbnw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBd9Nxm3Abq5o8XKmwCZiflW0CSu5YnBEGxgEdVApOg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NazcP06ONv9b78CYi_upXwRsumICe_rPo5jEwj4qBg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiKbSAyt26Qi0nEkQbljv8OdvOxWtoX7scvHDUKEInA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyV1Ou9QS2hz_7iema_u2rtwplQCAbXKXkycl1FzIlfw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCTzsOD4ymdQKVfL7wvNFp056JnR6Lt_HCD_AW7yFHA&s=10"]

let button_left= document.getElementById("left");
let button_right=document.getElementById("right");
let image = document.getElementById("image");
let index=0;
// image.src=arr[index];
function showImage(){
    image.src=arr[index];
}
showImage();
function swipeLeft(){
    if(index === 0)
    {
        index=arr.length-1;
        image.src=arr[index]
        return
    }
    image.src=arr[--index]
}
function swipeRight(){
    if(index === arr.length-1)
    {
        index=0
        image.src=arr[index]
        return 
    }
    image.src=arr[++index]
}

function createCircle(){
    
}

button_left.addEventListener('click',swipeLeft);
button_right.addEventListener('click',swipeRight);
