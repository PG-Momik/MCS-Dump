abstract class _01_GeometricObject implements Comparable<_01_GeometricObject> {
    public abstract double getArea();

    @Override
    public int compareTo(_01_GeometricObject o) {
        if (this.getArea() < o.getArea()) {
            return -1;
        } else if (this.getArea() > o.getArea()) {
            return 1;
        } else {
            return 0;
        }
    }

    public static _01_GeometricObject max(_01_GeometricObject o1, _01_GeometricObject o2) {
        return (o1.compareTo(o2) >= 0) ? o1 : o2;
    }
}
