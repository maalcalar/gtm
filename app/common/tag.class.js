export default class Tag {
    constructor(type = 'custom html') {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'custom html';
        this._html = '';
        this._tagsRegex = /(<script[\s\S]*>)([\s\S]*)(<\/script>)|(<style[\s\S]*>)([\s\S]*)(<\/style>)/gm
        this._scriptInitTag = /<script[\s\S]*>/g
        this._idTagPrefix = 'atm-scripttag-';
        this._idsTag = [];
        this._shooted = false;

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
            this._assignIds();
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

    // utils
    _idOrderGenerator() {
        return (new Date()).getTime().toString() + (Math.random() * (100 - 1) + 1).toString();
    }

    _assignIds() {
        const self = this;

        const groups = self._html.split(self._tagsRegex);

        groups.forEach((gv, gi, go) => {
            if(gv && self._scriptInitTag.test(gv)) {
                if(gv.indexOf('id=') == -1) {
                    const id = self._idTagPrefix + self._idOrderGenerator();
                    go[gi] = gv.slice(0, 7) + ` id="${id}"` + gv.slice(7);
                    self._idsTag.push(id);
                } else {

                }
            }
        });

        self._html = groups.join('');
    }

    // Work
    run() {
        const self = this;
        const body = document.getElementsByTagName('body')[0];

        if(self._type === 'custom html') {
            const typeHTML = typeof self._html;

            if (typeHTML === 'string') {
                if(self._html) {
                    if (!self._shooted) {
                        body.innerHTML = body.innerHTML + self._html;

                        self._shooted = true;
                    }

                    self._idsTag.forEach((idv, idi, ido) => {
                        const elem = document.getElementById(idv);
                        console.log('inicio');
                        if (elem) {console.log('existe script');
                            const head = document.getElementsByTagName("head")[0] || document.documentElement;
                            const data = elem.text || elem.textContent || elem.innerHTML || "" ;
                            const script = document.createElement('script');
                            console.log('data', data);
                            script.type = "text/javascript";
                            try {
                                // doesn't work on ie...
                                script.appendChild(document.createTextNode(data));      
                            } catch(e) {
                                // IE has funky script nodes
                                script.text = data;
                            }

                            head.insertBefore(script, head.firstChild);
                            head.removeChild(script);
                        }
                    });
                } else {
                    console.warn('Warning: Something went wrong with html property passed.');
                }
            }
        }
    }
}