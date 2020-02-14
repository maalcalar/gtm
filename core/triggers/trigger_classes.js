export default class Trigger {
    constructor(type = 'page view', tag = undefined) {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'page view';
        this._shooted = 0;

        this.run();
    }

    // Setters
    set type() {
        return false;
    }

    set shooted() {
        return false;
    }

    // Getters
    get type() {
        return this._type;
    }

    get shooted() {
        return this._shooted;
    }

    run() {
        // tag<objeto> instanceof tag<clase>
        // tag['run']();
        alert('Corriendo trigger');
        if (this._type == 'page view') {
            if (document.readyState === 'loading' || document.querySelector('body')) {
                alert('disparado en Page View');
            }
        } else if (this._type == 'dom ready') {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                alert('disparado en DOM Ready');
            }
        } else if (this._type == 'window loaded') {
            if (document.readyState === 'complete') {
                alert('disparado en Window Loaded');
            }
        }

        this._shooted = 1;
    }
}