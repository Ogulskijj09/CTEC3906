var menutoggle = 0;
function hiddenMenu() {

	if (menutoggle == 1) {
		document.getElementById("menubar").style.display = "none";
		menutoggle--;
		}

	else {
		document.getElementById("menubar").style.display = "block";
		menutoggle++;
		console.log(menutoggle);
		}
}



