# Table sorting button. 
#
#


sort_arrow

p_column varchar
p_sort varchar
p_container varchar
p_url varchar


<?


?><%

%>
<button
    class="pogo-route <% if p_sort = p_column || '-a' then %>is-active<% end if; %>"
    data-pogo-target-container="<%= p_container %>"
    data-pogo-target-url="<%= p_url %>"
    data-pogo-params='{"p_sort": "<%= p_column || '-a' %>"}'
    type="button">
    Sort Ascending
</button>

<button
    class="pogo-route <% if p_sort = p_column || '-d' then %>is-active<% end if; %>"
    data-pogo-target-container="<%= p_container %>"
    data-pogo-target-url="<%= p_url %>"
    data-pogo-params='{"p_sort": "<%= p_column || '-d' %>"}'
    type="button">
    Sort Descending
</button>
