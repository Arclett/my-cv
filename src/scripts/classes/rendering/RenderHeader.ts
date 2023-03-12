import { Language } from "../../types/enums";
import { TextFields } from "../../types/interfaces";
import { Element } from "./Element";

export class RenderHeader {
    static renderHeader(container: HTMLElement, textFields: TextFields, lang: Language) {
        const wrapper = Element.createElement({ tag: "div", class: "header__wrapper" });
        const nav = Element.createElement({ tag: "nav", class: "nav" });
        const ul = Element.createElement({ tag: "ul", class: "nav__list" });
        textFields.navElems.forEach((e) => {
            const link = document.createElement("a");
            link.href = `#${e}`;
            const elem = Element.createElement({ tag: "li", class: `list__elem`, text: e });
            link.appendChild(elem);
            ul.appendChild(link);
        });
        nav.append(ul);
        const changeLang = Element.createElement({ tag: "div", class: "change-lang" });
        const ru = Element.createElement({ tag: "div", class: "change-lang ru", text: "RU" });
        const eng = Element.createElement({ tag: "div", class: "change-lang eng", text: "EN" });
        if (lang === Language.eng) {
            eng.classList.add("active");
            wrapper.style.background =
                "linear-gradient(to right, rgb(35, 35, 79) 95%, rgb(180, 20, 20) 95%, rgb(180, 20, 20) 100%, rgb(35, 35, 79) 100%)";
        } else {
            ru.classList.add("active");
            wrapper.style.background =
                "linear-gradient(to right, rgb(35, 35, 79) 90%, rgb(180, 20, 20) 90%, rgb(180, 20, 20) 95%, rgb(35, 35, 79) 95%)";
        }
        changeLang.append(ru, eng);
        wrapper.append(nav, changeLang);
        container.appendChild(wrapper);
        return [ru, eng, wrapper];
    }
}
