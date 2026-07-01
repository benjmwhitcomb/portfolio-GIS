# Benjamin Whitcomb — GIS & Ecology Portfolio

A simple, self-contained static site. No build step, no jQuery, no framework —
just HTML, one CSS file, and a tiny JS file. Works on GitHub Pages as-is.

## Files

```
index.html      Landing page + 10 project tiles
resume.html     Resume
contacts.html   Contact info
css/style.css   All styling (light + dark themes)
js/site.js      Theme toggle + mobile menu
images/favicon  Favicons
```

## Editing project tiles

Open `index.html`. Each project is one `<article class="tile">` block.
There are 10 placeholder tiles. To fill one in:

1. Set the link:  change `href="#"` to your project page (e.g. `href="project1.html"`).
2. Add an image:  replace the `<span class="ph">…</span>` placeholder inside
   `.tile-thumb` with `<img src="images/your-map.jpg" alt="Map of ...">`.
   (Put the image in the `images/` folder first.)
3. Edit the title, description, and tags in `.tile-body`.

To add more than 10 tiles, copy a whole `<article class="tile">…</article>`
block and paste it. The grid reflows automatically.

## Editing the resume

Open `resume.html`. Text is in plain sections (Summary, Work Experience,
Education, Skills). Edit the text directly. The **Download as PDF** button
near the bottom points to a Google Drive link — replace the `href` to update
which file it downloads.

## Theme

The site defaults to the light "paper" theme and remembers the visitor's
choice. Colors live at the top of `css/style.css` under `:root` (light) and
`body.dark` (dark).

## Deploy on GitHub Pages

Push these files to your repo, then in the repo's **Settings → Pages**, set
the source to your `main` branch. The site publishes at
`https://<username>.github.io/<repo>/`.
