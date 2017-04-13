    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'car_info.xml',
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('car').each(function() {

                    $('#car').append(
                        '<table>' +
                            '<tr>' +
                                '<td>' +
                                    '<img class="carImage" src="' + $(this).find('image').text() + '">' +
                                '</td>' +
                                '<td>' +
                                    '<b>Name of car: </b>' +
                                        $(this).find('name').text() + '<br> ' +
                                    '<b>Mileage: </b>' +
                                        $(this).find('mileage').text() + '<br> ' +
                                    '<b>Price: </b>' +
                                        $(this).find('price').text() + '<br> ' +
                                    '<b>Description: </b>' +
                                        $(this).find('description').text() + '<br> ' + '<br>' +

                                        '<input type="button" value= "Purchase">'+
                                '</td> ' +
                            '</tr>' +     
                        '</table>');
                });
            }
        });
    });

