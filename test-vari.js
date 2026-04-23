function getInitials (nomeCompleto) {
    //con split divido la stringa in piu pezzi(ogni volta che trova uno spazio) , restituendo un array
    // quindi se passo Giuseppe Mele diventerà ["Giuseppe","Mele"]; 
return nomeCompleto.split(' ').map(s => s.charAt(0)).join('').toUpperCase(); 
}

module.exports = {getInitials}; 