export const route = () => {
    const url = new URL(window.location.href);
    const cleanHash = window.location.hash.split("?")[0].replace("#", ""); // ตัด query params ออกจาก hash

    return {
        origin: url.origin,      // ต้นทาง เช่น "https://example.com"
        host: url.host,          // โฮสต์ เช่น "example.com:8080"
        hostname: url.hostname,  // โดเมน เช่น "example.com"
        protocol: url.protocol.replace(":", ""), // "https"
        path: url.pathname,      // "/pages/login"
        query: Object.fromEntries(url.searchParams.entries()), // Query Params เป็น Object
        hash: cleanHash, // เอาเฉพาะค่า hash ที่ไม่ติด query params
        full: url.href           // URL เต็ม
    };
};

export const router = ({ path = "/", param = "", query = {}, hash = "" }) => {
    const fullPath = param ? `${path}/${param}` : path;
    const url = new URL(window.location.origin + fullPath);

    // เพิ่ม Query Parameters
    Object.keys(query).forEach(key => url.searchParams.set(key, query[key]));

    // ตั้งค่า Hash ถ้ามี
    if (hash) url.hash = hash;

    // เปลี่ยน URL โดยไม่รีเฟรชหน้า
    window.history.pushState({}, "", url);
};
