var totalEmployees = 0,
    totalSalary = 0,
    totalYears = 0;

$(document).ready(function(){
    console.log("Hello");
    pageInit();
});

function pageInit() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            appendDom(data);
            clickListeners();
        }
    });
}

function appendDom(data) {
    addEmployees(data);
    addTotals(data);
}

function clickListeners() {
    $("#peopleContainer").on('click', '.delete', deleteEmployee);
    $("#peopleContainer").on('click', '.freeze', freezeEmployee);
//    $("#peopleContainer").on('click', 'promote', promoteEmployee);
}

function addEmployees(data) {
    $("#peopleContainer").empty();
    totalSalary = 0;
    totalYears = 0;
    totalEmployees = 0;

    for(var i = 0; i < data.length; i++) {
        var el = "<div class='employee well col-md-3'><h3>Employee: </h3>" +
            "<p>Name: " + data[i].name + "</p>" +
            "<p>Salary: " + data[i].salary + "</p>" +
            "<p>Years of Service: " + data[i].years + "</p>" +
            "<p>Title: " + data[i].title + "</p>" +
            "<button class='delete btn btn-danger' data-id='" +
                data[i]._id + "'>Delete</button> " +
            "<button class='freeze btn btn-warning' data-salary='" +
                data[i].salary + "' data-years='" + data[i].years + "'>Freeze</button> " +
            "<button class='promote btn btn-primary' data-id='" +
                data[i]._id + "'>Promote</button> " +
            "</div>";
            totalSalary += data[i].salary;
            totalYears += data[i].years;
            totalEmployees = data.length;
            $("#peopleContainer").append(el);
        }
}

function addTotals() {
    $("#averagesContainer").empty();
    var averageSalary = (totalSalary/totalEmployees),
        averageYears = (totalYears/totalEmployees);
    var ep = "<div class='well col-lg-3'>" +
            "<h3>Averages: </h3>" +
            "<p>Average Salary: " + averageSalary  + "</p>" +
            "<p>Average Years at Chem Bros: " + averageYears + "</p>" +
            "<h3>Totals: </h3>" +
            "<p>Total Salary: " + totalSalary + "</p>" +
            "<p>Total Years at Chem Bros: " + totalYears + "</p>" +
            "</div>";
    $("#averagesContainer").append(ep);

}

function deleteEmployee() {
    var deletedId = {"id" : $(this).data("id")};

    $.ajax({
        type: "DELETE",
        url: '/data',
        data: deletedId,
        success: function(){
            pageInit();
        }
    })
}

function freezeEmployee() {

    var frozenId = {"salary" : $(this).data('salary'), "years" : $(this).data('years')};
    //console.log(frozenId);
    $(this).parent().toggleClass('frozenActive');
    if ($(this).parent().hasClass('.frozenActive')) {
        totalSalary -= frozenId.salary;
        totalYears -= frozenId.years;
        totalEmployees--;
        addTotals();
    } else {
        totalSalary += frozenId.salary;
        totalYears += frozenId.years;
        totalEmployees++;
        addTotals();
    }
}

//function promoteEmployee() {
//
//}


