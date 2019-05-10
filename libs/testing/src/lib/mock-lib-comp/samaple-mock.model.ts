export interface ICalculator {
    isEnabled: boolean;    

    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    divide(a: number, b: number): number;
}

export class RealCalculator implements ICalculator {
    get isEnabled() { return true; }    
    add(a: number, b: number) { return a + b; }
    subtract(a: number, b: number) { return a - b; }
    divide(a: number, b: number) { return a / b; }
    

    constructor(foo: string, bar: () => string) {
        console.warn('constructor called', foo, bar);
    }
}