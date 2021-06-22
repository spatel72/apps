let parsed = "https://assets.bbhub.io/dotorg/sites/40/2019/05/Beyond-Carbon-States_Territories-data-sample-5_22-data-06_06.csv";



d3.csv(parsed, function (data) {
    //create object that replaces empty string property with stored state names with state names being keys
    let statesTerritories = {};

    //Loop through csv data to create new State properties
    for (let obj in data) {
        data[obj].State = data[obj][""];
        delete data[obj][""];
    }

//reformat data , need to refactor code combine for in statements and create an async function or promise
    for (let obj in data) {
        let stateStance = Object.keys(data[obj]);
        let stateStanceValues = Object.values(data[obj]);

        statesTerritories[data[obj].State] = {
            [stateStance[0]]:stateStanceValues[0],
            [stateStance[1]]:stateStanceValues[1],
            [stateStance[2]]:stateStanceValues[2],
            [stateStance[3]]:stateStanceValues[3],
            [stateStance[4]]:stateStanceValues[4],
            [stateStance[5]]:stateStanceValues[5],
        };

    }


    console.log(statesTerritories["Michigan"])
})






