import Trigger from "../triggers/trigger_classes";

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
                    if (this._tags instanceof Trigger) {
                        this._tags = [this._tags];

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
    }

    // Setters
    set stateOK(x) {
        return false;
    }

    // Getters
    get stateOK(x) {
        return this._stateOK;
    }

    // Work
}