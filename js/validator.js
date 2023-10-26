function validate() {
  let sending = true;
  let form = document.querySelector('.js-form');
  let x = document.querySelector('input[name="x"]:checked');
  let y = document.querySelector('input[name="y"]');
  let r = document.querySelector('input[name="r"]:checked');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const errors = form.querySelectorAll('.input-error');
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }

    if (x == null) {
      let err = document.createElement("div");
      let messsage = document.createTextNode("You didn\'t choose the value of x!");
      err.className = 'input-error';
      err.appendChild(messsage);
      err.style.setProperty("border", "1px solid");
      err.style.setProperty("margin-left", "10px");
      err.style.setProperty("padding", "15px 15px 15px 15px");
      err.style.setProperty("color", "#D8000C");
      err.style.setProperty("background-color", "#FFBABA");
      err.style.setProperty("text-align", "center");
      document.getElementById("x-group").after(err);
      sending = false;
    }

    if (isNaN(y.value) || y.value <= -3 || y.value >= 5 || !y.value) {
      let err = document.createElement("div");
      let messsage = document.createTextNode("Value of y must be a number between -3 and 5");
      err.className = 'input-error';
      err.appendChild(messsage);
      err.style.setProperty("border", "1px solid");
      err.style.setProperty("margin-left", "10px");
      err.style.setProperty("padding", "15px 15px 15px 15px");
      err.style.setProperty("color", "#D8000C");
      err.style.setProperty("background-color", "#FFBABA");
      err.style.setProperty("text-align", "center");
      document.getElementById("y-group").after(err);
      sending = false;
    } else if (y.value.length > 12) {
      let err = document.createElement("div");
      let messsage = document.createTextNode("This form only accepts values shorter than 12 symbols");
      err.className = 'input-error';
      err.appendChild(messsage);
      err.style.setProperty("border", "1px solid");
      err.style.setProperty("margin-left", "10px");
      err.style.setProperty("padding", "15px 15px 15px 15px");
      err.style.setProperty("color", "#D8000C");
      err.style.setProperty("background-color", "#FFBABA");
      err.style.setProperty("text-align", "center");
      document.getElementById("y-group").after(err);
      sending = false;
    }
    
    if (r == null) {
      let err = document.createElement("div");
      let messsage = document.createTextNode("You didn\'t choose the value of r!");
      err.className = 'input-error';
      err.appendChild(messsage);
      err.style.setProperty("border", "1px solid");
      err.style.setProperty("margin-left", "10px");
      err.style.setProperty("padding", "15px 15px 15px 15px");
      err.style.setProperty("color", "#D8000C");
      err.style.setProperty("background-color", "#FFBABA");
      err.style.setProperty("text-align", "center");
      document.getElementById("r-group").after(err);
      sending = false;
    }

    if (sending) {
      $.ajax({
        url: './php/server.php',
        method: "GET",
        dataType: "html",
        data: {
          x: $('input[name="x"]:checked').val(),
          y: y.value,
          r: $('input[name="r"]:checked').val(),
          timezone: new Date().getTimezoneOffset(),
        },
        success: function (data) {
          $(".results>tbody").append(data);
        },
        error: function (error) {
          console.log(error);
        },
      });
      $(".y").val("");
      $('input[name="x"]').prop('checked', false);
      $('input[name="r"]').prop('checked', false);
    }
  });
}