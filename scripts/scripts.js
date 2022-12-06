console.log("hello")
var navItems = document.querySelectorAll("#navbar");
console.log(navItems)
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}