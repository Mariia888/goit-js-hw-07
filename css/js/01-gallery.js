import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = creatGalleryCards(galleryItems);
    
gallery.insertAdjacentHTML("beforeend", galleryList);

gallery.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.nodeName);

    const instance = basicLightbox.create(`<div class="modal"> <img src="${urlOriginalSizePicture}" alt="Big Pictures"/> </div> `,
        {
            onShow: (instance) => {
                galleryContainer.addEventListener("keydown", onEscapeButton);
            },
            onClose: (instance) => {
                galleryContainer.removeEventListener("keydown", onEscapeButton);
            },
        }
    );
    instance.show();
    function onEscapeButton(evt) {
        if (evt.key === "Escape") {
            instance.close();
        }
    }

    function makeGalleryItems(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return
            `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
        })
            .join("");
    }
}
