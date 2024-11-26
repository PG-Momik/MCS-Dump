// Discount class
class _02_Discount {
    private static final double[] SERVICE_DISCOUNTS = {0.20, 0.15, 0.10};
    private static final double PRODUCT_DISCOUNT = 0.10;
    
    public static double getServiceDiscount(String memberType) {
        if (memberType == null) {
            return 0.0;
        }
        
        switch (memberType) {
            case "Premium":
                return SERVICE_DISCOUNTS[0];
            case "Gold":
                return SERVICE_DISCOUNTS[1];
            case "Silver":
                return SERVICE_DISCOUNTS[2];
            default:
                return 0.0;
        }
    }
    
    public static double getProductDiscount() {
        return PRODUCT_DISCOUNT;
    }
}
