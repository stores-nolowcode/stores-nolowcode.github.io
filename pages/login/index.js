import { parseJwt } from "../../utils/index.js";

console.log("...login page...");

window.handleSubmit = async (event) => {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บ

    const form = event.target; // ดึง <form> ที่ถูก submit
    const data = new FormData(form);
    const formObject = Object.fromEntries(data); // แปลงเป็น object

    console.log(formObject); // แสดงผลในรูปแบบ { username: "...", password: "..." }
};
