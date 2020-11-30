$(document).ready(
  function() {

    var userName = prompt("Inserisci il tuo NOME!");
    userName = userName.toUpperCase();

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var context = {
      title: "Ciao " +  userName + "!",
      body: "Questo è il mio esempio di post creato con un template Handlebars!"
    };

    var html = template(context);
    console.log(html);

    $("header").append(html);

  }
);
