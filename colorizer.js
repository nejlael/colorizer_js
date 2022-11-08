const input = document.getElementById('input');
        const button = document.getElementById('go');
        const colorized = document.getElementById('colorized');
        

        
        
        function fun(event) {
             word = colorized.innerHTML = input.value;
             event.preventDefault();
               console.log(input.value);
               console.log(word.length);

               for( let i = 0; i <= word.length ; i++ ){
                    console.log(word[i]);
                    const el = `<span> ${word[i]}</span>`
                    
                    

                         
               }



          };
        
        button.addEventListener('click', fun);
        
        
       