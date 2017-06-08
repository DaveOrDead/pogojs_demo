#
#
#

add_person_async



first_name varchar
last_name varchar
email varchar


<?
	x_person integer;

?><%


    insert into clients
    (
        first_name, last_name, email
    )
    values
    (
        first_name, last_name, email
    )
    returning id into x_person;

    insert into tasks
    (
    text
    )
    values
    (
        'Please contact ' || first_name || ' ' || last_name || ' on email: ' || email
    );


	return pogo_return_OK('{ "status": "success", "streams": ["addTask", "addClient"] }');

%>
