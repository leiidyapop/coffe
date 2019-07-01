class Billete
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
		resultado.innerHTML = "Se me acabo la money, sorry";
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
 
