package com.pluralsight.calcEngine;

public class MathEquation {

    private double leftVal;
    private double rightVal;
    private char opCode;
    private double result;

    public double getLeftVal () {
        return leftVal;
    }
    public void setLeftVal (double leftVal) {
        this.leftVal = leftVal;
    }
    public double getRightVal () {
        return rightVal;
    }
    public void setRightVal (double rightVal) {
        this.rightVal = rightVal;
    }
    public void setOpCode(char opCode) {
        this.opCode = opCode;
    }
    public char getOpCode() {
        return opCode;
    }

    public double getResult() {
        return result;
    }

    public MathEquation(){}

    public MathEquation (char opCode){
        this.opCode = opCode;
    }

    public  MathEquation (char opCode, double leftVal, double rightVal) {
        this(opCode);
        this.leftVal = leftVal;
        this.rightVal = rightVal;
    }

    public void execute () {
        switch (opCode) {

            case 'a':

                result = leftVal + rightVal;
                break;

            case 's':

                result = leftVal - rightVal;
                break;

            case 'd':

                result = rightVal != 0.0d ? leftVal / rightVal : 0.0d;
                break;

//            if (val2 != 0.0d) {
//
//                results = val1 / val2;
//
//            } else {
//
//                System.out.println("Error!!!! - val2 = 0");
//
//                result = 0;
//
//            }

            case 'm':

                result = leftVal * rightVal;
                break;

            default:

                System.out.println("Error!!!! - Invalid OpCode");
                result = 0;
                break;

        }

    }







}
