import { Language } from "../../types/enums";
import { TextFields } from "../../types/interfaces";
import { Element } from "./Element";
import { RenderHeader } from "./RenderHeader";
import { RenderLeftSide } from "./RenderLeftSide";
import { RenderRightSide } from "./RenderRightSide";

export class RenderCV {
    static renderLayout(container: HTMLElement, textFields: TextFields, lang: Language) {
        container.replaceChildren();
        const header = Element.createElement({ tag: "header", class: "header" });
        const langElems = RenderHeader.renderHeader(header, textFields, lang);

        const main = Element.createElement({ tag: "main", class: "main" });
        RenderLeftSide.render(main, textFields);
        RenderRightSide.render(main, textFields);

        const footer = Element.createElement({ tag: "footer", class: "footer" });
        RenderCV.renderFooter(footer);

        container.append(header, main, footer);
        return langElems;
    }

    static renderFooter(container: HTMLElement) {
        const date = Element.createElement({ tag: "div", text: "2023" });
        const cw = Element.createImage({
            src: "https://www.codewars.com/users/Arclet/badges/large",
            alt: "cowewars-info",
            class: "codewars-link",
        });
        const gitLink = document.createElement("a");
        gitLink.href = "https://github.com/Arclett";
        const git = Element.createImage({
            src: "../../assets/svg/git-icon.svg",
            alt: "git icon",
            title: "Github",
            class: "git-icon",
        });
        gitLink.appendChild(git);
        container.append(date, gitLink, cw);
    }
}
