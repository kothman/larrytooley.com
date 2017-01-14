var today = new Date();
var year = today.getFullYear();
var copyright = '&copy; ' + year + ' Larry Tooley';


document.getElementById('copyright').innerHTML = copyright;


$('.collapse a').click(function(){
    $(".collapse").collapse('hide');
});