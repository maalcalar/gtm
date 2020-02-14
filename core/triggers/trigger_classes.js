export default class Trigger {
    constructor(type = 'page view', tag = undefined) {
        this._type = typeof type === 'string' ? type.toLowerCase() : 'page view';
        this._shooted = 0;

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

    run() {
        // tag<objeto> instanceof tag<clase>
        // tag['run']();
        alert('Corriendo trigger  ||  Tipo de trigger = ' + this._type);
        if (this._type == 'page view') {
            if (document.readyState === 'loading' || document.querySelector('body')) {
                alert('disparado en Page View');
            }
        } else if (this._type == 'dom ready') {
            let domReadyInt = setInterval(() => {
                if (document.readyState === 'interactive' || document.readyState === 'complete') {
                    clearInterval(domReadyInt);
                    alert('disparado en DOM Ready');
                }
            }, 100);
        } else if (this._type == 'window loaded') {
            let winLoadedInt = setInterval(() => {
                if (document.readyState === 'complete') {
                    clearInterval(winLoadedInt);
                    alert('disparado en Window Loaded');
                }
            }, 100);
        }

        this._shooted = 1;
    }
}