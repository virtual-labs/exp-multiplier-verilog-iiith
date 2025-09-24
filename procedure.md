> **Important Note:** This simulation is designed for desktop view only. For the best experience, please use a desktop monitor with a minimum resolution of 1280x720 pixels. The simulation may not function properly on smaller screens like mobile devices or tablets.

### 1. Understanding the Simulation

This simulation helps you learn about Multiplier implementation in Verilog:

- **Multiplier Design:** A combinational circuit that performs multiplication of two input values.
- The multiplier takes two inputs (A and B) and produces their product as output (Out).
- It demonstrates combinational logic behavior using assign statements.
- The output Out represents the product: Out = A × B

### 2. Getting Started

1. Enter your module name and testbench name in the respective fields:
   - Module names must follow [Verilog naming conventions](https://www.chipverify.com/verilog/verilog-syntax).
   - Only letters, numbers, and underscores are allowed (no hyphens or special characters).
   - Testbench name must end with '_tb'.

### 3. Building the Verilog Module

1. In the first column, arrange the code blocks in the correct order by dragging and dropping them:
   - The code block that defines inputs, outputs, and module name should be placed first
   - Followed by the code block that defines the module functionality
   - Finally, the end of module block

2. Select the appropriate signals:
   - Inputs: A, B (values to be multiplied)
   - Output: Out (product result)

3. Define the functionality using the assign statement:
   - The Out must be assigned the product of A and B
   - Fill in the LHS and RHS of the assignment keeping in mind what value should be assigned to whom
   - The assignment operator must be '=' (not '<=') because for combinational logic, we use blocking assignment (=)

### 4. Creating the Testbench

1. In the second column, arrange the testbench code blocks in the correct order:
   - Testbench name definition
   - Signal declarations (reg for inputs, wire for outputs)
   - Module instantiation
   - Input wave definitions
   - End of module

2. Define the testbench signals:
   - `reg A, B; wire Out`

3. Connect the ports correctly in the module instantiation:
   - Enter the name of the verilog module you have earlier coded
   - Select the arguments in the same order as you have chosen in the Multiplier module
   - Ensure proper mapping: inputs A, B and output Out
   - **Important:** Maintain correct order - the order you give arguments here will be used in the same order in the module

### 5. Validation and Observation

1. Click the "Validate" button to check your code.
2. The observation column will show:
   - Error messages in red if there are mistakes. Refer to the [Troubleshooting](#6-troubleshooting) section below for dealing with the Error messages.
   - A truth table for the input waves you have selected if the code is correct.
3. If you need to start over, click the "Reset" button to shuffle the code blocks.

#### Verilog Syntax Reference

- For detailed Verilog syntax rules, refer to the [Verilog Syntax Guide](https://www.chipverify.com/verilog/verilog-syntax).
- For module and testbench examples, visit [ASIC World Verilog Tutorial](https://www.asic-world.com/verilog/veritut.html).

### 6. Troubleshooting

If you see error messages, carefully check:

- Module and testbench names follow the naming rules.
- Code blocks are in the correct order.
- A and B are properly declared as inputs, Out as output.
- The assign statement correctly implements the multiplication (Out = A * B).
- Blocking assignment (=) is used for combinational logic.
- Port connections are properly defined in the module instantiation.

Additional tips:

- Use the Reset button to start fresh if needed.
- Observe the fluctuations in input waves and corresponding expected and observed output wave.
- Verify the multiplier behavior produces correct multiplication results for all input combinations.

#### Important Reminders

- Verilog is case-sensitive.
- All signals must be properly declared before use.
- Testbench signals must match the module ports.
- Code blocks must be in the correct order for the simulation to work.
- Use blocking assignment (=) for combinational logic with assign statements.
- The multiplication operation should be correctly implemented using the * operator.
- Ensure proper port order in module instantiation to match the module definition.
