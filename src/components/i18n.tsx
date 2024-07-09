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
            "Move Position": "Move Position"
        }
    },
    th: {
        translation: {
            "Test 1": "แบบทดสอบที่ 1",
            "Test 2": "แบบทดสอบที่ 2",
            "Test 3": "แบบทดสอบที่ 3",
            "Layout & Style": "การจัดการหน้าเว็บ",
            "Connect API": "การเชื่อมต่อ API",
            "Form & Table": "การจัดการหน้าฟฟอร์ม",
            "Move Shape": "เลื่อนรูปแบบ",
            "Move Position": "เปลี่ยนตำแหน่ง"
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
