	
	function itemselected(){
		item_sel = document.getElementById("items").value
		var item_select = document.createElement("p")
		item_select.textContent = item_sel
		document.getElementById("selctedthings").appendChild(item_select)
	}

	function activityselected(){
		activity_sel = document.getElementById("acti").value
		var activity_select = document.createElement("p")
		activity_select.textContent = activity_sel
		document.getElementById("selctedactivity").appendChild(activity_select)
	}
