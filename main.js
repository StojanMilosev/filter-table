function filterTable(){
    var input = document.getElementById("table-filter");
    var filter = input.value.toUpperCase(); 
    var table = document.getElementById("myTable");
    var tr = document.getElementsByTagName("tr");
    var tr,td,i;

    for(i=0;i<tr.length;i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            if(td.innerHTML.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}