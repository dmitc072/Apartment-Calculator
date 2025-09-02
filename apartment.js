/*First I had to create the User input on how many rooms they want. Clear you Room Calculator.
The value comes out as a string, so I have to take the string and convert it to a number to store in "storedRoomNumber",
and before throwing it in the for loop.
After I stored the number and outputted each number in the array called roomsTypeArray.
With the array i was able to call each index with a function forEach to recreate the number of rooms in the room calculator

*/
let roomNumberTitle = document.querySelector('#roomNumber');
const sqftTotalForRoom = document.querySelector("#totalForRoomCalc");
const roomNumberTotal = document.querySelector("#roomNumberTotal");
let roomPriceInfo = document.querySelector('#roomPriceInfo');
let term = document.querySelector('#term');
let roomTotalInfo = document.querySelector('#roomTotalInfo');
let sqftInfo = document.querySelector('#sqftInfo');
let sqftTotalInfo = document.querySelector('#sqftTotalInfo');
let sqft = document.querySelectorAll('.sqftNumberColumn');
let numberOfRoomType = document.querySelector("#numberOfRoomType");
let submitNumberOfRoomType = document.querySelector("#submitnumberOfRoomType");
numberOfRoomType.value = "";
let roomsTypeArray = [];
let isSubmttedRoomNumber = false;
let storedRoomNumber = "";

submitNumberOfRoomType.addEventListener('click', (event) => { //calling the submit button;nothing is connected with it
//if number is inputted into number of rooms,
//that number, creates new "roomNumbers" from how many inputted
isSubmttedRoomNumber = true;

    let quantity = parseInt(numberOfRoomType.value);
    storedRoomNumber = quantity;
    if (quantity >=0 && quantity <= 10){

        if(isSubmttedRoomNumber){ //A true/false to erase roomPriceInfo and sqftInfo when the submit buttton pressed
            roomPriceInfo.innerHTML = ''; //have to call id and not class because I am reaching one area
            sqftInfo.innerHTML = '';
            roomTotalInfo.innerHTML = ''; 
            sqftTotalInfo.innerHTML = '';
            roomsTypeArray = []; //if you don't clear the array, it will keep adding on rooms
        }
        //ex 6, make a loop to store i++ in an array
        for (let i = 1; i <= quantity; i++){
            roomsTypeArray.push(i);
            console.log(roomsTypeArray);

        }

        //call for each room number(roomArray), create eachRoomInputCell
        roomsTypeArray.forEach(room => {  
            //creating Room Price Information      
            const rooms = document.createElement("p");           // creates the paragraph tag        
            const node = document.createTextNode("Room " + room + " Price: $");// creates the text for the paragrah
            rooms.appendChild(node);                             // stores the text in the paragraph
            roomPriceInfo.appendChild(rooms);                         // stores the paragrah in the HTML

            const newRoomPrices = document.createElement("input");    // creates the input element
            newRoomPrices.setAttribute("type", "number");             // create the attribute type, class, id, and value
            newRoomPrices.setAttribute("class", "roomNumberPrice");
            newRoomPrices.setAttribute("id", "roomNumber" + room);
            newRoomPrices.setAttribute("value", "");
            roomPriceInfo.appendChild(newRoomPrices);                      //#roomPriceInfo stores newInput
            
            //creating Sqft per Room Information
            const sqftLabel = document.createElement("p");           // creates the paragraph tag        
            const sqftText = document.createTextNode("Sqft per Room");// creates the text for the paragrah
            sqftLabel.appendChild(sqftText);                             // stores the text in the paragraph
            sqftInfo.appendChild(sqftLabel);                         // stores the paragrah in the HTML
        
            const newSqftInfo = document.createElement("input");    // creates the input element
            newSqftInfo.setAttribute("type", "number");             // create the attribute type, class, id, and value
            newSqftInfo.setAttribute("class", "sqftInput");
            newSqftInfo.setAttribute("id", "sqftForRoom" + room);
            newSqftInfo.setAttribute("value", "");
            sqftInfo.appendChild(newSqftInfo);                      //#roomPriceInfo stores newInput
       
            //creating Number of Room Information
            const roomsCount = document.createElement("p");           // creates the paragraph tag        
            const node2 = document.createTextNode("# of Rooms for Room " + room);// creates the text for the paragrah
            roomsCount.appendChild(node2);                             // stores the text in the paragraph
            roomTotalInfo.appendChild(roomsCount);                         // stores the paragrah in the HTML

            const newRoomTotalPrices = document.createElement("input");    // creates the input element
            newRoomTotalPrices.setAttribute("type", "number");             // create the attribute type, class, id, and value
            newRoomTotalPrices.setAttribute("class", "roomNumberTotalInput");
            newRoomTotalPrices.setAttribute("id", "roomNumber" + room + "Total");
            newRoomTotalPrices.setAttribute("value", "");
            roomTotalInfo.appendChild(newRoomTotalPrices);                      //#roomPriceInfo stores newInput
        
            //creating Sqft Total per Room information
            const sqftTotalLabel = document.createElement("p");           // creates the paragraph tag        
            const sqftTotalText = document.createTextNode("Sqft Total per Room");// creates the text for the paragrah
            sqftTotalLabel.appendChild(sqftTotalText);                             // stores the text in the paragraph
            sqftTotalInfo.appendChild(sqftTotalLabel);                         // stores the paragrah in the HTML
        
            const newSqftTotalInfo = document.createElement("input");    // creates the input element
            newSqftTotalInfo.setAttribute("type", "number");             // create the attribute type, class, id, and value
            newSqftTotalInfo.setAttribute("class", "sqftTotalInput");
            newSqftTotalInfo.setAttribute("id", "sqftTotalForRoom" + room);
            newSqftTotalInfo.setAttribute("value", "");
            newSqftTotalInfo.setAttribute("disabled", "true");
            sqftTotalInfo.appendChild(newSqftTotalInfo);                      //#roomPriceInfo stores newInput
            
        
        })
    } else {
        alert("Please enter a quantity from 1 to 10 room type");
    }
});




