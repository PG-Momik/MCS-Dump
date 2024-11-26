class _01_Customer {
    private String name;
    private String memberType;

    public _01_Customer(String name, String memberType) {
        this.name = name;
        this.memberType = memberType;
    }

    public String getMemberType() {
        return memberType;
    }

    public void setMemberType(String memberType) {
        this.memberType = memberType;
    }

    public String getName() {
        return name;
    }
}