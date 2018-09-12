package Starter;

public class Number {

	public static void main(String[] args) {
		
		long result = 1, maxValue = 9999999999L;

        for (int i = 1; i < 64; i++) {
            result *= 2;

            if (result > maxValue){
                break;
            }

//            System.out.println(i+ "\t"+ result);
            printFormatted(result, i);

        }
    }

    private static void printFormatted(long result, int i) {
        System.out.printf("%02d\t%10d\n", i, result);
    }
		

}
