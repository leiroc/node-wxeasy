/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 *
 * 特性1：extend方法，实现类的继承
 * 特性2：init方法，构造函数，该方法在类实例化时自动调用
 * 特性3：_super方法，调用父类中同名的方法
 */

var initializing = false,
    fnTest = /\b_super\b/,
    Class = function() {};

Class.extend = function(prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;

    for (var name in prop) {
        prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
            (function(name, fn) {
                return function() {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
    }

    function Class() {
        if (!initializing && this.init)
            this.init.apply(this, arguments);
    }

    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
};

module.exports = Class;
