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
	

	function result(){

		function random_item(items){
  			return items[Math.floor(Math.random()*items.length)];
     	}
			var items = ["Head", "Tail"];
			var out = random_item(items);

			var stake = parseInt(document.getElementById('staked').value);
		
		if(out == option1){
			alert("Congrates! You Predict The Right One \n You doubled your stake")
			var earn = stake * 2
			var coinupdate = coin + earn
			document.getElementById("point").innerHTML = coinupdate;
			coin = coinupdate;
		}
		else{
			alert("Oops! Better Luck Next Time \n You Loose your stake")
		}
		
		document.getElementById("choice").style.background = "green";
		document.getElementById("choice1").style.background = "green";
		document.getElementById('staked').value = ""

	}



