# คู่มือการติดตั้ง Github Pages

## stores-nolowcode.github.io
## [Github Pricing](https://github.com/pricing)
## [JWI](https://jwt.io/)

### 🔹 การติดตั้งใน IDX Google
หากต้องการติดตั้งและดึงโค้ดจาก **Github Pages repository** ไปยัง **IDX Google**, ทำตามขั้นตอนดังนี้:

#### 1️⃣ เปิด **IDX Google** และเปิด Terminal
เริ่มต้นโดยเปิด **IDX Google** และเปิด **Terminal** เพื่อดำเนินการคำสั่งต่อไป

#### 2️⃣ เริ่มต้น Git ในโฟลเดอร์ปัจจุบัน
หากยังไม่ได้เริ่มต้น Git ให้ใช้คำสั่งนี้:
```sh
git init
```
> **หมายเหตุ:** คำสั่งนี้จะสร้างไฟล์ `.git/` เพื่อให้โฟลเดอร์ปัจจุบันกลายเป็น Git repository

#### 3️⃣ เพิ่ม Remote Repository
ให้เพิ่มที่อยู่ของ Remote repository (Github) ด้วยคำสั่งนี้:
```sh
git remote add origin https://github.com/stores-nolowcode/stores-nolowcode.github.io.git
```
> **หมายเหตุ:** คำสั่งนี้จะเชื่อมโฟลเดอร์ปัจจุบันกับ repository บน GitHub

#### 4️⃣ ดึงโค้ดจาก Remote Repository
ใช้คำสั่งนี้เพื่อดึงโค้ดจาก branch `main` ลงมา:
```sh
git pull origin main
```
> **หมายเหตุ:** หาก repository ใช้ branch `master` แทน ให้เปลี่ยน `main` เป็น `master`

---

## ✅ คำแนะนำเพิ่มเติม
- หากต้องการอัปเดตโค้ดล่าสุดในภายหลัง ให้ใช้คำสั่งนี้:
  ```sh
  git pull origin main
  ```
- หากต้องการ clone repository ใหม่ในโฟลเดอร์ว่าง ให้ใช้คำสั่งนี้แทน:
  ```sh
  git clone https://github.com/stores-nolowcode/stores-nolowcode.github.io.git
  ```
- หากเกิดข้อผิดพลาดเกี่ยวกับ `fatal: destination path '.' already exists and is not an empty directory.` ให้ลบไฟล์เก่าก่อน:
  ```sh
  rm -rf ./*
  ```
  แล้วทำการ `git clone` หรือ `git init` ใหม่อีกครั้ง

---

## 🎯 สรุป
1️⃣ **เริ่มต้น Git** → `git init`
2️⃣ **เพิ่ม Remote Repository** → `git remote add origin ...`
3️⃣ **ดึงโค้ด** → `git pull origin main`

หลังจากทำตามขั้นตอนข้างต้น คุณจะสามารถใช้งานโค้ดจาก Github Pages ได้ใน **IDX Google** ✅