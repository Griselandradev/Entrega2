// Arreglos
const numeros = [1, 2, 3, 4, 5];
const nombres = ["Grisel", "Marcelo", "Bruno", "Luis"];
const precios = [100.5, 200.75, 300.25, 400.0];
const flags = [true, false, true, false];

// Aplicando métodos

// .map()
const numerosDoblados = numeros.map(n => n * 2);
console.log("Números doblados (map):", numerosDoblados);

const nombresMayus = nombres.map(n => n.toUpperCase());
console.log("Nombres en mayúsculas (map):", nombresMayus);

const preciosConImpuesto = precios.map(p => p * 1.15);
console.log("Precios con impuesto (map):", preciosConImpuesto);

const flagsInvertidos = flags.map(f => !f);
console.log("Flags invertidos (map):", flagsInvertidos);

//.filter()
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log("Números pares (filter):", numerosPares);

const nombresCortos = nombres.filter(n => n.length <= 4);
console.log("Nombres cortos (filter):", nombresCortos);

const preciosAltos = precios.filter(p => p > 200.0);
console.log("Precios mayores a 200 (filter):", preciosAltos);

const flagsVerdaderos = flags.filter(f => f);
console.log("Flags verdaderos (filter):", flagsVerdaderos);

// .reduce()
const sumaNumeros = numeros.reduce((a, b) => a + b, 0);
console.log("Suma de números (reduce):", sumaNumeros);

const todosNombres = nombres.reduce((a, b) => a + " " + b);
console.log("Concatenación de nombres (reduce):", todosNombres.trim());

const totalPrecios = precios.reduce((a, b) => a + b, 0);
console.log("Suma de precios (reduce):", totalPrecios);

const allTrue = flags.reduce((a, b) => a && b, true);
console.log("Todos los flags son verdaderos (reduce):", allTrue);

// .forEach()
console.log("Números en forEach:");
numeros.forEach(n => console.log(n));

console.log("Nombres en forEach:");
nombres.forEach(n => console.log(n));

console.log("Precios en forEach:");
precios.forEach(p => console.log(p));

console.log("Flags en forEach:");
flags.forEach(f => console.log(f));

//Funciones flecha con distintos números de parámetros
// Sin parámetros
const lectura = () => console.log("Que bien, si sabes leer");
lectura();

// Con un parámetro
const mostrarNombre = nombre => console.log(`Hola ${nombre}`);
mostrarNombre("Grisel");

// Con dos parámetros
const sumar = (a, b) => a + b;
console.log("Suma de 3 y 4:", sumar(3, 4));

// Con más de dos parámetros
const sumarTres = (a, b, c) => a + b + c;
console.log("Suma de 1, 2 y 3:", sumarTres(1, 2, 3));

// Función que retorna un valor booleano
const esPar = numero => numero % 2 === 0;
console.log("¿Es 4 par?", esPar(4));
