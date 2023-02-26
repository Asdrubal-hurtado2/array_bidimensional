const persons = [];

persons[0] = ['Cachete', 'Hurtado', 36 ] 
persons[1] = ['Sebastian', 'Siso', 13] 
persons[2] = ['Asdrubal', 'Hurtado', 18] 


function Mostar(){
    console.clear()
    for(var i = 0; i <persons.length; i++){
        for(var j = 0; j <persons[i].length; j++){
            console.log(persons[i][j]);
        }       
    }

}

function save(){
    var name = document.getElementById('nombre').value 
    var apellido = document.getElementById('apellido').value
    var age = document.getElementById('edad').value

    
    persons[persons.length] = [name, apellido, parseInt(age) ] 
    
   
}

function showList(){
    document.getElementById('body').innerHTML = "";
    for(var i = 0; i < persons.length; i++){
        document.getElementById('body').innerHTML += "<tr><td width='100px'>" + persons[i][0] + "</td><td width='100px'>" + persons[i][1] + "</td><td width='100px'>" + persons[i][2] + "</td></tr>"
}

}

function imprimirPromedio(){
    var suma = 0;
    console.clear()
   for(var i = 0; i < persons.length; i++ ){
       suma += persons[i][2];
       console.log(suma)
   }
   
   
   document.getElementById('promedio').value = parseFloat(suma / persons.length).toFixed(2)
    
}

