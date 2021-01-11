var randomImg1 = Math.floor((Math.random() * 5)+1);
var bannerImg1 = "Banner_images/img" + randomImg1 + ".png";
document.querySelectorAll(".img-left")[0].setAttribute("src", bannerImg1)

var randomImg2 = Math.floor((Math.random() * 5)+1);
var bannerImg2 = "Banner_images/img" + randomImg2 + ".png";
document.querySelectorAll(".img-right")[0].setAttribute("src", bannerImg2)
