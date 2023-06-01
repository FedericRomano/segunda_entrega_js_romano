/*function mayor(edad){
if(edad >= 18){
    console.log("puedes ingresar");
    let dinero = prompt("cuantos dolares queres");
    dinero=parseFloat(dinero);
    let dolar=500;
    cambio = dinero * dolar;
    console.log("necesitas"+ cambio + "pesos");
}
else{
    console.log("alto ahi pequeño");
}
}

let eda = prompt("ingresa tu edad ");
mayor(eda);
*/


class Divisa {
    constructor(nombre, simbolo, tipoCambio) {
      this.nombre = nombre;
      this.simbolo = simbolo;
      this.tipoCambio = tipoCambio;
    }
  
    convertir(monto, otraDivisa) {
      const montoConvertido = monto * this.tipoCambio / otraDivisa.tipoCambio;
      return montoConvertido.toFixed(2);
    }
  }
  
 
  const dolar = new Divisa("Dólar estadounidense", "USD", 1);
  const euro = new Divisa("Euro", "EUR", 0.85);
  
 
  const montoEnDolares = 100;
  console.log(`${montoEnDolares} ${dolar.simbolo} equivale a ${dolar.convertir(montoEnDolares, euro)} ${euro.simbolo}`);
  