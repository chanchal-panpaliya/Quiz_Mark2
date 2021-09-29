
//----------------------level1------------------

var listOfQues_level1 = [
    {   
      question:"Which is the smallest country in the world?",
        options:["Vanuatu" , "Vatican City" ,"Luxembourg" ,"Monaco"],
        correctAnswer:"B",
        description:" B)Vatican City \n\n"
    },
    {
      question:"Where is the official home of Santa Claus?",
      options:["USA" , "Canada" , "Norway", "Finland"],
      correctAnswer:"D",
      description:" D)Finland \n\n"
    },
    {
      question:"Which of the following country has given first time voting rights to women?",
      options:["USA" , "France" , "New Zealand", "India"],
      correctAnswer:"C",
      description:" C)New Zealand\n\n"
    },
    {
      question:"Which is the safest country in Asia?",
      options:["China" , "Malaysia" , "Japan", "Korea"],
      correctAnswer:"C",
      description:" C)Japan \n\n"
    },
    {   
      question:"Which of following countries has highest per capita income in the world?",
        options:["Qatar" , "Luxembourg","Macau","Liechtenstein"],
        correctAnswer:"A",
        description:" A)Qatar\n\n"
    }
  ];

  //----------------------level2------------------

var listOfQues_Level2 = [
    {   
      question:"‘Cat Que’, that was seen in news recently, is a virus said to have emerged in which country?",
        options:["India","China","United States","Kenya"],
        correctAnswer:"B",
        description:"B)China\n\n"
    },
    {
      question:"‘Internal Market Bill’, which was seen in the news recently, is associated with which country?",
      options:["United States","Russia","United Kingdom","India"],
      correctAnswer:"C",
      description:"C)United Kingdom\n\n"
    },
    {
      question:"Which country has proposed a new security bill that intends to protect Police officers from online violence",
      options:["China","Japan","USA","France"],
      correctAnswer:"D",
      description:"D)France \n\n"
    }
  ];

    //----------------------level3------------------

var listOfQues_Level3 = [
    {   
      question:"The “Go for Zero” policy, which was seen in the news recently, is associated with which country?",
        options:["United Kingdom","New Zealand","Australia","Germany"],
        correctAnswer:"C",
        description:" C)Australia\n\n"
    }
  ];

  //-------------------------------------------------

const chalk = require('chalk');

var readline = require('readline-sync');
var userName = readline.question('May I have your name?');
console.log('\n \n \n Hello ' + chalk.blue.bold(userName ));
console.log("Do you have knowledge about different countries of the world?? lets check")
if (readline.keyInYNStrict('Are you ready?')) {

      if (readline.keyInYNStrict('\n\n\nInstructions:\n\n 1] This is a multiple types questions set. \n\nif your answer is Correct then SCORE will be '+chalk.red.bold('+1')+' , there is '+chalk.red.bold('NO NEGATIVE')+' marking at all.\n\n 2] FOR '+chalk.blue.bold('LEVEL 1')+':: You should be score atlist '+chalk.red.bold('4')+' out of '+chalk.green.bold('5')+' then you are qualified for next "LEVEL 2". \n\n 3] FOR '+chalk.blue.bold('LEVEL 2')+' :: You should be score atlist '+chalk.red.bold('2')+' out of '+chalk.green.bold('3')+' then you are qualified for next Last level. \n\n 4] FOR '+chalk.red.bold('LAST LEVEL')+': Last Level have only one quention \n\n At the '+chalk.blue.bold('End')+' you know your '+chalk.blue.bold('score and Answerlist with questions and description')+' \n\n Do you want to start??\n\n')){
   
       MainFunction("level1");

      }

}else{
    console.log("Thank you for vesting "+userName+". Have a nice day");
}





//----------functions

function MainFunction(level){
         var GetAns = AskQue(level);
          var CorrectAns = CorrectAnswerList(level);
          compareAns(GetAns,CorrectAns,level);
}

//------------------------------------------------------

function HeighestScrore(Score,userName,level){

   if(level == "level1"){
   var ListOfScore = [{ Name:"ABC", Score: 5},
                      { Name:"PQR", Score: 5}
                     ];
   }else if(level == "level2"){
     var ListOfScore = [{ Name:"XYZ", Score: 3},
                      { Name:"NMO", Score: 3}
                     ];
   }else if(level == "level3"){
     var ListOfScore = [{ Name:"LMN", Score: 1},
                      { Name:"IFG", Score: 1}
                     ];
   }
     
   for(i=0; i<=ListOfScore.length-1; i++){
     if(ListOfScore[i].Score<=Score){
       if(i==1) break;
       console.log("\ncongratulation!!!! you broke records \n send a screenshot . So i update database");
     }
   }
}


