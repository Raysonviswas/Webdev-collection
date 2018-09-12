import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner s = new Scanner(System.in);
        int input = s.nextInt();
        int[] myNumbers = {1,3,5,7,2,6,8};
        int testResult = numberFinder(myNumbers,input);
        printNumbers(input,testResult);
    }

    private static void printNumbers(int input, int testResult){
        if (testResult == -1) {
            System.out.println("Your number doesn't exist in our array");
            return;
        }
        System.out.printf("%d is in the position %d of our array",input, testResult );
    }
    private static int numberFinder(int[] numbers, int numToFind){
        for (int i = 0; i < numbers.length; i++ ){
            if (numbers[i] == numToFind) return i;
        }
        return -1;
    }
}
