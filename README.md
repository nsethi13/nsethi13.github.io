# Nayraa Sethi — professional portfolio

A responsive portfolio in navy blue, gray, and white. Built with HTML, CSS, and JavaScript; no package installation or build is required.

## Preview

Open `index.html` in a browser, or serve this directory with `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Publish on GitHub Pages

Requested website address: `https://nsethi13.github.io/`. This is the publication target; it is not a confirmation that the website is live.

1. Create a GitHub repository. For a main profile website, name it `nsethi13.github.io` under your `nsethi13` GitHub account. A public repository works with GitHub Free.
2. Upload the contents of this directory to the repository root, including `index.html`, `styles.css`, `script.js`, `.nojekyll`, the résumé, and both SVG image files. Keep every file at the repository root so all links work.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then choose `main` and `/(root)`. Save.
5. Wait for GitHub Pages to finish deploying, then open the website URL shown on that page.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Relative asset paths also support a project repository published at `https://nsethi13.github.io/REPOSITORY/`.

## Add the profile photo

There is one profile image slot. The current SVG is explicitly labeled as a placeholder.

1. Place the headshot at `profile.jpg`.
2. In `index.html`, change the image with `id="profile-photo"` to `src="profile.jpg"` and `alt="Portrait of Nayraa Sethi"`.
3. Remove the `<span class="portrait-label">…</span>` element.

A portrait works best with the face near the upper middle; adjust `object-position` for `#profile-photo` in the stylesheet if necessary.

## Content and maintenance

- The name, role, contact details, education, and experience are in `index.html`.
- Project case-study text is in the `projects` object in `script.js`.
- Colors, typography, and responsive layouts are in `styles.css`.
- The résumé is the supplied original Word document, renamed to `Nayraa-Sethi-Resume.docx`. Replace it when updating your résumé, preserving the filename.
- Project summaries are based on the supplied résumé. The workforce grant is described as a proposal; no funding award or implementation is claimed. Abstract project illustrations are decorative, rather than work samples.
- Email and LinkedIn come from the supplied résumé. No GitHub profile URL was supplied, so no GitHub profile link has been invented.
- Google Fonts provides the two fonts; Georgia and Arial are automatic offline fallbacks. No analytics, cookies, contact-form service, or backend is used.

Only publish personal details that you want visitors to see. This website uses your professional email and LinkedIn URL; it omits the résumé’s work-authorization line.
