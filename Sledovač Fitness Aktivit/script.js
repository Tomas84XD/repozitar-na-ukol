function logActivity() {
    var activityInput = document.getElementById("activity");
    var dateInput = document.getElementById("date");
    var activityList = document.getElementById("activity-list");
 
    if (activityInput.value !== "" && dateInput.value !== "") {
        var date = new Date(dateInput.value).toLocaleDateString();
        var activity = activityInput.value;
 
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${date}:</strong> ${activity}`;
        
        activityList.appendChild(listItem);
        activityInput.value = "";
        dateInput.value = "";
    }
}