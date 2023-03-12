import { ChangeLang, Language } from "../types/enums";
import { TextFields } from "../types/interfaces";
import { RenderCV } from "./rendering/RenderCV";
import { TextEn } from "./TextEn";
import { TextRu } from "./TextRu";

export class Main {
    language: Language = Language.ru;

    textFields: TextFields;

    langElems: HTMLElement[];

    start() {
        this.textFields = this.getText();
        this.langElems = RenderCV.renderLayout(document.body, this.textFields, this.language);
        document.body.addEventListener("mouseover", this.hoverHandler.bind(this));
        document.body.addEventListener("click", this.clickHandler.bind(this));
    }

    clickHandler(e: Event) {
        if (!(e.target instanceof HTMLElement)) return;
        if (e.target.classList.contains("change-lang")) {
            if (e.target.classList.contains("active")) return;
            this.changeLang(e.target);
        }
    }

    getText() {
        if (this.language === Language.eng) return TextEn;
        return TextRu;
    }

    hoverHandler(e: Event) {
        if (!(e.target instanceof HTMLElement)) return;
        if (e.target.classList.contains("list__elem") || e.target.classList.contains("project__link")) {
            this.animation(e.target, this.navAnimation, true);
        }
        if (e.target.classList.contains("image__preview")) {
            this.showInfo(e.target);
        }
    }

    showInfo(elem: HTMLElement) {
        const info = elem.nextSibling;
        if (!(info instanceof HTMLElement)) return;
        info.style.transform = "translateY(-300px)";
        info.addEventListener(
            "mouseleave",
            () => {
                info.style.transform = "";
            },
            { once: true }
        );
    }

    changeLang(elem: HTMLElement) {
        let type: ChangeLang;
        if (elem.classList.contains("ru")) {
            type = ChangeLang.toRu;
            this.language = Language.ru;
        } else {
            type = ChangeLang.toEng;
            this.language = Language.eng;
        }
        const modifiedLangAnimation = this.modifyLangAnimation(type, this.langAnimation);
        this.animation(this.langElems[2], modifiedLangAnimation, false);
    }

    modifyLangAnimation(type: ChangeLang, func: (type: ChangeLang, elem: HTMLElement, elapsed: number) => boolean) {
        return func.bind(this, type);
    }

    langAnimation(type: ChangeLang, elem: HTMLElement, elapsed: number) {
        const count = Math.min(0.01 * elapsed, 5);
        let borderOne, borderTwo;
        if (type === ChangeLang.toRu) {
            borderOne = 95 - count;
            borderTwo = 100 - count;
        } else {
            borderOne = 90 + count;
            borderTwo = 95 + count;
        }
        elem.style.background = `linear-gradient(to right, rgb(35, 35, 79) ${borderOne}%, rgb(180, 20, 20) ${borderOne}%, rgb(180, 20, 20) ${borderTwo}%, rgb(35, 35, 79) ${borderTwo}%)`;
        if (count === 5) {
            this.textFields = this.getText();
            this.langElems = RenderCV.renderLayout(document.body, this.textFields, this.language);
            return true;
        }
        return false;
    }

    navAnimation(elem: HTMLElement, elapsed: number) {
        const count = Math.min(0.2 * elapsed, 100);
        elem.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0) ${100 - count}%, rgb(180, 20, 20) ${
            100 - count
        }%)`;
        if (count === 100) return true;
        return false;
    }

    animation(elem: HTMLElement, func: (elem: HTMLElement, elapsed: number) => boolean, clear: boolean) {
        let start: number | undefined, previousTimeStamp: number | undefined, id: number;
        let done = false;

        function step(timestamp: number) {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;

            if (previousTimeStamp !== timestamp) {
                done = func(elem, elapsed);
            }

            if (elapsed < 500) {
                previousTimeStamp = timestamp;
                if (!done) {
                    id = window.requestAnimationFrame(step);
                }
            }
        }
        id = window.requestAnimationFrame(step);
        if (clear) {
            elem.addEventListener(
                "mouseleave",
                () => {
                    window.cancelAnimationFrame(id);
                    elem.style.backgroundImage = "";
                },
                { once: true }
            );
        }
    }
}
