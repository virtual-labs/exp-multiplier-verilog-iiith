## Modules Required -

- Verilog Module
- Verilog Test bench

## Code -

### Verilog Module -  

- The code block that defines inputs, outputs, module name should be placed first, followed by the code block that defines the module functionality and then finally the end of module block.
- Drag and drop the code blocks to arrange them in the order mentioned above.
- Now enter a name for the verilog module. Make sure that the name begins with alphabets and can only include alphanumeric characters and '_' character without any spaces or other special characters in between.
- Select the inputs as A, B and the output as Out.
- Now, to define the functionality of the module, the assign block has to be filled.The Out must be the product of A, B.
- Fill in the LHS and RHS of the assignment accordingly keeping in mind what value sould be assigned to whom.
- The assignment operator must be selected as '=' and not '<>=' because for a sequential storage behaviour, we always need to select the non-blocking assignment operator (<=) and not for combinational.

### Verilog Test Bench -

- The code block that defines test bench name should be placed first, followed by the code block that declares input, output registers and wires, then the block that instantiates the Multiplier module, then the blocks that define the input waves and finally the end of module block.
- Drag and drop the code blocks to arrange them in the order mentioned above.
- Now enter a name for the verilog test bench. Make sure that the name begins with alphabets and can only include alphanumeric characters and '_' character without any spaces or other special characters in between and it does not match with the verilog module name you have entered earlier.
- Then declare A,B as registers and Out as a wire. 
- Now instantiate the module by entering the name of the verilog module you have earlier coded. Select the arguments in the same order as you have chosen in the Multiplier module. The order in which you give the arguments here, the inputs and outputs will be used in the same order in the module.

## Observations -

- On clicking "validate" option after completing the code (assuming everything is filled correctly) you should see a "Success" message and a truth table for the inputs wave you have selected, under the observations section.
- Observe the fluctuations in input wave and the corresponding expected and observed output wave.
