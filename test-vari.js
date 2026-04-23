function getInitials (nomeCompleto) {
    //con split divido la stringa in piu pezzi(ogni volta che trova uno spazio) , restituendo un array
    // quindi se passo Giuseppe Mele diventerà ["Giuseppe","Mele"]; 
return nomeCompleto.split(' ').map(s => s.charAt(0)).join('').toUpperCase(); 
}

//restituisce una stringa in minuscolo
function createSlug (str) {
    return str.toLowerCase(); 
}

module.exports = {getInitials, createSlug}; 