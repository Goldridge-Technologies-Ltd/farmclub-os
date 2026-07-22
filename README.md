# FARMCLUB OS — Ready-to-Deploy Website

This package contains a complete responsive static website for FARMCLUB OS.

## Pages
- `index.html` — Home
- `about.html` — About FARMCLUB OS
- `platform.html` — Platform
- `hub.html` — Experience & Innovation Hub
- `knowledge-centre.html` — Knowledge Centre
- `investors.html` — Investors + Investor Access request
- `contact.html` — Contact

## Quick preview
Open `index.html` in a browser.

For the best local preview, run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment
### Netlify (recommended for immediate form handling)
1. Log in to Netlify.
2. Drag this entire folder into Netlify Drop, or connect it to a Git repository.
3. Netlify automatically detects the contact and investor forms because they use `data-netlify="true"`.
4. Configure email notifications for the `contact` and `investor-access` forms in Netlify.
5. Point `farmclubos.com` and `www.farmclubos.com` to the deployed site.

### cPanel / traditional hosting
Upload every file and folder into `public_html`. The website will work immediately. The email and WhatsApp links will work, but form submissions require a form backend. You may connect Formspree, Basin, your host's PHP mailer, or another approved provider.

## Important production settings
- Public location is consistently shown as **Lagos State, Nigeria.**
- No speculative partner logos, unsupported testimonials or invented traction figures are included.
- The Investors page is public; detailed investor materials are protected behind a request form.
- The seed target is shown as **US$250,000**.
- Real farm photographs supplied for the project are included in `assets/images/`.

## Customisation
- Main styling: `assets/css/styles.css`
- Navigation, investor modal and form preview behaviour: `assets/js/main.js`
- Logo: `assets/icons/logo.svg`

## Before launch
- Confirm that `hello@farmclubos.com` and `partners@farmclubos.com` are active.
- Configure Netlify form notifications or your preferred form backend.
- Add final Privacy Policy and Terms of Service pages when legal text is approved.
- Replace or add Knowledge Centre articles through future CMS integration.
