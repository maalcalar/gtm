export default class Tag {
    constructor(type = 'custom html') {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'custom html';
        this._html = '';

        this._stateOK = false;
    }

    // Setters
    set type(x) {
        return false;
    }

    set html(x) {
        const type = typeof x;

        if (type === 'string') {
            this._html = x;
            this._stateOK = true;
        } else {
            console.error('Error: html value expected to be a string.');
            return false;
        }

        return true;
    }

    set stateOK(x) {
        return false;
    }

    // Getters
    get type() {
        return this._type;
    }

    get html() {
        return this._html;
    }

    get stateOK() {
        return this._stateOK;
    }

    // Work
    run() {
        alert(1);
        alert(document.readyState);
        const body = document.getElementsByTagName('body')[0];

        console.log(1);
        if(this._type === 'custom html') {
            console.log(2);
            const typeHTML = typeof this._html;

            if (typeHTML === 'string') {
                console.log(3);
                const parser = new DOMParser();
                console.log(4);
                const domElement = parser.parseFromString(this._html, 'text/html');

                if(domElement) {
                    console.log(5);
                    body.appendChild(domElement);
                } else {
                    console.log(6);
                    console.warn('Warning: Something went wrong with html property passed.');
                }
            }
        }
    }
}