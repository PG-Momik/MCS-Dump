class _03_Visit {
    private _01_Customer customer;
    private double productsCost;
    private double servicesCost;

    public _03_Visit(_01_Customer customer, double productsCost, double servicesCost) {
        this.customer = customer;
        this.productsCost = productsCost;
        this.servicesCost = servicesCost;
    }

    public double computeTotalBill() {
        double serviceDiscount = _02_Discount.getServiceDiscount(customer.getMemberType());
        double productDiscount = _02_Discount.getProductDiscount();

        double totalServicesCost = servicesCost * (1 - serviceDiscount);
        double totalProductsCost = productsCost * (1 - productDiscount);

        return totalServicesCost + totalProductsCost;
    }
}