/*
    xnum 
*/
function bhaskara(a:number, b:number, c:number, xnum:number=3) {
    const delta:number = Math.pow(b, 2) - 4 * a * c
    if (delta < 0){
        return 0
    }
    const x:number = Math.sqrt(delta)
    const x1:number = (- b + x) / (2 * a)
    const x2:number = (- b - x) / (2 * a)
    if(xnum == 1){
        return x1 
    }
    if(xnum == 2){
        return x2
    }
    if(xnum == 3){
        const x3:number[] | null = [];
        x3.push(x1, x2);
        return x3
    }
}
