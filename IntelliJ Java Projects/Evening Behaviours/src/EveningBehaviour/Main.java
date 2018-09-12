public class Main {
    static boolean summerTime = true;
    static boolean sunnyEvening = true;
    static boolean isWeekend = true;

    public static void main(String[] args) {

        if (!isWeekend()) {
            if (isSummerTime() && isSunnyEvening()) {
                takeShower();
                eat("outside.");
                doActivity("gardening");
                read("book", "bed");
            } else if (isSummerTime() && !isSunnyEvening()) {
                takeShower();
                eat("inside.");
                doActivity("gardening");
                read("book", "bed");
            } else if (!isSummerTime() && isSunnyEvening()) {
                eat("inside.");
                read("paper", "summerhouse");
                doActivity("paperwork");
                takeShower();
                read("book", "bed");
            } else if (!isSummerTime() && !isSunnyEvening()) {
                eat("inside.");
                doActivity("paperwork");
                takeShower();
                read("Paper", "summerhouse");
            }
        }else {
            if (isSummerTime()) {
                eat("outside");
                doActivity("gardening");
                takeShower();
            }else {
                eat("inside");
                doActivity("repairs");
                takeShower();
            }
        }
    }

    public static boolean isWeekend() {
        return isWeekend;
    }

    public static boolean isSummerTime() {
        return summerTime;
    }

    public static boolean isSunnyEvening() {
        return sunnyEvening;
    }

    public static void eat(String where) {
        System.out.printf("Eating %s\n", where);
    }

    {/*public static void doGardening() {
        System.out.println("Doing gardening");
    }

    public static void doPaperWork() {
        System.out.println("Doing paperwork");
    }*/}
    public static void doActivity(String activity){
        System.out.printf("Doing %s\n", activity);
    }

    public static void takeShower() {
        System.out.println("Taking shower");
    }

    {/*public static void readPaperinSummerHouse() {
        System.out.println("Reading paper in summerhouse");
    }

    public static void readBookInBed() {
        System.out.println("Reading book in bed");
    }*/}
    public static void read (String what, String where){
        System.out.printf("Read %s in %s\n", what, where);
    }
}

