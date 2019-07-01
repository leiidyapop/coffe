class Cafe
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}	
}



function mostrar(foto)
{
	this.imagen = new Image();
	this.imagen.src = foto;
	return"<img src=" + foto + " />";
}

(document.getElementById("obtener")).addEventListener("click", darTaza1); //boton

var totality = document.getElementById("totality");

var cama = [];
cama[1] = "vainilla.png";


var almacen1 = [];
almacen1.push( new Cafe(1, 100)); 

function darTaza1()
{	
	var t = document.getElementById("numero");  
	var dinero1 = parseInt(t.value);   //leer el texto

	totality.innerHTML = "";
	var div = 0;
	var papeles = 0;
	var entregado = [];

	for ( var bi of almacen1)
	{
		if (dinero1 > 0)
		{
			div = Math.floor(dinero1 * 1);
			if (div > bi.cantidad) 
			{
			papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Cafe (bi.valor , papeles) );
			dinero1 = dinero1 -(bi.valor * papeles);
		}
	}
	if (dinero1 > 0)
	{
		totality.innerHTML = "Se me acabo el café";
	}
	else
	{
		for (var i of entregado)
		{	
			
			if (i.cantidad > 0)
			{
				for (z=0; z<i.cantidad; z++)
				{
					totality.innerHTML += mostrar(cama[i.valor]) + " ";
				}	
				//resultado.innerHTML += + i.cantidad + " billetes de $" + i.valor + " " + mostrar(url[i.valor])+ " <br />" ;
				for (var e of almacen1)
				{
					if (i.valor == e.valor)
					{	
						e.cantidad = e.cantidad - i.cantidad;
					}		
				}
			}
		}
	}
}

class Cafe1
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}	
}



function mostrar(foto)
{
	this.imagen = new Image();
	this.imagen.src = foto;
	return"<img src=" + foto + " />";
}

(document.getElementById("enviar")).addEventListener("click", darTaza2); //boton

var equal = document.getElementById("equal");

var cama2 = [];
cama2[1] = "frappucino.png";


var almacen2 = [];
almacen2.push( new Cafe(1, 100)); 

function darTaza2()
{	
	var t = document.getElementById("dato");  
	var dinero3 = parseInt(t.value);   //leer el texto

	equal.innerHTML = "";
	var div = 0;
	var papeles = 0;
	var entregado = [];

	for ( var bi of almacen1)
	{
		if (dinero3 > 0)
		{
			div = Math.floor(dinero3 * 1);
			if (div > bi.cantidad) 
			{
			papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Cafe1 (bi.valor , papeles) );
			dinero3 = dinero3 -(bi.valor * papeles);
		}
	}
	if (dinero3 > 0)
	{
		equal.innerHTML = "Se me acabo el café";
	}
	else
	{
		for (var i of entregado)
		{	
			
			if (i.cantidad > 0)
			{
				for (z=0; z<i.cantidad; z++)
				{
					equal.innerHTML += mostrar(cama2[i.valor]) + " ";
				}	
				//resultado.innerHTML += + i.cantidad + " billetes de $" + i.valor + " " + mostrar(url[i.valor])+ " <br />" ;
				for (var e of almacen2)
				{
					if (i.valor == e.valor)
					{	
						e.cantidad = e.cantidad - i.cantidad;
					}		
				}
			}
		}
	}
}


class Cafe5
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}	
}



function mostrar(foto)
{
	this.imagen = new Image();
	this.imagen.src = foto;
	return"<img src=" + foto + " />";
}

(document.getElementById("obtener5")).addEventListener("click", darTaza5); //boton

var totality5 = document.getElementById("totality5");

var cama5 = [];
cama5[1] = "mocca.png";


var almacen5 = [];
almacen5.push( new Cafe5(1, 100)); 

