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

    var sourceMain = $("#todo_template").html();
    var templateMain = Handlebars.compile(sourceMain);

    for (var i = 0; i < toDoList.length; i++) {

      var contextMain = toDoList[i];
      var html = templateMain(toDoList[i]);
      $("main #todo_list").append(html);

    }
    // MAIN-------------------------------------------------


  }
);
