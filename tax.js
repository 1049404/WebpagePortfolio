// Refrences
let input           = document.querySelector("#input1");

let totalTaxText    = document.querySelector("#totalTax");
let taxRate         = document.querySelector("#taxRate");
let netIncome       = document.querySelector("#netIncome");
let monthlyIncome   = document.querySelector("#monthlyIncome");
let biWeeklyIncome  = document.querySelector("#biWeeklyIncome");
let weeklyIncome    = document.querySelector("#Weekly");
let btn             = document.querySelector("#btn");

let totalTaxText1    = document.querySelector("#totalTax1");
let taxRate1         = document.querySelector("#taxRate1");
let netIncome1       = document.querySelector("#netIncome1");
let monthlyIncome1   = document.querySelector("#monthlyIncome1");
let biWeeklyIncome1  = document.querySelector("#biWeeklyIncome1");
let weeklyIncome1    = document.querySelector("#Weekly1");
let btn1             = document.querySelector("#btn1");

let totalTaxText2    = document.querySelector("#totalTax2");
let taxRate2         = document.querySelector("#taxRate2");
let netIncome2       = document.querySelector("#netIncome2");
let monthlyIncome2   = document.querySelector("#monthlyIncome2");
let biWeeklyIncome2   = document.querySelector("#biWeeklyIncome2");
let weeklyIncome2    = document.querySelector("#Weekly2");
let btn2             = document.querySelector("#btn2");
// Const
const taxBracket0   = 11000;
const taxBracket1   = 33725;
const taxBracket2   = 50650;
const taxBracket3   = 86725;
const taxBracket4   = 49150;
const taxBracket5   = 346875;

// Total Tax
let totalTax        = 0;

btn.addEventListener("click", OnClick);
btn1.addEventListener("click", OnClick1);
btn2.addEventListener("click", OnClick2);


// Activates all the math when button is pressed
function OnClick() {
    totalTax            = 0;
    let grossIncome     = input.value;
    let bracket         = 0;
    while (grossIncome > 0) {
        switch (bracket) {
            // The 1st Tax Bracket
            case 0:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket0) {
                    totalTax        = totalTax + (taxBracket0 * 0.10);
                    grossIncome     = grossIncome - taxBracket0;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.10);
                    grossIncome     = 0;
                }
                break;
            // The 2nd Tax Bracket
            case 1:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket1) {
                    totalTax        = totalTax + (taxBracket1 * 0.12);
                    grossIncome     = grossIncome - taxBracket1;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.12);
                    grossIncome     = 0;
                }
            break;
            // The 3rd Tax Bracket
            case 2:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket2) {
                    totalTax        = totalTax + (taxBracket2 * 0.22);
                    grossIncome     = grossIncome - taxBracket2;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.22);
                    grossIncome     = 0;
                }
                break;
            // The 4th Tax Bracket
            case 3:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket3) {
                    totalTax        = totalTax + (taxBracket3 * 0.24);
                    grossIncome     = grossIncome - taxBracket3;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.24);
                    grossIncome     = 0;
                }
                break;
            // The 5th Tax Bracket
            case 4:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket4) {
                    totalTax        = totalTax + (taxBracket4 * 0.32);
                    grossIncome     = grossIncome - taxBracket4;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.32);
                    grossIncome     = 0;
                }
                break;
            // The 6th Tax Bracket
            case 5:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket5) {
                    totalTax        = totalTax + (taxBracket5 * 0.35);
                    grossIncome     = grossIncome - taxBracket5;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.35);
                    grossIncome     = 0;
                } 
                break;
            case 6:
                totalTax = totalTax + (grossIncome * 0.37);
                grossIncome = 0;
                break;
        }
        bracket++;
        console.log(totalTax);
        console.log(grossIncome);

    }
    totalTaxText.textContent = totalTax;
    taxRate.textContent = totalTax / input.value;
    netIncome.textContent = input.value - totalTax;
    monthlyIncome.textContent = netIncome.textContent / 12;
    biWeeklyIncome.textContent = netIncome.textContent / 24;
    weeklyIncome.textContent = netIncome.textContent / 48;
}

