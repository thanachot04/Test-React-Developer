import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Resource } from "i18next";

const resources: Resource = {
    en: {
        translation: {
            "title": {
                "title1": "Test 1",
                "title2": "Test 2",
                "title3": "Test 3"
            },
            "description": {
                "description1": "Layout & Style",
                "description2": "Connect API",
                "description3": "Form & Table"
            },
            "Move Shape": "Move Shape",
            "Move Position": "Move Position"
        }
    },
    th: {
        translation: {
            "title": {
                "title1": "แบบทดสอบที่ 1",
                "title2": "แบบทดสอบที่ 2",
                "title3": "แบบทดสอบที่ 3"
            },
            "description": {
                "description1": "การจัดการหน้าเว็บ",
                "description2": "การเชื่อมต่อ API",
                "description3": "การจัดการหน้าฟฟอร์ม"
            },
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
