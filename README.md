# Ahmad Nur Kholily — Portfolio Website

## Project structure
- `index.html`: homepage
- `styles.css`: original global stylesheet
- `script.js`: shared site behavior (theme, navigation, scroll reveal, image fallback)
- `css/navbar.css`: shared navbar styling
- `css/theme-contrast.css`: theme contrast adjustments; keeps Ultraman Red `#D92736` and Deep Navy `#142B50`
- `css/*-*.css`: page-specific styles extracted from the corresponding HTML pages
- `js/creative-arts.js` and `js/media-works.js`: page-specific interactions extracted from the HTML pages
- `pages/header.html`: reference fragment for the shared navbar
- `pages/footer.html`: optional footer fragment

## Important notes
1. The original page-specific CSS and JavaScript were moved out of the HTML files and preserved in external files.
2. The same navbar markup is used on all inner pages. The homepage keeps its section-anchor navigation.
3. The ZIP contains the image files that were present in the uploaded archive. Some portfolio image paths in the HTML are intended placeholders and do not yet have corresponding image files. The shared script now hides missing images and applies a branded gradient placeholder instead of showing a broken-image icon. Add your actual artwork/photos later using the filenames already referenced in the HTML, or update those paths.
4. Keep the relative paths intact when uploading to GitHub Pages. Open `index.html` to start the site.


## Portfolio page hero consistency
The Creative Arts, Media Works, and Apps Development pages now use the same page-intro structure and typography. Only the portfolio number, title, and descriptive paragraph differ. Shared hero spacing and typography follow the Creative Arts template.
