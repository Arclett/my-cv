import { Language } from "../types/enums";

export class Text {
    language: Language;
    constructor(language: Language) {
        this.language = language;
    }

    get navElems() {
        if (this.languageCheck()) return ["About me", "Skills", "Code", "Projects", "Contact", "Education"];
        return ["О себе", "Навыки", "Код", "Проекты", "Контакты", "Образование"];
    }

    get name() {
        if (this.languageCheck()) return "Alexei Stoyanenko";
        return "Алексей Стояненко";
    }

    get spec() {
        return "Front-End Developer";
    }

    get contacts() {
        if (this.languageCheck()) return "Contacts";
        return "Контакты";
    }

    get aboutTitle() {
        if (this.languageCheck()) return "About me";
        return "О себе";
    }

    get aboutText() {
        if (this.languageCheck())
            return `Hi! I’m a junior frontend developer. I like to study and learn something new. 
            I am not only willing to deepen my knowledge but I also want to apply them to the real products. `;
        return "какой-то текст";
    }

    get educationTitle() {
        if (this.languageCheck()) return "Education";
        return "Образование";
    }

    get educationTextOne() {
        if (this.languageCheck()) return "SOUTH URAL STATE MEDICAL UNIVERSITY, Doctor of ultrasound diagnostic";
        return "Челябинский Государственный Медицинский Университет, Доктор ультразвуковой диагностики";
    }

    languageCheck() {
        return this.language === Language.eng;
    }
}
