// landing page

// have logo appear upon scrolling

window.addEventListener("scroll", onScroll);

function onScroll(evt) {

	var logo = document.querySelector("#logo");
	var y = document.scrollingElement.scrollTop;

	if (y >= 300) {
		logo.classList.add('show');
	} else {
		logo.classList.remove('show');
	}
}

// past work modals

// Get the modal
var knittedJoysModal = document.getElementById('knitted-joys-modal');

var breakthroughGbModal = document.getElementById('breakthrough-gb-modal');
var wConnectionModal = document.getElementById('w-connection-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var knittedJoysBtn = document.getElementById('knitted-joys-trigger');

var breakthroughGbBtn = document.getElementById('breakthrough-gb-trigger');
var wConnectionBtn = document.getElementById('w-connection-trigger');

knittedJoysBtn.onclick = function(){
    knittedJoysModal.style.display = "block";
}

breakthroughGbBtn.onclick = function(){
	breakthroughGbModal.style.display = "block";
}

wConnectionBtn.onclick = function(){
	wConnectionModal.style.display = "block";
}

// Get the <span> element that closes the modal
var knittedJoysSpan = document.getElementsByClassName("close")[0];

var breakthroughGbSpan = document.getElementsByClassName("close")[1];

var wConnectionSpan = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal

knittedJoysSpan.onclick = function() { 
 	knittedJoysModal.style.display = "none";
}

breakthroughGbSpan.onclick = function() {
	breakthroughGbModal.style.display = "none";
}

wConnectionSpan.onclick = function() {
	wConnectionModal.style.display = "none";
}
