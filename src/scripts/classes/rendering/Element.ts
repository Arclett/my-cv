export class Element {
    static createElement(data: { tag: string; text?: string; class?: string; id?: string }) {
        const elem = document.createElement(data.tag);
        if (data.text) elem.textContent = data.text;
        if (data.class) elem.className = data.class;
        if (data.id) elem.id = data.id;
        return elem;
    }

    static createImage(data: { src: string; class?: string; alt: string; id?: string }) {
        const img = new Image();
        img.src = data.src;
        img.alt = data.alt;
        if (data.class) img.className = data.class;
        if (data.id) img.id = data.id;
        return img;
    }
}
