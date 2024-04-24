function toggleElements() {
  var elements = document.querySelectorAll('.element');
  
  elements.forEach(function(element) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}
