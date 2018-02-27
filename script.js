
function popTable(x) {
    var source = x.results;
    var result = "<table class='table' align='center'><tr><td>Artist</td><td>Track</td><td>Price</td><td>Sample</td><td>Image</td></tr>";
    for(var i =0; i < 25;i++) {
        result += "<tr><td>" + source[i].artistName+ "</td><td>" + source[i].trackName  + "</td><td>" + source[i].trackPrice + "</td><td> <audio controls='true' src=" +  source[i].previewUrl + " id='audio' type='audio/m4a'></audio></td><td> <img src=" + source[i].artworkUrl60  +"></td></tr>";
    }
        result += "</table>";
    return result;
}


$(document).ready(function(){

    $('button').on('click', function() {
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + $('#artistName').val() +"&limit=" + $('#numObj').val(),
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                if(($('#artistName').val() === "") || (+$('#numObj').val() > 0)){
                    console.log(result);
                    $(document).find('#display').hide();
                    $(document).find('#display').html(popTable(result));
                    $(document).find('#display').show();
                }else{
                    alert('Input valid artist name and number and search items');
                }
            },
            error: function () {
                alert('Failed!');
            }
        });
    });
});




