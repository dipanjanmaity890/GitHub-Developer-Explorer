# GitHub Developer Explorer — Team Collaboration Guide

> **Project:** GitHub Developer Explorer (Multi-Endpoint APIs)  
> **Team Size:** 5 Members  
> **Subject:** Javascript Web Developer (Advance JS) | Batch 1T25B1

---

## Project File Ownership

| File | Who Pushes It |
|---|---|
| `index.html` | **You (Owner)** |
| `css/style.css` | **You (Owner)** |
| `js/state.js` | **You (Owner) — Person 1** |
| `js/helpers.js` | Person 2 |
| `js/api.js` | Person 3 |
| `js/profile.js` | Person 4 |
| `js/repos.js` | Person 5 |

---

## Final Folder Structure

```
GitHub-Developer-Explorer/
├── index.html            ← Owner pushes
├── css/
│   └── style.css         ← Owner pushes
└── js/
    ├── state.js          ← Person 1 (Owner)
    ├── helpers.js        ← Person 2
    ├── api.js            ← Person 3
    ├── profile.js        ← Person 4
    └── repos.js          ← Person 5
```

---

## What Each JS File Does

| File | Person | Responsibility |
|---|---|---|
| `state.js` | Person 1 | Global variables — `allRepos`, `chartInstance`, `LANG_COLORS` |
| `helpers.js` | Person 2 | Utility functions — `fmtNum()`, `timeAgo()`, `updateRateLimit()` |
| `api.js` | Person 3 | API calls — `fetchProfile()`, `fetchRepos()`, `searchUser()` |
| `profile.js` | Person 4 | DOM rendering — `renderProfile()`, `renderStats()` |
| `repos.js` | Person 5 | Chart + repo list — `renderChart()`, `renderRepos()` |

---

---

# PART 1 — OWNER INSTRUCTIONS (You)

## Step 1 — Create the Repository on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon (top right corner)
3. Click **"New repository"**
4. Fill in the details:
   - **Repository name:** `GitHub-Developer-Explorer`
   - **Description:** `Multi-Endpoint GitHub API Project — Advanced JS`
   - **Visibility:** Public or Private (your choice)
5. **Do NOT** check "Add a README file"
6. Click **"Create repository"**

---

## Step 2 — Set Up Git on Your Computer

Open terminal/command prompt inside your project folder and run:

```bash
# Initialize git in your project folder
git init

# Set your name and email (only needed once ever)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## Step 3 — Push YOUR Files (HTML + CSS + state.js)

```bash
# Stage only your 3 files
git add index.html
git add css/style.css
git add js/state.js

# Commit with a message
git commit -m "Initial commit: Add HTML, CSS and state.js"

# Rename branch to main
git branch -M main

# Connect to your GitHub repo (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/GitHub-Developer-Explorer.git

