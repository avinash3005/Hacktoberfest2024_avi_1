import java.util.*;

public class Problem_04 {

    // Method to print the Fibonacci series up to a given count
    public static void printFibonacci(int count) {
        int num1 = 0, num2 = 1;

        System.out.print("Fibonacci Series: " + num1 + " " + num2);

        // Loop to generate the Fibonacci series
        for (int i = 2; i < count; i++) {
            int nextNum = num1 + num2;
            System.out.print(" " + nextNum);
            num1 = num2;
            num2 = nextNum;
        }
        System.out.println(); // New line after the series
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of terms: ");
        int count = sc.nextInt(); // Number of terms to generate

        if (count < 2) {
            System.out.println("Please enter a number greater than or equal to 2.");
        } else {
            printFibonacci(count);
        }
    }
}
