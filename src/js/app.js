function getData() {
    let num = $('#number').val();
    let pow = $('#power').val();
    print(getPow(num, pow));

}

function getPow(num, pow) {
    return (pow !== 1) ? num * getPow(num, pow - 1) : num;

}

function print(res) {
    $('#space-for-print').html(res);
}