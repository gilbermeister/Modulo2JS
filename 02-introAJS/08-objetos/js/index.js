//declarar objeto
// let carro = {
//     llantas: 4,
//     color: "rojo",
//     puertas: 5,
//     usaGasolina: true
// };

// console.log(carro.color);

// console.log(carro.puertas);
// console.log(carro['usaGasolina']);

let perro = {
    nombre: "canelo",
    color: "café",
    edad: 3,
    raza: "Doberman",
    ladrar: function (){
        return (`${this.nombre} sí puede ladrar wau wau`)
    },
    comer: function (){
        console.log('yomi yomi')
    }
};

console.log(perro.ladrar()); // con paréntesis porque es función
console.log(perro.comer());

perro.size = "grande";

//modificar valores

perro.edad = 5;

//eliminar un valor

delete perro.raza()

//desestructuración
const animales = ["Conejo", "gato", "perro", "rana"];
const [animal1,animal2,animal3,animal4] = animales;

console.log(`Mi primer mascota fue: ${animal1}, y ahora tengo ${animal2}`)

// desestructura lo que necesites
const nombres = ["Zanahoria","Mei","Taco","Rene"];

const [nombre1, ,nombre3] = nombres;

console.log(`Mis mascotas son: ${nombre1} y ${nombre2}`);

//operador rest
const empleado =  ["emilio", 24, "Puebla", "Desarrollador"];

const [nombre, edad, ...rest] = empleado;
 console.info(`${nombre}, tiene ${edad}`);