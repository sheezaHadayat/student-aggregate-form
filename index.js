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
    
    // Show student name, aggregate, and eligibility
    document.getElementById("result").innerHTML = "Student Name: " + name + "<br>" +
        "Aggregate: " + aggregate.toFixed(2) + "%";

  
      // Store student data in localStorage
      var studentData = {
        name: name,
        aggregate: aggregate.toFixed(2)
      };
      
      // Retrieve existing student data from localStorage
      var existingData = JSON.parse(localStorage.getItem("studentData"));

      if (existingData) {
        // Append new student data to existing data
        existingData.push(studentData);
        localStorage.setItem("studentData", JSON.stringify(existingData));
      } else {
        // Create new array for student data in localStorage
        localStorage.setItem("studentData", JSON.stringify([studentData]));
      }

      // Check eligibility
      if (aggregate >= 60) {
        alert("You are eligible for admission.");
      } else {
        alert("You are not eligible for admission.");
      }
      
      // Redirect to the student list page
      window.location.href = "detail.html";
    
}
