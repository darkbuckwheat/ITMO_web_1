$(document).ready(function () {
    $.ajax({
        url: './php/load_data.php',
        method: "GET",
        success: function (data) {
            $(".results>tbody").html(data);
        },
        error: function (error) {
            console.log(error);
        },
    });
});