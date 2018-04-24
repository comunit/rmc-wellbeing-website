$(document).ready(function() {

  $('form').submit(function(e){
     var name = $('#name').val();
     var lastname = $('#lastname').val();
     var city = $('#city').val();
     var email = $('#email').val();
     var number = $('#number').val();
     var postcode = $('#postcode').val();
     var comments = $('#comments').val();

     var data = 'name=' + name + '&lastname=' + lastname + '&city=' + city + '&email=' + email + '&number=' + number + '&postcode=' + postcode + '&comments=' + comments;
     $.ajax({
      type: "POST",
      url: 'js/script.php',
      data: data,
      success: $(document).ready(function(){
      $('#modal1').modal('open');
      })
     });

      $("#form")[0].reset();
      e.preventDefault(); // avoid to execute the actual submit of the form.

  });
});
