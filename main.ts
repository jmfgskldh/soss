// สามารถใช้ปุ่ม B หรือการเขย่าเพื่อจำลองขยะประเภทอื่นได้
input.onButtonPressed(Button.B, function () {
    // แสดงไอคอนกะโหลก (จำลองขยะอวน/เชือก)
    basic.showIcon(IconNames.Skull)
    // ส่งข้อความ "NET" พร้อม ID ทุ่น
    radio.sendString("NET-" + buoyID)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    // แสดงไอคอนผี (จำลองมลพิษน้ำมัน/สารเคมี)
    basic.showIcon(IconNames.Ghost)
    // ส่งข้อความ "OIL" พร้อม ID ทุ่น
    radio.sendString("OIL-" + buoyID)
    basic.pause(1000)
    basic.clearScreen()
})
let buoyID = 0
// กำหนด ID ของทุ่นนี้ (เปลี่ยนตามทุ่นแต่ละตัว)
buoyID = 1
// ตั้งค่าเริ่มต้นของ Micro:bit
// ตั้งค่า Group ของวิทยุให้เป็น Group เดียวกันสำหรับทุก Micro:bit ในระบบ
radio.setGroup(1)
// แสดงข้อความเมื่อเริ่มต้นทำงาน
basic.showString("BUOY " + buoyID)
// แสดงข้อความเมื่อเริ่มต้นทำงาน
basic.forever(function () {
    // โค้ดที่ทำงานวนซ้ำตลอดเวลาเพื่ออ่านค่าจากเซ็นเซอร์ IR
    // ตรวจสอบสถานะของ IR Sensor ที่ขา P10
    // (โดยปกติ IR Sensor ให้ค่า 0 เมื่อตรวจพบวัตถุ)
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        // แสดงไอคอน "ไม่" (จำลองขยะพลาสติก)
        basic.showIcon(IconNames.No)
        // ส่งข้อความแจ้งว่าเป็นขยะพลาสติก พร้อม ID ทุ่น
        radio.sendString("PLASTIC-" + buoyID)
        // หน่วงเวลา 1 วินาที เพื่อไม่ให้ส่งสัญญาณรัวเกินไป
        basic.pause(1000)
        // ล้างหน้าจอ
        basic.clearScreen()
    } else {
        // ไม่มีวัตถุ หน้าจอว่างเปล่า
        basic.clearScreen()
    }
})
