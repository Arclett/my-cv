import { Text } from "../Text";
import { Element } from "./Element";
import { RenderHeader } from "./RenderHeader";
import { RenderLeftSide } from "./RenderLeftSide";
import { RenderRightSide } from "./RenderRightSide";

export class RenderCV {
    static renderLayout(container: HTMLElement, textFields: Text) {
        const header = Element.createElement({ tag: "header", class: "header" });
        RenderHeader.renderHeader(header, textFields);

        const main = Element.createElement({ tag: "main", class: "main" });
        RenderLeftSide.render(main, textFields);
        RenderRightSide.render(main, textFields);

        const footer = Element.createElement({ tag: "footer", class: "footer" });

        container.append(header, main, footer);
    }
}
