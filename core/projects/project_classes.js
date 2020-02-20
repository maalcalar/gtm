export default class Project {
    constructor(tags = undefined) {
        this._stateOK = false;
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