# Push to GitHub
git push -u origin main
```

✅ After this your repo will have `index.html`, `css/style.css` and `js/state.js` on GitHub.

---

## Step 4 — Send Collaboration Invitations to Teammates

1. Go to your repository on GitHub
2. Click **Settings** tab (top menu bar of the repo)
3. Click **Collaborators** in the left sidebar
4. Click **"Add people"** button
5. Search by your teammate's **GitHub username or email**
6. Click **"Add [name] to this repository"**
7. Repeat for all 4 teammates

> Each teammate will receive an **email from GitHub** with an invitation link. They must accept it before they can push.

---

## Step 5 — Merge Teammates' Pull Requests (Your Ongoing Job)

Every time a teammate pushes their file, you will get a notification on GitHub. Here's what to do:

1. Go to your repo on GitHub
2. Click the **"Pull requests"** tab
3. Click on the teammate's pull request
4. Review the file they added
5. Click **"Merge pull request"**
6. Click **"Confirm merge"**

> Repeat this for all 4 teammates as they submit.

---

---

# PART 2 — TEAMMATE INSTRUCTIONS

## For Person 2 — `js/helpers.js`

### Step 1 — Accept the Invitation
Check your email → open the GitHub invitation email → click **"Accept Invitation"**

### Step 2 — Clone the Repository
```bash
git clone https://github.com/OWNER-USERNAME/GitHub-Developer-Explorer.git
cd GitHub-Developer-Explorer
```

### Step 3 — Create Your Branch
```bash
git checkout -b p2/helpers-js
```

### Step 4 — Add Your File
Place your `helpers.js` file inside the `js/` folder, then:
```bash
git add js/helpers.js
git commit -m "Add helper functions: fmtNum, timeAgo, updateRateLimit"
git push origin p2/helpers-js
```

### Step 5 — Raise a Pull Request
1. Go to the repo on GitHub
2. Click **"Compare & pull request"** (yellow banner)
3. Add a short description
4. Click **"Create pull request"**
5. Wait for the owner to merge it ✅

---

## For Person 3 — `js/api.js`

### Step 1 — Accept the Invitation
Check your email → open the GitHub invitation email → click **"Accept Invitation"**

### Step 2 — Clone the Repository
```bash
git clone https://github.com/OWNER-USERNAME/GitHub-Developer-Explorer.git
cd GitHub-Developer-Explorer
```

### Step 3 — Create Your Branch
```bash
git checkout -b p3/api-js
```

### Step 4 — Add Your File
Place your `api.js` file inside the `js/` folder, then:
```bash
git add js/api.js
git commit -m "Add API functions: fetchProfile, fetchRepos, searchUser"
git push origin p3/api-js
```

### Step 5 — Raise a Pull Request
1. Go to the repo on GitHub
2. Click **"Compare & pull request"**
3. Add a short description
4. Click **"Create pull request"**
5. Wait for the owner to merge it ✅

---

## For Person 4 — `js/profile.js`

### Step 1 — Accept the Invitation
Check your email → open the GitHub invitation email → click **"Accept Invitation"**

### Step 2 — Clone the Repository
```bash
git clone https://github.com/OWNER-USERNAME/GitHub-Developer-Explorer.git
cd GitHub-Developer-Explorer
```

### Step 3 — Create Your Branch
```bash
git checkout -b p4/profile-js
```

### Step 4 — Add Your File
Place your `profile.js` file inside the `js/` folder, then:
```bash
git add js/profile.js
git commit -m "Add profile rendering: renderProfile, renderStats"
git push origin p4/profile-js
```

### Step 5 — Raise a Pull Request
1. Go to the repo on GitHub
2. Click **"Compare & pull request"**
3. Add a short description
4. Click **"Create pull request"**
5. Wait for the owner to merge it ✅

---

## For Person 5 — `js/repos.js`

### Step 1 — Accept the Invitation
Check your email → open the GitHub invitation email → click **"Accept Invitation"**

### Step 2 — Clone the Repository
```bash
git clone https://github.com/OWNER-USERNAME/GitHub-Developer-Explorer.git
cd GitHub-Developer-Explorer
```

### Step 3 — Create Your Branch
```bash
git checkout -b p5/repos-js
```

### Step 4 — Add Your File
Place your `repos.js` file inside the `js/` folder, then:
```bash
git add js/repos.js
git commit -m "Add chart and repo list: renderChart, renderRepos"
git push origin p5/repos-js
```

### Step 5 — Raise a Pull Request
1. Go to the repo on GitHub
2. Click **"Compare & pull request"**
3. Add a short description
4. Click **"Create pull request"**
5. Wait for the owner to merge it ✅

---

---

# PART 3 — GIT COMMANDS QUICK REFERENCE

## Most Used Commands

| Command | What it does |
|---|---|
| `git init` | Start a new git project in current folder |
| `git status` | See which files are changed or staged |
| `git add filename` | Stage a specific file for commit |
| `git add .` | Stage ALL changed files |
| `git commit -m "message"` | Save staged files with a message |
| `git push origin branch-name` | Upload your branch to GitHub |
| `git pull origin main` | Download latest changes from GitHub |
| `git checkout -b branch-name` | Create and switch to a new branch |
| `git branch` | List all branches |
| `git log --oneline` | See commit history |
| `git clone URL` | Download a repo from GitHub to your computer |

---

## Golden Rules for This Project

```
✅ DO                                    ❌ DON'T
─────────────────────────────────────    ────────────────────────────────────
Always pull before starting work         Never push directly to main
Push only your assigned file             Never edit someone else's file
Write clear commit messages              Never commit with message "changes"
Create your own branch                   Never work on the main branch
Raise a Pull Request after pushing       Never skip the Pull Request step
```

---

## The Complete Flow (Visual)

```
OWNER
  │
  ├── 1. Creates repo on GitHub
  ├── 2. Pushes index.html + style.css + state.js to main
  ├── 3. Sends invitations to 4 teammates
  │
  │         Person 2          Person 3          Person 4          Person 5
  │         Accepts invite     Accepts invite     Accepts invite     Accepts invite
  │         Clones repo        Clones repo        Clones repo        Clones repo
  │         Creates branch     Creates branch     Creates branch     Creates branch
  │         Adds helpers.js    Adds api.js        Adds profile.js    Adds repos.js
  │         Pushes branch      Pushes branch      Pushes branch      Pushes branch
  │         Opens PR           Opens PR           Opens PR           Opens PR
  │              │                  │                  │                  │
  └──────────────┴──────────────────┴──────────────────┴──────────────────┘
                                    │
                              OWNER reviews
                              and merges all 4 PRs
                                    │
                              ✅ Project Complete
                           All 7 files on GitHub
```

---

## Commit Message Guidelines

Write messages that explain **what** you did:

```bash
# Good ✅
git commit -m "Add global state variables and LANG_COLORS object"
git commit -m "Add fmtNum and timeAgo helper functions"
git commit -m "Add fetchProfile and fetchRepos API functions"
git commit -m "Add renderProfile and renderStats DOM functions"
git commit -m "Add renderChart doughnut chart and renderRepos list"

# Bad ❌
git commit -m "done"
git commit -m "changes"
git commit -m "update"
git commit -m "asdfsdf"
```

---

*Replace `YOUR-USERNAME` and `OWNER-USERNAME` with the actual GitHub username of the repo owner throughout this guide.*
