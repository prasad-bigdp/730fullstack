$('#click').click(function ()
{
    $('#myDiv').html('<strong>bye</strong>')
    $('#myDiv').toggle(5000)
})  //In JQUERY $ means document.queryselector
var typed = new Typed("#ele", {
	strings: ["Good Boy", "Bad Boy", "Boy"],
	typeSpeed: 50,
	loop: true,
	loopCount: Infinity,
})
