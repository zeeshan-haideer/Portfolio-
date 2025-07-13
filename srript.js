
    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        if (window.scrollY > 100) { // Check if scrolled more than 100px
            header.classList.add('scrolled'); // Add the 'scrolled' class
        } else {
            header.classList.remove('scrolled'); // Remove the 'scrolled' class
        }
    });
    
        function toggleHeading() {
           
            const heading = document.getElementById("myHeading");
 
            const toggle = document.querySelector('.toggle');
  

            toggle.classList.toggle('active');
            // Toggle the display property of the heading
            if (heading.style.display === "none" || heading.style.display === "") {
                heading.style.display = "block";  // Show the heading
               heading.style.backgroundColor="black";
                
              
            } else {
                heading.style.display = "none";  // Hide the heading
            }
        }
        window.onload = function() {
            const heading = document.getElementById("hed");
            const heading1 = document.getElementById("hed1");
            const heading0 = document.getElementById("hed0");


            let count = 0;

            // Set an interval to increment the count from 0 to 19
            const interval = setInterval(function() {
                if (heading != null && heading0 != null &&  heading1!=null){
                heading.textContent = count+"+";  // Update the content of #hed
                count=count+2;
                heading1.textContent = count+"+";  // Update the content of #hed
                count=count+1;
                }
                // When count reaches 19, stop the interval
                if (count > 2) {
                    clearInterval(interval);
                }
            }, 100);  // Change the number every 100 milliseconds
           let  count1=0;
            const interval1 = setInterval(function() {
                if (heading != null && heading0 != null &&  heading1!=null){

                heading0.textContent = count1+"+";  // Update the content of #hed
                count1++;
                count1++;
                }

                // When count reaches 19, stop the interval
                if (count > 2) {
                    clearInterval(interval1);
                }
            }, 100);
        }


 
