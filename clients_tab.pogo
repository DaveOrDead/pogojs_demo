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
              pogo-publish="filterClientList"
              pogo-params='{}'
              autofocus>
        </form>

      <div id="id_clients_table" class="pogo-subscribe" pogo-streams="addClient sortClientList filterClientList" pogo-reload="clients_table">
        <%= psp_clients_table('', CU) %>
      </div>
    </div>
    <div class="col-md-6">

        <form>
            <label for="filter_recent">Filter:</label>
            <input
              id="filter_recent"
              class="pogo-filter"
              type="text"
              pogo-publish="filterRecent"
              pogo-params='{}'
            >
        </form>

        <div id="id_recent_table" class="pogo-subscribe" pogo-streams="addClient sortRecent filterRecent" pogo-reload="recent_table">
            <%= psp_recent_table('', CU) %>
        </div>
    </div>
</div>
