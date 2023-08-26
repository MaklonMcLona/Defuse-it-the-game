        
        
        var numB1 = Math.floor(Math.random() * 4);  
        var numB2 = Math.floor(Math.random() * 4);  

        console.log(numB1, numB2);





        var braille = new Array(4);
        braille[0] = "A";
        braille[1] = "B";
        braille[2] = "Z";
        braille[3] = "Y";

        var brailleC = new Array(4);
        brailleC[0] = "o .<br>. .<br>. .";
        brailleC[1] = "o .<br>o .<br>. .";
        brailleC[2] =  "o .<br>. o<br>o o";
        brailleC[3] =  "o o<br>. o<br>o o";

        var b1 = braille[numB1];
        var b2 = braille[numB2];
        var codeLetters = b1+b2;

        var bl1 = brailleC[numB1];
        var bl2 = brailleC[numB2];


        document.getElementById("code").innerHTML = "<div id='codeB'>"+ bl1 +"</div> <div id='codeB'>"+ bl2 +"</div>";
        

        window.onload = function() 
        {
            document.getElementById("ans").value = "";
        }


        var gameStatus = 0;




        
        function CheckOne()
        {


            var ans = document.getElementById("ans").value;

            if(ans == codeLetters)
            {
                document.getElementById("test").innerHTML = " Correct!";
                document.getElementById("test").style.color = "#21fa91";
                document.getElementById("ans").style.color = "#21fa91";
                gameStatus = 1;

            }

            else
            {
                document.getElementById("test").innerHTML = " Incorrect...";
                document.getElementById("test").style.color = "#bc4855";
                document.getElementById("ans").value = "";
            }
        }
        

        console.log(codeLetters);