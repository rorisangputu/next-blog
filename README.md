```markdown
# MDX Blog with Next.js

A modern developer blog built with Next.js 15, MDX for content, and NextAuth for authentication.

## 🚀 Features

- ✍️ Write blog posts using `.mdx` files
- 🧠 Syntax highlighting & code blocks
- 🧾 Dynamic routing based on blog slug
- 🔐 Authentication with NextAuth (Google Provider)
- 🗂 Organized folder structure for scalability
- 🧩 Custom components within MDX

## 📁 Folder Structure

```

src/
├── app/               # Next.js 15 app directory
│   └── blog/          # Dynamic blog routes
├── components/        # UI components (e.g., Navbar, Footer, MDXRenderer)
├── content/           # MDX blog posts live here
├── lib/               # Utilities like getPost, getAllPosts
├── styles/            # Tailwind or global CSS
└── pages/api/auth/    # NextAuth API route

````

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **MDX** for content
- **NextAuth** for authentication
- **Tailwind CSS** for styling
- **Prism.js** or **rehype-pretty-code** for code block styling

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mdx-blog.git
cd mdx-blog
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

> Get your Google credentials from: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

### 4. Run the development server

```bash
npm run dev
```

### 5. Create blog posts

Add your MDX files to the `content/` folder.

Example:

```mdx
---
title: "My First Blog Post"
slug: "my-first-post"
date: "2024-06-01"
---

# Hello World

This is a post written in MDX!
```

## 📦 Deploying

You can deploy this project on **Vercel**:

```bash
vercel
```
