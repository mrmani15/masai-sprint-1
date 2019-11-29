
object = {}

function clicked(){
	var country_code = document.getElementById("code").value
   	country_code = country_code.toUpperCase()
   	code = "USD"+ country_code,

  xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://apilayer.net/api/live?access_key=fb235bb68bee1ff67e48b86f5e18effc&currencies=' + country_code,);
  xhr.send()
   xhr.onload = function (){
    if(xhr.status == 200){
        object = JSON.parse(xhr.response) 
        var result = object.quotes[code]
        document.getElementById("result").innerHTML = result
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
  }
}