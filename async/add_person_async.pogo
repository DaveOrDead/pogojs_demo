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

	
    insert into team_members
    (
        first_name, last_name, email
    )
    values
    (
        first_name, last_name, email
    )
    returning id into x_person;
		

	return pogo_return_OK('{ "status": "success" }');

%>
