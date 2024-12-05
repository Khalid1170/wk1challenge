const readline = require('readline-sync');

function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATE = 0.15;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;

    // Calculate the gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const taxDeduction = grossSalary * TAX_RATE;
    const nhifDeduction = grossSalary * NHIF_RATE;
    const nssfDeduction = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

    // Return the results with two decimal points
    return {
        grossSalary: grossSalary.toFixed(2),
        taxDeduction: taxDeduction.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// Reading user input using readline-sync
const basicSalary = parseFloat(readline.question("Enter your basic salary: "));
const benefits = parseFloat(readline.question("Enter your benefits: "));

// Calculate net salary and output the results
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Tax Deduction: ${salaryDetails.taxDeduction}`);
console.log(`NHIF Deduction: ${salaryDetails.nhifDeduction}`);
console.log(`NSSF Deduction: ${salaryDetails.nssfDeduction}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
