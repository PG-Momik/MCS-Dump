public class _08_PartTime extends _06_Staff {
    private int hoursWorked;
    private double hourlyRate;

    public _08_PartTime(String name, String address, String phoneNumber, String emailAddress,
                        String office, _03_MyDate dateHired, String title, int hoursWorked, double hourlyRate) {
        super(name, address, phoneNumber, emailAddress, office, 0, dateHired, title); // Part-time salary initialized to 0
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    @Override
    public String toString() {
        return "PartTime Staff: " + super.toString();
    }

    public double calculateEarnings() {
        return hoursWorked * hourlyRate;
    }
}
