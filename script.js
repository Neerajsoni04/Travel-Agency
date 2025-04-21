document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            
            // Change icon
            const icon = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
    
    // Booking Form Validation
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = bookingForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
                bookingForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                alert('Thank you for your message! We will get back to you as soon as possible.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value.trim()) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Tour Filter Functionality
    const destinationFilter = document.getElementById('destination');
    const durationFilter = document.getElementById('duration');
    const priceFilter = document.getElementById('price');
    
    if (destinationFilter && durationFilter && priceFilter) {
        const filters = [destinationFilter, durationFilter, priceFilter];
        
        filters.forEach(filter => {
            filter.addEventListener('change', filterTours);
        });
        
        function filterTours() {
            // This is a placeholder for actual filtering logic
            // In a real application, this would filter the tours based on the selected criteria
            console.log('Filtering tours...');
            console.log('Destination:', destinationFilter.value);
            console.log('Duration:', durationFilter.value);
            console.log('Price:', priceFilter.value);
            
            // For demonstration purposes, we'll just show an alert
            alert('Tours filtered! (This is a demo - no actual filtering is happening)');
        }
    }
    
    // Itinerary Button Functionality
    const itineraryButtons = document.querySelectorAll('#itinerary-btn');
    
    itineraryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would typically open a modal with the full itinerary
            alert('Full itinerary would be displayed here in a modal window.');
        });
    });
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});