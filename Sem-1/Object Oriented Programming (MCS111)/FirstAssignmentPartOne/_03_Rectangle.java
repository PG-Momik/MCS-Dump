public class _03_Rectangle {
    private double width;
    private double height;
    private static String color;

    public _03_Rectangle() {
        this.width = 1.0;
        this.height = 1.0;
    }

    public _03_Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public _03_Rectangle(double width, double height, String color) {
        this.width = width;
        this.height = height;
        _03_Rectangle.color = color;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public static String getColor() {
        return color;
    }

    public static void setColor(String color) {
        _03_Rectangle.color = color;
    }

    public double getArea() {
        return this.width * this.height;
    }

    public double getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
