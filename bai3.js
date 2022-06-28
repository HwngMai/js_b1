document.getElementById('btnBai3').onclick = function(){
    var tienVND = Number(document.getElementById('tienVND').value);
    var tienUSD = '';
    tienUSD = 23500 * tienVND;
    document.getElementById('ketQuaBai3').innerHTML = 'Nhiêu đó là bằng: ' + tienUSD.toLocaleString() + ' vnd';
}