window.addEventListener("load",()=>{
    var i=0;
    let contents = document.querySelectorAll('.before');
window.addEventListener('scroll', () => {
    if(i<contents.length){
        var content = contents[i];
    }
    console.log(i);
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.5;
    if (contentPosition < screenPosition) {
        content.classList.add('active');
        if(i<contents.length-1){
            i++;
        }
    } else {
        content.classList.remove('active');
        if(i>0)
        {
            i--;
        }
    }
})
})
