public class _06_Staff extends _04_Employee {
    private String title;

    public _06_Staff(String name, String address, String phoneNumber, String emailAddress,
                     String office, double salary, _03_MyDate dateHired,
                     String title) {
        super(name, address, phoneNumber, emailAddress, office, salary, dateHired);
        this.title = title;
    }

    @Override
    public String toString() {
        return "Staff: " + super.toString();
    }
}
