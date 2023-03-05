import { Language } from "../types/enums";
import { Text } from "./Text";
import { RenderCV } from "./rendering/RenderCV";

export class Main {
    language: Language = Language.eng;

    textFields: Text;

    start() {
        RenderCV.renderLayout(document.body, this.text);
    }

    get text() {
        return new Text(this.language);
    }
}
