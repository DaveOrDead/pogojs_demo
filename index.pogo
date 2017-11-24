#
#
#


index

p_tab varchar c

<?

?><%

%><html>
<head>
  <title>Pogo.js</title>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <style>
    button.is-active {
      border: 2px solid pink;
  }

  button > * {
    pointer-events: none;
  }

  .caret.caret-reversed {
    border-top-width: 0;
    border-bottom: 4px solid #000000;
}

</style>
</head>

<body>

    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">PogoJS</a>
            </div>
        </div>
    </nav>

    <div class="container-fluid">

      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist" style="margin-bottom: 20px;">
        <li role="presentation" <% if p_tab = 'c' then %>class="active"<% end if; %>>
            <a href="#home" aria-controls="id_tab_magic" role="tab" class="pogo-tab <% if p_tab = 'c' then %>  pogo-default-tab<% end if; %>" pogo-load="clients_tab">Clients</a>
        </li>
        <li role="presentation" <% if p_tab = 't' then %>class="active"<% end if; %>>
            <a href="#profile" aria-controls="id_tab_magic" role="tab" class="pogo-tab  <% if p_tab = 't' then %>  pogo-default-tab<% end if; %>" pogo-load="tasks_tab">Tasks
                  <span id="id_task_count" class="pogo-subscribe" pogo-streams="addTask" pogo-reload="task_count">
                    <%= psp_task_count('', CU) %>
                </span>
            </a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div id="id_tab_magic" class="tab-content" role="tabpanel"></div>

</div>
<form
    action="add_person_async"
    autocomplete="off"
    class="pogo-submit"
    novalidate
    >
    <fieldset>
        <legend>Add client</legend>
        <div class="form-group">
            <label for="first_name">First name:</label>
            <input class="form-control" id="first_name" name="first_name" type="text">
        </div>
        <div class="form-group">
            <label for="last_name">Last name:</label>
            <input class="form-control" id="last_name" name="last_name" type="text">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input class="form-control" id="email" name="email" type="email">
        </div>
    </fieldset>
    <button class="btn btn-primary"
        type="submit">
        Add
    </button>
</form>

</body>

<script src="assets/main.min.js"></script>

</html>


