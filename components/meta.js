// export const getMeta = () => {
//     // คำนวณระดับของโฟลเดอร์ที่หน้าเว็บอยู่
//     const depth = window.location.pathname.split('/').filter(Boolean).length;

//     // คำนวณ `basePath` อัตโนมัติ
//     const basePath = depth > 1 ? "../".repeat(depth - 1) : "";

//     return /* html */`
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//         <!-- Favicon -->
//         <link rel="apple-touch-icon" sizes="180x180" href="${basePath}public/favicon/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="${basePath}public/favicon/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="${basePath}public/favicon/favicon-16x16.png" />

//         <!-- CSS -->
//         <link rel="stylesheet" href="${basePath}assets/styles/index.css">

//         <!-- SEO Meta Tags -->
//         <meta name="description" content="This is an awesome website built with ES Modules." />
//         <meta name="keywords" content="web development, javascript, es modules, meta tags" />
//         <meta name="author" content="Your Name" />

//         <!-- Open Graph / Facebook -->
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="My Website" />
//         <meta property="og:description" content="This is an awesome website built with ES Modules." />
//         <meta property="og:image" content="${basePath}public/images/og-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com" />

//         <!-- Twitter Meta Tags -->
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="My Website" />
//         <meta name="twitter:description" content="This is an awesome website built with ES Modules." />
//         <meta name="twitter:image" content="${basePath}public/images/og-image.jpg" />

//         <!-- Additional Meta -->
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     `;
// };
import { getBasePath } from "../utils/index.js"

export const getMeta = () => {
    const basePath = getBasePath();

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

