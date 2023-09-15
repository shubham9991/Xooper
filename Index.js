const cursor = document.querySelector('.custom-cursor');
        const cursorWidth = cursor.offsetWidth;
        const cursorHeight = cursor.offsetHeight;
        const buttons = document.querySelectorAll('.btn');
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate the position to center the cursor
            const cursorX = mouseX - cursorWidth / 2;
            const cursorY = mouseY - cursorHeight / 2;

            // Set the cursor position
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
        });

        buttons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
            });

            button.addEventListener('mouseleave', () => {
                cursor.style.width = '35px';
                cursor.style.height = '35px';
            });
        });


        // SROLL TO TOP

        const scrollButton = document.querySelector(".scroll-to-top");

        // Function to handle scroll event
        function handleScroll() {
          const scrollY = window.scrollY;
        
          // Set the scroll threshold (40vh)
          const scrollThreshold = window.innerHeight * 0.4;
        
          // Check if scrollY is greater than the threshold
          if (scrollY > scrollThreshold) {
            // If scrolled down enough, show the button
            scrollButton.style.opacity = "1";
            scrollButton.style.pointerEvents = "auto";
          } else {
            // If not scrolled down enough, hide the button
            scrollButton.style.opacity = "0";
            scrollButton.style.pointerEvents = "none";
          }
        }
        
        // Attach the handleScroll function to the scroll event
        window.addEventListener("scroll", handleScroll);
        
        // Function to scroll to the top
        function scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
        
        // Attach the scrollToTop function to the button click event
        scrollButton.addEventListener("click", scrollToTop);
        




        // Faqs
        const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
          const itemToggle = this.getAttribute('aria-expanded');
          
          for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
          }
          
          if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
          }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));