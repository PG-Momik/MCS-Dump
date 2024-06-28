public class _01_Person {
    private String name;
    private String address;
    private String phoneNumber;
    private String emailAddress;

    public _01_Person(String name, String address, String phoneNumber, String emailAddress) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    @Override
    public String toString() {
        return "Person: " + name;
    }
}
