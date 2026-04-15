# Deploy IQ Challenge (public site)

## Why Cloudflare Pages (recommended)

- **Global CDN** — fast worldwide (good for ads, SEO, affiliate traffic).
- **Free tier** — generous for a static site like this.
- **Free HTTPS** and automatic certificates.
- **Git integration** — every `git push` to your main branch can trigger a new deploy (fix bugs anytime).
- **Free subdomain** — e.g. `iq-challenge.pages.dev` (you choose the name once in the dashboard).

**Reality check on “nice + free domain”:**  
A short **`.com` / `.io`** name costs roughly **€10–15/year** at registrars (Cloudflare Registrar, Namecheap, etc.). What stays **100% free** is a **`your-name.pages.dev`** subdomain. You can add a paid domain later on the same project in one click.

---

## One-time setup (you do this in the browser)

### 1) Put the site on GitHub

1. Create a **new empty repository** on GitHub (e.g. `iq-challenge`). Do **not** add README/license if you will push an existing folder.
2. In PowerShell, from **this folder** (`iq-test`):

   ```powershell
   cd "c:\Users\marius.semeniuc\Desktop\Marius all\Marius all\Cursor\iq-test"
   git init
   git add -A
   git commit -m "Initial site for Cloudflare Pages"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/iq-challenge.git
   git push -u origin main
   ```

   Replace `YOUR_USER/iq-challenge` with your repo URL.

### 2) Connect Cloudflare Pages

1. Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize **GitHub** and select the repository.
4. **Build settings** (important for this project):

   | Setting            | Value        |
   |--------------------|-------------|
   | Framework preset   | None        |
   | Build command      | *(leave empty)* |
   | Build output directory | `/` **or** `.` (root of the repo) |

   Your `index.html` must sit at the **root** of what Cloudflare publishes. If the GitHub repo **only** contains the contents of `iq-test`, root is correct.

5. **Save and Deploy**. After ~1 minute you get a URL like `https://xxxxx.pages.dev`.

6. **Custom Pages subdomain:** Project → **Custom domains** → set a nicer **`something.pages.dev`** name if offered in the Pages project settings (wording may vary; you always get at least one `*.pages.dev` hostname).

### 3) Later: your own domain (optional, paid)

1. Buy a domain (Cloudflare Registrar, Namecheap, etc.).
2. In Cloudflare Pages: **Custom domains** → **Set up a custom domain** → follow DNS steps (often “add CNAME to `yourdomain.com`”).

---

## Updating the site anytime

1. Edit files locally (or in GitHub’s web editor).
2. Commit and push to **`main`** (or the branch you connected):

   ```powershell
   git add -A
   git commit -m "Describe your fix"
   git push
   ```

Cloudflare builds and publishes automatically (usually under a minute). Roll back in the Pages dashboard via **Deployments** if needed.

---

## Paid promotion & affiliate links

- No special host is required: add **Google Ads**, **Meta Pixel**, affiliate scripts, etc. by editing `index.html` or `app.js` (or small includes later).
- For **measurement**, use **Cloudflare Web Analytics** (free, cookieless): [Web Analytics](https://dash.cloudflare.com/?to=/:account/web-analytics) → **Add a site** → hostname must match your live URL (e.g. `iq-challenge.your-subdomain.workers.dev`) → **Manage site** → copy the token into `CF_WEB_ANALYTICS_TOKEN` in `index.html` (before `</body>`), then deploy.

---

## Alternative: Netlify

This repo already includes `netlify.toml`. You can **drag-and-drop** the `iq-test` folder at [app.netlify.com/drop](https://app.netlify.com/drop) or connect the same GitHub repo with **publish directory** = `.` and no build command. Free subdomain: `*.netlify.app`.

Cloudflare Pages is preferred here for **edge reach** and **bandwidth** on the free tier; both support Git-based deploys.

---

## Local preview before push

```powershell
cd "c:\Users\marius.semeniuc\Desktop\Marius all\Marius all\Cursor\iq-test"
python -m http.server 5500
```

Open `http://127.0.0.1:5500/`.

---

## After your first local commit (automated on this machine)

The `iq-test` folder already has a **`main`** branch with an initial commit (`Initial IQ Challenge site`).

### Push to GitHub (GitHub CLI — recommended)

1. Install GitHub CLI if needed: `winget install GitHub.cli`
2. In **PowerShell** (from any folder):

   ```powershell
   gh auth login
   ```

   Follow the prompts (browser login is easiest).

3. From **`iq-test`**, run:

   ```powershell
   cd "c:\Users\marius.semeniuc\Desktop\Marius all\Marius all\Cursor\iq-test"
   .\complete-github-push.ps1
   ```

   By default it creates a **public** repo named **`iq-challenge-site`** and pushes `main`. If that name is taken on GitHub, set another name first:

   ```powershell
   $env:GITHUB_REPO_NAME = "your-unique-name"
   .\complete-github-push.ps1
   ```

   If you already created an **empty** repo on the website and only need to push:

   ```powershell
   git remote add origin https://github.com/USER/REPO.git
   git push -u origin main
   ```

### Cloudflare Pages (still in the browser)

After the code is on GitHub, continue with **Pasul 5** above: connect the repository in Cloudflare Pages, **no build command**, output directory **`/`** or **`.`**.
