export default class Tag {
    constructor(type = 'custom html') {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'custom html';
        this._html = '';

        this._stateOK = false;
    }

    dlProxy = new Proxy(window.dataLayer, {
        set: function(target, property, value, receiver) {
            target[property] = value;
            // En caso lo anterior no funcione adecuadamente
            // if (property !== 'length')
            //     target.push(value);
            return false;
        }
    });

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
        const body = document.getElementsByTagName('body')[0];

        if(this._type === 'custom html') {
            const typeHTML = typeof this._html;

            if (typeHTML === 'string') {
                // const parser = new DOMParser();
                // const domElement = parser.parseFromString(this._html, 'text/html');

                // if(domElement) {
                if(this._html) {
                    // body.appendChild(domElement);
                    body.innerHTML = body.innerHTML + this._html;
                } else {
                    console.warn('Warning: Something went wrong with html property passed.');
                }
            }
        }
    }
}