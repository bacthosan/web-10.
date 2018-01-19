$(document).ready(
    $.ajax({
        url: "http://localhost:3000/tasks",
        method: "GET",
        dataType: "JSON",
        success: response => {
            console.log(response)
            var htmlResult = ""
            for (let i = 0; i < response.length; i++) {
                htmlResult += `<div class="item col-xl-4 col-md-6">
                <div class="product is-gray">
                    <div class="image d-flex align-items-center justify-content-center">
                        <img src="${response[i].img}" alt="product" class="img-fluid">
                    </div>
                    <div class="title">
                        <small class="text-muted">${response[i].gender}</small>
                        <a href="./detail.html">
                            <h3 class="h6 text-uppercase no-margin-bottom">${respnose[i].name}</h3>
                        </a>
                        <span class="price text-muted">${response[i].cost}</span>
                    </div>
                </div>
            </div>`
            }
            $("#listProducts").html(htmlResult);
        }
    })
)