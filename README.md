# Next.js 15 Starter (shadcn) [[LIVE DEMO]( )]


Welcome to the **Next.js 15 Starter** repository! This starter template is built with Next.js 15, React 19, TypeScript 5, Tailwind CSS 3, Shadcn UI, Drizzle ORM and more. It's a complete project setup to help you get started with your Next.js applications.


## 🚀 What's Included

- **Next.js 15 (Stable)**
- **React 19 (Stable)**
- **TypeScript 5**
- **ESLint 9**
- **Prettier 3**
- **Tailwind CSS 3**
- **Shadcn UI**
- **App Directory**
- **System, Light & Dark Mode**
- **Next.js Bundle Analyzer**
- **Dockerfile** with Node.js 22.11.0 (Alpine)
- **VS Code Settings**
- **Drizzle**


## 🏁 Getting Started

### Prerequisites

- **Node.js**: Version 20.18.0 or higher
- **Docker**: For containerized deployment (optional but recommended)

### Installation

1. **Clone the Repository**:


2. **Install Dependencies**:
    ```bash
    npm install
    # or with Yarn
    yarn install
    ```

3. **Run Development Server**:
    ```bash
    npm run dev
    # or with Yarn
    yarn dev
    ```

4. **Build for Production**:
    ```bash
    npm run build
    ```

### 🐳 Docker Setup

To use Docker, make sure Docker is installed on your machine. Then, build and run the Docker container:

```bash
docker build -t nextjs-starter-shadcn .
docker run -p 3000:3000 nextjs-starter-shadcn
```