function darTaza5()
{	
	var t = document.getElementById("numero5");  
	var dinero5 = parseInt(t.value);   //leer el texto

	totality5.innerHTML = "";
	var div = 0;
	var papeles = 0;
	var entregado = [];

	for ( var bi of almacen5)
	{
		if (dinero5 > 0)
		{
			div = Math.floor(dinero5 * 1);
			if (div > bi.cantidad) 
			{
			papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Cafe (bi.valor , papeles) );
			dinero5 = dinero5 -(bi.valor * papeles);
		}
	}
	if (dinero5 > 0)
	{
		totality5.innerHTML = "Se me acabo el café";
	}
	else
	{
		for (var i of entregado)
		{	
			
			if (i.cantidad > 0)
			{
				for (z=0; z<i.cantidad; z++)
				{
					totality5.innerHTML += mostrar(cama5[i.valor]) + " ";
				}	
				//resultado.innerHTML += + i.cantidad + " billetes de $" + i.valor + " " + mostrar(url[i.valor])+ " <br />" ;
				for (var e of almacen5)
				{
					if (i.valor == e.valor)
					{	
						e.cantidad = e.cantidad - i.cantidad;
					}		
				}
			}
		}
	}
}


class Cafe6
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}	
}



function mostrar(foto)
{
	this.imagen = new Image();
	this.imagen.src = foto;
	return"<img src=" + foto + " />";
}

(document.getElementById("obtener6")).addEventListener("click", darTaza6); //boton

var totality6 = document.getElementById("totality6");

var cama6 = [];
cama6[1] = "capuchino.png";


var almacen6 = [];
almacen6.push( new Cafe6(1, 100)); 

function darTaza6()
{	
	var t = document.getElementById("numero6");  
	var dinero6 = parseInt(t.value);   //leer el texto

	totality6.innerHTML = "";
	var div = 0;
	var papeles = 0;
	var entregado = [];

	for ( var bi of almacen6)
	{
		if (dinero6 > 0)
		{
			div = Math.floor(dinero6 * 1);
			if (div > bi.cantidad) 
			{
			papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Cafe6 (bi.valor , papeles) );
			dinero6 = dinero6 -(bi.valor * papeles);
		}
	}
	if (dinero6 > 0)
	{
		totality6.innerHTML = "Se me acabo el café";
	}
	else
	{
		for (var i of entregado)
		{	
			
			if (i.cantidad > 0)
			{
				for (z=0; z<i.cantidad; z++)
				{
					totality6.innerHTML += mostrar(cama6[i.valor]) + " ";
				}	
				//resultado.innerHTML += + i.cantidad + " billetes de $" + i.valor + " " + mostrar(url[i.valor])+ " <br />" ;
				for (var e of almacen6)
				{
					if (i.valor == e.valor)
					{	
						e.cantidad = e.cantidad - i.cantidad;
					}		
				}
			}
		}
	}
}


class Cafesote
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}	
}

function total()
{
	var total = 0;		 //para ver lo que hay en caja
	var numero = 0;
	totalDinero.innerHTML = 0;

	for (var x of caja)
	{
		numero = x.valor * x.cantidad;	
		total += numero;
	}
	totalDinero.innerHTML = "$" + total;
}

function mostrar(foto)
{
	this.imagen = new Image();
	this.imagen.src = foto;
	return"<img src=" + foto + " />";
}

(document.getElementById("extraer")).addEventListener("click", entregarCafe); //boton

var resultado = document.getElementById("resultado"); //para las imagenes


var imagenes = [];
imagenes[1] ="macchiato.png";
var taza = [];
taza.push( new Billete(1, 100));


function entregarCafe()
{	
	var t = document.getElementById("dinero");  
	var dinero = parseInt(t.value);   //leer el texto

	resultado.innerHTML = "";
	var div = 0;
	var papeles = 0;
	var entregado = [];

	for ( var ta of taza)
	{
		if (dinero > 0)
		{
			div = Math.floor(dinero/ta.valor);
			if (div > ta.cantidad) 
			{
			papeles = ta.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push( new Billete (ta.valor , papeles) );
			dinero = dinero - (ta.valor * papeles);
		}
	}
	if (dinero > 0)
	{
		resultado.innerHTML = "Cantidad de café no disponible";
	}
	else
	{
		for (var i of entregado)
		{	
			
			if (i.cantidad > 0)
			{
				for (z=0; z<i.cantidad; z++)
				{
					resultado.innerHTML += mostrar(imagenes[i.valor]) + " ";
				}	
				//resultado.innerHTML += + i.cantidad + " billetes de $" + i.valor + " " + mostrar(url[i.valor])+ " <br />" ;
				for (var e of taza)
				{
					if (i.valor == e.valor)
					{	
						e.cantidad = e.cantidad - i.cantidad;
					}		
				}
			}
		}
	}
}


















