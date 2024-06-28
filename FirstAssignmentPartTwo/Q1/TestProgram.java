public class TestProgram {
    public static void main(String[] args) {
        // Create instances
        _02_Student student = new _02_Student("Alice", "123 Main St", "555-1234", "alice@example.com", _02_Student.Status.JUNIOR);
        _05_Faculty faculty = new _05_Faculty("Bob", "456 Elm St", "555-5678", "bob@example.com", "FAC101", 75000.0,
                new _03_MyDate(2020, 8, 15), "Monday 9-11AM", "Associate Professor");
        _08_PartTime partTimeStaff = new _08_PartTime("Charlie", "789 Oak St", "555-9012", "charlie@example.com", "STF101",
                new _03_MyDate(2021, 3, 20), "Assistant", 20, 15.0);

        // Display information
        System.out.println(student);
        System.out.println(faculty);
        System.out.println(partTimeStaff);
        System.out.println("Part-time staff earnings: $" + partTimeStaff.calculateEarnings());
    }
}
