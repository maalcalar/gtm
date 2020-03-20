import Trigger from "../triggers/trigger_classes";
import Tag from "../tags/tag_classes";

export default class Project {
    constructor(triggers = undefined, tags = undefined) {
        self = this;
        this._prevtriggers = triggers;
        this._triggers = [];
        this._prevtags = tags;
        this._tags = [];
        // this._variables = variables;
        this._triggersOK = false;
        this._tagsOK = false;
        // this._variablesOK = false;
        this._stateOK = false;

        // Revisión y formato de triggers
        if (self.testTrigger(self._prevtriggers) === 'none') {
            console.warn('Warning: The "triggers" param is not a valid object.');
        } else if (self.testTrigger(self._prevtriggers) === 'trigger') {
            self._triggers[0] = [{trigger: self._prevtriggers, value: false}];
            this._triggersOK = true;
        } else {
            for (let indexn1 = 0; indexn1 < self._prevtriggers.length; indexn1++) {
                const elementn1 = self._prevtriggers[indexn1];

                if (self.testTrigger(elementn1) === 'none') {

                } else if (self.testTrigger(elementn1) === 'trigger') {
                    if (!self._triggers[0]) {
                        self._triggers[0] = [];
                    }
                    self._triggers[0][indexn1] = {trigger: elementn1, value: false};
                    this._triggersOK = true;
                } else {
                    if (!self._triggers[indexn1]) {
                        self._triggers[indexn1] = [];
                    }
                    for (let indexn2 = 0; indexn2 < elementn1.length; indexn2++) {
                        const elementn2 = self._prevtriggers[indexn1][indexn2];
                        
                        if (self.testTrigger(elementn2) === 'trigger') {
                            self._triggers[indexn1][indexn2] = {trigger: elementn2, value: false};
                            // self._triggers[indexn1].push(elementn2);
                            this._triggersOK = true;
                        }
                    }
                }
            }
        }
        // console.log('Triggers', this._triggers);
        // Revisión y formato de tags
        if (this._prevtags != undefined) {
            if (typeof this._prevtags === 'object') {
                if (!this._prevtags.length) {
                    if (this._prevtags instanceof Tag) {
                        this._tags = [[this._prevtags]];

                        this._tagsOK = true;
                    } else {
                        console.log('Warning1: Your tag is not well-formed.');
                    }
                } else {
                    // Revisar arreglo
                    // Formar un arreglo de tags
                }
            } else {
                console.log('Warning2: Your tag is not a valid object.');
            }
        } else {
            console.warn('Warning3: You did not passed a tag.');
        }

        if (this._triggersOK && this._tagsOK)
            this._stateOK = true;
        else
            console.error('Error: The project is not able. There is an error on setting Triggers or Tags.');
    }

    // Setters
    set stateOK(x) {
        return false;
    }

    // Getters
    get stateOK() {
        return this._stateOK;
    }

    // Utils
    testTrigger (trigger) {
        let response = 'none';

        try {
            if (trigger != undefined) {
                if (typeof trigger === 'object') {
                    if (!trigger.length) {
                        if (trigger instanceof Trigger) {
                            response = 'trigger';
                        }
                    } else {
                        response = 'array';
                    }
                }
            }
        } catch (error) {
            response = 'none';
        }

        return response;
    }

    // Work
    run () {
        const self = this;
        let _linea = 0;

        // Se define un evento para detectar los cambios en dataLayer
        const busquedaDL = setInterval(() => {
            if (window.dataLayer !== undefined) {
                if (typeof window.dataLayer === 'object') {
                    if (window.dataLayer.length >= 0) {
                        clearInterval(busquedaDL);

                        window.dataLayer.push = function() {
                            for (let i = 0; i < arguments.length; i++) {
                                const argument = arguments[i];

                                if (argument.event !== undefined) {
                                    const atmEvent = new CustomEvent(argument.event, {
                                        detail: {
                                            element: argument
                                        }
                                    });
                                    document.dispatchEvent(atmEvent);
                                }
                            }
                            Array.prototype.push.apply(this, arguments);
                        }
                    }
                }
            }
        }, 10);

        if (this._stateOK) {
            _linea = 1;
            try {
                let tag = this._tags[0][0];

                for (let indexn1 = 0; indexn1 < self._triggers.length; indexn1++) {
                    self._triggers[indexn1].resolve = function() {
                        let result = true;

                        this.forEach(element => {
                            result = result && element.value;
                        });

                        return result;
                    }
                }

                self._triggers.resolve = function() {
                    let result = false;

                        this.forEach(element => {
                            result = result || element.resolve();
                        });

                        return result;
                }

                for (let indexn1 = 0; indexn1 < self._triggers.length; indexn1++) {
                    const elementn1 = self._triggers[indexn1];

                    for (let indexn2 = 0; indexn2 < elementn1.length; indexn2++) {
                        const elementn2 = elementn1[indexn2];
                        let trigger = elementn2.trigger.run();

                        (async function() {
                            for await (let value of trigger) {
                                elementn2.value = true; // ¿ES NECESARIO EL FALSE?

                                if (self._triggers.resolve()) {
<<<<<<< HEAD
                                    if (!trigger.type === 'page view') {
                                        tag.run();
                                    } else {
                                        if (tag.type === 'custom html') {
                                            let readyBody = setInterval(() => {
                                                if (document.body) {
                                                    clearInterval(readyBody);
                                                    tag.run();
                                                }
                                            }, 10);
                                        }
                                    }
=======
                                    console.warn('Se ejecuta el TAG');
                                    tag.run();
>>>>>>> 0cce84b4a4b3426c8233fc0a07972139ca509a2d
                                }
                            }
                        })();
                    }
                }
            } catch (error) {
                console.error(`Línea: ${_linea} | Mensaje: ${error.message}`);
            } finally {

            }
        } else {
            console.error('Error: There was an error while setting the project.');
        }
    }
    
    // PRUEBA 2 FUNCIONA BIEN
    // async *run() {
    //     let cuenta = 0;

    //     for (let i = 0; i <= 10; i++) {
    //         await new Promise(resolve => setTimeout(resolve, 1000));

    //         yield ++cuenta;

    //         if (cuenta > 5) {
    //             break;
    //         }
    //     }

    //     yield cuenta;
    // }

    // PRUEBA 1 FUNCIONA BIEN
    // *run() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // }
}