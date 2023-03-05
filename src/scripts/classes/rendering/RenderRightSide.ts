import { Text } from "../Text";
import { Element } from "./Element";

export class RenderRightSide {
    static render(container: HTMLElement, textFields: Text) {
        const rightSide = Element.createElement({ tag: "section", class: "right-side" });
        const title = Element.createElement({ tag: "section", class: "title" });
        const about = Element.createElement({ tag: "section", class: "about" });
        RenderRightSide.renderAbout(about, textFields);
        RenderRightSide.renderTitle(title, textFields);

        rightSide.append(title, about);
        container.appendChild(rightSide);
    }

    static renderTitle(container: HTMLElement, textFields: Text) {
        const name = Element.createElement({ tag: "h1", class: "title__name", text: textFields.name });
        const spec = Element.createElement({ tag: "h2", class: "title__spec", text: textFields.spec });
        container.append(name, spec);
    }

    static renderAbout(container: HTMLElement, textFields: Text) {
        const title = Element.createElement({ tag: "h3", class: "about__title", text: textFields.aboutTitle });
        const info = Element.createElement({ tag: "div", class: "about__text", text: textFields.aboutText });

        container.append(title, info);
    }
}
