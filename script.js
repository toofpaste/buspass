$(document).ready(function() {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    var min = dt.getMinutes();
    var hours = dt.getHours();
    var month = dt.getMonth() + 1;
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var day = dt.getDate();
    var year = dt.getFullYear();
    if(min > 15){
        min -= 15;
    }else if(min > 5){
        min -= 5;
    }else {
        hours--;
        min = 43;
    }
    if(hours > 10){
        time = ((hours - 12) + 2) + ":" + min + " PM";
    }else if(hours === 10){
        time = ((hours - 12) + 2) + ":" + min + " PM";
    }else time = (hours + 2) + ":" + min + " AM";

    var fullTime = monthName[dt.getMonth()] + " " + day + ", " + year + " " + time;
    console.log(fullTime);
    document.getElementById("time").innerHTML = fullTime;
    $("#green").hide();
    $("#gifImg").on("click",function() {
        $("#blue").toggle();
        $("#green").toggle();
    });

});
