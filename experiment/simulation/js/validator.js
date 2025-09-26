import { getBoxOrder } from "./main.js";
export function isFilled() {
    // checking verilog module
    let moduleName = document.getElementById("module-name");
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let output = document.getElementById("output-selector");
    let LHS = document.getElementById("LHS-selector");
    let operator = document.getElementById("operator-selector");
    let RHS1 = document.getElementById("RHS1-selector");
    let RHS2 = document.getElementById("RHS2-selector");
    let OPERATOR2 = document.getElementById("operator2-selector");
    let error = "Highlighted part of the code is incomplete."
    if (moduleName.value.trim() == '') {
        printErrors(error, moduleName);
        return false;
    }
    if (input1.value === "") {
        printErrors(error, input1);
        return false;
    }
    if (input2.value === "") {
        printErrors(error, input2);
        return false;
    }
    if (output.value === "") {
        printErrors(error, output);
        return false;
    }
    if (LHS.value === "") {
        printErrors(error, LHS);
        return false;
    }
    if (operator.value === "") {
        printErrors(error, operator);
        return false;
    }
    if (RHS1.value === "") {
        printErrors(error, RHS1);
        return false;
    }
    if (RHS2.value === "") {
        printErrors(error, RHS2);
        return false;
    }
    if (OPERATOR2.value === "") {
        printErrors(error, OPERATOR2);
        return false;
    }


    // checking verilog testbench
    let tbName = document.getElementById("tb-name");
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    let moduleNameTB = document.getElementById("module-name-tb");
    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    if (tbName.value.trim() == '') {
        printErrors(error, tbName);
        return false;
    }
    if (input1TB.value === "") {
        printErrors(error, input1TB);
        return false;
    }
    if (input2TB.value === "") {
        printErrors(error, input2TB);
        return false;
    }
    if (input3TB.value === "") {
        printErrors(error, input3TB);
        return false;
    }
    if (moduleNameTB.value.trim() == '') {
        printErrors(error, moduleNameTB);
        return false;
    }
    if (arg1.value === "") {
        printErrors(error, arg1);
        return false;
    }
    if (arg2.value === "") {
        printErrors(error, arg2);
        return false;
    }
    if (arg3.value === "") {
        printErrors(error, arg3);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('module');
    const boxOrder2 = getBoxOrder('tb');
    let container = document.getElementById("container");
    let containerTB = document.getElementById("containerTB");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3") {
        let msg = "Please rearrange the code blocks of the Verilog Module in the correct order."
        printErrors(msg, container);
        return false;
    }
    if (boxOrder2[0] !== "1TB" || boxOrder2[1] !== "2TB" || boxOrder2[2] !== "3TB" || boxOrder2[3] !== "4TB" || boxOrder2[4] !== "5TB") {
        let msg = "Please rearrange the code blocks of the Verilog Testbench in the correct order."
        printErrors(msg, containerTB);
        return false;
    }


    // Checking if the module and testbench names are valid
    let tbName = document.getElementById("tb-name");
    let moduleNameTB = document.getElementById("module-name-tb");
    let moduleName = document.getElementById("module-name");
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    if (!regex.test(moduleName.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleName);
        return false;
    }
    if (!regex.test(moduleNameTB.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleNameTB);
        return false;
    }
    if (!regex.test(tbName.value.trim())) {
        let msg = "Invalid Testbench Name."
        printErrors(msg, tbName);
        return false;
    }

    // checking if module name matches in both code and tb
    if (moduleName.value.trim() !== moduleNameTB.value.trim()) {
        let msg = "There is no verilog module defined with the name " + moduleNameTB.value.trim();
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking if module name is not equal to the temporary function name used to call the module in the testbench
    if (moduleNameTB.value.trim() === "uut") {
        let msg = "The name of the module instantiated and the temporary function name (uut) used to instantiate the module in the testbench cannot be the same.";
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking the input and output argument declaration in the module
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let output = document.getElementById("output-selector");

    let arr2 = [input1, input2, output]
    let arr = [input1.value, input2.value, output.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, arr2[i]);
            return false;
        }
    }

    // checking assign block
    let LHS = document.getElementById("LHS-selector");
    let operator = document.getElementById("operator-selector");
    let OPERATOR2 = document.getElementById("operator2-selector");
    if (LHS.value === input1.value || LHS.value === input2.value ) {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg, LHS00);
        return false;
    }
    if (operator.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator);
        return false;
    }

    // checking i/o and function call arguments in test bench
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    arr2 = [input1TB, input2TB, input3TB ]
    arr = [input1TB.value, input2TB.value, input3TB.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, arr2[i]);
            return false;
        }
    }

    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    if (arg3.value === "A" || arg3.value === "B" ) {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg3);
        return false;
    }
    if (arg1.value === "Out"){
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg1);
        return false;
    }
    if (arg2.value === "Out" ){
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg2);
        return false;
    }
    return true;
}

export function printObsTable() {
    let arg1 = document.getElementById("argument1-selector").value;
    let arg2 = document.getElementById("argument2-selector").value;
    let arg3 = document.getElementById("argument3-selector").value;
    let input1 = document.getElementById("input1-selector").value;
    let input2 = document.getElementById("input2-selector").value;
    let output = document.getElementById("output-selector").value;
    let LHS = document.getElementById("LHS-selector").value;
    let RHS1 = document.getElementById("RHS1-selector").value;
    let RHS2 = document.getElementById("RHS2-selector").value;
    let OPERATOR2 = document.getElementById("operator2-selector").value;
    let arr = { "A": [0, 0, 1, 2, 3, 0, 2, 3], "B": [0, 3, 1, 1, 3, 1, 2, 2], "Out":[0,0,1,2,9,0,4,6] };
    let body = "";
    let isCorrect = true;
    for (let i = 0; i < 8; ++i) {
        let Multiplier = {};
        Multiplier[input1] = arr[arg1][i];
        Multiplier[input2] = arr[arg2][i];
        Multiplier[output] = "x";

        let rhs = 0;
        if(Multiplier[RHS1]==="x" || Multiplier[RHS2]==="x")
            rhs = "x";
        else if(OPERATOR2==="+")
        {
            rhs = Multiplier[RHS1]+Multiplier[RHS2];
        }
        else if(OPERATOR2==="-")
        {
            rhs = Multiplier[RHS1]- Multiplier[RHS2];
        }
        else if(OPERATOR2==="*")
        {
            rhs = Multiplier[RHS1]*Multiplier[RHS2];
        }
        console.log("changed");
        Multiplier[LHS] = rhs;
        let tb = {"Out":"x"};
        tb[arg3] = Multiplier[output];
        if (tb["Out"] !== arr["Out"][i]) {
            isCorrect = false;
            body += `<tr class="bold-table"><th>${i}</th><th>${((arr["A"][i])&0b1111).toString(2)}</th><th>${((arr["B"][i])&0b1111).toString(2)} </th><td class="failure-table"> ${((arr["Out"][i])&0b1111).toString(2)} </td><td class="failure-table"> ${((tb["Out"])&0b1111).toString(2)}</td>`;
        }
        else {
            body += `<tr class="bold-table"><th>${i}</th><th>${((arr["A"][i])&0b1111).toString(2)}</th><th>${((arr["B"][i])&0b1111).toString(2)} </th><td class="success-table"> ${((arr["Out"][i])&0b1111).toString(2)} </td><td class="success-table"> ${((tb["Out"])&0b1111).toString(2)}</td>`;
         }
    }
    document.getElementById("table-body").innerHTML = body;
    if (isCorrect) {
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}
