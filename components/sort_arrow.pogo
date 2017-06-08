# Table sorting button.
#
#


sort_arrow

p_column varchar
p_sort varchar
p_publish varchar


<?


?><%

%>
<button
    class="pogo-route <% if p_sort = p_column || '-a' then %>is-active<% end if; %>"
    pogo-publish="<%= p_publish %>"
    pogo-params='{"p_sort": "<%= p_column || '-a' %>"}'
    type="button"
    <% if p_sort = p_column || '-a' then %>disabled<% end if; %>>
    <span class="sr-only">Sort Ascending</span>
    <span class="caret" aria-hidden="true"></span>
</button>

<button
    class="pogo-route <% if p_sort = p_column || '-d' then %>is-active<% end if; %>"
    pogo-publish="<%= p_publish %>"
    pogo-params='{"p_sort": "<%= p_column || '-d' %>"}'
    type="button"
    <% if p_sort = p_column || '-d' then %>disabled<% end if; %>>
    <span class="sr-only">Sort Descending</span>
    <span class="caret caret-reversed" aria-hidden="true"></span>
</button>
