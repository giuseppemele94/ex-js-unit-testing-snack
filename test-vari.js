function getInitials (nomeCompleto) {
    //con split divido la stringa in piu pezzi(ogni volta che trova uno spazio) , restituendo un array
    // quindi se passo Giuseppe Mele diventerà ["Giuseppe","Mele"]; 
return nomeCompleto.split(' ').map(s => s.charAt(0)).join('').toUpperCase(); 
}

//restituisce una stringa in minuscolo
function createSlug (str) {
    return str.toLowerCase(); 
}

function average (arrofNumbers) {

    arrofNumbers.forEach(num => {
        if(isNaN(num)) 
        throw new Error("Average vuole solo numeri"); 
    
    });
    
    const sum = arrofNumbers.reduce((acc,num) => acc + num, 0);
    return sum / arrofNumbers.length
}
module.exports = {getInitials, createSlug, average}; 