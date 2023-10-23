/*1.Realice un algoritmo que muestre el nombre y apellido de un usuario */
var nombreUsuario= "Juan"
var apellidoUsuario= "Perez"
alert("Tu nombre completo es: "+ nombreUsuario + " "+apellidoUsuario) 

/*2.Realice un algoritmo que muestre el promedio de 3 notas*/
var nota1 = parseFloat(prompt("Ingrese la primer nota"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota"));
var nota3 = parseFloat(prompt("Ingrese la tercer nota"));
var promedio = ((nota1 + nota2 + nota3) / 3);
alert("el promedio de las tres notas es: " + promedio);

/*3.Realice el algoritmo para calcular e informar el perímetro del triángulo.*/
var lado1 = parseFloat(prompt("Ingrese el largo del lado 1 del triángulo"));
var lado2 = parseFloat(prompt("Ingrese el largo del lado 2 del triángulo"));
var lado3 = parseFloat(prompt("Ingrese el largo del lado 3 del triángulo"));

var perimetrotriangulo = (lado1 + lado2 + lado3);
alert("el perímetro del triángulo es: " + perimetrotriangulo);

/*4.Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.*/
var ladoA = parseFloat(prompt("Ingrese el largo del lado"));
var perimetro_cuadrado = ((ladoA) * 4);
var area_cuadrado = (ladoA * ladoA);
alert("el perímetro del cuadrado es: " + perimetro_cuadrado + " y su área es: " + area_cuadrado); 

/*5.Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.*/
var base = parseFloat(prompt("Ingrese la base del rectangulo"));
var altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
var area;
area = base * altura;
alert ("El area del rectangulo es: " + area);


var baserect = parseFloat (prompt("base del rectangulo: "));
var alturarect = parseFloat (prompt("altura del rectangulo: "));
perimetro =  2 * base + 2 * altura;
alert ("El perimetro del rectangulo es: " + perimetro + "cm"); 

/*6.Realice el algoritmo para calcular e informar el resto de la división entera entre los valores. */
var valor1= parseFloat(prompt("Ingrese el dividendo"));
var valor2= parseFloat (prompt("Ingrese el divisor"));
modulo= valor1 % valor2;
alert ("El resto de la division es: " + modulo);

/*7.Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.*/
var nombre_usuario= prompt("Ingrese su nombre");
var apellido_usuario= prompt("Ingrese su apellido");
var bienvenido="Bienvenido!"
alert( bienvenido + nombre_usuario + " " + apellido_usuario);

/*8.Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.*/

var radio = parseFloat (prompt("Ingrese el radio del circulo: "));
alert ("El area del circulo es: " +(2*31416* radio *radio));
alert ("El perimetro del circulo es: " + (2*31416*radio));
 




















