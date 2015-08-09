$(document).ready(function(){
    $('#inputForm').submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/messages",
            data: formData,
            success: function(){
                getData();
            }
        })
    });

    $('body').on('click', '#reload', function(event) {
        event.preventDefault();
        getData();
    });

    $('#inputForm').submit(function () {
        $(this).children('input[type=text]').val('');
    });

    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url: "/messages",
        success: function(data){
            console.log(data);
            appendToContainer(data);
        }
    });
}

function appendToContainer(data){
    $('#container').empty();
    for (var i = 0; i < data.length; i++){
        $('#container').append("<div class='post'></div>");
        var time = new Date(data[i].created).toLocaleString();
        var $el = $('#container').children().last();
        $el.append("<p>" + data[i].name + ": " + "</p>");
        $el.append("<p>" + data[i].message + "</p");
        $el.append("<p>" + time + "</p");
    }
}


