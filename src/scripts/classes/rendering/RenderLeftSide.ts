import { Text } from "../Text";
import { Element } from "./Element";

export class RenderLeftSide {
    static render(container: HTMLElement, textFields: Text) {
        const leftSide = Element.createElement({ tag: "div", class: "left-side" });
        const avatar = Element.createElement({ tag: "div", class: "avatar" });

        const contacts = Element.createElement({ tag: "section", class: "contacts" });
        RenderLeftSide.renderContact(contacts, textFields);

        const education = Element.createElement({ tag: "section", class: "education" });
        RenderLeftSide.renderEducation(education, textFields);

        const skills = Element.createElement({ tag: "section", class: "skills" });
        RenderLeftSide.renderSkills(skills);

        const lang = Element.createElement({ tag: "section", class: "language" });
        RenderLeftSide.renderLanguage(lang);

        leftSide.append(avatar, contacts, education, skills, lang);

        container.append(leftSide);
    }

    static renderContact(container: HTMLElement, textFields: Text) {
        const title = Element.createElement({ tag: "h3", class: "contacts__title", text: textFields.contacts });
        const discordIcon = Element.createImage({
            src: "../../assets/svg/discord-icon.svg",
            alt: "discord-logo",
            class: "contacts__discord-icon",
        });
        const discord = Element.createElement({ tag: "div", class: "contacts__discord", text: "Arclet#0589" });
        const mailIcon = Element.createImage({
            src: "../../assets/svg/email-icon.svg",
            alt: "email-icon",
            class: "contacts__email-icon",
        });
        const mail = Element.createElement({ tag: "div", class: "contacts__email", text: "stoynalex@gmail.com" });
        const locIcon = Element.createImage({
            src: "../../assets/svg/place-icon.svg",
            alt: "place-icon",
            class: "contatcs__location-icon",
        });
        const loc = Element.createElement({ tag: "div", class: "contacts__location", text: "Russia, Chelyabinsk" });

        container.append(title, discordIcon, discord, mailIcon, mail, locIcon, loc);
    }

    static renderAbout(container: HTMLElement, textFields: Text) {
        const title = Element.createElement({ tag: "h3", class: "about__title", text: textFields.aboutTitle });
        const info = Element.createElement({ tag: "div", class: "about__text", text: textFields.aboutText });

        container.append(title, info);
    }

    static renderEducation(container: HTMLElement, textFields: Text) {
        const title = Element.createElement({ tag: "h3", class: "education__title", text: textFields.educationTitle });
        const dateOne = Element.createElement({ tag: "div", class: "education__date", text: "2022" });
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
        const certifOne = Element.createElement({ tag: "div", class: "education__certificate", text: "Certificate" });
        const dateFour = Element.createElement({ tag: "div", class: "education__date", text: "2023" });
        const partFour = Element.createElement({
            tag: "div",
            class: "education__text",
            text: "Rolling Scopes School, Angular",
        });

        container.append(
            title,
            dateOne,
            partOne,
            dateTwo,
            partTwo,
            dateThree,
            partThree,
            certifOne,
            dateFour,
            partFour
        );
    }

    static renderSkills(container: HTMLElement) {
        const title = Element.createElement({ tag: "h3", class: "skills__title", text: "Skills" });
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

    static renderLanguage(container: HTMLElement) {
        const title = Element.createElement({ tag: "h3", text: "Language" });
        const rus = Element.createElement({ tag: "div", text: "Russian - native" });
        const eng = Element.createElement({ tag: "div", text: "English - B2" });
        container.append(title, rus, eng);
    }
}
