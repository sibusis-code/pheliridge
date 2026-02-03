# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Create a GitHub Account (if you don't have one)
- Go to github.com
- Sign up for a free account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it: `pheliridge.github.io`
4. Make it public
5. Click "Create repository"

### Step 3: Upload Files
1. Click "Upload files" button
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.github/workflows/deploy.yml` (optional, for auto-deployment)
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository Settings (gear icon)
2. Click "Pages" in the left sidebar
3. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
4. Click "Save"

### Step 5: Wait & Visit
- Wait 1-2 minutes for deployment
- Your site will be live at: `https://pheliridge.github.io`

## Custom Domain Setup (Optional)

To use a custom domain like `pheliridge.org`:

1. **Update DNS Records**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add these DNS records:
     ```
     A Records:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **Configure in GitHub**
   - Repository Settings > Pages
   - Under "Custom domain"
   - Enter: `pheliridge.org`
   - Check "Enforce HTTPS"

3. **Wait for DNS Propagation**
   - Can take up to 24 hours
   - Check status at: https://dns-checker.io

## Updating the Site

### Using GitHub Web Interface
1. Open your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Site automatically updates in 1-2 minutes

### Using Git Command Line
```bash
# Clone the repository
git clone https://github.com/pheliridge/pheliridge.github.io.git
cd pheliridge.github.io

# Make changes to files locally

# Upload changes
git add .
git commit -m "Update website"
git push origin main

# Site updates automatically!
```

## Troubleshooting

**Site not showing up after 2 minutes?**
- Check repository settings > Pages
- Verify branch is set to "main"
- Look for build errors in the repository

**Custom domain not working?**
- DNS changes can take up to 24 hours
- Verify DNS records are correct at dns-checker.io
- Check that HTTPS is enabled in GitHub Pages settings

**Need to add contact form functionality?**
Options:
1. **Formspree** (easiest - no coding needed)
   - Go to formspree.io
   - Connect to your repository
   - Replace form action URL

2. **EmailJS** (free, JavaScript-based)
   - Sign up at emailjs.com
   - Add code snippet to script.js

3. **Custom backend** (most control)
   - Deploy Node.js/Python server
   - Update form to send to your backend

## Security Tips

✅ Keep backups of your files locally
✅ Use strong GitHub password
✅ Enable two-factor authentication
✅ Don't commit sensitive information
✅ Review changes before deploying

## Support

If you need help:
- GitHub Docs: docs.github.com/pages
- GitHub Community: github.community
- Contact: info@pheliridge.org

---

Your website is now ready to impress! 🚀
