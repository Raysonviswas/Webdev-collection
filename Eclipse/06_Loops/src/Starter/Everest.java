package Starter;

public class Everest {

	public static void main(String[] args) {
		
		String mountain = "Everest";
        double height = 8850.00d;
        double growthRate = 0.000006893d;
        double yearCount = 1000.00d;

        for (int i = 0; i < yearCount; i++){
            height = height + height * growthRate;
        }

//        System.out.printf("Height of Everest in 1000 years will be %.3f", height);
        printHeight(mountain, yearCount, height);

    }

    private static void printHeight(String mountain, double yearCount, double height) {
        System.out.printf("Height of %s in %f years will be %.3f",mountain, yearCount, height);
    }

}


