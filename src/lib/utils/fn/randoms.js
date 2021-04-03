/**
 * Retorna un string random que comienza con una letra, es especial para id's
 * @return {string}
 */
export const getStrRandomb64 = () => btoa(Math.random().toString()).substring(0,12);