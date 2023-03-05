import { Text } from "../Text";
import { Element } from "./Element";

export class RenderHeader {
    static renderHeader(container: HTMLElement, textFields: Text) {
        const nav = Element.createElement({ tag: "nav", class: "nav" });
        const ul = Element.createElement({ tag: "ul", class: "nav__list" });
        const navzel = textFields.navElems;
        console.log(navzel);
        textFields.navElems.forEach((e) => {
            const elem = Element.createElement({ tag: "li", class: `list__elem`, text: e });
            ul.appendChild(elem);
        });
        nav.append(ul);
        container.appendChild(nav);
    }
}
