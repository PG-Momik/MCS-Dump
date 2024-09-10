class _03_Cylinder extends _02_Circle {
    private double height;

    public _03_Cylinder(double radius, double height) {
        super(radius);
        this.height = height;
    }

    @Override
    public double getArea() {
        return 2 * super.getArea() + 2 * Math.PI * getRadius() * height;
    }

    @Override
    public int compareTo(_01_GeometricObject o) {
        if (o instanceof _03_Cylinder) {
            _03_Cylinder other = (_03_Cylinder) o;
            double thisVolume = super.getArea() * height;
            double otherVolume = other.getArea() * other.height;
            if (thisVolume < otherVolume) {
                return -1;
            } else if (thisVolume > otherVolume) {
                return 1;
            } else {
                return 0;
            }
        }
        return super.compareTo(o);
    }
}
