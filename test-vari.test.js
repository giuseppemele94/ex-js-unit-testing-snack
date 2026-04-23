const {getInitials, createSlug, average, isPalindrome, findPostById} = require ("./test-vari")


/* SNACK 1
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo."
* */

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Giuseppe Mele')).toBe('GM');
    expect(getInitials('luigi Mele')).toBe('LM');
})

/* SNACK 2
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase."
*/
test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug('GiUsEpPe')).toBe('giuseppe'); 
    expect(createSlug('GiUsEpPe Mele')).toBe('giuseppe-mele'); 
})

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

/* SNACK 4
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug sostituisce gli spazi con -."
📌 Esempi:
createSlug("Questo è un test") → "questo-e-un-test"
* */
test('La funzione "createSlug" sostituisce gli spazi con - ', () => {
    expect(createSlug('Questo e un test')).toBe('questo-e-un-test'); 
})


/**SNACK 5
 * Creare un test che verifichi la seguente descrizione:
👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
 */
test('La funzione "isPalindrome" verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("anna")).toBeTruthy(); 
    expect(isPalindrome("ciao")).toBeFalsy();  
})

/* SNACK-6 
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."* */
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow(); 
    expect(() => createSlug(null)).toThrow(); 
})

/* SNACK-7* 
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
Creare un test che verifichi le seguenti descrizioni:
👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme 
(ogni post ha le proprietà id, title e slug, viene passato un id numerico).
*/

const posts = [
  { id: 1, title: "Primo post", slug: "primo-post" },
  { id: 2, title: "Secondo post", slug: "secondo-post" },
  { id: 3, title: "Terzo post", slug: "terzo-post" }
];

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