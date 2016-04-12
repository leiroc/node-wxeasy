'use strict';

var Class = require('./class');

var Events = Class.extend({

    on: function(name, callback, context) {
        this._events = this._events || {};
        this._events[name] = this._events[name] || [];
        this._events[name].push({
            callback: callback,
            context: context,
            ctx: context || this
        });
        return this;
    },

    off: function(name, callback, context) {
        var retain, ev, events, names, i, l, j, k;
        if (!name && !callback && !context) {
            this._events = {};
            return this;
        }
        names = name ? [name] : Object.keys(this._events);
        for (i = 0, l = names.length; i < l; i++) {
            name = names[i];
            events = this._events[name];
            if (events) {
                this._events[name] = retain = [];
                if (callback || context) {
                    for (j = 0, k = events.length; j < k; j++) {
                        ev = events[j];
                        if ((callback && callback !== ev.callback && callback !== ev.callback._callback) || (context && context !== ev.context)) {
                            retain.push(ev);
                        }
                    }
                }
                if (!retain.length) delete this._events[name];
            }
        }
        return this;
    },

    trigger: function(name) {
        if (!this._events) return this;
        var args = [].slice.call(arguments, 1);
        var events = this._events[name];
        if (events) {
            var ev, i = -1;
            while (++i < events.length)(ev = events[i]).callback.apply(ev.ctx, args);
        }
    }
});

module.exports = Events;
