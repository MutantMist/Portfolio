(function($) {
    $(document).ready(function() {
        // Toggle menu visibility
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1500,
            once: true,
        });

        // Preloader logic
        var div = document.createElement("div");
        div.id = "preloader";
        div.className = "preloader";
        div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>';
        document.body.insertBefore(div, document.body.firstChild);
        window.onload = function() {
            document.getElementById("preloader").classList.add("off");
        };
    });
})(jQuery);
