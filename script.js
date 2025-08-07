
        // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Cart count animation
            const cartBtn = document.querySelector('.icon-link:nth-child(3)');
            const cartCount = document.querySelector('.cart-count');
            
            cartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Simulate cart interaction
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
                cartCount.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
            });
            
            // Product hover effect enhancement
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'var(--shadow)';
                });
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input').value;
                if (email) {
                    alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                    this.reset();
                }
            });
            
            // PHP form submission simulation
            const contactForm = document.querySelector('.php-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('This form would be processed by PHP on the server. Thank you for your message!');
                    this.reset();
                });
            }
        });
