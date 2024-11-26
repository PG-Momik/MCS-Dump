public class _07_FullTime extends _06_Staff {
    public _07_FullTime(String name, String address, String phoneNumber, String emailAddress,
                        String office, double salary, _03_MyDate dateHired,
                        String title) {
        super(name, address, phoneNumber, emailAddress, office, salary, dateHired, title);
    }

    @Override
    public String toString() {
        return "FullTime Staff: " + super.toString();
    }
}
