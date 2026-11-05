/* Page-specific JavaScript extracted from creative-arts.html; original logic preserved. */

      document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        const lightbox = document.getElementById('galleryLightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxClose = document.getElementById('lightboxClose');

        // FILTER GALLERY
        filterButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (item) {
              item.classList.remove('active');
            });

            button.classList.add('active');

            galleryItems.forEach(function (item) {
              const category = item.dataset.category;

              if (selectedFilter === 'all' || category === selectedFilter) {
                item.classList.remove('hidden');
              } else {
                item.classList.add('hidden');
              }
            });
          });
        });

        // OPEN LIGHTBOX
        galleryItems.forEach(function (item) {
          item.addEventListener('click', function () {
            const image = item.querySelector('.gallery-image img');
            const title = item.querySelector('.gallery-info h3');
            const category = item.querySelector('.gallery-category');

            if (!image) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightboxCaption.textContent = title.textContent + ' — ' + category.textContent;

            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';

            lightboxClose.focus();
          });
        });

        // CLOSE LIGHTBOX
        function closeLightbox() {
          lightbox.classList.remove('open');
          lightboxImage.src = '';

          document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);

        // CLOSE WHEN CLICKING OUTSIDE IMAGE
        lightbox.addEventListener('click', function (event) {
          if (event.target === lightbox) {
            closeLightbox();
          }
        });

        // CLOSE WITH ESCAPE KEY
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
          }
        });
      });
    
