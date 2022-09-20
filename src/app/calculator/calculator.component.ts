import { Component } from '@angular/core';

@Component({
    selector: 'calculator-app',
    templateUrl: './calculator.component.html',
})

export class CalculatorComponent {

    input:string = '';
    result:string = '';

    // Method to clear all the input
    allclear() { 
        this.input = '';
        this.result = '';
     }

    // method to clear the last input
    clear() {
        if(this.input != '') {
            this.input = this.input.substring(0, this.input.length -1);
        }
    }

    // method to declare operator
    pressOperator(op: string) {
        const lastKey = this.input[this.input.length - 1];
        if(lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
            return;
        }
        this.input = this.input + op;
        this.calcResult();
    }

    // method to declare number
    pressNum(num: string) {
        if(num == '.') {
            if(this.input != '') {
                const lastNum = this.getLastOperand();
                if(lastNum.lastIndexOf('.') >= 0) return;
            }
        }

        if(num == '0') {
            if(this.input == '') {
                return ;
            }
            const prevKey = this.input[this.input.length - 1];
            if(prevKey === '/' || prevKey === '*' || prevKey === '-' || prevKey === '+') {
                return;
            }
        }
        this.input = this.input + num;
        this.calcResult();
    }

    // method to get last operand
    getLastOperand() {
        let pos:number;
        pos = this.input.toString().lastIndexOf('+')
        if (this.input.toString().lastIndexOf('-') > pos) pos = this.input.lastIndexOf('-');
        if (this.input.toString().lastIndexOf('*') > pos) pos = this.input.lastIndexOf('*');
        if (this.input.toString().lastIndexOf('/') > pos) pos = this.input.lastIndexOf('/');
        return this.input.substring(pos + 1);
    }

    // method to calc result 
    calcResult() {
        let formula = this.input;
        let lastKey = formula[formula.length - 1];
        if(lastKey === '.') {
            formula = formula.substring(0, formula.length - 1);
        }
        lastKey = formula[formula.length - 1];
        if(lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
            formula = formula.substring(0, formula.length - 1);
        }

        this.result = eval(formula);
    }

    // method to get result 
    getResult() {
        this.calcResult();
        this.input = this.result;
        if(this.input == '0') this.input='';
    }
}