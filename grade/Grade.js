
function getGrade () {
    let marks = prompt ("How many marks did you get?")

    if (isNaN(marks) |marks < 0 | marks > 100){
        alert ("Invalid input the mark should be between 0 and 100");
        }
        else {
            if (marks > 79) {
                alert("Grade: A");
            } else if (marks > 60) {
                alert("Grade: B");
            } else if (marks > 50) {
                alert("Grade: C");
            } else if (marks > 40) {
                alert("Grade: D");
            } else {
                alert("Grade: E");
            }

           
        }
        
      
    }
getGrade();



