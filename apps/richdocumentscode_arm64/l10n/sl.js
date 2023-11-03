OC.L10N.register(
    "richdocumentscode_arm64",
    {
    "Built-in CODE Server" : "Vgrajen strežnik CODE",
    "Collabora Online - Built-in CODE Server" : "Collabora Online – Vgrajen strežnik CODE",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Vgrajen strežnik CODE (Collabora Online Development Edition) za krajevno preizkušanje in neprodukcijsko uporabo",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Ta program mora biti nameščen skupaj s programom **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)**.\n\nCollabora Online je zmogljiv spletni pisarniški paket, ki je zasnovan na osnovi programa LibreOffice in omogoča skupinsko urejanje, omogoča podporo za številne zapise dokumentov, preglednic in predstavitev ter deluje v vseh sodobnih brskalnikih.\n\nTa program zagotavlja strežniški del pisarniškega pakete z vsemi funkcijami urejanja dokumentov programa Collabora Online. Enostavna namestitev je primerna za osebno uporabo ali za manjše skupine. Deluje nekoliko počasneje kot samostojni strežnik a je podpira nekaterih naprednih funkcij razširljivosti.\n\nVelikost datoteke za prenos je obsežna, zato se lahko zgodi, da se pri uporabi spletnega vmesnika pojavil časovni zastoj. Za namestitev vgrajenega strežnika lahko uporabite orodje ukazne vrstice OCC:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nPri čemer je `wwwrun` uporabnik vašega spletnega strežnika. To je ```www-data``` v Debian, Ubuntu in izpeljankah, `wwwrun`` v distribucijah, ki temeljijo na SUSE, `apache` v Red Hat/Fedora in `http` v Arch linuxu in izpeljankah.\n\nPosodobitve lahko izvedete na naslednji način:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nSeveda lahko privzeto povečate porabo pomnilnika in časovne omejitve PHP, za več podrobnosti si poglejte [dokumentacijo Nextcloud] (https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=phpmeout#configuring-your-web-server).",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Uporabljate sistem ARM64, nameščena pa je različica programa x86_64. Odstranite to in",
    "install the correct version from the Nextcloud App Store." : "namestite ustrezno različico iz programske trgovine Nextcloud.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Uporabljate sistem x86_64, nameščena pa je različica programa ARM64. Odstranite to in",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Program Collabora Online je omogočen. Za nadaljnje podrobnosti in nastavitve preverite:",
    "Settings > Administration > Collabora Online" : "Nastavitve > Skrbništvo > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "Vgrajen strežnik CODE je zasnovan za delo z uradnim programom Collabora Online.",
    "Install it from the Nextcloud App Store." : "Namestite program iz trgovine Nextcloud.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Prišlo je do napake med preverjanjem namestitve Collabora Online. Napako sporočite z navedbo\n                oznake: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");