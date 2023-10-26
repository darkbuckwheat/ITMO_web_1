$(document).ready(function () {
    $("#reset_table").click(function () {
        $.ajax({
            url: './php/clear.php',
            method: "GET",
            success: function () {
                console.log('data has been cleared');
                $(".results>tbody").html("");
            },
            error: function (error) {
                console.log(error);
            },
        });
    });
});