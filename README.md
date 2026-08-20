# Sweya Pharmaceutical Limited — Website

Static website for **Sweya Pharmaceutical Limited**, a pharmaceutical and
healthcare supply company based in Mwanza, Tanzania.

Built with plain HTML, CSS and vanilla JavaScript — no build step, no
framework, no dependencies.

## Structure

```
index.html        Page markup (all sections)
css/style.css      Design tokens + all styling
js/config.js       All editable business data (name, contact info,
                   products, services, team, branches, etc.)
js/main.js         Renders dynamic sections from config.js and wires up
                   navigation, scroll reveal, form validation, etc.
assets/            Logo, favicons, team placeholder image
robots.txt
sitemap.xml
```

## Editing content

Almost everything on the site (business info, phone numbers, email,
WhatsApp, address, navigation, product categories, services, team members,
branches, social links) is controlled from **`js/config.js`**. Edit that
file and reload the page — no other files need to change for routine
content updates.

## Before launch — replace placeholder values

`js/config.js` currently contains placeholder contact details that must be
replaced with real information:

- `business.email`
- `business.phones`
- `business.whatsapp`
- `business.mapEmbedUrl` / `business.mapDirectionsUrl`
- Each entry in `branches[].mapDirectionsUrl` (optional — falls back to a
  Google Maps search link if left blank)

## Running locally

This is a static site — open `index.html` in a browser, or serve the
folder with any static file server, e.g.:

```
python3 -m http.server 8000
```
