OC.L10N.register(
    "richdocumentscode_arm64",
    {
    "Built-in CODE Server" : "Servidor de CODI integrat",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - Servidor de CODI integrat",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Servidor integrat collabora Online Development Edition (CODE) per a proves locals i ús no producció",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Aquesta aplicació s'ha d'instal·lar i utilitzar juntament amb l'aplicació **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)**.\n\nCollabora Online és una potent suite d'oficina en línia basada en LibreOffice amb edició col·laborativa, que suporta tots els documents principals, full de càlcul i formats de fitxer de presentació i treballa juntament amb tots els navegadors moderns.\n\nAquesta aplicació proporciona un servidor integrat amb totes les característiques d'edició de documents de Collabora Online. Fàcil d'instal·lar, per a ús personal o per a equips petits. Una mica més lent que un servidor independent i sense les característiques avançades d'escalabilitat.\n\nLa descàrrega és bastant gran pel que és possible que experimenteu un temps d'espera quan s'utilitza la interfície web. Podeu utilitzar l'eina de línia d'ordres OCC per instal·lar el servidor integrat:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nOn `wwwrun` és l'usuari del seu servidor web. Es tracta de ```www-data``` a Debian, Ubuntu i derivats, `wwwrun` en distribucions basades en SUSE, `apache` a Red Hat/Fedora i `http` a Arch linux i derivats.\n\nLes actualitzacions es poden fer així:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nPer descomptat, alternativament, podeu augmentar l'ús de memòria i els temps d'temps d'accés PHP de manera predeterminada, vegeu la documentació de [Nextcloud.] (https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "El vostre sistema és ARM64, però heu instal·lat la versió x86_64 de l'aplicació. Suprimiu això i",
    "install the correct version from the Nextcloud App Store." : "instal·lar la versió correcta des del Magatzem d'Apps de Nextcloud.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "El sistema és x86_64, però heu instal·lat la versió ARM64 de l'aplicació. Suprimiu això i",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Tens l'aplicació Collabora Online habilitada. Per a més informació i configuració, consulteu:",
    "Settings > Administration > Collabora Online" : "Configuració > Administració > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "El servidor CODE integrat està dissenyat per treballar amb l'aplicació habitual de Collabora Online.",
    "Install it from the Nextcloud App Store." : "Instal·leu-lo des de l'App Store de Nextcloud.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "S'ha produït un error en intentar comprovar la instal·lació de l'aplicació Collabora Online. Podeu informar d'aquest error\n                amb l'etiqueta: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=2; plural=(n != 1);");