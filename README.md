# App Pro Guy Website

Static marketing website for App Pro Guy (`appproguy.com`). The site is currently plain HTML, CSS, and JavaScript with no build step.

## Run Locally

From this folder:

```bash
python3 -m http.server 8000
```

For local testing, open:

```text
http://localhost:8000
http://localhost:8000/pitch.html
http://localhost:8000/solutions.html
http://localhost:8000/services/replace-excel.html
http://localhost:8000/services/command-centre.html
```

Python's built-in local server does not emulate Vercel `cleanUrls`, so clean
paths may 404 locally.

Production/Vercel uses clean URLs:

```text
/pitch
/solutions
/services/replace-excel
/services/command-centre
```

## Deployment

This is a static site hosted on Vercel. The `vercel.json` file enables clean URLs and disables trailing slashes.

## Current Structure

Pages are currently maintained as standalone plain HTML files with inline CSS and JavaScript. Be careful when changing shared navigation, footer content, SEO metadata, or styles because those changes may need to be repeated across multiple files.
