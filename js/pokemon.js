$(document).ready(function() {


    var pokemons = '';
    for (var i = 1; i <= 151; i++) {
        card = " <div class='card mt-2 m-2' style='width: 10rem;'>"
        card += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' class='card-img-top' >"
        card += "<div class='card-body'>"
        card += "  <a  id='" + i + "' class='btn btn-primary'>Ver</a>"
        card += "   </div>"
        card += "</div>";

        pokemons += card;
    }
    $('#pokemon').html(pokemons);

    $('.btn').click(function() {
        //alert(this.id);
        $.get("https://pokeapi.co/api/v2/pokemon/" + this.id + "/", function(res) {
            console.log(res);

            var tipos = "";
            for (let i = 0; i < res.types.length; i++) {

                var tipostabla = "<tr><td>" + res.types[i].type.name + "</td></tr>"
                tipos += tipostabla;

            }

            $('#bodytipos').html(tipos);
            $('#lblpeso').text("Peso: " + res.weight);
            $('#lblaltura').text("  Altura: " + res.height);

            $('#exampleModalLabel').text(res.name);
            $('#exampleModal').modal('show');

        }, "json");
    })




});