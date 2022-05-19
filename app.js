const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        //ketika thumb di klik
        jumbo.src = e.target.src;
        //animasi ketika di klik
        //buat class
        jumbo.classList.add('fade');
        //hapus class dalam beberapa waktu
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500)

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        })

        e.target.classList.add('active');

    }
})
