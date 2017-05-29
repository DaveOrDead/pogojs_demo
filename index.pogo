#
#
#


index


<?

?><%

%><html>
<head>
  <title>Pogo.js</title>


<style>
button.is-active {
  border: 2px solid pink;
}

.app-header {
  height: 2rem;
  background-color: orange;
}

</style>
</head>

<body>

  <div id="app_header" class="app-header">
    Character <div id="tasks_count">5</div>
  </div>


  <div id="id_task_count" class="pogo-subscribe" pogo-streams="tasks" pogo-reload="task_count">
    <%= psp_task_count('', CU) %>
</div>

  <form>
    <label for="filter_people">Filter:</label>
    <input
      id="filter_people"
      class="pogo-filter"
      type="text"
      pogo-target-container="id_team_table"
      pogo-target-url="team_table"
      pogo-params='{}'
      autofocus>
  </form>

  <div id="id_team_table" class="pogo-subscribe" pogo-streams="clients" pogo-reload="team_table">
    <%= psp_team_table('', CU) %>
  </div>



  <div id="id_mc_face"></div>

<form
  action="add_person_async"
  autocomplete="off"
  class="pogo-submit"
  novalidate
>
  <div>
    <label for="first_name">First name:</label>
    <input id="first_name" name="first_name" type="text">
  </div>
  <div>
    <label for="last_name">Last name:</label>
    <input id="last_name" name="last_name" type="text">
  </div>
  <div>
    <label for="email">Email:</label>
    <input id="email" name="email" type="email">
  </div>
  <button
    type="submit">
    Add
  </button>
</form>

</body>

<script src="assets/main.min.js"></script>

</html>


