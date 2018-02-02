//Modal Time Baby
var modal = document.getElementById('myModal');

// Insert Image into modal
var img = document.getElementById('myImg')
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

// Close elements

var span = document.getElementsByClassName("close")[0];

//click to closed

span.onclick = function(){
	modal.style.display = "none";
}
