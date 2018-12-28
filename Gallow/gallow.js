var film = new Array(6);
film[0]= "INCEPCJA";
film[1]="HARRY POTTER";
film[2]="Kung fu Panda";
film[3]="star wars";
film[4]="indiana jones";
film[5]="Warcraft";

var zwierze = new Array(6);
zwierze[0]="delfin";
zwierze[1]="pies";
zwierze[2]="koń";
zwierze[3]="królik";
zwierze[4]="ośmiornica";
zwierze[5]="krowa";

var artist = new Array(6);
artist[0]="Fryderyk Chopin";
artist[1]="Wolfgang Amadeus Mozart";
artist[2]="Zbigniew Wodecki";
artist[3]="Jan Sebastian Bach";
artist[4]="Czesław Niemen";
artist[5]="Marek Grechuta";

var losuTab = Math.floor((Math.random()*3+1));
var losu = Math.floor((Math.random()*6));

var categ= "";

if(losuTab==1)
{
	var password = film[losu];
	categ = "KATEGORIA FILM";
}
else if(losuTab==2)
{
	var password = zwierze[losu];
	categ = "KATEGORIA ZWIERZĘTA"
}
else if(losuTab==3)
{
	var password = artist[losu];
	categ ="KATEGORIA ARTYŚCI";
}


password= password.toUpperCase();
var length = password.length;
var tries=0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for (i=0; i<length; i++)
{
	if (password.charAt(i)==" ") password1 = password1 + " ";
	else password1 = password1 + "-";
}

function showPassword()
{
	document.getElementById("kat").innerHTML = categ;
  document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);
letters[0]="A"; letters[1]="Ą"; letters[2]="B"; letters[3]="C"; letters[4]="Ć";
letters[5]="D"; letters[6]="E"; letters[7]="Ę"; letters[8]="F"; letters[9]="G";
letters[10]="H";letters[11]="I";letters[12]="J";letters[13]="K";letters[14]="L";
letters[15]="Ł";letters[16]="M";letters[17]="N";letters[18]="Ń";letters[19]="O";
letters[20]="Ó";letters[21]="P";letters[22]="Q";letters[23]="R";letters[24]="S";
letters[25]="Ś";letters[26]="T";letters[27]="U";letters[28]="V";letters[29]="W";
letters[30]="X";letters[31]="Y";letters[32]="Z";letters[33]="Ż";letters[34]="Ź";

function start()
{
	var divContent = "";
	for(i=0;i<35;i++)
	{
		var element = "lit" + i;
		divContent = divContent + '<div class="letter" onclick="check('+ i +')" id="'+ element +'">'+ letters[i] +'</div>';
		if((i+1)%7==0)
		{
			divContent = divContent + '<div style="clear:both;"></div>';
		}
	}
  showPassword();
  document.getElementById("alphabet").innerHTML = divContent;
}

//dokladamy do klasy String nowa metode
String.prototype.setChar = function(position, cchar)
{
	 //jezeli miejsce ktore chcemy zmienic jest wieksze od slowa
	if(position>this.length-1)
	{
		//zwracamy ten sam lancuch co byl na wejsciu i upewniamy sie ze to string
		return this.toString();
	}
	else
	{
		//tniemy wyraz od 0(początek) do miejsca + znak ktory chcemy dac + reszta wyrazu
			return this.substr(0,position) + cchar +  this.substr(position+1);
	}

}

function check(divNumber)
{
	var oke = false;

	for(i=0;i<length;i++)
	{
		if(password.charAt(i)==letters[divNumber])
		{
			password1 = password1.setChar(i,letters[divNumber]); //!//
			oke = true;
		}
	}

	if(oke==true)
	{
			yes.play();
			var element = "lit" + divNumber;
			document.getElementById(element).style.background = "#003300";
			document.getElementById(element).style.border ="3px solid #00C000";
			document.getElementById(element).style.color = "#00C000";
			document.getElementById(element).style.cursor ="default";
			showPassword();

			if (password1 == password)
			{

				document.getElementById("alphabet").innerHTML = " WYGRAŁEŚ! HASŁO:"+password+'</br></br> <span class="reset" onclick="location.reload()"> JESZCZE RAZ? </span>';

			}
	}
	else
	{
		tries++;
		no.play();
		var element = "lit" + divNumber;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.border ="3px solid #C00000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.cursor ="default";

		//zmieniamy onclick na srednik
		document.getElementById(element).setAttribute("onclick",";");

		document.getElementById("gallow").innerHTML='<img src="img/s'+tries+'.jpg" alt="'+tries+'"/>'

		if(tries==9)
		{
			alert("Przegrałeś hasło to: "+ password);
			location.reload();
		}



	}

}
