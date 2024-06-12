///search
var xsearch = document.getElementById("hiddenSearch");
var searchIcon = document.getElementsByClassName("fa-magnifying-glass")[0];
var searchBar = document.getElementById("searchBar");
if (searchBar.style.top="50%") {
    xsearch.onclick=function () {
        searchBar.style.top="-50%";
    }
}else{
    searchIcon.onclick=function () {
        searchBar.style.top="50%";
    }
}
