const storage = {
    /**
     * บันทึกค่าไปยัง LocalStorage หรือ SessionStorage
     * @param {string} key - คีย์ของข้อมูล
     * @param {*} value - ข้อมูลที่ต้องการบันทึก (จะถูกแปลงเป็น JSON)
     * @param {boolean} [session=false] - ถ้า `true` จะบันทึกใน SessionStorage
     */
    setItem: (key, value, session = false) => {
        try {
            const storageType = session ? sessionStorage : localStorage;
            storageType.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting item in storage:", error);
        }
    },

    /**
     * ดึงค่าจาก LocalStorage หรือ SessionStorage
     * @param {string} key - คีย์ของข้อมูล
     * @param {boolean} [session=false] - ถ้า `true` จะดึงจาก SessionStorage
     * @returns {*} ข้อมูลที่ดึงได้ หรือ `null` ถ้าไม่มีข้อมูล
     */
    getItem: (key, session = false) => {
        try {
            const storageType = session ? sessionStorage : localStorage;
            const value = storageType.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error getting item from storage:", error);
            return null;
        }
    },

    /**
     * ลบข้อมูลจาก LocalStorage หรือ SessionStorage
     * @param {string} key - คีย์ของข้อมูลที่ต้องการลบ
     * @param {boolean} [session=false] - ถ้า `true` จะลบจาก SessionStorage
     */
    removeItem: (key, session = false) => {
        try {
            const storageType = session ? sessionStorage : localStorage;
            storageType.removeItem(key);
        } catch (error) {
            console.error("Error removing item from storage:", error);
        }
    },

    /**
     * ล้างข้อมูลทั้งหมดใน LocalStorage หรือ SessionStorage
     * @param {boolean} [session=false] - ถ้า `true` จะล้างข้อมูลใน SessionStorage
     */
    clear: (session = false) => {
        try {
            const storageType = session ? sessionStorage : localStorage;
            storageType.clear();
        } catch (error) {
            console.error("Error clearing storage:", error);
        }
    }
};

export default storage;
