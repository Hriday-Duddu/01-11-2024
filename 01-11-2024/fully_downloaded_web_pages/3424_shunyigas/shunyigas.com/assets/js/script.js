var tagify;
$(document).ready(function () {
	var input = document.querySelector('#input-tags');
	tagify = new Tagify(input, {
		delimiters: ",| ",
		pattern: /^[a-zA-Z]+$/,
		duplicates: false,
		placeholder: $('#input-tags').attr('placeholder'),
		
	});

	tagify.on('add', onInput);
	tagify.on('remove', onInput);	
});

function onInput() {
	if (tagify.value.length < 6) {
		$('#btn-validate').prop('disabled', true).addClass('disabled');
	} else {
		$('#btn-validate').prop('disabled', false).removeClass('disabled');
		$('.tagify').removeClass('is-invalid');
	}
}

function validate() {

	if (tagify.value.length < 6) {
		$('.tagify').addClass('is-invalid');
		return;
	}
	
	$.ajax({
		type: 'POST',
		url: 'php/validate.php',
		data: {
			tags: $('#input-tags').val()
		},
		success: function (data) {
			//console.log(data);
			$('.tc-home').hide();
			$('.tc-success').show();
			window.scrollTo(0, 0)

			if($('#redirect').val() != '') {
				setTimeout(function () {
					location.href = $('#redirect').val();
				}, 8000);
			}
			
		}
	});

}
