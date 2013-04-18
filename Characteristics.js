
var characterTurn =new Boolean(false);
var enemyTurn =new Boolean(true);
var enemyNumber;
var difficulty = 3;
var eDistance = new Array();
var time = 30;
var a = 1;
var playerHP = 3;
var eRandom;
var timer = null;
var enemyPosition = new Array();

  
var enemyType =new Array();
enemyType.push(new enemyChar ("Ghost", 1, 1, 0));
enemyType.push(new enemyChar ("Frankenstein", 2, 1, 0)); 
enemyType.push(new enemyChar ("Vampire", 1, 2, 0)); 
enemyType.push(new enemyChar ("enemyType 4", 1, 1, 0)); 
enemyType.push(new enemyChar ("enemyType 5", 1, 1, 0)); 
enemyType.push(new enemyChar ("enemyType 6", 1, 1, 0));

var charType =new Array();
enemyType.push(new charAttr ("1", 1));
enemyType.push(new charAttr ("2", 2)); 
enemyType.push(new charAttr ("3", 3));


var candyType =new Array();
candyType.push(new candyAttributes ("candyType 1", 1));
candyType.push(new candyAttributes ("candyType 2", 2)); 
candyType.push(new candyAttributes ("candyType 3", 1)); 
candyType.push(new candyAttributes ("candyType 4", 1)); 
candyType.push(new candyAttributes ("candyType 5", 1)); 
candyType.push(new candyAttributes ("candyType 6", 1)); 



function charAttr(hpPic, health) {
	this.hpPic = hpPic;
	this.health = health;
}


function enemyChar(name, health, speed, position) {
	this.health = health;
	this.speed = speed;
	this.name = name;
	this.position = position;
}

function enemyPos(name, health, speed) {
	this.health = health;
	this.speed = speed;
	this.name = name;
}

function candyAttributes(name, damage) {
	this.damage = damage;
	this.name = name;
}



candyAttributes.prototype.dmg = function () {

	return this.damage;
}

candyAttributes.prototype.title = function () {

	return this.name;
}



enemyChar.prototype.movement = function () {

	return this.speed;
}

enemyChar.prototype.HP = function () {

	return this.health;
}

enemyChar.prototype.pos = function () {

	return this.position;
}

enemyChar.prototype.title = function () {
	
	return this.name;
}





	if (difficulty == 1)
	{
		enemyNumber = 3;
	}
	else if (difficulty == 2)
	{
		enemyNumber = 4;
	}
	else
	{
		enemyNumber = 5;
	}
		
	
		enemyPos.prototype.title = function () 
		{
			return this.name;
		}
	
		enemyPos.prototype.HP = function () 
		{
			return this.health;
		}
		
		enemyPos.prototype.movement = function () 
		{
			return this.speed;
		}
		
	for(i=0;i<enemyNumber;i++)
	{
		eDistance[i] = Math.floor((Math.random()*2)+1);
		eRandom = Math.floor((Math.random()*6)+0);
		
		enemyPosition[i] = new enemyPos(enemyType[eRandom].title(), 
		enemyType[eRandom].HP(), enemyType[eRandom].movement());
		
		document.write(eDistance[i] + ", " + enemyPosition[i].title() + ", "
		+ enemyPosition[i].HP() + ", " + enemyPosition[i].movement() +"<br>");
	}

	
	
	
function timing()
{
	timer = setInterval(function(){intTimer()},1000);
	
	function intTimer()
	{
		if(time == 0)
		{
			clearInterval(timer);
		}
			
		else
		{				
			time = time-1;
			document.getElementById("countdown").innerHTML=time + "<br>";
		}
	}
	
	
}	
	

function cTurn()
{
	
	if (characterTurn == true)
	{
		if (playerHP == 3)
		{
		
		}
		
		else if (playerHP == 2)
		{
		
		}
		
		else if (playerHp == 1)
		{
		
		}
		
		else
		{
		
		}
		
		
		
	
	}

}

function eTurn()
{
		
	if (enemyTurn == true)
	{
		for(i=0;i<enemyNumber;i++)
		{
			eDistance[i] = eDistance[i] - enemyPosition[i].movement();
			if(playerHP != 0)
			{
				if(eDistance[i] <= 0)
				{
					playerHP = playerHP - 1;
				}
			}
			
			
			document.write(eDistance[i] +"<br>")
		}
		document.write("Player HP = " + playerHP)
	}
	
}

