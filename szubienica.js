
var przyslowia= new Array(10);
przyslowia[0]="bez pracy nie ma kołaczy";
przyslowia[1]="wolność tomku w swoim domku";
przyslowia[2]="gdzie baba nie może tam diabła pośle";
przyslowia[3]="gość w dom, bóg w dom";
przyslowia[4]="nosił wilk razy kilka, ponieśli i wilka";
przyslowia[5]="lepszy wróbel w garści niż gołąb na dachu";
przyslowia[6]="nie chwal dnia przed zachodem słońca";
przyslowia[7]="apetyt rośnie w miarę jedzenia";
przyslowia[8]="co ma wisieć, nie utonie";
przyslowia[9]="dzieci i ryby głosu nie mają";

var haslo = przyslowia[Math.floor(Math.random()*10)]



haslo=haslo.toUpperCase();

dlugosc=haslo.length;

haslo1="";

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");



function ukryj()
{
	for (i=0; i<dlugosc; i++)
	if (haslo.charAt(i)==" ") haslo1=haslo1+" ";
	else haslo1=haslo1+"-";
}








function wypiszhaslo()
{
	ukryj();
	document.getElementById("haselko").innerHTML=haslo1;
	wypiszlitery();
}



var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";




var trescdiva= ""

function wypiszlitery()
{
	for(i=0; i<=34;i++)
	{
	var element="lit"+i;
	trescdiva=trescdiva+'<div class="ppp" id="'+element+'"onclick="odkryj('+i+')">'+litery[i]+'</div>';
	if ((i+1) % 7 ==0) trescdiva = trescdiva + '<div style="clear:both;"></div>';
	}
	document.getElementById("literki").innerHTML=trescdiva;
	

}
window.onload=wypiszhaslo;	

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

var ileskuch=0;

	function odkryj(nr)
{
	var trafiona=false;
	
	for(i=0; i<dlugosc; i++)
	{
	if (haslo.charAt(i)==litery[nr])
	{
	haslo1=haslo1.ustawZnak(i, litery[nr]);
	trafiona=true;
	}
	}
	
	
	if(trafiona==true)
	{
		var element="lit"+nr;
		yes.play();
		document.getElementById(element).style.background="green";
		document.getElementById("haselko").innerHTML=haslo1;
		trafiona=false;
		
	}
	else
	{
		ileskuch++;
		var element="lit"+nr;
		var rys="s"+ileskuch;
		no.play();
		document.getElementById(element).style.background="red";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		document.getElementById("obraz").innerHTML='<img src="img/'+rys+'.jpg"/>';
	}
	if(haslo==haslo1)
		{
		document.getElementById("literki").innerHTML='<h1>WYGRAŁEŚ!</h1><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		}
	else if (ileskuch>=9)
	{
		document.getElementById("literki").innerHTML='<h1>PRZEGRAŁEŚ!</h1><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
}




