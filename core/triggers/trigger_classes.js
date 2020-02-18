import Tag from "../tags/tag_classes";

export default class Trigger {
    constructor(type = 'page view', tag = undefined) {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'page view';
        this._shooted = 0;
        this._tag = tag;
        this._tagOK = false;

        if (this._tag != undefined) {
            if (!(this._tag instanceof Tag))
                console.log('Warning: Your tag is not well-formed.');
            else
                this._tagOK = true;
        } else {
            console.warn('Warning: You did not passed a tag.');
        }

        this.run();
    }

    // Setters
    set type(x) {
        return false;
    }

    set shooted(x) {
        return false;
    }

    // Getters
    get type() {
        return this._type;
    }

    get shooted() {
        return this._shooted;
    }

    // Shot
    run() {
        if (this._type == 'page view') {
            if (document.readyState === 'loading' || document.querySelector('body')) {
                if (this._tagOK)
                    if(this._tag.type === 'custom html') {
                        let readyBody = setInterval(() => {
                            if(document.body) {
                                clearInterval(readyBody);
                                this._tag.run();
                            }
                        }, 10);
                    }
                    else
                        this._tag.run();
                else
                    console.warn('Warning: There is an issue with your tag.');
            }
        } else if (this._type == 'dom ready') {
            let domReadyInt = setInterval(() => {
                if (document.readyState === 'interactive' || document.readyState === 'complete') {
                    clearInterval(domReadyInt);
                    if (this._tagOK)
                        this._tag.run();
                    else
                        console.warn('Warning: There is an issue with your tag.');
                }
            }, 100);
        } else if (this._type == 'window loaded') {
            let winLoadedInt = setInterval(() => {
                if (document.readyState === 'complete') {
                    clearInterval(winLoadedInt);
                    if (this._tagOK)
                        this._tag.run();
                    else
                        console.warn('Warning: There is an issue with your tag.');
                }
            }, 100);
        }

        this._shooted = 1;
    }
}