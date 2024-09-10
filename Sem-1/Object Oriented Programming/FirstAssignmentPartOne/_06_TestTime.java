public class _06_TestTime {
    public static void main(String[] args) {
        _06_Time time = new _06_Time();

        System.out.println("Current Time:");
        System.out.printf("Hour: %02d\n", time.getHour());
        System.out.printf("Minute: %02d\n", time.getMinute());
        System.out.printf("Second: %02d\n", time.getSecond());
    }
}
