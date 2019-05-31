function checkNum (strMain) {
	var num=0;
	strErr="";
	do {
		num = prompt(strErr+strMain,'');  //
		strErr="";
		if (num!=null) { // пользователь нажал ОК (Enter), а не Отмена (Esc)
			num = num.replace(/,/g, ".") // если дробную часть числа укажут через запятую, заменяем на точку
			num = num == '' ? 0 : Math.abs(num) // введена пустая строка или отрицательное значение. Math.abs(num) - абсолютное значение
			if (isNaN(num)) {
				strErr = ' Ошибка: вводимое значение должно быть числом! ';
			}
			else {
			num = parseFloat(num)  //  parseFloat() принимает строку в качестве аргумента и возвращает десятичное число. parseInt() возвращает целое
			}
		}
	} while (isNaN(num)); //
	return (num)	
}

function squareF(choiceF) { 
    a = checkNum ('Введите основание трапеции: a = ');
			b = checkNum ('Введите  основание трапеции: b = ');
			h =  checkNum ('Введите  высоту трапеции: h = ');
			return (((a+b)*h)/2); 
}

function chisl(){
	x=checkNum('Введите x:');
	var sin=0;
	var i=1;
	var powerX;
	do
	{
		powerX = Math.pow(x,i);
        
        i += 2;
        sin += powerX/i;
    } while (Math.abs((powerX/i)>=0.005)) ;
	return(sin);
}



  function getRandomInt(min,max)
{	
	return (Math.floor(Math.random()*(parseFloat(max)-parseFloat(min)))+parseFloat(min));
}


	var k=[];
	
function getArray(n) 
{
	for(var i=0; i<n*n; i++) 
	{
		k[i]=(getRandomInt(document.getElementById('min').value,document.getElementById('max').value));
	}
	return k;

}

function getResultArray(mass) 
{
	var n = parseFloat(document.getElementById('func').value);
	var help;
	for(var i=0;i<n*n;i++)
	{
		for(var j=0;j<n*n-1;j++) 
		{
			if(mass[j]<=mass[j+1]) 
			{
				help = mass[j];
				mass[j] = mass[j+1];
				mass[j+1]=help;
			}
		}
	}
	return mass;
}

function out()
{
	var mashelp=[];
	var helps=parseFloat(document.getElementById('func').value);
	k=getArray(helps);
	
	k=getResultArray(k);
	var index=0;
	var help=0;

		for(var i=0;i<helps; i++) 
		{
			mashelp[i]=[];
			if(help==0) 
			{
				for(var j=0; j<helps; j++) 
				{
					mashelp[i][j] = k[index];
					index++;
				}
			help=1;	
			}
			else
			{
				for(var j2=helps-1; j2>=0; j2--) 
				{
					mashelp[i][j2] = k[index];
					index++;
				}
			help=0;	
			}
		}
	var res="<table cellspacing='7' border='1' cellpadding='7'><tr>";
		for (var i = 0; i <helps; i++)
		{
			for (var j = 0; j <helps; j++)	
			{
				res =res+"<td>";
				res = res + mashelp[i][j];
				res = res + "</td>";
			}
			res=res+"</tr>"	
		}
	res = res + "</table>";	
	document.getElementById('ex3').innerHTML = res;
}


  

