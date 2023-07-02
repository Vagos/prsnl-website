let profile_imgs = document.querySelectorAll(".profile img");

function getActiveProfile() {
    for (let profile_img of profile_imgs) {
        if (profile_img.style.display == "inline-block") {
            return profile_img;
        }
    }
    return null;
}

function setRandomPicture() {
    let random_img = profile_imgs[Math.floor(Math.random() * profile_imgs.length)];
    random_img.style.display = "inline-block";
}

setRandomPicture();
