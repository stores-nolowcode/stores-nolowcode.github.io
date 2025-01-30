export const showMessage = (message) => {

    let _message
    if (typeof message === "object") {
        _message = JSON.stringify(message);
    }
    document.querySelector(".result").innerHTML = JSON.stringify(message, null, 2);
}

export const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1]; // ดึง Payload (ส่วนที่ 2 ของ JWT)
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Invalid JWT Token:", e);
        return null;
    }
}

export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (!(file instanceof File)) {
            resolve(null); // ถ้าไม่ใช่ไฟล์ ให้คืนค่า null
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file); // อ่านไฟล์เป็น Base64
        reader.onload = () => {
            resolve({
                name: file.name, // ชื่อไฟล์ เช่น "profile.jpg"
                type: file.type, // ประเภทไฟล์ เช่น "image/jpeg"
                base64: reader.result // ข้อมูล Base64
            });
        };
        reader.onerror = (error) => reject(error);
    });
}

export const getFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObject = {};

    let hasFile = false; // ตรวจสอบว่ามีไฟล์หรือไม่
    const fileKeys = []; // เก็บ key ที่เป็นไฟล์

    for (const [key, value] of formData.entries()) {
        if (value instanceof File && value.name) {
            hasFile = true;
            fileKeys.push(key); // บันทึก key ที่เป็นไฟล์
        } else {
            formObject[key] = value; // กรณีค่าไม่ใช่ไฟล์ ให้เก็บตามปกติ
        }
    }

    // ✅ ถ้าไม่มีไฟล์ ให้ return ทันที (ไม่ต้องใช้ async)
    if (!hasFile) {
        return formObject;
    }

    // ✅ ถ้ามีไฟล์ ต้องใช้ async
    return (async () => {
        for (const key of fileKeys) {
            formObject[key] = await fileToBase64(formData.get(key));
        }
        return formObject;
    })();
};
