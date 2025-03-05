const saludo = retornarNombre("Jualiana");
console.log(saludo);

function retornarNombre(nombre) {
  return "Hola " + nombre;
}

let operacionSuma = function (numero1, numero2) {
  return numero1 + numero2;
};

const operacionResta = (a, b) => {
  return a - b;
};

console.log("SUMA ", operacionSuma(12, 12));
console.log("RESTA ", operacionResta(12, 12));

const numero = "10";
const numero1 = "10";
if (numero === numero1) {
  console.log("IGUAL");
} else {
  console.log(" NO IGUAL");
}

// Ternario
numero != numero1 ? console.log("IGUAL T") : console.log("NO IGUAL T");

// LISTAS
const frutas = ["manzanas", "peras", "piñas", "kiwi"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (element of frutas) {
  console.log(element);
}

frutas.forEach((element) => {
  console.log(element);
});

frutas.map((element) => {
  return console.log(element);
});
