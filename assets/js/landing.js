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
