/**
 * 
 * @param {Arrays} array
 * @returns {Object}
 * @description retorna un objeto con toda la descripcion de los calculos
 * 
 */
const calculo = (arrays) => {
    
    const {porcImp, porcPar} = porcNumImpPar(arrays);
    const numMay = Math.max(...arrays);
    const numMen = Math.min(...arrays);
    const porcMenNumDelMay = porcentaje(numMay, numMen);
    const promedio = porcentajePromedio(numMay, arrays);
    
    return {
        cantElemnt : arrays.length,
        porcImpar : porcImp,
        porcPar : porcPar,
        porcMayoresA1000 : porcMayores1000(arrays),
        numMayor : numMay,
        numMenor : numMen,
        promedioDelMayor : {
            menorPromedio: porcMenNumDelMay,
            promedioDeTodos: promedio
        }
        
    };


}

/**
 * 
 * @param {number} numMay 
 * @param {Arryas} arr 
 * @returns {Number} retorna el promedio
 * @description retorna la el procentaje sumado y promediado del array, tomado a numMay como el 100%
 * 
 */
const porcentajePromedio = (numMay, arr) => {
    
    const porcs = arr.map(elm => porcentaje(numMay, elm)).reduce((acc, elm)=> acc + elm, 0);
    return Math.floor(porcs / arr.length);
    
}

/**
 * 
 * @param {Arrays} arr 
 * @param {Function} cb 
 * @returns {Number}
 * 
 */
const filterArrays = (arr, cb) => arr.filter(cb).length;

/**
 * 
 * @param {Arrays} arrays 
 * @returns {Number}
 * 
 */
const porcMayores1000 = (arrays) => {
    const numImp = filterArrays(arrays, elm=> elm >= 1000);
    return porcentaje(arrays.length, numImp);

}

/**
 * 
 * @param {Arrays} arr 
 * @returns {Arrays}
 * 
 */
const porcNumImpPar = (arr) => {
    const numTotal = arr.length
    const numImp = filterArrays(arr, elm=> elm % 2 == 1);
    const numPar = Math.floor(numTotal - numImp);
    
    const porcImp = porcentaje(numTotal, numImp);
    const porcPar = porcentaje(numTotal, numPar);

    return {porcImp, porcPar}


}

/**
 * 
 * @param {Number} numTotal 
 * @param {Number} numObtenido 
 * @returns {Number}
 * 
 */
const porcentaje = (numTotal, numObtenido) => Math.floor(numObtenido*100)/numTotal;

module.exports = {calculo}