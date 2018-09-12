import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        double price = getDouble("Price of a bag please?", s);
        if (price == 0) {
            System.out.println("They are free take loads!!");
            return;
        }

        if (price < 0) {
            System.out.println("Price must be a non-negative numeric value");
            return;
        }
        double money = getDouble("How much money do you have?", s);

        if (money < 0) {
            System.out.println("Money must be a non-negative numeric value");
            return;
        }
        if (money == 0) {
            System.out.println("Come back with your pocket money!");
            return;
        }
        int numBags = (int)(money / price);
        double change = money - numBags * price;
        System.out.printf("If price is £%.2f and you have £%.2f you will be able to buy %d bag%s and here is your £%.2f", price, money, numBags,(numBags > 1) ? "s" : "", change);
    }
       private static Double getDouble(String message, Scanner s){
        System.out.println(message);
        return s.nextDouble();
    }
}
