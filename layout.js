import { getMeta } from "./components/meta.js";
import { getHeader } from "./components/header.js";
import { getFooter } from "./components/footer.js";
// import { getSidebar } from "./components/sidebar.js";

// ใส่ Meta ใน <head>
document.head.innerHTML += getMeta();

// ใส่ Header และ Footer
document.querySelector(".header").innerHTML = getHeader();
// document.querySelector(".sidebar").innerHTML = getSidebar();
document.querySelector(".footer").innerHTML = getFooter();
