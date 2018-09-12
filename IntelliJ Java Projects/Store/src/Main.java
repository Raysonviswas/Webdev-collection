import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int price = getInteger("Price of a bag please", s);
        int money = getInteger("How much money do you have?", s);
        int numBags = 0;
        if (price != 0) {
            numBags = money/price;
        }
        if (money > 0 && numBags > 0) {
            System.out.printf("If the price is %sp and you have %sp then you will be able to buy %s bags", price, money, numBags);
        } else {
            System.out.println("you must have money to able to buy my stuff!!");
        }
    }
    private static int getInteger(String message, Scanner s) {

        // dummy statement so that starter code compiles at the beginning
        System.out.println(message);
        return s.nextInt();

    }

}
