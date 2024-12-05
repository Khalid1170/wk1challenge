function getSpeed () {
        const speed = prompt("Enter Speed of Vehicle here")
        const limit = 70;
        const kmPerPoint = 5;

        if (speed <limit) {
        alert("Ok");
        } else {
        const points = Math.floor((speed - limit) / kmPerPoint);
        if (points > 12) {
        alert("License suspended");
        } else {
        alert(`Points: ${points}`);
        }
        }
        
}

getSpeed();

