function calc() 
        {
            console.log("Clicked");
            let score=0;
            const answers = {
                q1: 4, q2: 4, q3: 1, q4: 0, q5: 2, q6: 0, q7: 100, q8: 1, q9: 3, q10: 4
            };
            for(let key in answers)
            {
                const form=document.getElementById("quizForm");
                const selected=form.elements[key].value;
                if(selected==answers[key])
                    score++;
                console.log(score);
            }
            
            document.getElementById("result").innerText = `You scored ${score} / 10`;
        }