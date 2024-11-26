public class TestBankAccounts {
    public static void main(String[] args) {

        _02_CheckingAccount checkingAccount = new _02_CheckingAccount("12345", 1000.0, 1.5, 500.0);
        _03_SavingsAccount savingsAccount = new _03_SavingsAccount("54321", 2000.0, 2.0);

        checkingAccount.deposit(500.0);
        checkingAccount.withdraw(200.0);
        System.out.println(checkingAccount);

        savingsAccount.deposit(1000.0);
        savingsAccount.withdraw(500.0);
        System.out.println(savingsAccount);
    }
}
