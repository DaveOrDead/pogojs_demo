# Pogo team members table
#
#


team_table

p_filter varchar
p_sort varchar first_name-d

<?
   r record;

?><%
%>

<table>
   <thead>
      <tr>
         <th>First Name
            <%= psp_sort_arrow('p_publish=clients&p_sort=' || p_sort || '&p_column=first_name', CU) %>
         </th>
         <th>Last Name
            <%= psp_sort_arrow('p_publish=clients&p_sort=' || p_sort || '&p_column=last_name', CU) %>
        </th>
         <th>Email
            <%= psp_sort_arrow('p_publish=clients&p_sort=' || p_sort || '&p_column=email', CU) %>
        </th>
      </tr>
   </thead>
<%
   for r in
   (
      select first_name, last_name, email from team_members
      where (
				p_filter = ''
				or first_name ilike '%' || p_filter || '%'
				or last_name ilike '%' || p_filter || '%'
				or first_name || ' ' || last_name ilike '%' || p_filter || '%'
				or email ilike '%' || p_filter || '%'
			)
      order by
        (case when p_sort = 'first_name-a' then first_name else '' end) asc,
        (case when p_sort = 'first_name-d' then first_name else '' end) desc,
        (case when p_sort = 'last_name-a' then last_name else '' end) asc,
        (case when p_sort = 'last_name-d' then last_name else '' end) desc,
        (case when p_sort = 'email-a' then email else '' end) asc,
        (case when p_sort = 'email-d' then email else '' end) desc
   )
   loop
%>
   <tr>
      <td><%= r.first_name %></td>
      <td><%= r.last_name  %></td>
      <td><%= r.email      %></td>
   </tr>
<%
   end loop;
%>
</table>