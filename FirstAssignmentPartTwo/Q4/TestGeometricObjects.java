public class TestGeometricObjects {
    public static void main(String[] args) {
        _02_Circle circle1 = new _02_Circle(5);
        _02_Circle circle2 = new _02_Circle(3);
        _01_GeometricObject largerCircle = _01_GeometricObject.max(circle1, circle2);
        System.out.println("Larger circle area: " + largerCircle.getArea());


        _03_Cylinder cylinder1 = new _03_Cylinder(3, 5);
        _03_Cylinder cylinder2 = new _03_Cylinder(2, 4);
        _01_GeometricObject largerCylinder = _01_GeometricObject.max(cylinder1, cylinder2);
        System.out.println("Larger cylinder volume: " + ((_03_Cylinder) largerCylinder).getArea());

        _05_Square square = new _05_Square(4);
        square.howToColor();
    }
}
