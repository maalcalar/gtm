import Tag from "../tags/tag_classes";

export default class Trigger {
    constructor(type = 'page view', tag = undefined) {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'page view';
        this._shooted = 0;
        this._tag = tag;
        this._tagOK = false;
        this._event = '';

        if (this._tag != undefined) {
            if (!(this._tag instanceof Tag))
                console.log('Warning: Your tag is not well-formed.');
            else
                this._tagOK = true;
        } else {
            console.warn('Warning: You did not pass a tag.');
        }

        // this.run();
    }

    // Setters
    set type(x) {
        return false;
    }

    set shooted(x) {
        return false;
    }

    set tag(x) {
        this._tag = x;

        if (this._tag != undefined) {
            if (!(this._tag instanceof Tag))
                console.log('Warning: Your tag is not well-formed.');
            else
                this._tagOK = true;
        } else {
            console.warn('Warning: You did not pass a tag.');
        }
    }

    set event(x) {
        if(this._event === '') {
            this._event = x;
        } else {
            console.warn('Warning: Event name was already setted.');
            return false;
        }

        return true;
    }

    // Getters
    get type() {
        return this._type;
    }

    get shooted() {
        return this._shooted;
    }

    get tag() {
        return this._tag;
    }

    get event() {
        return this._event;
    }

    // Shot
    async *run() {
        const self = this;
        let _linea = 0;

        try {
            _linea = 1;
            if (self._type == 'page view') {
                _linea = 2.0;
                if (document.readyState === 'loading' || document.querySelector('body')) { // Es posible tener que poner un SetInterval
                    _linea = 2.1;
                    yield true;
                }
            } else if (self._type == 'dom ready') {
                _linea = 3.0;
                let domReadyInt = setInterval(() => {
                    if (document.readyState === 'interactive' || document.readyState === 'complete') {
                        clearInterval(domReadyInt);
                        yield true;
                    }
                }, 50);
            } else if (self._type == 'window loaded') {
                _linea = 4.0;
                let winLoadedInt = setInterval(() => {
                    if (document.readyState === 'complete') {
                        clearInterval(winLoadedInt);
                        yield true;
                    }
                }, 50);
            } else if (self._type == 'custom event') {
                _linea = 5.0;
                if (!window.dataLayer) {
                    // window.dataLayer = [];
                    console.warn('Warning: There is no "window.dataLayer", check that GTM is properly installed.');
                    yield false;
                    return false;
                }

                _linea = 5.1;
                const dlProxy = new Proxy(window.dataLayer, { // ESTE PROXY ES TEMPORAL HASTA SABER DÓNDE PONERLO
                    apply: function (target, thisArg, argumentsList) {
                        return thisArg[target].apply(this, argumentList);
                    },
                    deleteProperty: function (target, property) {
                        return true;
                    },
                    set: function (target, property, value, receiver) {
                        if (value.event)
                            if (self._event == value.event)
                                yield true;

                        target[property] = value;
                        return true;
                    }
                });
            }
        } catch(error) {
            console.error(`Línea: ${_linea} | Mensaje: ${error.message}`);
        } finally {
            // this._shooted = 1;
        }
    }

    // NUEVO MÉTODO
    // async *run(start, end) {
    //     for (let i = start; i <= end; i++) {
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         yield i;
    //     }
    // }

    // ANTIGUO
    // run() {
    //     const self = this;

    //     let _linea = 0;
    //     try {
    //         if (self._type == 'page view') {
    //             if (document.readyState === 'loading' || document.querySelector('body')) {
    //                 if (self._tagOK)
    //                     if (self._tag.type === 'custom html') {
    //                         let readyBody = setInterval(() => {
    //                             if (document.body) {
    //                                 clearInterval(readyBody);
    //                                 yield true;
    //                                 // self._tag.run();
    //                             }
    //                         }, 10);
    //                     }
    //                     else
    //                         yield true;
    //                         //self._tag.run();
    //                 else
    //                     console.warn('Warning: There is an issue with your tag.');
    //             }
    //         } else if (self._type == 'dom ready') {
    //             let domReadyInt = setInterval(() => {
    //                 if (document.readyState === 'interactive' || document.readyState === 'complete') {
    //                     clearInterval(domReadyInt);
    //                     if (self._tagOK)
    //                         yield true;
    //                         // self._tag.run();
    //                     else
    //                         console.warn('Warning: There is an issue with your tag.');
    //                 }
    //             }, 50);
    //         } else if (self._type == 'window loaded') {
    //             let winLoadedInt = setInterval(() => {
    //                 if (document.readyState === 'complete') {
    //                     clearInterval(winLoadedInt);
    //                     if (self._tagOK)
    //                         yield true;
    //                         // self._tag.run();
    //                     else
    //                         console.warn('Warning: There is an issue with your tag.');
    //                 }
    //             }, 50);
    //         } else if (self._type == 'custom event') {
    //             _linea = 1;
    //             if (!window.dataLayer) {
    //                 _linea = 1.1;
    //                 window.dataLayer = [];
    //                 console.warn('Warning: There is no "window.dataLayer", check that GTM is properly installed.');
    //             }

    //             _linea = 2;
    //             window.dataLayer = new Proxy(window.dataLayer, {
    //                 apply: function (target, thisArg, argumentsList) {
    //                     return thisArg[target].apply(this, argumentList);
    //                 },
    //                 deleteProperty: function (target, property) {
    //                     // console.log("Deleted %s", property);
    //                     return true;
    //                 },
    //                 set: function (target, property, value, receiver) {
    //                     if (self._tagOK)
    //                         if (value.event)
    //                             if (self._event == value.event)
    //                                 yield true;
    //                                 // self._tag.run();

    //                     target[property] = value;
    //                     // console.log("Set %s to %o", property, value);
    //                     return true;
    //                 }
    //             });
    //         }
    //     } catch (error) {
    //         console.error(`Línea: ${_linea} | Mensaje: ${error.message}`);
    //     } finally {
    //         this._shooted = 1;
    //     }
    // }
}