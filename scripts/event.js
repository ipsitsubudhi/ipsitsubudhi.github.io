function getTimestamp() {
  return new Date().toLocaleString();
}

function getElementType(element) {
  if (element.tagName === 'IMG') return 'Image';
  if (element.tagName === 'A') return 'Link';
  if (element.tagName === 'P') return 'Text Paragraph';
  if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') return 'Heading';
  if (element.tagName === 'LI') return 'List Item';
  if (element.tagName === 'BUTTON') return 'Button';
  if (element.tagName === 'SELECT') return 'Dropdown';
  if (element.tagName === 'INPUT') return 'Input Field';
  return element.tagName || 'Unknown Element';
}

// Log click events
document.addEventListener('click', function (e) {
  const target = e.target;
  console.log(`${getTimestamp()}, click, ${getElementType(target)}`);
});

// Log page view
window.addEventListener('load', function () {
  console.log(`${getTimestamp()}, view, Page Loaded`);
});

// Track when sections appear in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`${getTimestamp()}, view, ${getElementType(entry.target)} appeared in view`);
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.section, img, a, p, li, h1, h2, h3').forEach(el => observer.observe(el));

