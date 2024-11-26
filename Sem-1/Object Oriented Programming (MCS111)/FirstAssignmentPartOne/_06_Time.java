import java.util.Date;

public class _06_Time {
    private int hour;
    private int minute;
    private int second;

    public _06_Time() {
        setTime(System.currentTimeMillis());
    }

    public _06_Time(long elapsedTime) {
        setTime(elapsedTime);
    }

    public void setTime(long elapsedTime) {
        long totalSeconds = elapsedTime / 1000;

        this.second = (int) (totalSeconds % 60);

        long totalMinutes = totalSeconds / 60;

        this.minute = (int) (totalMinutes % 60);

        long totalHours = totalMinutes / 60;

        this.hour = (int) (totalHours % 24);
    }

    public int getHour() {
        return hour;
    }

    public int getMinute() {
        return minute;
    }

    public int getSecond() {
        return second;
    }
}
