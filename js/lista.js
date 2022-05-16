
function getLista(){
    var resp = [];

    for(var i=0; i<100; i++){
        var obj = {id:i, pais:'país-'+i, ativo: calc(i)}
        resp.push(obj);
    }
    return resp;
}

function calc(iterate){
    if(iterate % 2 == 0)return 'S';
    return 'N';
}