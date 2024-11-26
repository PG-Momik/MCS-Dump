class _02_Circle extends _01_GeometricObject {
    private double radius;

    public _02_Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
