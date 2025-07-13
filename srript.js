
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
    window.onload = function () {
    const hed0 = document.getElementById("hed0"); // 0 → 0.6
    const hed = document.getElementById("hed");   // 0 → 2
    const hed1 = document.getElementById("hed1"); // 0 → 10

    let count0 = 0.0;
    let count = 0.0;
    let count1 = 0;

    const interval = setInterval(() => {
        // Counter for #hed0
        if (hed0 && count0 <= 0.6) {
            hed0.textContent = count0.toFixed(1) + "+";
            count0 += 0.1;
        }

        // Counter for #hed
        if (hed && count <= 3) {
            hed.textContent = count + "+";
            count += 1;
        }

        // Counter for #hed1
        if (hed1 && count1 <= 10) {
            hed1.textContent = count1.toFixed(0) + "+";
            count1 += 1;
        }

        // Stop when all are complete
        if (count0 > 0.6 && count > 3 && count1 > 10) {
            clearInterval(interval);
        }
    }, 100);
};
