//Parsing JSON objects and Compare:
     var securityQuestions = [
        {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
        },
        {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
       ]
       function chksecurityQuestions(securityQuestions,ques,ans) {
           var question=ques;
           var answer=ans;
           var newobj={}
           newobj["question"]=question;
           newobj["expectedAnswer"]=answer;
           for(var i=0;i<securityQuestions.length;i++)
           {
               if(JSON.stringify(securityQuestions[i])==JSON.stringify(newobj))
               {
                   return true;
               }
               else
               {
                   return false;
               }
           }
       }
       var status=chksecurityQuestions(securityQuestions,"What was your first pet’s name?","FlufferNutter");
       console.log(status);

