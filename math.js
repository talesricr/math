export function bhaskara(a, b, c, xnum=3) {
    var delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        return 0;
    }
    var x = Math.sqrt(delta);
    var x1 = (-b + x) / (2 * a);
    var x2 = (-b - x) / (2 * a);
    if (xnum == 1) {
        return x1;
    }
    if (xnum == 2) {
        return x2;
    }
    if (xnum == 3) {
        var x3 = [];
        x3.push(x1, x2);
        return x3;
    }
}
