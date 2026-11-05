/* Page-specific JavaScript extracted from media-works.html; original logic preserved. */

      /*
       * Replace the example filenames below with your actual photos.
       * Add or remove image paths as needed.
       */
      const albumData = {
        marching: {
          title: 'Marching Band',
          images: ['../images/media-works/marching-01.jpg', '../images/media-works/marching-02.jpg', '../images/media-works/marching-03.jpg', '../images/media-works/marching-04.jpg'],
        },
        campus: {
          title: 'Campus & Organization',
          images: ['../images/media-works/campus-01.jpg', '../images/media-works/campus-02.jpg', '../images/media-works/campus-03.jpg'],
        },
        photography: {
          title: 'Personal Photography',
          images: ['../images/media-works/photo-01.jpg', '../images/media-works/photo-02.jpg', '../images/media-works/photo-03.jpg'],
        },
        projects: {
          title: 'Creative Projects',
          images: ['../images/media-works/project-01.jpg', '../images/media-works/project-02.jpg', '../images/media-works/project-03.jpg'],
        },
      };

      const albumViewer = document.getElementById('albumViewer');
      const viewerTitle = document.getElementById('viewerTitle');
      const viewerGallery = document.getElementById('viewerGallery');
      const imageLightbox = document.getElementById('imageLightbox');
      const lightboxImage = document.getElementById('lightboxImage');

      document.querySelectorAll('.album-card').forEach((card) => {
        card.addEventListener('click', () => {
          const album = albumData[card.dataset.album];
          if (!album) return;

          viewerTitle.textContent = album.title;
          viewerGallery.innerHTML = '';

          album.images.forEach((src, index) => {
            const image = document.createElement('img');
            image.src = src;
            image.alt = `${album.title} - ${index + 1}`;
            image.loading = 'lazy';
            image.addEventListener('error', () => {
              image.style.display = 'none';
              viewerGallery.classList.add('image-placeholder');
            });

            image.addEventListener('click', () => {
              lightboxImage.src = src;
              imageLightbox.classList.add('active');
              imageLightbox.setAttribute('aria-hidden', 'false');
            });

            viewerGallery.appendChild(image);
          });

          albumViewer.classList.add('active');
          albumViewer.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        });
      });

      function closeLightbox() {
        imageLightbox.classList.remove('active');
        imageLightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
      }

      function closeAlbum() {
        albumViewer.classList.remove('active');
        albumViewer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        closeLightbox();
      }

      document.getElementById('viewerClose').addEventListener('click', closeAlbum);
      document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

      imageLightbox.addEventListener('click', (event) => {
        if (event.target === imageLightbox) closeLightbox();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          if (imageLightbox.classList.contains('active')) {
            closeLightbox();
          } else if (albumViewer.classList.contains('active')) {
            closeAlbum();
          }
        }
      });
    
