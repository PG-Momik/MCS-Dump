public class _05_Faculty extends _04_Employee {
    private String officeHours;
    private String rank;

    public _05_Faculty(String name, String address, String phoneNumber, String emailAddress,
                       String office, double salary, _03_MyDate dateHired,
                       String officeHours, String rank) {
        super(name, address, phoneNumber, emailAddress, office, salary, dateHired);
        this.officeHours = officeHours;
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "Faculty: " + super.toString();
    }
}
