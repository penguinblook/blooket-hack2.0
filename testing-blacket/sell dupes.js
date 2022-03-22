// credit to zastix
async function sell(blook) {
    $.get(`/worker/blook/getuserblook.php?blook=${blook}`, function(data) {
        amt = Number(data)-1
        if (0 >= amt) {
            return;
        }
        var postData = 'blook=' + blook + '&amount=' + amt;
        $.post('/worker/blook/sellblook.php', postData, function(data){
            console.log("sold")
        });
    });
}

for (let i = 1; i <= window.maxID; i++) {
    $.get(`/worker/misc/getblook.php?id=${i}`, function(data) {
        var myArray = data.split("|");
        var word = myArray[0];
        sell(word)
    });
}
