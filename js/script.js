$(document).ready(
  function() {

    // HEADER-----------------------------------------------
    var userName = prompt("Inserisci il tuo NOME!");
    userName = userName.toUpperCase();

    var sourceHeader = $("#entry-template").html();
    var templateHeader = Handlebars.compile(sourceHeader);

    var contextHeader = {
      title: "Ciao " +  userName + "!",
      body: "Questo è il mio esempio di post creato con un template Handlebars!"
    };

    var html = templateHeader(contextHeader);
    // console.log(html);

    $("header").append(html);
    // HEADER-----------------------------------------------

    // MAIN-------------------------------------------------
    var toDoList = [
      {
        todoContent: "Fare la spesa"
      },
      {
        todoContent: "Pagare le bollette"
      },
      {
        todoContent: "Pagare l'affitto"
      },
      {
        todoContent: "Lavarmi"
      },
      {
        todoContent: "Preparare la cena"
      },
    ];

    // evento al click delete
    $(document).on("click", "i.fa-trash-alt",
      function() {
        $(this).parents("li").remove();
      }
    );


    // scrivo in pagina la mia lista di oggetti
    var sourceMain = $("#todo_template").html();
    var templateMain = Handlebars.compile(sourceMain);

    for (var i = 0; i < toDoList.length; i++) {

      var contextMain = toDoList[i];
      var html = templateMain(toDoList[i]);
      $("main #todo_list").append(html);

    }

    // evento al click del bottone
    var oggettoCreatoUtente = {};

    $(".todo_input > button").click(
      function() {

        var inputValue = capitalizerFirstLetter($("input").val());
        oggettoCreatoUtente.todoContent = inputValue;
        var html = templateMain(oggettoCreatoUtente);
        $("#todo_list").append(html);
        inputValue = $("input").val("");
      }
    );
    // MAIN-------------------------------------------------


  }
);

// FUNZIONI-------------------------------------------------
function capitalizerFirstLetter(word) {
  var lowercaseWord = word.toLowerCase();
  var upperCaseFirstLetter = lowercaseWord[0].toUpperCase();
  var tinyRest = lowercaseWord.slice(1);
  return upperCaseFirstLetter + tinyRest;
}
