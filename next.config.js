module.exports = {
    env: {
        NEXT_PUBLIC_BACKEND_URL: "http://localhost:5000",
    },
    reactStrictMode: true,
};

// auth-frontend/styles/globals.css (Global Styles)
@tailwind base;
@tailwind components;
@tailwind utilities;

// auth-frontend/.env.local (Environment Variables)
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

// auth-frontend/.gitignore (Ignore Sensitive Files)
node_modules/
.env.local