//--------------------------------------
function compareAns(getans,CorrectAns,level){
    var readline = require('readline-sync');
    var Score = 0;
      for(i=0 ; i<=CorrectAns.length -1 ; i++){
           if(getans[i].toUpperCase() === CorrectAns[i]){
              Score++;
            }
      }
     
     PrintListOfRightAnswers(level);
     HeighestScrore(Score,userName,level);

      console.log("\nAccuracy of "+chalk.blue.bold(level)+" is : "+Math.round((Score/CorrectAns.length)*100)+"% \n\nAnd Your Score is : "+chalk.red.bold(Score)+"/"+CorrectAns.length+"\n "+chalk.green.bold("Above")+" check Correct answer");
       
     
        //level2
      if(Score>=4 && level==="level1"){
          console.log("\n "+chalk.green.bold("congratulation")+" you are qualified for "+chalk.red.bold("LEVEL2"));
           if (readline.keyInYNStrict('Do you want to continue this test?')) {

                  if (readline.keyInYNStrict("Are you ready for level2")){


                    console.log("-------------------------------------------------")
                    console.log(chalk.yellow.bold("\n\nWelcome to the LEVEL2\n\n"))
                    console.log("-------------------------------------------------")

                    MainFunction("level2");

                  }

            }else{
                  console.log("Dear "+chalk.blue.bold(userName)+"you are not interested for level2 \n Thank You .");
                 // break;
            }
      
     }else if(Score>=2 && level==="level2"){
           console.log("\n "+chalk.green.bold("congratulation")+" you are qualified for "+chalk.red.bold("LEVEL3"));
                if (readline.keyInYNStrict('Do you want to continue this test?')) {

                  if (readline.keyInYNStrict("are you ready")){

                      console.log("-------------------------------------------------")
                      console.log(chalk.yellow.bold("\n\nWelcome to the Last Level\n\n"))
                      console.log("-------------------------------------------------")

                      MainFunction("level3");

                    }

                 }else{
                  console.log("Dear "+chalk.blue.bold(userName)+" you are not interested for level3 \n Thank You ");
                 // break;
                }
       
        }else{
          if(level==="level3"){
              console.log("Thank you so much. come again.")
          }else{
          console.log("Your score is "+chalk.red.bold("too low")+" for the next level , try it next time . Best Luck")
          }
        }
}



//-----------------------------------------------------



function CorrectAnswerList(level){
  var CorrectAnsList = new Array();
  var listOfQues = Check_Level(level);
  for(i=0;i<=listOfQues.length-1;i++){
          CorrectAnsList.push(listOfQues[i].correctAnswer);
     } 
 return CorrectAnsList;
}



//--------------------------------------------


function AskQue(level){
  var listOfQues = Check_Level(level); 
  var ListofAnsByUser = new Array();
  var ansByUser , quecount=1;
  for(i=0;i<=listOfQues.length-1;i++){
      console.log("--------------------------------------------------------------------------------")
      console.log("\n"+quecount+"] "+chalk.blue.bold(listOfQues[i].question))
      console.log("\n\nOptions are :- \n")
           for(j=0,k=65;j<=listOfQues[i].options.length-1;j++,k++){
                console.log("["+String.fromCharCode(k)+"]"+listOfQues[i].options[j]);
        }
           if(listOfQues[i].options.length === 4){
                ansByUser = readline.keyIn('Hit A...D key: ', {limit: '$<A-D>'});
            }else{
                ansByUser = readline.keyIn('Hit A...B key: ', {limit: '$<A-B>'});
         }

         ListofAnsByUser.push(ansByUser);
         quecount++;
     } 
     
 return ListofAnsByUser;
}


//---------------------------


function Check_Level(level){
     if(level === "level1"){
          var listOfQues = listOfQues_level1;
      }else if(level === "level2"){
          var listOfQues = listOfQues_Level2;
      }else if(level === "level3"){
          var listOfQues = listOfQues_Level3;
      }

      return listOfQues;
}


//---------------------------


function PrintListOfRightAnswers(level){
  var que = 1;
  var listOfQues = Check_Level(level);
  console.log("-------------------------Correct Answers List-------------------------------------------");
    for(i=0;i<=listOfQues.length-1;i++){   
      console.log(que+"] "+chalk.blue.bold(listOfQues[i].question+"\n"));
      console.log("Answer:-"+chalk.red.bold(listOfQues[i].description));
    que++;
    }
console.log("----------------------------------------------------------------------");
}