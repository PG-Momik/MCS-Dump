public class _02_CheckingAccount extends _01_Account {
    private double overdraftLimit;

    public _02_CheckingAccount(String accountNumber, double balance, double annualInterestRate, double overdraftLimit) {
        super(accountNumber, balance, annualInterestRate);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (amount > 0) {
            if (getBalance() + overdraftLimit >= amount) {
                super.withdraw(amount);
            } else {
                System.out.println("Overdraft limit exceeded. Withdrawal not processed.");
            }
        } else {
            System.out.println("Withdrawal amount must be greater than zero.");
        }
    }

    @Override
    public String toString() {
        return "Checking Account Details:\n" + super.toString() + "\nOverdraft Limit: $" + overdraftLimit;
    }
}