function OnClick1() {
    totalTax            = 0;
    let grossIncome     = input.value;
    let bracket         = 0;
    while (grossIncome > 0) {
        switch (bracket) {
            // The 1st Tax Bracket
            case 0:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket0) {
                    totalTax        = totalTax + (taxBracket0 * 0.10);
                    grossIncome     = grossIncome - taxBracket0;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.10);
                    grossIncome     = 0;
                }
                break;
            // The 2nd Tax Bracket
            case 1:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket1) {
                    totalTax        = totalTax + (taxBracket1 * 0.12);
                    grossIncome     = grossIncome - taxBracket1;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.12);
                    grossIncome     = 0;
                }
            break;
            // The 3rd Tax Bracket
            case 2:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket2) {
                    totalTax        = totalTax + (taxBracket2 * 0.22);
                    grossIncome     = grossIncome - taxBracket2;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.22);
                    grossIncome     = 0;
                }
                break;
            // The 4th Tax Bracket
            case 3:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket3) {
                    totalTax        = totalTax + (taxBracket3 * 0.24);
                    grossIncome     = grossIncome - taxBracket3;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.24);
                    grossIncome     = 0;
                }
                break;
            // The 5th Tax Bracket
            case 4:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket4) {
                    totalTax        = totalTax + (taxBracket4 * 0.32);
                    grossIncome     = grossIncome - taxBracket4;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.32);
                    grossIncome     = 0;
                }
                break;
            // The 6th Tax Bracket
            case 5:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket5) {
                    totalTax        = totalTax + (taxBracket5 * 0.35);
                    grossIncome     = grossIncome - taxBracket5;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.35);
                    grossIncome     = 0;
                } 
                break;
            case 6:
                totalTax = totalTax + (grossIncome * 0.37);
                grossIncome = 0;
                break;
        }
        bracket++;
        console.log(totalTax);
        console.log(grossIncome);

    }
    totalTaxText1.textContent = totalTax;
    taxRate1.textContent = totalTax / input.value;
    netIncome1.textContent = input.value - totalTax;
    monthlyIncome1.textContent = netIncome1.textContent / 12;
    biWeeklyIncome1.textContent = netIncome1.textContent / 24;
    weeklyIncome1.textContent = netIncome1.textContent / 48;
}

function OnClick2() {
    totalTax            = 0;
    let grossIncome     = input.value;
    let bracket         = 0;
    while (grossIncome > 0) {
        switch (bracket) {
            // The 1st Tax Bracket
            case 0:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket0) {
                    totalTax        = totalTax + (taxBracket0 * 0.10);
                    grossIncome     = grossIncome - taxBracket0;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.10);
                    grossIncome     = 0;
                }
                break;
            // The 2nd Tax Bracket
            case 1:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket1) {
                    totalTax        = totalTax + (taxBracket1 * 0.12);
                    grossIncome     = grossIncome - taxBracket1;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.12);
                    grossIncome     = 0;
                }
            break;
            // The 3rd Tax Bracket
            case 2:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket2) {
                    totalTax        = totalTax + (taxBracket2 * 0.22);
                    grossIncome     = grossIncome - taxBracket2;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.22);
                    grossIncome     = 0;
                }
                break;
            // The 4th Tax Bracket
            case 3:
               // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket3) {
                    totalTax        = totalTax + (taxBracket3 * 0.24);
                    grossIncome     = grossIncome - taxBracket3;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.24);
                    grossIncome     = 0;
                }
                break;
            // The 5th Tax Bracket
            case 4:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket4) {
                    totalTax        = totalTax + (taxBracket4 * 0.32);
                    grossIncome     = grossIncome - taxBracket4;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.32);
                    grossIncome     = 0;
                }
                break;
            // The 6th Tax Bracket
            case 5:
                // has more than or equal to money than whole tax bracket
                if (grossIncome > taxBracket5) {
                    totalTax        = totalTax + (taxBracket5 * 0.35);
                    grossIncome     = grossIncome - taxBracket5;
                } 
                // Has less money than whole tax bracket
                else {
                    totalTax        = totalTax + (grossIncome * 0.35);
                    grossIncome     = 0;
                } 
                break;
            case 6:
                totalTax = totalTax + (grossIncome * 0.37);
                grossIncome = 0;
                break;
        }
        bracket++;
        console.log(totalTax);
        console.log(grossIncome);

    }
    totalTaxText2.textContent = totalTax;
    taxRate2.textContent = totalTax / input.value;
    netIncome2.textContent = input.value - totalTax;
    monthlyIncome2.textContent = netIncome2.textContent / 12;
    biWeeklyIncome2.textContent = netIncome2.textContent / 24;
    weeklyIncome2.textContent = netIncome2.textContent / 48;
}