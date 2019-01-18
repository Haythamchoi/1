
  $(window).on("scroll", function() {
    if$(window).scrollTop() {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  });


  <script>
      train.onclick = function() {
        let start = Date.now();

        let timer = setInterval(function() {
          let timePassed = Date.now() - start;

          train.style.left = timePassed / 5 + 'px';

          if (timePassed > 2000) clearInterval(timer);

        }, 20);
      }
    </script>


  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
