import { Combo } from "../main/productos/combo";
import { Producto } from "../main/productos/producto"
import { ProductoSimple } from "../main/productos/productoSimple";

var guantes: ProductoSimple;
var chalecos: ProductoSimple;
var pilotos: ProductoSimple;
var completo: Combo;

beforeEach(() => {
    guantes = new ProductoSimple("Guantes",100,100);
    chalecos = new ProductoSimple("Chalecos",200, 200);
    pilotos = new ProductoSimple("Pilotos", 200, 200);
    completo = new Combo("Combo de guantes, chalecho y piloto");
    completo.agregarProducto(guantes);
    completo.agregarProducto(chalecos);
    completo.agregarProducto(pilotos);
})

test("Probando el stock minimo", () =>{
    expect(completo.stock()).toBe(100);
})

test("Probando combos", () =>{
    expect(completo.precio()).toBe(500);
})