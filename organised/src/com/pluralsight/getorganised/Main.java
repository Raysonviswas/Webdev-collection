package com.pluralsight.getorganised;

public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println("Get Organised");

        float floatVal = 1.0f;
        double doubleVal = 4.0d;
        byte byteVal = 7;
        short shortVal = 7;
        long longVal = 5;

        short result1 = (short)longVal;

        short result2 = (short)(byteVal - longVal);

        System.out.println("success");
    }
}
