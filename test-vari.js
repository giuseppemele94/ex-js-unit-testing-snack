function getInitials(nomeCompleto) {
    //con split divido la stringa in piu pezzi(ogni volta che trova uno spazio) , restituendo un array
    // quindi se passo Giuseppe Mele diventerà ["Giuseppe","Mele"]; 
    return nomeCompleto.split(' ').map(s => s.charAt(0)).join('').toUpperCase();
}


function createSlug(str) {
    if(!str) {
         throw new Error("Titolo non valido"); 
    }
    return str.toLowerCase().replaceAll(" ", "-");
}

function average(arrofNumbers) {

    arrofNumbers.forEach(num => {
        if (isNaN(num))
            throw new Error("Average vuole solo numeri");
    });
    const sum = arrofNumbers.reduce((acc, num) => acc + num, 0);
    return sum / arrofNumbers.length
}


function isPalindrome(str) {
    // const normalizedStr = str.toLowerCase(); 
    // const reversedStr = normalizedStr.split('').reverse().join('');
    // return normalizedStr === reversedStr; 
    const caratteriInversi = [];
    for (let i = 0; i < str.length; ++i) {
        const carattere = str[i];
        caratteriInversi.unshift(carattere);
    }
    return str === caratteriInversi.join("");
}

function findPostById(posts,id) {

    if (typeof id !== "number" || Number.isNaN(id)) {
        throw new Error("L'id deve essere numerico");
    }


    posts.forEach(p => {
        if (
            typeof p !== "object" ||
            p === null ||
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("Ogni post deve avere id, title e slug");
        }
    });

    return posts.find(p => p.id === id);

}

function addPost(posts,newPost) {
    return posts.push(newPost); 
}

function  removePost(posts,id) {
    const postIndex = posts.findIndex(p => p.id === id); 
    posts.splice(postIndex, 1);
}

module.exports = { 
    getInitials,
     createSlug, 
     average, 
     isPalindrome,
    findPostById,
addPost,
removePost}; 