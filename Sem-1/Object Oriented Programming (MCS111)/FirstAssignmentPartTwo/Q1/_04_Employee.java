public class _04_Employee extends _01_Person {
    private String office;
    private double salary;
    private _03_MyDate dateHired;

    public _04_Employee(String name, String address, String phoneNumber, String emailAddress,
                        String office, double salary, _03_MyDate dateHired) {
        super(name, address, phoneNumber, emailAddress);
        this.office = office;
        this.salary = salary;
        this.dateHired = dateHired;
    }

    @Override
    public String toString() {
        return "Employee: " + super.toString();
    }
}
