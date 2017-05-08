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

</style>
</head>

<body>

<div id="id_mc_face"></div>

<button
  class="pogo-route"
  data-pogo-target-container="id_mc_face"
  data-pogo-target-url="my_content"
  data-pogo-params='{}'
  type="button">
  Load
</button>



<form>
  <label for="filter_people">Filter:</label>
  <input
    id="filter_people"
    class="pogo-filter"
    type="text" 
    data-pogo-target-container="id_team_table"
    data-pogo-target-url="team_table"
    data-pogo-params='{}'
    autofocus>
</form>

<div id="id_team_table">
  <%= psp_team_table('', CU) %>
</div>


</body>

<script src="assets/main.min.js"></script>

</html>


