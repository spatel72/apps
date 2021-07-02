//let parsed = "https://assets.bbhub.io/dotorg/sites/40/2019/05/Beyond-Carbon-States_Territories-data-sample-5_22-data-06_06.csv";
let parsed = "5_22-data-06_06.csv";

let statesTerritories = {};
let question;
let answer;

d3.csv(parsed, function (data) {
    //create object that replaces empty string property with stored state names with state names being keys
    

    //Loop through csv data to create new State properties
    for (let obj in data) {
        
        data[obj].State = data[obj][""];
        delete data[obj][""];

        question= Object.keys(data[obj]);
        answer = Object.values(data[obj]);

        statesTerritories[data[obj].State] = {
            [question[0]]:answer[0],
            [question[1]]:answer[1],
            [question[2]]:answer[2],
            [question[3]]:answer[3],
            [question[4]]:answer[4],
            [question[5]]:answer[5],
        }; 
    }

//reformat data , need to refactor code combine for in statements and create an async function or promise

    console.log(question)
    $(document).ready(function() {
        let theStateName = $("#state_select").find(":selected").text();
        //alert("theStateName " + theStateName)
        if(!theStateName) { // Hack. We need to instead trigger when #state_select menu becomes available.
            theStateName = "Georgia"
        }
question.forEach(element => {
    if (element.includes("[XX]" || "[XX's]")) {
        $(".state-table__question").html(element.replace("[XX]" || "[XX's]", theStateName));
        $(".state-table__answer").html(answer);
        

        
        }
    });
        
    });
})






