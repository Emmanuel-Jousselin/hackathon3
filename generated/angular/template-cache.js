angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/form.html",
    ""
  );

  $templateCache.put("anon/home.html",
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"app/css/style1.css\" media=\"all\" />\n" +
    "<div class=\"Spec-check\">\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "  <div class=\"col-xs-pull-6\">\n" +
    "    <div id=\"Htitle\">\n" +
    "      <h1>7 SINS</h1>\n" +
    "    </div>\n" +
    "    <div class=\"Hdescribe\">\n" +
    "      <p>Nous avons tous des petits défauts, des vices que l'on souhaite cacher...</p>\n" +
    "      <p>Aujourd'hui, on vous propose de les assumer pleinement!</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <p class=\"Hdescribe\">Et toi quel est ton vice?</p>\n" +
    "<!-- <div class=\"container-fluid home\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='avarice' value='Avarice'>\n" +
    "  Avarice\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='colère' value='Colère'>\n" +
    "  Colère\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='envie' value='Envie'>\n" +
    "  Envie\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='gourmandise' value='Gourmandise'>\n" +
    "  Gourmandise\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='luxure' value='Luxure'>\n" +
    "  Luxure\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='orgueil' value='Orgueil'>\n" +
    "  Orgueil\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-pull-2\">\n" +
    "      <label>\n" +
    "  <input type='checkbox' name='paresse' value='Paresse'>\n" +
    "  Paresse\n" +
    "  </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "<!-- </div>\n" +
    "  <button type=\"button\" ui-sref=\"anon.register\" class=\"btn btn-default\">\n" +
    "S'enregistrer\n" +
    "</button>\n" +
    "</center> -->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid users\">\n" +
    "  <h3 class=\"part_user\">Retrouvez nos chers romantiques en manque d'amour et qui assument pleinement leurs personnalités.</h3>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
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
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Connexion</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
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
    "      <h1 id=\"titre\"><span id=\"colortitle\">7</span> SINS</h1>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li>\n" +
    "          <li ui-sref-active=\"active\" class=\"connexup\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Connexion</a></li>\n" +
    "          <!-- <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Inscription</a></li> -->\n" +
    "          <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Tableau de bord</a></li>\n" +
    "          <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Déconnexion</a></li>\n" +
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

  $templateCache.put("user/avarice.html",
    ""
  );

  $templateCache.put("user/dashboard.html",
    "Tableau de bord pour : {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
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
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Deconnexion</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
