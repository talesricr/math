function bhaskara(a:number, b:number, c:number, result:number=0): number | number[] {
    const delta:number = Math.pow(b, 2) - 4 * a * c
    if (delta < 0){
        return 0
    }
    if(result == 3){
        return delta
    }
    const x:number = Math.sqrt(delta)
    const x1:number = (- b + x) / (2 * a)
    const x2:number = (- b - x) / (2 * a)
    if(result == 1){
        return x1
    }
    if(result == 2){
        return x2
    }
    if(result == 4){
        const x3:number[] | null = [];
        x3.push(x1, x2, delta);
        return x3
    }
    const x3:number[] | null = [];
    x3.push(x1, x2);
    return x3
}

function factorial(num:number): number {
    if (num < 0)  throw new Error("Negative numbers are not allowed for calculating Factorial");
    if (num === 0) return 1;
    var fact:number = num * factorial(num - 1)
    return fact;
}