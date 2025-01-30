import { parseJwt } from "../../utils/index.js";

console.log("...login page...");

// ✅ จำลองการเรียก API (Mock API)
async function login(username, password) {
    const fakeApiResponse = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsIm5hbWUiOiJKb2huIERvZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NDM4MjAwMH0.r9aTtvhONR2QpZJnZm1TMBMeJvUyUXmU_Y82YQ7u3_M"
    };

    // ✅ บันทึก Token ลง LocalStorage
    localStorage.setItem("jwt", fakeApiResponse.token);
    console.log("Login Successful! Token Saved.");

    return fakeApiResponse.token;
}

// ✅ จัดการฟอร์ม Login
export async function handleLogin(event) {
    event.preventDefault(); // ป้องกันฟอร์มรีเฟรชหน้า
    const formData = Object.fromEntries(new FormData(event.target));
    console.log("formData:", formData);

    // ✅ เรียก API และบันทึก Token
    const token = await login(formData.username, formData.password);

    // ✅ ดึงข้อมูลจาก JWT
    const userData = parseJwt(token);
    console.log("Decoded User:", userData);

    // ✅ แสดงข้อมูลผู้ใช้ในหน้าเว็บ
    document.querySelector(".result").textContent = JSON.stringify(userData, null, 2);

}

// ✅ ตรวจสอบว่าเคยล็อกอินแล้วหรือไม่
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("jwt");
    if (token) {
        const userData = parseJwt(token);
        console.log("Already logged in:", userData);
        document.querySelector(".result").textContent = JSON.stringify(userData, null, 2);
    }
});
