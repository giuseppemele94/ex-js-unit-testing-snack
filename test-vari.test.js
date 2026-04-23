const {
    getInitials, 
    createSlug, 
    average, 
    isPalindrome, 
    findPostById,   
    addPost,
    removePost
} = require ("./test-vari")

describe('Manipolazione stringhe ', () => {

    /* SNACK 1
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo."
* */

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Giuseppe Mele')).toBe('GM');
    expect(getInitials('luigi Mele')).toBe('LM');
}); 

/**SNACK 5
 * Creare un test che verifichi la seguente descrizione:
👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
 */
test('La funzione "isPalindrome" verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("anna")).toBeTruthy(); 
    expect(isPalindrome("ciao")).toBeFalsy();  
})

})


describe('Operazioni su array ', () => {

    /*SNACK 3
Creare un test che verifichi la seguente descrizione:
 "La funzione average calcola la media aritmetica di un array di numeri."
*/
test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
    expect(average([10,10])).toBe(10); 
    expect(average([10,10,10,10])).toBe(10); 
    expect(average([1,2])).toBe(1.5); 
    expect(() => average([10,"ciao"])).toThrow(); 
})

test('La funzione "findPostById" restituisce il post corretto dato l’array di post e l id', () => {
    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: "Secondo post",
        slug: "secondo-post"
    });
});

test("L'id deve essere numerico", () => {
    expect(() => findPostById(posts, "2")).toThrow("L'id deve essere numerico");
});

test("Ogni post deve avere id, title e slug", () => {
    expect(() => findPostById([10, 5], 2)).toThrow("Ogni post deve avere id, title e slug");
});

})

describe('Slug', () => {

/* SNACK 2
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase."
*/
test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug('GiUsEpPe')).toBe('giuseppe'); 
    expect(createSlug('GiUsEpPe Mele')).toBe('giuseppe-mele'); 
}); 

/* SNACK 4
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug sostituisce gli spazi con -."
📌 Esempi:
createSlug("Questo è un test") → "questo-e-un-test"
* */
test('La funzione "createSlug" sostituisce gli spazi con - ', () => {
    expect(createSlug('Questo e un test')).toBe('questo-e-un-test'); 
})

/* SNACK-6 
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."* */
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow(); 
    expect(() => createSlug(null)).toThrow(); 
})

})



/* SNACK-7* 
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
Creare un test che verifichi le seguenti descrizioni:
👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme 
(ogni post ha le proprietà id, title e slug, viene passato un id numerico).
*/

let posts ; 

//prima di ogni test , riempio l'array
beforeEach(() => {
posts = [
  { id: 1, title: "Primo post", slug: "primo-post" },
  { id: 2, title: "Secondo post", slug: "secondo-post" },
  { id: 3, title: "Terzo post", slug: "terzo-post" }
];
})

//dopo ogni testo lo resetto
afterEach(() => {
    posts = [];
})

/*
 SNACK-8 BONUS
Creare due test che verifichino le seguenti descrizioni:
👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."* */
test('Dopo aver aggiunto un post con la funzione "addPost" , l array posts deve contenere un elemento in più', () => {
addPost(posts, {id: 4, title: "Quarto post", slug: "quarto-post"});
expect(posts).toHaveLength(4); 
})

test('Dopo aver rimosso un post con la funzione removePost, larray posts deve contenere un elemento in meno.', () => {
    removePost(posts, 3); 
    expect(posts).toHaveLength(2); 
});

/* SNACK-9 BONUS 
Creare un test che verifichi la seguente descrizione:
👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."
.* */

test('Se si tenta di aggiungere un post con un id o una slug gia esistente, la funzione addPost deve lanciare un errore', () => {
    
    expect(() => addPost(posts,{ id: 2, title: "Secondo post prova", slug: "secondo-post-prova" })).toThrow('id gia esistente');
})