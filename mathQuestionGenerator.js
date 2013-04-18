
var right=false;
var answeredQuestion=true;
var a1 = 50;
var a2 = 100;
var x = 0;
var y = 0;
var f = 0;
var s = "";
var r = 0;
var winNumber = 0;
var defeatCheck = new Array();

for(var i=0;i<enemyNumber;i++)
{
	defeatCheck[i];
}

function matchNumber()
{

answeredQuestion=false;
	var answer = document.getElementById("mathAnswer").value.toUpperCase();
	var answer2 = document.getElementById("mathAnswer2").value.toUpperCase();

		if ( f == 4)
		{
			if (r == answer2)
			{
				if ( z == answer)
					{
						alert("Correct Answer!")
						$("#mathAnswer2").css("visibility","hidden");
						document.getElementById('question').innerHTML="";
						right=true;answeredQuestion=true;
						
						
						var tempEnemyHP = enemyPosition[target].HP() - 1;
						
						enemyPosition[target] = new enemyPos(enemyPosition[target].title(),
						tempEnemyHP, enemyPosition[target].movement(), 
						enemyPosition[target].enemyDistance(), enemyPosition[target].enemyImage());
						
						if(enemyPosition[target].HP() <= 0)
						{
							enemyPosition[target] = null;
							$('#smile'+target).css('display', 'none')
							$('#aim'+target).css('display', 'none')
							winNumber++;
										
							if (winNumber == enemyNumber)
							{
								alert('You Win!' + "<Br>" + 'Congratulations');
								winNumber = 0;
							}
							
						}
						
						clearTimer();
						
					}
					
					else
					{
						alert("Wrong Answer!");
						right=false;answeredQuestion=true;
						document.getElementById('question').innerHTML="";
						$("#mathAnswer2").css("visibility","hidden");
						clearTimer();
					}
		
			}
			
			else
			{
				alert("Wrong Answer!");right=false;answeredQuestion=true;
				document.getElementById('question').innerHTML="";
				$("#mathAnswer2").css("visibility","hidden");
				
				clearTimer();
			}
		}
		
		else
		{
			if ( z == answer)
			{
				alert("Correct Answer!");
				document.getElementById('question').innerHTML="";
				right=true;answeredQuestion=true;
				
				var tempEnemyHP = enemyPosition[target].HP() - 1;
						
				enemyPosition[target] = new enemyPos(enemyPosition[target].title(),
				tempEnemyHP, enemyPosition[target].movement(), 
				enemyPosition[target].enemyDistance(), enemyPosition[target].enemyImage());
				
				if(enemyPosition[target].HP() <= 0)
				{
					enemyPosition[target] = null;
					$('#smile'+target).css('display', 'none')
					$('#aim'+target).css('display', 'none')
					winNumber++;
										
					if (winNumber == enemyNumber)
					{
						alert('You Win!' + "<Br>" + 'Congratulations');
					}
					
				}
				
					
				
				clearTimer();
			}
					
			else
			{
				alert("Wrong Answer!");right=false;answeredQuestion=true;
				document.getElementById('question').innerHTML="";
				clearTimer();
			}
		}
		//random();
		if (!right)
		{


			eTurn('smile');

			//command.moveImageToPlayer('questionBlog',(1));

			answeredQuestion=true;
			//random();	
			$("throwButton").css("Color","black");
		}
		else if (right==true)
		{


			eTurn('smile');

			command.moveImageToPlayer('questionBlog',(-1));

			right=false;
			answeredQuestion=true;
			document.getElementById('question').innerHTML="hit!";
			document.getElementById("throwButton").disabled = true;	
			$("throwButton").css("Color","grey");
	
		}
}

function randomMathNumber(a) {
	return Math.floor((Math.random()*a)+1);
}




function random()
{		
	document.getElementById("throwButton").disabled = false;	
	$("throwButton").css("Color","blue");

if (answeredQuestion==true){
	answeredQuestion=false;
		x = Math.floor((Math.random()*(a2-a1))+a1);
	
				var randomMathNumber = function (a) {
					return Math.floor((Math.random()*a)+1);
				};
					f = Math.floor((Math.random()*4)+1);
				if ( f == 1)
					{
						s = "+";
						y = randomMathNumber (100);
						z = x + y;
					}
				else if ( f == 2)
					{
						s = "-";
						y = randomMathNumber (50);
						z = x - y;
					}
				else if ( f == 3)
					{
						s = "*"
						y = randomMathNumber (100);
						z = x * y;
					}
				else
					{
						$("#mathAnswer2").css("visibility","visible");
						s = "/"
						y = randomMathNumber (50);
						r = x % y;
						z1 = x - r;
						z = z1 / y;
						
					}
			document.getElementById('question').innerHTML=x + " " + s + " " + y + " " + "=";
			
		}
	else
		{	answeredQuestion=false;
			alert("ANSWER THE QUESTION,AND CORRECTLY PLZ");
		}
}

