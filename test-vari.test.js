const {getInitials, createSlug, average} = require ("./test-vari")

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


