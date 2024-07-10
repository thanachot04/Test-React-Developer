import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Resource } from "i18next";

const resources: Resource = {
    en: {
        translation: {
            "Test 1": "Test 1",
            "Test 2": "Test 2",
            "Test 3": "Test 3",
            "Layout & Style": "Layout & Style",
            "Connect API": "Connect API",
            "Form & Table": "Form & Table",
            "Move Shape": "Move Shape",
            "Move Position": "Move Position",
            "Title": "Title",
            "Firstname": "firstname",
            "Lastname": "lastname",
            "Birthday": "Birthday",
            "Nationality": "nationality",
            "CitizenIdPart1": "CitizenID",
            "citizenIdPart2": "citizenIdPart2",
            "citizenIdPart3": "citizenIdPart3",
            "citizenIdPart4": "citizenIdPart4",
            "citizenIdPart5": "citizenIdPart5",
            "Gender": "gender",
            "Mobile Phone": "Mobile Phone",
            "phoneNumber": "phoneNumber",
            "Passport No": "passportNo",
            "Expected Salary": "expectedsalary",
            "Male": "Male",
            "Female": "Female",
            "Unsex": "Unsex",
            "Mr.": "Mr.",
            "Mrs.": "Mrs.",
            "Ms.": "Ms.",
            "mm//dd//yy": "mm//dd//yy",
            "-- please select --": "-- please select --",
            "Name": "Name",
            "Manage": "Manage",
            "EDIT": "EDIT",
            "DELETE": "DELETE",
            "Thai": "Thai",
            "French": "French",
            "American": "American",



        }
    },
    th: {
        translation: {
            "Test 1": "แบบทดสอบที่ 1",
            "Test 2": "แบบทดสอบที่ 2",
            "Test 3": "แบบทดสอบที่ 3",
            "Layout & Style": "การจัดการหน้าเว็บ",
            "Connect API": "การเชื่อมต่อ API",
            "Form & Table": "การจัดการหน้าฟอร์ม",
            "Move Shape": "เลื่อนรูปแบบ",
            "Move Position": "เปลี่ยนตำแหน่ง",
            "Title": "คำนำหน้า",
            "Firstname": "ชื่อจริง",
            "Lastname": "นามสกุล",
            "Birthday": "วันเกิด",
            "Nationality": "สัญชาติ",
            "CitizenIdPart1": "เลขบัตรประชาชน",
            "citizenIdPart2": "citizenIdPart2",
            "citizenIdPart3": "citizenIdPart3",
            "citizenIdPart4": "citizenIdPart4",
            "citizenIdPart5": "citizenIdPart5",
            "Gender": "เพศ",
            "Mobile Phone": "หมายเลขโทรศัพท์มือถือ",
            "phoneNumber": "เบอร์โทรศัพท์",
            "Passport No": "หนังสือเดินทาง",
            "Expected Salary": "เงินเดือนที่คาดหวัง",
            "Male": "ผู้ชาย",
            "Female": "ผู้หญิง",
            "Unsex": "ไม่ระบุ",
            "Mr.": "นาย",
            "Mrs.": "นางสาว",
            "Ms.": "นาง",
            "mm//dd//yy": "เดือน//วัน//ปี",
            "-- please select --": "-- กรุณาเลือก --",
            "Name": "ชื่อ",
            "Manage": "จัดการ",
            "EDIT": "แก้ไขข้อมูล",
            "DELETE": "ลบข้อมูล",
            "Thai": "ไทย",
            "French": "ฝรั่งเศษ",
            "American": "อเมริกา",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
