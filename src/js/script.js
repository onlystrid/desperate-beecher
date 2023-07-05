  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");

    // Scroll yapılırsa sınıfları ekle
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white/40", "backdrop-blur-lg", "sticky", "-top-8", "right-0", "left-0", "z-50", "translate-y-full", "dark:bg-zinc-900/30");
      navbar.classList.remove("translate-y-0")
    } else {
      // Scroll yapılmazsa sınıfları kaldır
      navbar.classList.remove("bg-white/40", "backdrop-blur-lg", "sticky", "-top-8", "right-0", "left-0", "z-50", "translate-y-full", "dark:bg-zinc-900/30");
    }
  });