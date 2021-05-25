$.ajax({
    type:'GET',
    url:'http://192.168.10.94:9000/users',
    success: function(data){
        $.each(data, function(i, user){
            $('#tab_01').append(
               '<tr>'+
               '    <td>'+user.guuid+'</td>',
               '    <td>'+user.name+'</td>',
               '    <td>'+user.cpf+'</td>'+
               '</tr>'
            )
        })
        console.log(data);
    },
    error: function(data){
        console.log(data);
    }
})

