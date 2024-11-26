public class _04_TestFan {
    public static void main(String[] args) {

        _04_Fan fan = new _04_Fan();

        fan.setSpeed(_04_Fan.FAST);
        fan.setOn(true);
        fan.setRadius(10.0);
        fan.setColor("yellow");


        System.out.println(fan.toString());
    }
}
