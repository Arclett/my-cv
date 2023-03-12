import { Project, TextFields } from "../../types/interfaces";
import { Element } from "./Element";

export class RenderRightSide {
    static render(container: HTMLElement, textFields: TextFields) {
        const rightSide = Element.createElement({ tag: "section", class: "right-side" });
        const title = Element.createElement({ tag: "section", class: "title" });
        const about = Element.createElement({ tag: "section", class: "about" });
        RenderRightSide.renderAbout(about, textFields);
        RenderRightSide.renderTitle(title, textFields);

        const projects = Element.createElement({ tag: "section", class: "projects" });
        RenderRightSide.renderProjectsSection(projects, textFields);

        rightSide.append(title, about, projects);
        container.appendChild(rightSide);
    }

    static renderTitle(container: HTMLElement, textFields: TextFields) {
        const name = Element.createElement({ tag: "h1", class: "title__name", text: textFields.name });
        const spec = Element.createElement({ tag: "h2", class: "title__spec", text: textFields.spec });
        container.append(name, spec);
    }

    static renderAbout(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({ tag: "h3", class: "about__title", text: textFields.navElems[0] });
        const info = Element.createElement({ tag: "div", class: "about__text", text: textFields.aboutText });

        container.append(title, info);
    }

    static renderProjectsSection(container: HTMLElement, textFields: TextFields) {
        const title = Element.createElement({ tag: "h2", class: "projects__title", text: textFields.navElems[2] });
        const momentum = RenderRightSide.renderProject({
            projectName: "Momentum",
            deployUrl: "https://arclett-jsfepreschool2022q2-momentum.netlify.app/",
            techStack: ["html", "css", "js"],
            description: textFields.momentumDescr,
            repo: "https://github.com/Arclett/rss-preschool-projects/tree/momentum/momentum",
        });
        const songbird = RenderRightSide.renderProject({
            projectName: "Song-Bird",
            deployUrl: "https://rolling-scopes-school.github.io/arclett-JSFE2022Q3/song-bird/index.html",
            techStack: ["html", "sass", "js"],
            description: textFields.songBirdDescr,
            repo: "https://github.com/Arclett/rss-jsfe-projects/tree/song-bird/song-bird",
        });
        const codejam = RenderRightSide.renderProject({
            projectName: "Gem-Puzzle",
            deployUrl: "https://rolling-scopes-school.github.io/arclett-JSFE2022Q3/codejam-puzzle/",
            techStack: ["html", "sass", "js"],
            description: textFields.gemPuzzleDescr,
            repo: "https://github.com/Arclett/rss-jsfe-projects/tree/codejam-puzzle",
        });
        const shop = RenderRightSide.renderProject({
            projectName: "Online-Shop",
            deployUrl: "https://arclett-online-store.netlify.app/",
            techStack: ["html", "sass", "ts", "spa"],
            description: textFields.shopDescr,
            repo: "https://github.com/Arclett/online-store",
        });
        const clone = RenderRightSide.renderProject({
            projectName: "Sea-Battle",
            deployUrl: "https://rss-sea-battle.netlify.app/",
            techStack: ["html", "sass", "ts", "node", "spa"],
            description: textFields.seaBattleDescr,
            repo: "https://github.com/Arclett/sea-battle",
            back: "https://github.com/Arclett/sea-battle-server",
        });
        container.append(title, momentum, songbird, codejam, shop, clone);
    }

    static renderProject(data: Project) {
        const elem = Element.createElement({ tag: "div", class: `projects__project` });
        const imgWrapper = Element.createElement({ tag: "div", class: "project__image" });
        const img = Element.createImage({
            src: `../../assets/images/${data.projectName}.png`,
            alt: `${data.projectName}-preview`,
            class: "image__preview",
        });
        const title = Element.createElement({ tag: "h3", text: `${data.projectName.replaceAll("-", " ")}` });
        const stack = Element.createElement({ tag: "div", class: "projects__tech" });
        data.techStack.forEach((e) => {
            const icon = Element.createImage({ src: `../../assets/svg/${e}-icon.svg`, alt: `${e}-icon` });
            stack.appendChild(icon);
        });
        const infoWrapper = Element.createElement({ tag: "div", class: "project__info-wrapper" });
        const info = Element.createElement({ tag: "div", class: "project__info" });
        const description = Element.createElement({
            tag: "span",
            class: "info__description",
            text: `${data.description}`,
        });
        const deploy = document.createElement("a");
        deploy.textContent = "Deploy";
        deploy.href = data.deployUrl;
        deploy.className = "project__link";
        const code = document.createElement("a");
        code.textContent = "Code";
        code.href = data.repo;
        code.className = "project__link";
        info.append(description, deploy, code);
        if (data.back) {
            const back = document.createElement("a");
            back.textContent = "Backend";
            back.href = data.back;
            back.className = "project__link";
            info.appendChild(back);
        }
        infoWrapper.appendChild(info);
        imgWrapper.append(img, infoWrapper);
        elem.append(title, imgWrapper, stack);
        return elem;
    }
}
