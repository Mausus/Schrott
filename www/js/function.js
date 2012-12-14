/* Globale Variabeln */

//lässt Adresse verschwinden
window.scrollTo(0,1);

var ip = "http://62.2.155.52:63654/BackEnd/";

$("#karte").addClass("aktiv");
  
/*init der Kundendaten
$('#forom').ready(function() {
	$.ajax ({
	type: 'POST',
	url: ip + 'start_ini.aspx',
	dataType: 'json',
	success: function(data) {
		$('#vname').val(data.vname);
		$('#nname').val(data.nname);
		$('#strasse').val(data.strasse);
		$('#ort').val(data.ort);
		$('#email').val(data.email);
		$('#tel').val(data.tel);	
	}
});
return false;
});	*/
	
/*Abschicken und Aktualisieren der Form*/
$('#forom').submit(function() {
	var form = $('#forom');
	var daten = form.serialize();
	$.post(ip + 'kdaten_aktu.aspx', daten, function(resp) {
	if(resp == "Daten wurden erfolgreich uebermittelt")
	alert(resp);
	else{
	alert(resp);
	}
	});
return false;
});


$('#startseite').live('pageinit', function () {
    $.getJSON(ip + 'start_ini.aspx', function (data) {
        $('#vname').val(data.vname);
        $('#nname').val(data.nname);
        $('#strasse').val(data.strasse);
        $('#ort').val(data.ort);
        $('#email').val(data.email);
        $('#tel').val(data.telefon);
    });
    return false;
});

$('#emailkontakt').submit(function () {

    var form = $('#emailkontakt');
    var daten = form.serialize();

    $.post(ip + 'email.aspx', daten, function (resp) {
        alert(resp);
    });

    return false;
});

$('#ajax_form').bind('submit', function() {
	var form = $('#ajax_form');
	var data = form.serialize();
$.post('http://62.2.155.52:63654/BackEnd/Login.aspx', data, function(response) {
    if(response == 'Login')
		$.mobile.changePage("startseite.html");
		else
		alert(response);
});
return false;           
});
