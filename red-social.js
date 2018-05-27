let publication = {
  text: '',
  status: '=)'
}

$(document).on('click', '#enviar', function() {
  $('.feed-container').append('<div class="publication-container"><div>' + publication.text + '</div><div>' + publication.status + '</div></div>')
  $('.input-text').val('')
  publication.text = ''
})

$('.input-text').on('keyup', function(e) {
  publication.text = $(this).val()
  if (e.keyCode == 13) {
    $('.feed-container').append('<div class="publication-container"><div>' + publication.text + '</div><div>' + publication.status + '</div></div>')
    $('.input-text').val('')
    publication.text = ''
  }
})

$('#input-select').on('change', function(e) {
  publication.status = e.target.value
})
