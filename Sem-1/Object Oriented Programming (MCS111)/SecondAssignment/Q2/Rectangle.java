class Rectangle{
    private float length = 1.0f;
    private float width = 1.0f;

    public Rectangle(){
    }

    public Rectangle(float length, float width){
        this.length = length;
        this.width = width;
    }

    public float getLength(){
        return this.length;
    }

    public float getWidth(){
        return this.width;
    }

    public void setLength(float length){
        this.length = length;
    }

    public void setWidth(float width){
        this.width = width;
    }

    public float getArea(){
        return this.width * this.length;
    }

    public float getPerimeter(){
        return this.width * this.length;
    }

    @Override
    public String toString(){
        return "Rectangle[length=" + length + ", width=" + width + "]";
    }
}