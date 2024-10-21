function logMethod(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orignalMethod = descriptor.value;

    descriptor.value = function(...args:any[]) {
        console.log(`Calling ${propertyKey} method with arguments ${args.join(',')}`);
        const result = orignalMethod.apply(this, args)
        console.log(`Result:${result}`)
        return result;
    }
}


class Calculator {

    @logMethod
    add(a:number, b:number) {
        const result = a + b;
        return result;
    }
    
    @logMethod
    sub(a:number, b:number) {
        const result = a - b;
        return result;
    }
}

const calculator = new Calculator();
calculator.add(5, 3);
calculator.sub(7,2);