function totalInvestment () {
    const roomNumberPrice = document.querySelectorAll(".roomNumberPrice");
    const costPerSqt =  document.querySelector("#costPerSqt");
    const totalCostOfTheApartment = document.querySelector("#totalCostOfTheApartment");
    const interestRate = document.querySelector("#interestRate");
    const monthlyMortgage = document.querySelector("#monthlyMortgage");
    const tentantsPayment = document.querySelector("#tentantsPayment");
    const monthlyReturn = document.querySelector("#monthlyReturn");
    const annualReturn = document.querySelector("#annualReturn");
    const roomNumberPriceArray = Array.from(roomNumberPrice);
    const costPerSqtArray = []; //stores calculations tempararily
    let totalSum = 0; //using const says won't work because read only; it resets, everytime i use it in a function

    //multiples and stores 3 arrays
    function multiples3Arrays(total,first,second,third){
        for (let i = 0; i < roomsTypeArray.length; i++){
        //"Cost Per Sqt" is cost by "Sqft Total per Room" * "# of Rooms for Room" * "Room Price"
        total[i] = first[i].valueAsNumber * second[i].valueAsNumber * third[i].valueAsNumber;
        }
    }   

    //multiples and stores 2 arrays
    function multiples2Arrays(total,first,second){
        for (let i = 0; i < roomsTypeArray.length; i++){
        total[i] = first[i].valueAsNumber * second[i].valueAsNumber; //total is storing in costPerSqtArray
        }
    }   
    
    function sumArrays(costPerSqtArray){
        for (let i = 0; i < roomsTypeArray.length; i++){
        totalSum+= costPerSqtArray[i];
        console.log(typeof totalSum);
        }
    };

    //
    function totalCostOfTheApartmentFunction(){
    //total sqt * costPerSqtArray
        if (!Number.isInteger(costPerSqt.valueAsNumber)) { //checks if the room number is an integer
            // The input is not an integer, handle the error or provide feedback
        alert('Please enter an integer value for Cost Per Sqft.');
        } else {
            const equal = sqftTotalForRoom.valueAsNumber * costPerSqt.valueAsNumber;
        totalCostOfTheApartment.valueAsNumber = equal.toFixed(2);
        };
    };

    function monthlyMortgageFunction(){
        //M=P(r((1+r)^2)/(1+r)^n-1)
        //M=monthly mortgage payment
        //P = principal loan amount
        //r=your monthly interest rate (interest rate/12)
        //n=number of months of your loan
        if (!Number.isInteger(costPerSqt.valueAsNumber) || !Number.isInteger(interestRate.valueAsNumber) || !Number.isInteger(term.valueAsNumber)) { //checks if the room number is an integer
            // The input is not an integer, handle the error or provide feedback
        alert('Please enter an integer value for Cost Per Sqft or Interest Rate or term');
        } else {
            let m = 0;
            const p = totalCostOfTheApartment.valueAsNumber;
            const insterateToDecimal = interestRate.valueAsNumber/100
            const r = insterateToDecimal/12;
            const n = term.valueAsNumber;
            //let mortgage = monthlyMortgage.value;

            m = p*((r*(Math.pow((1+r),n)))/(Math.pow((1+r),n)-1));
            monthlyMortgage.value = m.toFixed(2);
        }
    };

    function tentantsPaymentFunction(){
    //"Cost Per Sqt" is cost by "Sqft Total per Room" * "# of Rooms for Room" * "Room Price"
    multiples2Arrays(costPerSqtArray,roomNumberTotalInputArray,roomNumberPriceArray);
    sumArrays(costPerSqtArray); //adds up each room price
    tentantsPayment.valueAsNumber = totalSum.toFixed(2);
    };

    function monthlyReturnFunction(){
         const equal = monthlyMortgage.valueAsNumber - tentantsPayment.valueAsNumber;
         monthlyReturn.valueAsNumber = equal.toFixed(2);
    };

    function annualReturnFunction(){
        const equal =  monthlyReturn.valueAsNumber * 12;
        annualReturn.valueAsNumber = equal.toFixed(2);
    }

    //call all functions
    totalCostOfTheApartmentFunction();
    monthlyMortgageFunction();
    tentantsPaymentFunction();
    monthlyReturnFunction();
    annualReturnFunction();
}
