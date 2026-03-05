let images = [
"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-Desktop-M365-Icon-Bounce-Premium:VP5-1920x600",
"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP5-1920x600"
];

let i = 0;

setInterval(function(){

    i++;

    if(i >= images.length){
        i = 0;
    }

    document.getElementById("image").src = images[i];

},3000);