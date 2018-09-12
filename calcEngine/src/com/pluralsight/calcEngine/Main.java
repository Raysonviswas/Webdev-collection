package com.pluralsight.calcEngine;

public class Main {

    public static void main(String[] args) {

/*
        double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
        double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
        char[] opCodes = {'a', 'a', 's', 'm'};
        double[] results = new double[opCodes.length];
*/

        /*double val1 = 100d;
        double val2 = 50d;
        double result;
        char opCode = 'd';*/


        MathEquation[] equations = new MathEquation[4];

        equations[0] = new MathEquation('d', 100.0d, 50.0d);
        equations[1] = new MathEquation('a', 25, 92);
        equations[2] = new MathEquation('s', 225.0d,17.0d);
        equations[3] = new MathEquation('m', 11.0d, 3.0d);

        System.out.print("The results are ");

        for (MathEquation equation : equations) {

            equation.execute();

            System.out.print(equation.getResult() + ", ");

        }

    }

/*    public static MathEquation create(double leftVal, double rightVal, char opCode) {

        MathEquation equation = new MathEquation();

        equation.setLeftVal(leftVal);

        equation.setRightVal(rightVal);

        equation.setOpCode(opCode);

        return equation;

    }*/


}
