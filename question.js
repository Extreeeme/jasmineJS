var convertToCelsius = function(temperature) {
/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.
*/////////////////////////////////////////////////////////////
	
    var farenheit = temperature;
    var celsius = Math.round((farenheit - 32)*(5/9));
    var reponse = celsius;
    return reponse;
}
var majeur = function(age) {
/*//////////////////   CONSIGNE  /////////////////////////////////
§	Concevoir un algorithme capable retourner la valeur majeur ou mineur selon l'âge.
§	18 ou plus majeur sinon mineur
§   var age = integer;
*/////////////////////////////////////////////////////////////
    //ici je met mon code ;)
if(age>=18){
        var reponse="majeur";
    }
    else{
        var reponse= "mineur";
    }
    return reponse;
}
var paye = function(vente) {
/*///////////////////   CONSIGNE  //////////////////////////////// 
§         L'employé reçoit 200$ par semaine comme salaire de base.
§         L'employé reçoit 6% du total des ventes hebdomadaires à prix régulier.
§         L'employé reçoit 3% du total des ventes hebdomadaires à prix rabais.
          var vente = {ventesRegulier : 0, ventesRabais : 0};				
*//////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)

const salaire_base=200;
    salaire=Math.round((salaire_base+(vente["ventesRegulier"]*0.06)+(vente["ventesRabais"]*0.03))*100)/100;
    var reponse = salaire;
    return reponse;
}
var cesar = function(crypto, chaine) {
/*/////////////////////   CONSIGNE  ////////////////////////////////    
§           On code avec César ;)
§           le mot a codé est dans str 
§           la clée de chiffrage est cle
§			la chaine de caractères utilisé pour codé est dans chaine	
			var crypto = {str : '', cle : 0};	
*////////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)
    var mot_code=crypto["str"];
    var reponse="";
    var lettre;
    var coefficient = 1;
    var test_mutliplicateur = true;
    for(var i=0; i<mot_code.length;i++){        //La fonction parcours le mot lettre par lettre
        for(var j=0;j<chaine.length;j++){          //A chaque lettre elle l'a compare à chaque lettre de la chaîne
            if(chaine[j]==mot_code[i]){               //Si les lettres sont les mêmes
                if((i+crypto["cle"])>chaine.length-1){  //Et si l'indice de cette lettre + la clé dépasse l'indice max de la chaîne
                    //FONCTION QUI DETERMINE COMBIEN DE FOIS L'INDICE + LE CODE EST SUPERIEUR A LA CHAINE
                    while(test_mutliplicateur == true){ //Tant que le test_multiplicateur est vrai (par defaut est True)
                        for(var k=0; k<chaine.length;k++){  //Boucle qui parcours la chaine
                            if((i+crypto["cle"])<=(coefficient*chaine.length-1)){   //Si l'indice + la clé est plus petit que la longueur de la chaine
                                test_mutliplicateur = false;                  //Le test deviens faux et la boucle s'arrête
                            }
                            if(k==chaine.length-1){       //Si la boucle est arrivée à la fin
                                coefficient ++;                 //Alors incrémentation de la boucle
                            }
                        }
                    }
                    lettre = chaine[(i+crypto["cle"])-(coefficient*chaine.length-1)]    //Lettre codée
                }
                else{   //Si l'indice + le code est plus petit que la longueur de la chaîne
                    lettre = chaine[(i+crypto["cle"])] //Lettre codée
                }
            }
        }
         reponse = reponse+lettre; //Formation de la réponse
    }
    return reponse; 
}