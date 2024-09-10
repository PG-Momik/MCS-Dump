import java.util.EnumSet;

public class _02_Student extends _01_Person {
    public enum Status {
        FRESHMAN, SOPHOMORE, JUNIOR, SENIOR
    }

    private Status status;

    public _02_Student(String name, String address, String phoneNumber, String emailAddress, Status status) {
        super(name, address, phoneNumber, emailAddress);
        this.status = status;
    }

    @Override
    public String toString() {
        return "Student: " + super.toString();
    }
}
