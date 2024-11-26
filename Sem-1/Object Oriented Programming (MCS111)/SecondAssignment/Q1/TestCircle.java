public class TestCircle {
    public static void main(String[] args) {
        Circle c1 = new Circle(5.0, "blue");

        System.out.println("Area before change: " + c1.getArea());

        c1.setColor("red");
        c1.setRadius(21.1);

        System.out.println("Current Color is: " + c1.getColor());
        System.out.println("Current Radius is: " + c1.getRadius());
        System.out.println("Area after change: " + c1.getArea());

        System.out.println(c1.toString());
    }
}
