import { Component } from '@angular/core';

@Component({
    selector: 'calculator-app',
    templateUrl: './calculator.component.html',
})

export class CalculatorComponent {

    input:string = '';
    result:string = '';

    // Method to clear all the input
    allclear() {  }

    // method to clear the last operand
    clear() {}

    // method to declare operator
    pressOperator(arg0: string) {}

    // method to declare number
    pressNum(arg0: string) {}

    // method to get result 
    getResult() {}
}