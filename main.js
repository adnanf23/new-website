const spans = document.querySelectorAll('.proces span')

spans.forEach((span) => {
  span.style.width = span.dataset.width
})