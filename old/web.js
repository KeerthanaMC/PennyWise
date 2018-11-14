
$('.btn-enregistrer').click(function() {
  $('.connection').addClass('remove-section');
	$('.enregistrer').removeClass('active-section');
  $('.btn-enregistrer').removeClass('active');
  $('.btn-connection').addClass('active');
});

$('.btn-connection').click(function() {
  $('.connection').removeClass('remove-section');
	$('.enregistrer').addClass('active-section');	
  $('.btn-enregistrer').addClass('active');
  $('.btn-connection').removeClass('active');
});

