import { Producto } from "./producto";


export class Combo extends Producto{
    
    private productos : Array<Producto>;
    
    public constructor(descripcion : string){
        super(descripcion),
        this.productos = [];
    }
    
    public agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }


    
    public precio(): number {
        /* Esta es una forma distinta de resolver el ejercicio. Pero la solución implementada resuelve este problema en una sola línea de código.
        var precioFinal = 0;
        this.productos.forEach(p => precioFinal += p.precio())
        return precioFinal
        */
       return this.productos.reduce((precioFinal, producto) => precioFinal + producto.precio(), 0)
       //El valor precioFinal va sumando todos los valores del array de productos, por el lado de precios.
       //El valor inicial de precioFinal lo definimos dentro del último parámetro de la función lamda (0).
    }
    public stock(): number {
        /*
        var productoConMenorStock = Number.MAX_SAFE_INTEGER;
        var i = 0;
        while (i < this.productos.length) {
            if(this.productos[i].stock() < productoConMenorStock){
                productoConMenorStock = this.productos[i].stock();
            }
            i++;
        }
        return productoConMenorStock;
        */
        var productoConMenorStock =  this.productos.reduce((stockMasBajo, producto) => producto.stock() < stockMasBajo.stock() ? producto:stockMasBajo);
        return productoConMenorStock.stock();
    }
}