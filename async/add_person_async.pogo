#
#
#

add_person_async



first_name varchar
last_name varchar
email varchar


<?
	x_person integer;
    x_task integer;

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
    )
    returning id into x_task;


	return pogo_return_OK('{ "status": "success", "p_client":' || x_person || ', "p_task": ' || x_task || ', "streams": ["addTask", "addClient"] }');

%>
