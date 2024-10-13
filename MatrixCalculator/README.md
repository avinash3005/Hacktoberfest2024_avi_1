# Matrix Multiplication (2x2) - HTML, CSS, JavaScript

This project implements matrix multiplication for 2x2 matrices using HTML, CSS, and JavaScript. It allows users to input values for two matrices, multiply them, and view the result in a clean and responsive interface.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [License](#license)

## Demo

The application provides a simple user interface to multiply two 2x2 matrices.

![Matrix Multiplication Demo](#)

## Features

- Input fields for two 2x2 matrices (Matrix A and Matrix B)
- Responsive layout using Flexbox and CSS
- Real-time matrix multiplication with a "Multiply" button
- Displays the resulting 2x2 matrix after multiplication
- Simple and clean UI with hover effects for buttons

## How It Works

This project multiplies two 2x2 matrices using the standard matrix multiplication formula:

If `A` and `B` are matrices, the result `C = A * B` is computed as:
C00 = A00 * B00 + A01 * B10 C01 = A00 * B01 + A01 * B11 C10 = A10 * B00 + A11 * B10 C11 = A10 * B01 + A11 * B11

Where each element of the result matrix `C` is calculated from corresponding elements of matrix `A` and matrix `B`.

### Layout:

- Two 2x2 matrices are displayed side by side.
- After entering values, the user clicks the **Multiply Matrices** button.
- The resulting matrix is displayed below the button.

## Usage

### Steps:

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your browser.
3. Enter values for each element of **Matrix A** and **Matrix B**.
4. Click on **Multiply Matrices**.
5. The result will be displayed as a new 2x2 matrix.

### Example:

For two matrices:
Matrix A = [ 1 2 ] [ 3 4 ]

Matrix B = [ 5 6 ] [ 7 8 ]
Result = [ 19 22 ] [ 43 50 ]



## Technology Stack

- **HTML**: Provides the structure for the matrix input fields and layout.
- **CSS**: Defines the styling for the matrix layout, buttons, and overall UI.
- **JavaScript**: Implements the logic to perform matrix multiplication based on the user input.

### CSS Specifics:
- Flexbox is used to align the two matrices side by side.
- Input fields are styled to have uniform appearance and spacing.
- The result matrix is dynamically generated and displayed in a styled div.

### JavaScript Specifics:
- The `multiplyMatrices()` function handles the logic for extracting values from input fields, performing the matrix multiplication, and displaying the result.

## License

This project is licensed under the MIT License. Feel free to use and modify it as you like.
