import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        boolean state = true;

        Scanner s = new Scanner(System.in);

        while (state){
            message("\nwhat year do you what to check? type 0 to exit");
            int year = s.nextInt();
            // implement isLeapYear so that the output from this 4 line
            // test produces False, False, True, True
            System.out.printf("\nis %d a leap year? - %s", year , isLeapYear(year));
            if (year == 0) state = false;
        }
    }

    private static Boolean isLeapYear(int year) {

        if (year <= 0) {
            message("Your year is a BCE, which is too spooky to calculate");
            return false;
        } else return (year % 4) == 0 && ((year % 100) != 0 || (year % 400 == 0));
    }

    private static void message(String message){
        System.out.println(message);
    }
}

