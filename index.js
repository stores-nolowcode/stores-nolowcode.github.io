const loadComponent = async (className, file) => {
    const element = document.querySelector(`.${className}`);
    if (!element) return; // ❌ ถ้าไม่มี element ก็ไม่ต้องโหลด

    try {
        const response = await fetch(file);
        if (!response.ok) return; // ❌ ถ้าไฟล์โหลดไม่ได้ ก็ไม่ต้องทำอะไร

        element.innerHTML = await response.text();
    } catch (error) {
        // ❌ ไม่ต้องแสดง Error ถ้าไฟล์โหลดไม่ได้
    }
};

// โหลด Header และ Footer
loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
