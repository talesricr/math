export function bhaskara(a, b, c, result) {
    if (result === void 0) { result = 0; }
    var delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        return 0;
    }
    if (result == 3) {
        return delta;
    }
    var x = Math.sqrt(delta);
    var x1 = (-b + x) / (2 * a);
    var x2 = (-b - x) / (2 * a);
    if (result == 1) {
        return x1;
    }
    if (result == 2) {
        return x2;
    }
    if (result == 4) {
        var x3_1 = [];
        x3_1.push(x1, x2, delta);
        return x3_1;
    }
    var x3 = [];
    x3.push(x1, x2);
    return x3;
}