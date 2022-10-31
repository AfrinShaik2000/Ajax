$.get('https://jsonplaceholder.typicode.com/todos').done(function(data){   
    data.forEach(element => {
                    $("tbody").append(`<tr>`)
                    for(let i in element){
                        $("tbody").append(`<td>${element[i]}</td>`)
                    }
                    // console.log(data);
                });
});


