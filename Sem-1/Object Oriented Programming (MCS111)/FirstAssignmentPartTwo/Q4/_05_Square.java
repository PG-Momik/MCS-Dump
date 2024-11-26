class _05_Square extends _01_GeometricObject implements _04_Colorable {
    private double sideLength;

    public _05_Square(double sideLength) {
        this.sideLength = sideLength;
    }

    @Override
    public double getArea() {
        return sideLength * sideLength;
    }

    @Override
    public void howToColor() {
        System.out.println("Color all four sides.");
    }
}
