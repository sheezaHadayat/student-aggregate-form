function calculateAggregate(result) {
    // Get input values
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var matricMarks = parseInt(document.getElementById("matricMarks").value);
    var totalMatricMarks = parseInt(document.getElementById("totalMatricMarks").value);
    var fscMarks = parseInt(document.getElementById("fscMarks").value);
    var totalFscMarks = parseInt(document.getElementById("totalFscMarks").value);
    var entryTestMarks = parseInt(document.getElementById("entryTestMarks").value);
    var totalEntryTestMarks = parseInt(document.getElementById("totalEntryTestMarks").value);

    // Calculate percentages
    var matricPercentage = (matricMarks / totalMatricMarks) * 100;
    var fscPercentage = (fscMarks / totalFscMarks) * 100;
    var entryTestPercentage = (entryTestMarks / totalEntryTestMarks) * 100;

    // Calculate aggregate
    var aggregate = (0.2 * matricPercentage) + (0.3 * fscPercentage) + (0.5 * entryTestPercentage);

     // Store student data in localStorage
     var studentData = {
        name: name,
        rollNo: rollNo,
       aggregate: aggregate.toFixed(2)
     };
      localStorage.setItem(rollNo, JSON.stringify(studentData));

        //   Retrieve student data from localStorage and display it
          for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
          var studentData = JSON.parse(localStorage.getItem(rollNo));
          document.write("<tr>");
          document.write("<td>" + studentData.name + "</td>");
          document.write("<td>" + studentData.aggregate + "%</td>");
          document.write("</tr>");
        
          }
    // Show student name, aggregate, and eligibility
    document.getElementById("result").innerHTML = "Student Name: " + name + "<br>" +
        "Aggregate: " + aggregate.toFixed(2) + "%";

    // Check eligibility
    if (aggregate >= 60) {
        alert("You are eligible for admission.");
    } else {
        alert("You are not eligible for admission.");
    }
}