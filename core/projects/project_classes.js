import Trigger from "../triggers/trigger_classes";
import Tag from "../tags/tag_classes";

export default class Project {
    constructor(triggers = undefined, tags = undefined) {
        this._triggers = triggers;
        this._tags = tags;
        // this._variables = variables;
        this._triggersOK = false;
        this._tagsOK = false;
        // this._variablesOK = false;
        this._stateOK = false;

        // Revisión y formato de triggers
        if (this._triggers != undefined) {
            if (typeof this._triggers === 'object') {
                if (!this._triggers.length) {
                    if (this._triggers instanceof Trigger) {
                        this._triggers = [[this._triggers]];

                        this._triggersOK = true;
                    } else {
                        console.log('Warning: Your trigger is not well-formed.');
                    }
                } else {
                    // Revisar arreglo
                    // Formar un arreglo de triggers
                }
            } else {
                console.log('Warning: Your trigger is not a valid object.');
            }
        } else {
            console.warn('Warning: You did not pass a trigger.');
        }

        // Revisión y formato de tags
        if (this._tags != undefined) {
            if (typeof this._tags === 'object') {
                if (!this._tags.length) {
                    if (this._tags instanceof Tag) {
                        this._tags = [[this._tags]];

                        this._tagsOK = true;
                    } else {
                        console.log('Warning: Your tag is not well-formed.');
                    }
                } else {
                    // Revisar arreglo
                    // Formar un arreglo de tags
                }
            } else {
                console.log('Warning: Your tag is not a valid object.');
            }
        } else {
            console.warn('Warning: You did not passed a tag.');
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

    // Work
    run () {
        const self = this;
        let _linea = 0;

        if (this._stateOK) {
            _linea = 1;
            try {
                let trigger = this._triggers[0][0].run();
                let tag = this._tags[0][0];

                (async function() {
                    for await (let value of trigger) {
                        tag.run();
                        // console.log('Valor de iterador: ', value);
                    }
                })();


                // let trigger = this._triggers[0][0](1, 10);

                // for await (let value of trigger) {
                //     alert(value);
                // }

                // let result = false;
                // let results = [];

                // for (let indexOR = 0; indexOR < this._triggers.length; indexOR++) {
                //     for (let indexAND = 0; indexAND < this._triggers[indexOR].length; indexAND++) {
                //         if (indexAND === 0)
                //             results[indexOR] = this._triggers[indexOR][indexAND].run();
                //         else
                //             results[indexOR] = results[indexOR] && this._triggers[indexOR][indexAND].run();
                //     }
                // }

                // for (let index = 0; index < results.length; index++) {
                //     result = result || results[index];
                // }
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

    // run () {
    //     if (this._stateOK) {
    //         try {
    //             let trigger = this._triggers[0][0](1, 10);

    //             for await (let value of trigger) {
    //                 alert(value);
    //             }

    //             // let result = false;
    //             // let results = [];

    //             // for (let indexOR = 0; indexOR < this._triggers.length; indexOR++) {
    //             //     for (let indexAND = 0; indexAND < this._triggers[indexOR].length; indexAND++) {
    //             //         if (indexAND === 0)
    //             //             results[indexOR] = this._triggers[indexOR][indexAND].run();
    //             //         else
    //             //             results[indexOR] = results[indexOR] && this._triggers[indexOR][indexAND].run();
    //             //     }
    //             // }

    //             // for (let index = 0; index < results.length; index++) {
    //             //     result = result || results[index];
    //             // }
    //         } catch (error) {

    //         } finally {

    //         }
    //     }
    // }
}