imgcnt = 0;
texttoggle = 0;

window.onload=function() {
var x = window.matchMedia("(max-width: 999px)");
var leftbtn = document.getElementById("leftnav");
var rightbtn = document.getElementById("rightnav");
var img = document.getElementById("fitpic");
var nametag = document.getElementById("nametag");
var larrow = document.getElementById("la");
var rarrow = document.getElementById("ra");
var expl = document.getElementById("expl");
var mid = document.getElementById("mid");
var leftimage = document.getElementById("limg");
var rightimage = document.getElementById("rimg");
var fittxt = document.getElementById("fittext");
var text1 = "H.A.N.D 100% Lana wool quarterzip <br><br>M&S Longline Blazer <br><br>Stone Island SP jogger <br><br>Mcq x Puma high tops";
var text2 = "Rick owens Sweater <br><br> Rick Owens viscose tee <br><br> Dundop tracksuit bottoms <br><br> Rothco Jungle boots";
var text3 = "Toogood cropped jacket <br><br> FA africa tee <br><br>Prada fur belt <br><br> Stone Island SP linen trousers <br><br> Vans high tops";
var text4 = "Gareth Pugh jacket <br><br> ChefLDN tassle tee <br><br> Vivienne Westwood trousers <br><br> Mcq x Puma high tops";
console.log(imgcnt);

leftbtn.addEventListener("click", function(){

  if (x.matches) {
  expl.style.display = "none";
  }

  texttoggle--;

  if (imgcnt > 0) {
     imgcnt--;
  }

  if (imgcnt == 0) {
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit1.jpg)";
    nametag.innerHTML = "The Expert";
    larrow.style.display = "none";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/1/1.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/1/1.2.jpg)";
    fittxt.innerHTML = text1;
  }

  if (imgcnt == 1){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit2.jpg)";
    nametag.innerHTML = "The Militant";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/2/2.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/2/2.2.jpg)";
    fittxt.innerHTML = text2;
  }

  if (imgcnt == 2){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit3.jpg)";
    nametag.innerHTML = "The Explorer";
    rarrow.style.display = "block";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/3/3.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/3/3.2.jpg)";
    fittxt.innerHTML = text3;
  }

  if (imgcnt == 3){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit4.jpg)";
    nametag.innerHTML = "The Ghost";
    rarrow.style.display = "none";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/4/4.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/4/4.2.jpg)";
    fittxt.innerHTML = text4;
  }

})

mid.addEventListener("click", function(){
  if (x.matches) {
  if (texttoggle === 1) {
    expl.style.display = "none";
    texttoggle--;
  }
   else {
    expl.style.display = "flex";
    texttoggle++;
  }
}
})

rightbtn.addEventListener("click", function(){
  
  if (x.matches) {
  expl.style.display = "none";
  }

  texttoggle--;

  if (imgcnt < 3) {
     imgcnt++;
  }

  if (imgcnt == 3){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit4.jpg)";
    nametag.innerHTML = "The Ghost";
    rarrow.style.display = "none";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/4/4.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/4/4.2.jpg)";
    fittxt.innerHTML = text4;
  }
  if (imgcnt == 2){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit3.jpg)";
    nametag.innerHTML = "The Explorer";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/3/3.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/3/3.2.jpg)";
    fittxt.innerHTML = text3;
  }
  if (imgcnt == 1){
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit2.jpg)";
    nametag.innerHTML = "The Militant";
    larrow.style.display = "block";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/2/2.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/2/2.2.jpg)";
    fittxt.innerHTML = text2;
  }
  if (imgcnt == 0) {
    img.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/fit1.jpg)";
    nametag.innerHTML = "The Expert";
    larrow.style.display = "none";
    leftimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/1/1.1.jpg)";
    rightimage.style.backgroundImage = "url(/CTEC3906/resources/images/lookbook/1/1.2.jpg)";
    fittxt.innerHTML = text1;
  }
})
  
  var bar = document.getElementById("menubar");
var icon = document.getElementById("mbi");
var baropac;
var iconopac;

icon.addEventListener("click", function(){
if (window.getComputedStyle(bar, null).getPropertyValue("display") == "none"){
  iconopac = 1;
    icon.style.opacity = iconopac;
    baropac = 0;
    bar.style.opacity = baropac;

  var fadeOutIcon = setInterval(function(){
    if (icon.style.opacity > 0) {
      iconopac = iconopac - 0.2;
            icon.style.opacity = iconopac;
          } 
        else {
            clearInterval(fadeOutIcon);
            var fadeInBar = setInterval(function(){
              bar.style.display = "block";
        if (bar.style.opacity >= 1) {
                clearInterval(fadeInBar);
              } 
            else {
              baropac = baropac + 0.2;
                bar.style.opacity = baropac;
                iconopac = iconopac + 0.2;
                icon.style.opacity = iconopac;
                console.log("5 " + baropac + " " + iconopac);
          }
        }, 100);
      }
    }, 100);
  }

if (window.getComputedStyle(bar, null).getPropertyValue("display") == "block"){
  baropac = 1;
    bar.style.opacity = baropac;
    iconopac = 1;
    icon.style.opacity = iconopac;
  var fadeOutBar = setInterval(function(){
    if (bar.style.opacity >= 0) {
      baropac = baropac - 0.2;
          bar.style.opacity = baropac;
          iconopac = iconopac - 0.2;
          icon.style.opacity = iconopac;
        }
        else {
        clearInterval(fadeOutBar);
          bar.style.display = "none";
          var fadeInIcon = setInterval(function(){
      if (!icon.style.opacity) {
        iconopac = 0;
              icon.style.opacity = iconopac;
          }
      else if (icon.style.opacity < 1) {
        iconopac = iconopac + 0.2;
              icon.style.opacity = iconopac;
          } 
      else if (bar.style.opacity = 1) {
              clearInterval(fadeInIcon);
          } 
            }, 100);
      }
    }, 100);
  }
})
}
