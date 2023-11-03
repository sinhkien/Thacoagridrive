OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "Servidor de CODE integrado",
    "Collabora Online - Built-in CODE Server" : "Servidor integrado de Collabora Online",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Servidor de Collabora Online Development Edition (CODE) integrado para probas locais e uso sen produción",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Esta aplicación ten que instalarse e usarse xunto coa aplicación **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)**.\n\nCollabora Online é unha potente suite ofimática en liña baseada en LibreOffice con edición colaborativa, que admite todos os principais formatos de documentos, follas de cálculo e ficheiros de presentación e funciona xunto con todos os navegadores modernos.\n\nEsta aplicación ofrece un servidor integrado con todas as funcións de edición de documentos de Collabora Online. Doada de instalar, para uso persoal ou para equipos pequenos. Un pouco máis lento que un servidor autónomo e sen as funcións avanzadas de escalabilidade.\n\nA descarga é bastante grande polo que é posíbel que experimente un tempo de espera ao usar a interface web. Pode usar a ferramenta de liña de ordes OCC para instalar o servidor incorporado:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nOnde «wwwrun» é o usuario do seu servidor web. Trátase de «www-data» en Debian, Ubuntu e derivados, «wwwrun» en distribucións baseadas en SUSE, «apache» en Red Hat / Fedora e «http» en Arch linux e derivados.\n\nAs actualizacións pódense facer así:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nPor suposto, tamén pode aumentar o uso de memoria e os tempos de espera PHP predeterminados, consulte a [documentación de Nextcloud.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "O seu sistema é ARM64, pero instalou a versión x86_64 da aplicación. retire isto e",
    "install the correct version from the Nextcloud App Store." : "instale a versión correcta dende a tenda de aplicacións de Nextcloud.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "O seu sistema é x86_64, pero instalou a versión ARM64 da aplicación. Retire isto isto e",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Ten a aplicación Collabora Online activada. Para obter máis información e configuración, consulte:",
    "Settings > Administration > Collabora Online" : "Axustes > Administración > Colabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "O servidor CODE integrado está deseñado para funcionar coa habitual aplicación Collabora Online.",
    "Install it from the Nextcloud App Store." : "Instalalo dende a tenda de aplicacións de Nextcloud.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Produciuse un erro ao tentar comprobar a instalación da aplicación Collabora Online. Pode informar deste erro\n                coa etiqueta: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=2; plural=(n != 1);");