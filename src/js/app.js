function getData() {
    let num = $('#number').val();
    let pow = $('#power').val();
    print('#space-for-print', getPow(num, pow));
}

function getDataLoop() {
    let num = $('#number').val();
    let pow = $('#power').val();
    print('#loop', getPowInLoop(num, pow));
}

function getPow(num, pow) {
    return (pow !== 1) ? num * getPow(num, pow - 1) : num;

}

function getPowInLoop(num, pow) {
    if (pow !== 1) {
        return num * getPowInLoop(num, pow - 1);
    } else {
        return num
    }
}

function print(id, res) {
    $(id).html(res);
}