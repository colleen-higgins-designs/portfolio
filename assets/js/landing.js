// landing page

// have logo appear upon scrolling

window.addEventListener('scroll', onScroll);

function onScroll(evt) {
  var logo = document.querySelector('#logo');
  var y = document.scrollingElement.scrollTop;

  if (y >= 300) {
    logo.classList.add('show');
  } else {
    logo.classList.remove('show');
  }
}

// past work modals

// knitted Joys

// Get the modal
var knittedJoysModal = document.getElementById('knitted-joys-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var knittedJoysBtn = document.getElementById('knitted-joys-trigger');

knittedJoysBtn.onclick = function() {
  knittedJoysModal.style.display = 'block';
};

// Get the <span> element that closes the modal
var knittedJoysSpan = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal

knittedJoysSpan.onclick = function() {
  knittedJoysModal.style.display = 'none';
};

//breakthroughGB

var breakthroughGbModal = document.getElementById('breakthrough-gb-modal');

var breakthroughGbBtn = document.getElementById('breakthrough-gb-trigger');

breakthroughGbBtn.onclick = function() {
  breakthroughGbModal.style.display = 'block';
};

var breakthroughGbSpan = document.getElementsByClassName('close')[1];

breakthroughGbSpan.onclick = function() {
  breakthroughGbModal.style.display = 'none';
};

// w connection

var wConnectionModal = document.getElementById('w-connection-modal');

var wConnectionBtn = document.getElementById('w-connection-trigger');

wConnectionBtn.onclick = function() {
  wConnectionModal.style.display = 'block';
};
var wConnectionSpan = document.getElementsByClassName('close')[2];

wConnectionSpan.onclick = function() {
  wConnectionModal.style.display = 'none';
};

// geller coaching

var gellerCoachingModal = document.getElementById('geller-coaching-modal');

var gellerCoachingBtn = document.getElementById('geller-coaching-trigger');

gellerCoachingBtn.onclick = function() {
  gellerCoachingModal.style.display = 'block';
};

var gellerCoachingSpan = document.getElementsByClassName('close')[3];

gellerCoachingSpan.onclick = function() {
  gellerCoachingModal.style.display = 'none';
};

//from me to you

var fromMeToYouModal = document.getElementById('from-me-to-you-modal');

var fromMeToYouBtn = document.getElementById('from-me-to-you-trigger');

fromMeToYouBtn.onclick = function() {
  fromMeToYouModal.style.display = 'block';
};

var fromMeToYouSpan = document.getElementsByClassName('close')[4];

fromMeToYouSpan.onclick = function() {
  fromMeToYouModal.style.display = 'none';
};

//knitify

var knitifyModal = document.getElementById('knitify-modal');

var knitifyBtn = document.getElementById('knitify-trigger');

knitifyBtn.onclick = function() {
  knitifyModal.style.display = 'block';
};

var knitifySpan = document.getElementsByClassName('close')[5];

knitifySpan.onclick = function() {
  knitifyModal.style.display = 'none';
};

// color i sing

var colorISingModal = document.getElementById('color-i-sing-modal');

var colorISingBtn = document.getElementById('color-i-sing-trigger');

colorISingBtn.onclick = function() {
  colorISingModal.style.display = 'block';
};

var colorISingSpan = document.getElementsByClassName('close')[6];

colorISingSpan.onclick = function() {
  colorISingModal.style.display = 'none';
};
