export default class Trigger {
    constructor(type = 'page view', config = {}) {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'page view';
        this._shooted = 0;
        this._event = '';
        this._config = config;
    }

    // Setters
    set type(x) {
        return false;
    }

    set shooted(x) {
        return false;
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

    get event() {
        return this._event;
    }

    // Shot
    async *run() {
        const self = this;
        let _linea = 0;

        function createChannel () {
            const messageQueue = []
            const resolveQueue = []

            function put (msg) {
                // anyone waiting for a message ?
                if (resolveQueue.length) {
                    // deliver the message to the oldest one waiting (First In First Out)
                    const nextResolve = resolveQueue.shift()
                    nextResolve(msg)
                } else {
                    // no one is waiting ? queue the event
                    messageQueue.push(msg)
                }
            }

            // returns a Promise resolved with the next message
            function take () {
                // do we have queued messages ?
                if (messageQueue.length) {
                    // deliver the oldest queued message
                    return Promise.resolve(messageQueue.shift())
                } else {
                    // no queued messages ? queue the taker until a message arrives
                    return new Promise((resolve) => resolveQueue.push(resolve))
                }
            }

            return {
                take,
                put
            }
        }

        function createChangeChannel (puerto, evento) {
            const channel = createChannel()

            // every change event will call put on the channel
            // puerto.on(evento, channel.put)
            puerto.addEventListener(evento, function(e) {
                channel.put(true)
            });
            return channel
        }

        function* monitorChangeEvents (channel) {console.log('Canal', channel);
            while (true) {
                const info = channel.take();
                yield info;

                // const info = call(channel.take);
                // yield info;

                // const info = yield call(channel.take) // Blocks until the promise resolves
                // yield put(databaseActions.replicationChange(info))
            }
        }

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
                let domReadyInt = false;
                while (!domReadyInt) { // ENCONTRAR ALTERNATIVA A WHILE
                    await new Promise(resolve => setTimeout(resolve, 50));
                    if (document.readyState === 'interactive' || document.readyState === 'complete')
                        domReadyInt = true;
                }
                yield true;
            } else if (self._type == 'window loaded') {
                _linea = 4.0;
                let winLoadedInt = false;
                while (!winLoadedInt) { // ENCONTRAR ALTERNATIVA A WHILE
                    await new Promise(resolve => setTimeout(resolve, 50));
                    if (document.readyState === 'complete')
                        winLoadedInt = true;
                }
                yield true;
            } else if (self._type == 'custom event') {
                _linea = 5.0;
                if (!window.dataLayer) {
                    // window.dataLayer = [];
                    console.warn('Warning: There is no "window.dataLayer", check that GTM is properly installed.');
                    // yield false;
                    return false;
                }

                _linea = 5.1;
                // yield call(monitorChangeEvents, createChangeChannel(document, self._event));
                const monitor = monitorChangeEvents(createChangeChannel(document, self._event));
                // yield monitor.next().value;
                while (true) {
                    yield monitor.next().value;
                }

                // document.addEventListener(self._event, function() {
                //     yield true;
                // });

                // let dlAnt = JSON.parse(JSON.stringify(window.dataLayer));
                // while (true) {
                //     await new Promise(resolve => setTimeout(resolve, 10));
                //     if (dlAnt.length != window.dataLayer.length) {
                //         for (let i = dlAnt.length; i < window.dataLayer.length; i++) {
                //             if (window.dataLayer[i].event !== undefined) {
                //                 if (window.dataLayer[i].event === self.event) {
                //                     yield true;
                //                 }
                //             }
                //         }
                //         dlAnt = JSON.parse(JSON.stringify(window.dataLayer));
                //     }
                // }

                // const dlProxy = new Proxy(window.dataLayer, { // ESTE PROXY ES TEMPORAL HASTA SABER DÓNDE PONERLO
                //     apply: function (target, thisArg, argumentsList) {
                //         return thisArg[target].apply(this, argumentList);
                //     },
                //     deleteProperty: function (target, property) {
                //         return true;
                //     },
                //     set: function (target, property, value, receiver) {
                //         if (value.event)
                //             if (self._event == value.event)
                //                 // yield true; // HAY QUE ENCONTRAR FORMA DE REEMPLAZAR ESTO

                //         target[property] = value;
                //         return true;
                //     }
                // });
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