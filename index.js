
// RANDOMIZED TOP BANNER IMAGE 
var randomImg1 = Math.floor((Math.random() * 5)+1);
var bannerImg1 = "Banner_images/img" + randomImg1 + ".png";
document.querySelectorAll(".img-left")[0].setAttribute("src", bannerImg1)

var randomImg2 = Math.floor((Math.random() * 5)+1);
var bannerImg2 = "Banner_images/img" + randomImg2 + ".png";
document.querySelectorAll(".img-right")[0].setAttribute("src", bannerImg2)

// MAKE THE MEMES
const form = document.querySelector("form")
const imgLink = document.querySelector("#img")
const topInput = document.querySelector("#top")
const bottomInput = document.querySelector("#bottom")
const imageArea = document.querySelector("#image-area")
const memes = document.querySelectorAll(".meme-image")


form.addEventListener("submit", function (e) {
    e.preventDefault();

    // validate image url
    if (checkLink(imgLink.value)) {
        alert("Not valid image!");
        imgLink.value = "";
    } else {

    // check for empty fields
    if (topInput.value === "" && bottomInput.value === "") {
        alert("At least one text field required!")
    } else {

    // create the image and text
    const holdingDiv = document.createElement("div")
    holdingDiv.classList.add("holding-div", "col-6")
    imageArea.append(holdingDiv);

    const memeImg = document.createElement("img");
    memeImg.setAttribute("src", imgLink.value);
    memeImg.classList.add("meme-image")
    holdingDiv.append(memeImg);

    const topText = document.createElement("div");
    topText.innerText = topInput.value;
    topText.classList.add("text-overlay", "top-position")
    holdingDiv.append(topText)

    const bottomText = document.createElement("div");
    bottomText.innerText = bottomInput.value;
    bottomText.classList.add("text-overlay", "bottom-position");
    holdingDiv.append(bottomText);
    
    // clear the fields
    imgLink.value = "";
    topInput.value = "";
    bottomInput.value = "";
    }
}
});

// DELETE THE MEMES
imageArea.addEventListener("click", function (e) {
    if (e.target.tagName = "IMG") {
        e.target.parentElement.remove();
    }
});

// CHECK URL
function checkLink(url) {
    let validEnding = ["gif", "jpeg", "jpg", "png"];
    let splitImgLink = url.split(".");

    return !(validEnding.includes(splitImgLink[splitImgLink.length-1]))
}
