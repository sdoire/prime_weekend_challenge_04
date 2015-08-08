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

    $('body').on('click', '#reload', function(){
        location.reload(true);
    });

    $('#container').on('click', '.delete', function(){
        //var $el = $(this);
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

        $(this).parent().remove();

    });
    getData();
});

function reload(){
    $.ajax({
       type: "GET",
        url: "/",
        success: function(){
            console.log("Success!");
        }
    });
}

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
        $('#container').append("<div></div>");
        var $el = $('#container').children().last();
        $el.append("<p>" + data[i].name + ": " + "</p>");
        $el.append("<p>" + data[i].message + "</p");
    }
}


