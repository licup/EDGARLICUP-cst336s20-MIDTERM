$("button").on("click",display);

function display(){
    let bookArea = $("result");
    $.ajax({
                method: "GET",
                url:      "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("input").val() + "&format=json&jscmd=data",
                //url: "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data",
                dataType: "json",
                success: function(result) {
                    console.log(result);
                }
    });
}