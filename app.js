import routes from "./config/routes.js";
import { getBasePath } from "./utils/index.js";

console.log('path: ', "https://stores-nolowcode.github.io/pages/login/?cache=1".includes("pages/"))

// const app = document.querySelector("#app");

// async function loadPage(url) {
//     console.log('🔹 URL ที่กำลังโหลด:', url);
//     history.pushState({}, "", url);
//     const path = window.location.pathname;
//     const basePath = getBasePath();
//     console.log('basePath:', basePath);

//     let matchedRoute = routes.find(route => route.path === path);
//     if (!matchedRoute) {
//         routes.forEach(route => {
//             if (route.children) {
//                 const childRoute = route.children.find(child => `${route.path}${child.path}` === path);
//                 if (childRoute) matchedRoute = childRoute;
//             }
//         });
//     }

//     if (!matchedRoute) {
//         console.error("❌ ไม่พบ Route สำหรับ:", path);
//         app.innerHTML = "<h2>404 - Page Not Found</h2>";
//         return;
//     }

//     console.log('✅ Route ที่ตรงกัน:', matchedRoute);

//     try {
//         const pageModule = await import(`${basePath}${matchedRoute.component}`);
//         console.log('📦 โหลด Component:', pageModule);

//         if (pageModule.getPageContent) {
//             app.innerHTML = pageModule.getPageContent();
            
//             // 🔥 ถ้ามี `onPageLoad()` ให้เรียกใช้งาน
//             if (pageModule.onPageLoad) {
//                 pageModule.onPageLoad();
//             }
//         } else {
//             console.error("❌ Component ไม่มีฟังก์ชัน `getPageContent()`");
//             app.innerHTML = "<h2>Error: Component missing getPageContent()</h2>";
//         }
//     } catch (error) {
//         console.error("❌ Error loading component:", error);
//         app.innerHTML = "<h2>Something went wrong</h2>";
//     }
// }

// // ฟังก์ชันจัดการการเปลี่ยนหน้า
// function handleNavigation(event) {
//     const target = event.target.closest("a[data-link]");
//     if (!target) return;

//     event.preventDefault();
//     const url = target.getAttribute("href");
//     loadPage(url);
// }

// document.addEventListener("click", handleNavigation);
// window.addEventListener("popstate", () => loadPage(window.location.pathname));

// // โหลดหน้าแรกเมื่อเปิดเว็บ
// loadPage(window.location.pathname);
