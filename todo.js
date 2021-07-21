$(document).ready(function(){
    $("#list").click(function(e){
    $.ajax(
        {
            url:"https://jsonplaceholder.typicode.com/todos", dataType:"json",success:function(result){
            console.log(result);
            $.each(result,function(i,store){
                 console.log(store.id);
                $("#tab").append(
                `<tr>
                <td>
                <div>
                <input type="checkbox" 
                 ${(store.completed)? "checked disabled": ""}>
                 </div>
                 </td>
                <td>${store.id}</td>
                <td>${store.title}</td>    
                </tr> `)
            })
        
 

let count=0;
$('input[type="checkbox"]').on('change',function(){
    if($(this).prop('checked')==true)
    {
        count++;
        if(count==5)
        {
            alert('5 Tasks have been Successfully Completed');
        }

        }
        else
        {
            count--;
        }
        


});
}

        })
});
});
