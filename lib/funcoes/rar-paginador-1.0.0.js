/**
 * Cria uma instancia de um objeto de controle paginacao.
 * @param {*} lista - lista de dados de uma pagina.
 * @param {*} numPg - numero da pag atual
 * @param {*} qtdTotalRegs - quantidade total de registros, caso paginacao sob demanda.
 * @param {*} qtdRegPPag - quantidade total de registros por pag.
 * @returns {} objeto de controle de paginacao
 */
 function rarBuildPaginador(lista, numPg, qtdTotalRegs, qtdRegPPag){
    return {
        list: lista,
        nPagina: numPg,
        qtdTotalRegs: qtdTotalRegs,
        qtdRegPorPag: qtdRegPPag,
        qtdPaginas: Math.ceil(qtdTotalRegs / qtdRegPPag),
        lstPaginada: rarFnPaginate(lista, qtdRegPPag, numPg),
        initPgStatus: (qtdRegPPag * (numPg - 1) + 1),
        endPgStatus: ((qtdRegPPag * (numPg - 1)) + rarFnPaginate(lista, qtdRegPPag, numPg).length),
    }
}

/**
 * Efetua a paginacao.
 * @param {*} array - array com os dados 
 * @param {*} page_size - quantidade de registros por pag
 * @param {*} page_number - numero da pagina atual
 * @returns [] array de dados que representa uma pagina
 */
function rarFnPaginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

/**
 * funcao de exemplo do componente de paginacao
 */
function runPaginatorExample(){
    var lista     = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var Paginador = rarBuildPaginador(lista, 4, 100, 5);

    console.log(Paginador.lstPaginada);
    console.log('Total de registros: '+ Paginador.qtdTotalRegs +', Exibindo registros de '+Paginador.initPgStatus +' a '+Paginador.endPgStatus);
}