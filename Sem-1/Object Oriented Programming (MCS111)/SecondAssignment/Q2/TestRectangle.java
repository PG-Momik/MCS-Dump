public class TestRectangle {
   public static void main(String[] args) {
      Rectangle r1 = new Rectangle(1.5f, 3.5f);
      System.out.println(r1);
      Rectangle r2 = new Rectangle();
      System.out.println(r2);

      r1.setLength(5.9f);
      r1.setWidth(7.9f);

      System.out.println(r1);
      System.out.println("Length is: " + r1.getLength());
      System.out.println("Width is: " + r1.getWidth());

      System.out.printf("Area is: %.2f%n", r1.getArea());
      System.out.printf("Perimeter is: %.2f%n", r1.getPerimeter());
   }
}