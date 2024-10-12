const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleBtn.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

//counter
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
