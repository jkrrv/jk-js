(function() {
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;


    var jk = function(obj) {
        if (obj instanceof jk) return obj;
        if (!(this instanceof jk)) return new jk(obj);
        this._wrapped = obj;
    };


    jk.VERSION = "0.0.2";



    /* Generic & Math Helper Functions */
    /**
     * The Sine Function for an angle in degrees.
     *
     * @method sind
     * @param deg {number} An angle in degrees.
     * @returns {number} The result of the Sine
     */
    jk.sind = function(deg) {
        return Math.sin(Math.PI * deg / 180.0);
    };


    /**
     * The Cosine Function for an angle in degrees.
     *
     * @method cosd
     * @param deg {number} An angle in degrees.
     * @returns {number} The result of the Cosine
     */
    jk.cosd = function(deg) {
        return Math.cos(Math.PI * deg / 180.0);
    };


    /**
     * The Tangent Function for an angle in degrees.
     *
     * @method tand
     * @param deg {number} An angle in degrees.
     * @returns {number} The result of the Tangent
     */
    jk.tand = function(deg) {
        "use strict";
        return Math.tan(Math.PI * deg / 180.0);
    };


    /**
     * The minVal function.  Given an array of objects, this function returns the minimum value of the desired property, as
     * directed by the iteratee.
     *
     * @param {Array} arrayOfObjects  An array of objects that have properties
     * @param {function} iteratee  A function that returns the value for each function of which the minimum is desired.
     */
    jk.minVal = function(arrayOfObjects, iteratee) {
        var ret = [];
        arrayOfObjects.forEach(function(obj) {
            ret.push(iteratee(obj));
        });
        return Math.min.apply(null, ret);
    };


    /**
     * The maxVal function.  Given an array of objects, this function returns the maximum value of the desired property, as
     * directed by the iteratee.
     *
     * @param {Array} arrayOfObjects  An array of objects that have properties
     * @param {function} iteratee  A function that returns the value for each function of which the maximum is desired.
     */
    jk.maxVal = function(arrayOfObjects, iteratee) {
        var ret = [];
        arrayOfObjects.forEach(function(obj) {
            ret.push(iteratee(obj));
        });
        return Math.max.apply(null, ret);
    };



    /**
     * The arrayHas function.  Given an array of objects, this function returns whether the iteratee returns true for
     * any of the member objects.
     *
     * @param {Array} arrayOfObjects  An array of objects that have properties
     * @param {function} iteratee  A function that returns the value for each function of which the maximum is desired.
     */
    jk.arrayHas = function(arrayOfObjects, iteratee) {
        arrayOfObjects.forEach(function(obj) {
            if (!!iteratee(obj)) {
                return true;
            }
        });
        return false;
    };


    /**
     * The average function takes the average of it's arguments.  If provided with arrays as arguments, acts
     * *recursively*.
     *
     * @example jk.avg([2,2],6); // --> 4 (not 3. ((2 + 2)/2 + 6) / 2)
     *
     * @returns {number}
     */
    jk.avg = function() {
        function compute(arr) { // nested function statement allows for recursion.
            var sum = 0;
            arr.forEach(function (value) {
                if (typeof value === "object") {
                    value = compute(value)
                }
                sum += value;
            });
            return sum/arr.length;
        }

        return compute(arguments);
    };



    if (typeof define === 'function' && define.amd) {
        define('jk', [], function() {
            return jk;
        });
    }
}.call(this));