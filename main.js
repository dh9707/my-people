$.ajax({
    type: "GET",
    url: "https://randomuser.me/api/?inc=name,email,id&results=20",
    success: function (data) {
    const source = $('#people-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({user: data.results});
    $('#users').append(newHTML);
    
    }
})



