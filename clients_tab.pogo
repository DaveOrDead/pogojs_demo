  #
#
#


clients_tab


<?

?><%

%>

<div class="row">
    <div class="col-md-6">
        <form>
            <label for="filter_people">Filter:</label>
            <input
              id="filter_people"
              class="pogo-filter"
              type="text"
              pogo-publish="clients"
              pogo-params='{}'
              autofocus>
        </form>

      <div id="id_clients_table" class="pogo-subscribe" pogo-streams="addClient sortClientList" pogo-reload="clients_table">
        <%= psp_clients_table('', CU) %>
      </div>
    </div>
    <div class="col-md-6">
        <div id="id_clients_table" class="pogo-subscribe" pogo-streams="addClient sortRecent" pogo-reload="recent_table">
            <%= psp_recent_table('', CU) %>
        </div>
    </div>
</div>
