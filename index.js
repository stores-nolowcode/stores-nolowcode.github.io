import { getHeader } from "./components/header.js";
import { getFooter } from "./components/footer.js";

// ใส่ Header และ Footer ใน DOM
document.querySelector(".header").innerHTML = getHeader();
document.querySelector(".footer").innerHTML = getFooter();
