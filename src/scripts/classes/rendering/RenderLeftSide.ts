import { TextFields } from "../../types/interfaces";
import { Element } from "./Element";

export class RenderLeftSide {
    static render(container: HTMLElement, textFields: TextFields) {
        const leftSide = Element.createElement({ tag: "div", class: "left-side" });
        const photo = Element.createImage({ src: "../../assets/images/avatar.jpg", alt: "photo", class: "photo" });

        const contacts = Element.createElement({ tag: "section", class: "contacts" });
        RenderLeftSide.renderContact(contacts, textFields);

        const education = Element.createElement({ tag: "section", class: "education" });
        RenderLeftSide.renderEducation(education, textFields);

        const skills = Element.createElement({ tag: "section", class: "skills" });
        RenderLeftSide.renderSkills(skills, textFields);

        const lang = Element.createElement({ tag: "section", class: "language" });
        RenderLeftSide.renderLanguage(lang, textFields);

        leftSide.append(photo, contacts, education, skills, lang);

        container.append(leftSide);
    }

    static renderContact(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({
            tag: "h3",
            class: "contacts__title",
            text: textFields.navElems[3],
            id: textFields.navElems[3],
        });
        const discordIcon = Element.createImage({
            src: "../../assets/svg/discord-icon.svg",
            alt: "discord-logo",
            class: "contacts__discord-icon",
            title: "Discord",
        });
        const discord = Element.createElement({ tag: "div", class: "contacts__discord", text: "Arclet#0589" });
        const mailIcon = Element.createImage({
            src: "../../assets/svg/email-icon.svg",
            alt: "email-icon",
            class: "contacts__email-icon",
            title: "EMail",
        });
        const mail = Element.createElement({ tag: "div", class: "contacts__email", text: "stoynalex@gmail.com" });
        const locIcon = Element.createImage({
            src: "../../assets/svg/place-icon.svg",
            alt: "place-icon",
            class: "contatcs__location-icon",
            title: "location",
        });
        const loc = Element.createElement({ tag: "div", class: "contacts__location", text: textFields.location });

        container.append(title, discordIcon, discord, mailIcon, mail, locIcon, loc);
    }

    static renderAbout(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({
            tag: "h3",
            class: "about__title",
            text: textFields.navElems[0],
            id: textFields.navElems[0],
        });
        const info = Element.createElement({ tag: "div", class: "about__text", text: textFields.aboutText });

        container.append(title, info);
    }

    static renderEducation(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({
            tag: "h3",
            class: "education__title",
            text: textFields.navElems[4],
            id: textFields.navElems[4],
        });
        const dateOne = Element.createElement({ tag: "div", class: "education__date", text: "2008-2015" });
        const partOne = Element.createElement({
            tag: "div",
            class: "education__text",
            text: textFields.educationTextOne,
        });
        const dateTwo = Element.createElement({ tag: "div", class: "education__date", text: "2022" });
        const partTwo = Element.createElement({
            tag: "div",
            class: "education__text",
            text: "The Complete JavaScript Course by Jonas Schmedtmann",
        });
        const dateThree = Element.createElement({ tag: "div", class: "education__date", text: "2022-2023" });
        const partThree = Element.createElement({
            tag: "div",
            class: "education__text",
            text: "Rolling Scopes School, JavaScript/Front-End",
        });
        const dateFour = Element.createElement({ tag: "div", class: "education__date", text: "2023" });
        const partFour = Element.createElement({
            tag: "div",
            class: "education__text",
            text: "Rolling Scopes School, Angular",
        });

        container.append(title, dateOne, partOne, dateTwo, partTwo, dateThree, partThree, dateFour, partFour);
    }

    static renderSkills(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({
            tag: "h3",
            class: "skills__title",
            text: textFields.navElems[1],
            id: textFields.navElems[1],
        });
        const html = Element.createElement({ tag: "div", class: "skills__part", text: "HTML5" });
        const htmlProgress = RenderLeftSide.renderSkillProgress(4);
        const css = Element.createElement({ tag: "div", class: "skills__part", text: "CSS3, SASS" });
        const cssProgress = RenderLeftSide.renderSkillProgress(4);
        const js = Element.createElement({ tag: "div", class: "skills__part", text: "JavaScript, TypeScript" });
        const jsProgress = RenderLeftSide.renderSkillProgress(4);
        const back = Element.createElement({ tag: "div", class: "skills__part", text: "Node.js basic, Express" });
        const backProgress = RenderLeftSide.renderSkillProgress(2);
        const bd = Element.createElement({ tag: "div", class: "skills__part", text: "MongoDB, Mongoose" });
        const bdProgress = RenderLeftSide.renderSkillProgress(1);
        const socket = Element.createElement({ tag: "div", class: "skills__part", text: "HTTP, REST API, Socket.io" });
        const socketProgress = RenderLeftSide.renderSkillProgress(2);
        const util = Element.createElement({ tag: "div", class: "skills__part", text: "Git, Github" });
        const utilProgress = RenderLeftSide.renderSkillProgress(3);
        const webpack = Element.createElement({ tag: "div", class: "skills__part", text: "Webpack" });
        const webpackProgress = RenderLeftSide.renderSkillProgress(3);
        const figma = Element.createElement({ tag: "div", class: "skills__part", text: "Figma, Photoshop" });
        const figmaProgress = RenderLeftSide.renderSkillProgress(1);
        container.append(
            title,
            html,
            htmlProgress,
            css,
            cssProgress,
            js,
            jsProgress,
            back,
            backProgress,
            bd,
            bdProgress,
            socket,
            socketProgress,
            util,
            utilProgress,
            webpack,
            webpackProgress,
            figma,
            figmaProgress
        );
    }

    static renderSkillProgress(num: number) {
        const wrapper = Element.createElement({ tag: "div", class: "skills__progress" });
        for (let i = 0; i < 6; i++) {
            const part = Element.createElement({ tag: "div", class: "progress__part" });
            if (i < num) part.classList.add("complete");
            wrapper.appendChild(part);
        }
        return wrapper;
    }

    static renderLanguage(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({ tag: "h3", text: textFields.languageTitle });
        const rus = Element.createElement({ tag: "div", text: textFields.languageRu });
        const eng = Element.createElement({ tag: "div", text: textFields.languageEn });
        container.append(title, rus, eng);
    }
}
