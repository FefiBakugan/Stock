import { Producto } from "./producto";


export class ProductoSimple extends Producto{
    private precioSimple : number;
    private stockSimple : number;

    public constructor(descripcion : string, precio:number, stock:number){
        super(descripcion)
        this.precioSimple = precio;
        this.stockSimple = stock;
    }

    public precio(): number {
        return this.precioSimple;
    }
    public stock(): number {
        return this.stockSimple;
    }
}