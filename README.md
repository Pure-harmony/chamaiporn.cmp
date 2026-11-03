# ชไมพร · CHAMAIPORN PROJECT — Landing Page

หน้าเว็บแนะนำศิลปินอิสระ **ชไมพร (CMP)** — Music × Human × Technology
รองรับมือถือ / iPad / คอมพิวเตอร์ และสลับภาษาไทย / อังกฤษได้

## โครงสร้าง
- `index.html` — หน้าเว็บทั้งหมดในไฟล์เดียว (HTML + CSS + JS, รูปฝังในไฟล์)
- `og.jpg` — ภาพตัวอย่างเมื่อแชร์ลิงก์ใน Facebook / LINE
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` — ทำให้ติดตั้งเว็บเป็นแอปลงหน้าจอโฮมได้ (PWA)
- `ratecard.jpg` — ภาพ Rate Card สำหรับส่งลูกค้า

## ส่วนต่าง ๆ ของหน้า
Hero · Our Story · The People · Selected Works (Cover 5 ชิ้น) · Live & Events · Rate Card · Behind the Scenes · Our Way · Worked With · Next Chapter / Collaborate / Contact

## โหมดแอป
บนมือถือ (หรือเมื่อเปิดจากไอคอนบนหน้าจอโฮม) จะมีแถบเมนูล่าง 5 ปุ่ม: หน้าแรก · สมาชิก · ผลงาน · เรตงาน · ติดต่อ
ติดตั้ง: Android กดปุ่ม “ติดตั้ง” ที่แถบแนะนำ / iPhone แตะแชร์ → เพิ่มลงหน้าจอโฮม (ต้องเปิดผ่าน https เช่น GitHub Pages)

## วิธีแก้ไขเนื้อหา
- **แก้ราคา Rate Card:** ค้นหา `id="rate-price"` (ตัวเลขราคา) และรายการในกรอบ `class="inc"` ภาพ `ratecard.jpg` ต้องทำใหม่แยกต่างหากเมื่อเปลี่ยนราคา
เปิด `index.html` ด้วยโปรแกรมแก้ข้อความ แล้วค้นหา (Ctrl+F)
- **เพิ่มงานแสดงสด:** ค้นหา `class="gig"` แล้วคัดลอกการ์ดทั้งก้อน แก้วันที่ ชื่องาน สถานที่
- **เพิ่มผลงาน Cover:** ค้นหา `class="mv"` (ลิงก์ YouTube อยู่ใน `href`)
- **เพิ่มโลโก้ลูกค้า:** ค้นหา `class="logos"`
- **ข้อความสองภาษา:** แต่ละข้อความมี `data-th` (ไทย) และ `data-en` (อังกฤษ)
- **ช่องทางติดต่อ:** ค้นหา `id="contact"`

## เผยแพร่
GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `/ (root)`

ภาพ โลโก้ และชื่อแบรนด์ในหน้านี้เป็นของเจ้าของแต่ละราย ใช้เมื่อได้รับอนุญาตแล้วเท่านั้น
