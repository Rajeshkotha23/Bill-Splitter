function Convert(){
    var amount = document.getElementById('Amount').value
    var person = document.getElementById('Persons').value
    var icon =document.getElementById('icon')
    icon.innerHTML= (amount/person)
    }