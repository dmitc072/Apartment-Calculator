//these are created after the 
let roomNumberTotalInputArray;
let sqftInputArray;
let sqftTotalInputArray;

submitCalculation.addEventListener('click', (event) => {
    //for each per sqft room, multiply the total room and add to the total sqft room
//these elements has to be in this listener so the value can update, if it is outside, it will use the info originally on the link
    const sqftInput = document.querySelectorAll(".sqftInput");
    const sqftTotalInput = document.querySelectorAll(".sqftTotalInput");
    const roomNumberTotalInput = document.querySelectorAll(".roomNumberTotalInput");
    roomNumberTotalInputArray = Array.from(roomNumberTotalInput);
    sqftInputArray = Array.from(sqftInput);
    sqftTotalInputArray = Array.from(sqftTotalInput);
    let totalSqft = 0;
    let totalRoom = 0;



        for (let i = 0; i < roomsTypeArray.length; i++){
            const roomInput = roomNumberTotalInputArray[i].valueAsNumber ;
            if (!Number.isInteger(roomInput)) { //checks if the room number is an integer
                // The input is not an integer, handle the error or provide feedback
            alert('Please enter an integer value.');
            } else {
                
                const sqft = sqftInputArray[i].valueAsNumber ;              //stores each number from index in sqftInputArry to calculate
                sqftTotalInputArray[i].valueAsNumber = roomInput * sqft;
                totalSqft += sqftTotalInputArray[i].valueAsNumber;          //add the quantity to export in total below
                totalRoom += roomInput;
                roomNumberTotal.valueAsNumber = totalRoom; //
                sqftTotalForRoom.valueAsNumber = totalSqft; //
            }   
        }
                
                
            totalInvestment();
        
});


