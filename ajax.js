function ajax(){
    document.getElementById("dbutn").style.visibility="hidden";
    // Creating an XHR Object
    var xhttp= new XMLHttpRequest();
    // EventListener
    xhttp.onreadystatechange= function(){
        // condition
        if(this.readyState==4 && this.status==200)  {
           
            $(document).ready(function(){
                $.getJSON("items.json", function(data){
                var output="";
                $.each(data, function(key, value){
                
                    output += '<tr><td>' + value.SlNo + '</td>';
                    output += '<td>' + value.name+ '<br> <img src=' + value.image + ' width="80" height="80"></img> </td>';
                    output += '<td>' + value.Quantity + '</td>';
                    output +='<td>' + value.Unit + '</td>';
                    output +='<td>' + value.Department+ '</td>';
                    output += '<td>' + value.Notes+ '</td></tr>';                  
                   
                });
                
                $('#item_list').append(output);
                
                 });
                });
        }
    }
    
    xhttp.open("GET", "items.json", true);
    xhttp.send();
    }
    
