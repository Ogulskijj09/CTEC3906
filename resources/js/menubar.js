window.onload=function() {

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