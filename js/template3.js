var $parag = document.getElementById("parag"),
    $autotext = " All rights reserved to Menna Youssef 2020" 
    i = 0;


window.onload = function(){
    var $interval = setInterval(function(){
        $parag.innerHTML += $autotext[i];
        i++;
        
        if (i == $autotext.length){
            clearInterval($interval);
            $parag.innerHTML += " &copy;";
        }

        
    },100);
}


