import { getBasePath } from "../utils/index.js"

export const getMeta = () => {
    let basePath = getBasePath();

    // ลบ /pages ออกจาก basePath ถ้ามี
    if (basePath.includes('pages/')) {
        basePath = basePath.replace('pages/', '');
    }

    return /* html */ `
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="${basePath}public/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="${basePath}public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="${basePath}public/favicon/favicon-16x16.png" />

        <!-- CSS -->
        <link rel="stylesheet" href="${basePath}assets/styles/index.css">
    `;
};

