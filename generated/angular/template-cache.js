angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/form.html",
    ""
  );

  $templateCache.put("anon/home.html",
    "<div class=\"row fondec\">\n" +
    "\n" +
    "  <div class=\"col-xs-pull-6\">\n" +
    "    <div id=\"Htitle\">\n" +
    "      <h1><span class=\"colortitle\">7</span> SINS</h1>\n" +
    "    </div>\n" +
    "    <div class=\"Hdescribe\">\n" +
    "      <p class=\"shadow\">Nous avons tous des petits défauts, des vices que l'on souhaite cacher...</p>\n" +
    "      <p class=\"shadow\">Aujourd'hui, on vous propose de les assumer pleinement!</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <p class=\"Hdescribe\">Et toi quel est ton vice?</p>\n" +
    "\n" +
    "<div class=\"container panel Sized\" ng-hide=\"auth.isAuthenticated()\">\n" +
    "  <form id=\"my-div\" ng-submit=\"register()\" methode=\"POST\" class=\"form-horizontal form-hide\">\n" +
    "    <fieldset>\n" +
    "\n" +
    "      <legend>Complétez les informations</legend>\n" +
    "      <div class=\"form-group form-group-sm\">\n" +
    "        <label> tu es\n" +
    "                <select class=\"form-control\" ng-model=\"user.genre\">\n" +
    "  <option>Un homme</option>\n" +
    "  <option>Une femme</option>\n" +
    "</select>\n" +
    "<label for=\"usr\">Name:</label>\n" +
    "                <select class=\"form-control\" ng-model=\"user.search\">\n" +
    "  <option>Un homme</option>\n" +
    "  <option>Une femme</option>\n" +
    "</select>\n" +
    "          <label> Ton vice </label>\n" +
    "        <select class=\"form-control\" ng-model=\"user.vice\">\n" +
    "  <option>L'orgueil</option>\n" +
    "  <option>L'avarice</option>\n" +
    "  <option>L'envie</option>\n" +
    "  <option>La colère</option>\n" +
    "  <option>La luxure</option>\n" +
    "  <option>La paresse</option>\n" +
    "  <option>La gourmandise</option>\n" +
    "</select> <br>\n" +
    "        <!-- Text input http://getbootstrap.com/css/#forms -->\n" +
    "        <div class=\"form-group form-group-sm\">\n" +
    "          <label for=\"textinput\" class=\"control-label col-sm-2\">Age</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input class=\"form-control\" id=\"textinput\" ng-model=\"user.age\" placeholder=\"Age\" type=\"number\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!-- Text input http://getbootstrap.com/css/#forms -->\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"textinput\" class=\"control-label col-sm-2\">Pseudo</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input class=\"form-control\" id=\"textinput\" ng-model=\"user.pseudo\" placeholder=\"Votre pseudo\" type=\"text\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!-- Text input http://getbootstrap.com/css/#forms -->\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"textinput\" class=\"control-label col-sm-2\">Email</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input class=\"form-control\" id=\"textinput\" ng-model=\"user.email\" placeholder=\"Email\" type=\"text\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"textinput\" class=\"control-label col-sm-2\">mot de passe</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input class=\"form-control\" id=\"textinput\" ng-model=\"user.password\" placeholder=\"mot de passe\" type=\"text\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <button type=\"submit\" ng-hide=\"auth.isAuthenticated()\" class=\"btn btn-danger\">Valider</button>\n" +
    "    </fieldset>\n" +
    "  </form>\n" +
    "\n" +
    "  </div>\n" +
    "  <script type=\"text/javascript\">\n" +
    "  $(function(){\n" +
    "$('.panel').hover(function(){\n" +
    "  $(this).find('.panel-footer').slideDown(250);\n" +
    "},function(){\n" +
    "  $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)\n" +
    "});\n" +
    "});\n" +
    "  </script>\n" +
    "\n" +
    "  <div class=\"container-fluid users\">\n" +
    "    <h3 class=\"part_user\">Retrouvez nos chers romantiques en manque d'amour et qui assument pleinement leurs personnalités.</h3>\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <span><img class=\"photos\" src=\"img/DID3494.jpg\" alt=\"profil\"> </span>\n" +
    "                </div>\n" +
    "                <div class=\"panel-footer\"><span ng-model=\"user.pseudo\"></span><br>\n" +
    "                  <span ng-model=\"user.age\"></span><br>\n" +
    "                  <span ng-model=\"user.vice\"></span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row login\">\n" +
    "    <div class=\"col-xs-4 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Adresse Email\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-danger btn-block\">Connexion</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse opac\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"btn btn-alert\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\"><img class=\"logotype\" src=\"img/small-2132091620122111225.png\" alt=\"logo\"></a></li>\n" +
    "      </ul>\n" +
    "      <h1 id=\"titre\"><span class=\"colortitle\">7</span> SINS</h1>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li>\n" +
    "          <li ui-sref-active=\"active\" class=\"connexup\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Connexion</a></li>\n" +
    "          <!-- <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Inscription</a></li> -->\n" +
    "          <li ui-sref-active=\"active\" id=\"prof\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profil</a></li>\n" +
    "          <li class=\"connexup decale\"><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Déconnexion</a></li>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Adresse Email\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Mot de Passe\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">S'enregistrer</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/chat.html",
    "<h1>Chat</h1>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div ng-repeat=\"msg in msgs | orderBy:createdAt\">\n" +
    "    <label>{{ msg.author.pseudo }}</label>\n" +
    "    <span>{{msg.createdAt  | date:\"MM/dd/yyyy 'à' H:mm\"}}</span>\n" +
    "    <div marked=\"msg.content\"></div>\n" +
    "    <a ng-click=\"likeMsg(msg._id, $index)\">J'aime</a>\n" +
    "    <span>{{ msg.liked.length}}</span>\n" +
    "  </div>\n" +
    "  <form ng-submit=\"sendMsg()\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label>Your message</label>\n" +
    "      <textarea class=\"form-control\" rows=\"3\" ng-model=\"newMsg\"></textarea>\n" +
    "      <input type=\"submit\" class=\"btn btn-default\">\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div marked=\"newMsg\"></div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Tableau de bord pour : {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-inverse opac\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"btn btn-alert\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <!-- <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li> -->\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <h1 id=\"titre\"><span class=\"colortitle\">7</span> SINS</h1>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li >\n" +
    "                <li ui-sref-active=\"active\" id=\"remonte\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li class=\"connexup decale\"><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Deconnexion</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1 class=\"profiltitle\"><span class=\"colortitle\">P</span>age de Profil</h1>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <input type=\"file\" onchange=\"previewFile()\"><br>\n" +
    "    <img id=\"profiletof\" src=\"img/DID3629.jpg\" height=\"300\" alt=\"Image preview...\">  </div>\n" +
    "    <script>\n" +
    "   function previewFile(){\n" +
    "       var preview = document.querySelector('img'); //selects the query named img\n" +
    "       var file    = document.querySelector('input[type=file]').files[0]; //sames as here\n" +
    "       var reader  = new FileReader();\n" +
    "\n" +
    "       reader.onloadend = function () {\n" +
    "           preview.src = reader.result;\n" +
    "       }\n" +
    "\n" +
    "       if (file) {\n" +
    "           reader.readAsDataURL(file); //reads the data as a URL\n" +
    "       } else {\n" +
    "           preview.src = \"\";\n" +
    "       }\n" +
    "  }\n" +
    "\n" +
    "  previewFile();  //calls the function named previewFile()\n" +
    "  </script>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Tu es</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.genre\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Recherchant</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.search\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Ton age</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.age\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Ton pseudo</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.pseudo\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Ton mail</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.email\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "  <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\" id=\"basic-addon1\">Ton vice</span>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.vice\" aria-describedby=\"basic-addon1\">\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
