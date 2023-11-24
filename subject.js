const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');


allSideMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function() {
        allSideMenu.forEach(i=> {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active'); 
    })
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
})  

let switchMode = document.getElementById("switch-mode");
switchMode.addEventListener("change", (e) => {
    if(e.target.checked) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
})

var sidemeu = document.getElementById("sidemenu");

    function openmenu() {
        sidemeu.style.right = "0";
    }
    function closemenu() {
        sidemeu.style.right = "-200px";
    }


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function(e) {
    if(window.innerWidth < 768) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search-alt-2', 'bx-x');
        }
        else {
            searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
        }
    }
})


if(window.innerWidth < 400) {
    sidebar.classList.add('hide');
}
else if(window.innerWidth < 768) {
    searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
    if(this.innerWidth > 768) {
        searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
        searchForm.classList.remove('show');
    }
})