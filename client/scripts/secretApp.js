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

    $('body').on('click', '#reload', function(event){
        event.preventDefault();
        getData();
    });

    $('#inputForm').submit(function () {
        $(this).children('input[type=text]').val('');
    });

    $('#container').on('click', '.delete', function(){
        var $el = $(this).parent();
        if (confirm('Are you sure you want to delete this post?')) {
            $.ajax({
                type: "DELETE",
                url: "/messages/" + $(this).data("id"),
                success: function(){
                    console.log("Deletion sent");
                },
                error: function(xhr, status){
                    alert("Error: ", status);
                },
                complete: function(){
                    console.log("Delete Complete!");
                }
            });

            $el.fadeOut('slow', function(){
                $el.remove();
            });

            } else {
            return false;
        }
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
        var time = new Date(data[i].created).toLocaleString();
        $('#container').append("<div class='post'></div>");
        var $el = $('#container').children().last();
        $el.append("<p>" + data[i].name + ": " + "</p>");
        $el.append("<p>" + data[i].message + "</p");
        $el.append("<button class='delete' data-id='" + data[i]._id +"'>DELETE</button>");
        $el.append("<p>" + time + "</p");
    }
}






