public class TestDiscountSystem {
    public static void main(String[] args) {
        // Create customers
        _01_Customer customer1 = new _01_Customer("Alice", "Premium");
        _01_Customer customer2 = new _01_Customer("Bob", "Gold");
        _01_Customer customer3 = new _01_Customer("Charlie", "Silver");
        _01_Customer customer4 = new _01_Customer("David", null);

        // Create visits
        _03_Visit visit1 = new _03_Visit(customer1, 100.0, 200.0);
        _03_Visit visit2 = new _03_Visit(customer2, 150.0, 250.0);
        _03_Visit visit3 = new _03_Visit(customer3, 80.0, 150.0);
        _03_Visit visit4 = new _03_Visit(customer4, 120.0, 180.0);

        // Compute bills
        double bill1 = visit1.computeTotalBill();
        double bill2 = visit2.computeTotalBill();
        double bill3 = visit3.computeTotalBill();
        double bill4 = visit4.computeTotalBill();

        // Print bills
        System.out.println("Total bill for " + customer1.getName() + ": $" + bill1);
        System.out.println("Total bill for " + customer2.getName() + ": $" + bill2);
        System.out.println("Total bill for " + customer3.getName() + ": $" + bill3);
        System.out.println("Total bill for " + customer4.getName() + ": $" + bill4);
    }
}