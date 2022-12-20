import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(".gallery");

const galleryMakeList = galleryItems.map(({original, preview, description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
  </a>
  </div>`).join("");

    
gallery.insertAdjacentHTML("beforeend", galleryMakeList);

gallery.addEventListener("click", getRightClick);

function getRightClick(evt) {
    evt.preventDefault();

    const targetClick = evt.target;
    if (!targetClick.classList.contains("gallery__image")) {
        return;
    }



    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="Big Pictures"/>`,
        {
            onShow: () => {
                document.addEventListener("keydown", onEscapeButton);
                console.log("Відкрили картинку");
            },
            onClose: () => {
                document.removeEventListener("keydown", onEscapeButton);
                console.log("Закрили картинку");
            },
        }
    );
    instance.show();
    function onEscapeButton(evt) {
        if (evt.key === "Escape") {
            instance.close();
        }
    }
}
    

