$(document).ready(function() {
    console.log("Hello");
    pageInit();
});

function pageInit() {
    appendDom();

    $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            console.log(data);
        }
    });
}

function appendDom() {
    addEmployees();
    addTotals();
}

function addEmployees(data) {
    $("#peopleContainer").empty();

    for(var i = 0; i < data.length; i++) {
        var el = "<div class='well col-md-3'>Employee: " +
            "<p>Name: " + data[i].name + "</p>" +
            "<p>Salary: " + data[i].salary + "</p>" +
            "<p>Years of Service: " + data[i].years + "</p>" +
            "<p>Title: " + data[i].title + "</p>" +
            "<button class='delete btn btn-danger' data-id='" +
                data[i]._id + "'>Delete</button>" +
            "<button class='freeze btn btn-warning' data-id='" +
                data[i]._id + "'Freeze</button> " +
            "<button class='promote btn btn-primary' data-id='" +
                data[i]._id + "'Promote</button>"
            "</div>";
        }
    $("#peopleContainer").append(el);
}

function addTotals(data) {
    $("#averagesContainer").empty();
    //average employee salary
    //total employee salary
    //average employee years
    //total employee years
    $("#averagesContainer").append();

}

