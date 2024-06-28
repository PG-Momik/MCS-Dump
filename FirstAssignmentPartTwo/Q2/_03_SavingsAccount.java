public class _03_SavingsAccount extends _01_Account {
    public _03_SavingsAccount(String accountNumber, double balance, double annualInterestRate) {
        super(accountNumber, balance, annualInterestRate);
    }

    @Override
    public void withdraw(double amount) {
        if (amount > 0) {
            if (getBalance() >= amount) {
                super.withdraw(amount);
            } else {
                System.out.println("Insufficient funds. Withdrawal not processed.");
            }
        } else {
            System.out.println("Withdrawal amount must be greater than zero.");
        }
    }

    @Override
    public String toString() {
        return "Savings Account Details:\n" + super.toString();
    }
}
