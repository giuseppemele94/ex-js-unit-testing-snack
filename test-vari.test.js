const {getInitials} = require ("./test-vari")

/* SNACK 1
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo."
* */

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Giuseppe Mele')).toBe('GM');
    expect(getInitials('luigi Mele')).toBe('LM');
})