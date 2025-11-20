# Complete Deployment Guide for Sutatscode Website

## 🚀 Fastest Method: Vercel (Recommended)

### Why Vercel?
- ✅ Free hosting for personal/business sites
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN for fast loading
- ✅ Automatic deployments from Git
- ✅ Easy custom domain setup

### Step-by-Step Vercel Deployment

#### Method 1: Deploy via GitHub (Best for updates)

**Step 1: Create GitHub Account (if you don't have one)**
- Go to github.com and sign up

**Step 2: Upload Your Website to GitHub**
1. Go to github.com/new
2. Name it "sutatscode-website"
3. Click "Create repository"
4. Download GitHub Desktop from desktop.github.com OR use command line:

```bash
cd sutatscode-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/sutatscode-website.git
git push -u origin main
```

**Step 3: Deploy to Vercel**
1. Go to vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Click "Add New Project"
4. Select "sutatscode-website" from your repositories
5. Click "Deploy"
6. Wait 2-3 minutes - Done! 🎉

Your site will be live at: `https://sutatscode-website.vercel.app`

#### Method 2: Direct Upload to Vercel (Quick & Easy)

1. Zip the entire `sutatscode-website` folder
2. Go to vercel.com and sign up
3. Click "Add New Project"
4. Drag and drop your zip file
5. Click "Deploy"
6. Done! Your site is live!

---

## 🌐 Alternative: Netlify

### Step-by-Step Netlify Deployment

**Step 1: Prepare Your Site**
- Make sure all files are in the `sutatscode-website` folder

**Step 2: Deploy**
1. Go to netlify.com
2. Sign up (you can use email)
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `sutatscode-website` folder
5. Wait 1-2 minutes
6. Your site is live!

Your site will be at: `https://random-name-123.netlify.app`

---

## 🏠 Adding Your Custom Domain (sutatscode.co.uk)

### If you own sutatscode.co.uk:

#### On Vercel:
1. In your Vercel project, click "Settings"
2. Click "Domains"
3. Type "sutatscode.co.uk" and click "Add"
4. Vercel will show you DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add these DNS records:
   - Type: A Record
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

7. Wait 24-48 hours for DNS propagation
8. Your site will be live at sutatscode.co.uk

#### On Netlify:
1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter "sutatscode.co.uk"
4. Netlify will provide DNS instructions
5. Update your domain registrar's DNS records
6. Wait 24-48 hours

---

## 💻 Local Testing (Before Deploy)

Want to see your site on your computer first?

**Step 1: Install Node.js**
- Download from nodejs.org (LTS version)
- Install it

**Step 2: Run Locally**
```bash
# Open terminal/command prompt
cd sutatscode-website

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173`

---

## 🔧 Making Updates After Deployment

### If deployed via GitHub → Vercel:
1. Make changes to your files
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Updated content"
git push
```
3. Vercel automatically rebuilds and deploys!

### If deployed via direct upload:
1. Make changes locally
2. Zip the folder again
3. Go to Vercel/Netlify dashboard
4. Click "Deploy" and upload new version

---

## 📧 Email Configuration

Your contact form currently uses mailto links. For better functionality:

### Option 1: Use Formspree (Easy)
1. Go to formspree.io
2. Sign up and create a form
3. Replace the form action in the code

### Option 2: Use EmailJS (Free)
1. Go to emailjs.com
2. Set up email service
3. Update form handler code

---

## 🎯 SEO & Google Setup

1. **Google Search Console**
   - Go to search.google.com/search-console
   - Add your website
   - Submit sitemap

2. **Google Analytics** (Optional)
   - Go to analytics.google.com
   - Create account and property
   - Add tracking code to index.html

---

## ❓ Troubleshooting

**Site not loading?**
- Check if build was successful in Vercel/Netlify dashboard
- Clear browser cache (Ctrl+Shift+R)

**Styling looks broken?**
- Make sure all files uploaded correctly
- Check browser console for errors (F12)

**Form not working?**
- Mailto links open default email client
- Consider using Formspree or EmailJS for better UX

---

## 📞 Need Help?

Contact: dennis.ehiobu@sutatscode.co.uk

---

## ✅ Checklist

- [ ] Website files in `sutatscode-website` folder
- [ ] Deployed to Vercel or Netlify
- [ ] Custom domain configured (if applicable)
- [ ] Contact form tested
- [ ] All sections reviewed and accurate
- [ ] Mobile responsive checked
- [ ] Shared website link with team/clients

**Estimated Total Time: 10-15 minutes** ⏱️
