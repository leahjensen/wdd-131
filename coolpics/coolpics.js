const menuButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

function toggleMenu() {
    menu.classList.toggle('hide'); 
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
      menu.classList.remove('hide');
  } else {
      menu.classList.add('hide'); 
  }
}

window.addEventListener('resize', handleResize);

handleResize();

function viewerTemplate(imagePath, altText) {
  return `
      <div class="viewer">
          <button class="close-viewer">X</button>
          <img id="viewer-image" src="${imagePath}" alt="${altText}">
      </div>
  `;
}

function viewHandler(event) {
  const clickedImage = event.target;

  if (clickedImage.tagName === 'IMG') {
      const imageSrc = clickedImage.src;
      const imageParts = imageSrc.split("-");

      const fullImagePath = `${imageParts[0]}-full.jpeg`;

      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImagePath, clickedImage.alt));

      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
  }
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove(); 
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

