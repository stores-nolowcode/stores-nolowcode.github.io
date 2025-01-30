export const getPageContent = () => {
    // คืนค่า HTML (ไม่มี onsubmit="handleLogin(event)")
    return /* html */ `
        <main>
            <h1>Login</h1>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Login</button>
            </form>
        </main>
    `;
};

import { getFormData } from "../../utils/index.js";

// เพิ่ม Event Listener หลังจากที่ DOM ถูกสร้างขึ้น
export const onPageLoad = () => {
    console.log("✅ Login Page Loaded");

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = getFormData(event)
        console.log("formData:", formData);
    });
};
