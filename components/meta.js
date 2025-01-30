import { getBasePath } from "../utils/index.js"

export const getMeta = () => {
    let basePath = getBasePath();

    // ตรวจสอบว่าอยู่ใน path ที่มี "/pages/" หรือไม่
    if (window.location.pathname.includes('/pages/')) {
        basePath = window.location.pathname.replace(/\/pages\/.*/, '/');
    }

    return /* html */ `
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="${basePath}public/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="${basePath}public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="${basePath}public/favicon/favicon-16x16.png" />
        
        <!-- Bootstrap 5.3 CDN -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

        <!-- CSS -->
        <link rel="stylesheet" href="${basePath}assets/styles/index.css">

    `;
};
