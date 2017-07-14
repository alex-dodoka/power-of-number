function getData() {
    let num = $('#number').val();
    let pow = $('#power').val();
    print(getPow(num, pow));

}

function getPow(num, pow) {
    return num * getPow(num * pow + 1);
}

function print(res) {
    $('#space-for-print').html(res);
}

