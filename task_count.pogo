# Pogo task count
#
#


task_count



<?
   tasks integer := 0;

?><%
    select count(1) into tasks from tasks;
%>

<p>Tasks: <%= tasks %>