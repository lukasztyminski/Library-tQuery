tQuery('#btn-68').on('click', function(){
    // tQuery.get('http://code.eduweb.pl/kurs-es6/json/')
    //     .then(data => tQuery('#pre-68').text(data))
    //     .catch(err => tQuery('#pre-68').text(err.message));

     tQuery.post('http://code.eduweb.pl/kurs-es6/send_back/', {
        firstName: 'Łukasz',
        lastName: 'Tymiński'
     })
        .then(data => tQuery('#pre-68').text(data))
        .catch(err => tQuery('#pre-68').text(err.message));
});