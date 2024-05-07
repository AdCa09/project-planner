document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById('addTask');
    let form = document.querySelector('form');
    let display = false;

    btn.addEventListener('click', function(){
        if(display){
            form.style.visibility = 'visible';
            form.style.opacity = '1'; 
            form.style.height = 'auto'; 
            form.style.padding = '20px'; 
            display = false;
        } else {
            form.style.visibility = 'hidden';
            form.style.opacity = '0'; 
            form.style.height = 'auto'; 
            form.style.padding = '0';

            display = true;
        }
    });
});
