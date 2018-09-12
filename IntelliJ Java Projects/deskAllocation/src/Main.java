public class Main {
    public static String[][] deskNames;

    public static String[] names =
            { "Amy", "Ben", "Carly", "Danesha", "Evy", "Faroukh",
                    "Greg", "Heather", "Ivy", "Jaz", "Keith", "Monica",
                    "Nick" }; // 13 names!

    public static void main(String[] args) {
        // initialise and size the array at 3 rows * 4 columns
        deskNames = new String[3][];
        deskNames[0] = new String[4];
        deskNames[1] = new String[4];
        deskNames[2] = new String[4];

        allocateAllDesks();

        displayDeskMap();

        searchDesks("Jaz");
        searchDesks("Nick");

    }

    public static void allocateAllDesks() {
        for (int i = 0; i < names.length; i++) allocateDesk(names[i]);
    }

    // called from allocateAllDesks()
    public static void allocateDesk(String name) {
        for (int rows = 0; rows < deskNames.length; rows++) {
            for (int columns = 0; columns < deskNames[rows].length; columns++) {
                if (deskNames[rows][columns] == null) {
                    deskNames[rows][columns] = name;
                    return;
                }
            }
        }
    }

    private static void displayDeskMap() {
        for (int rows = 0; rows < deskNames.length; rows++) {
            for (int columns = 0; columns < deskNames[rows].length; columns++) {
                System.out.printf("%s\t\t", deskNames[rows][columns]);
            }
            System.out.println();
        }
    }

    public static void searchDesks(String name) {


    }

    public static void clearAllDesks() {


    }

}
