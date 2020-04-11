	display = localStorage.getItem("username");
	document.getElementById("print_naam").innerHTML = display;

	var coin = 100;
	document.getElementById("point").innerHTML = coin;

	var stake = parseInt(document.getElementById('staked').value);

	function staking(){
		event.preventDefault()
		var stake = parseInt(document.getElementById('staked').value);
		if (stake > coin) {
			alert("Insufficient Coin")
		}
		else{
			 var coinupdate = coin - stake
			 coin = coinupdate
			 document.getElementById("point").innerHTML = coinupdate;
		}
	}

	var option1 = ""

	function whenclick(){
		option1 = document.getElementById("choice").value
		document.getElementById("choice").style.background = "red";

	}
	function ifclick(){
		option1 = document.getElementById("choice1").value
		document.getElementById("choice1").style.background = "red";
	}
	function whenclick1(){
		option1 = document.getElementById("choice2").value
		document.getElementById("choice2").style.background = "red";

	}
	function ifclick1(){
		option1 = document.getElementById("choice3").value
		document.getElementById("choice3").style.background = "red";
	}
	function whenclick2(){
		option1 = document.getElementById("choice4").value
		document.getElementById("choice4").style.background = "red";

	}
	function ifclick2(){
		option1 = document.getElementById("choice5").value
		document.getElementById("choice5").style.background = "red";
	}
	function whenclick3(){
		option1 = document.getElementById("choice6").value
		document.getElementById("choice6").style.background = "red";

	}
	function ifclick3(){
		option1 = document.getElementById("choice7").value
		document.getElementById("choice7").style.background = "red";
	}
	function whenclick4(){
		option1 = document.getElementById("choice8").value
		document.getElementById("choice8").style.background = "red";

	}
	function ifclick4(){
		option1 = document.getElementById("choice9").value
		document.getElementById("choice9").style.background = "red";
	}

	function result(){
		function random_item(items){
  			return items[Math.floor(Math.random()*items.length)];
     	}
			var items = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
			var out = random_item(items);

			var stake = parseInt(document.getElementById('staked').value);

		if(out == option1){
			alert("Congrates! You Predict The Right One \n You doubled your stake")
			var earn = stake * 4
			var coinupdate = coin + earn
			document.getElementById("point").innerHTML = coinupdate;
			coin = coinupdate;
		}
		else if(coin == 0){
			alert("You Loose!!");
			window.location.href = "index.html";
		}
		else if(out != option1){
			alert("Oops! Better Luck Next Time \n You Loose your stake")
		}


		document.getElementById("choice").style.background = "green";
		document.getElementById("choice1").style.background = "green";
		document.getElementById("choice2").style.background = "green";
		document.getElementById("choice3").style.background = "green";
		document.getElementById("choice4").style.background = "green";
		document.getElementById("choice5").style.background = "green";
		document.getElementById("choice6").style.background = "green";
		document.getElementById("choice7").style.background = "green";
		document.getElementById("choice8").style.background = "green";
		document.getElementById("choice9").style.background = "green";
		document.getElementById('staked').value = ""

	}
