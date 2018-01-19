const _loadListProducts = response => {
    var htmlResult = "";
}

$(document).ready(
    $.ajax({
        url: "http://localhost:3000/tasks",
        method: "GET",
        dataType: "JSON",
        success: response => {
            console.log(response)
        }
    })
)