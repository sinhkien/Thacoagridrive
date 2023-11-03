OC.L10N.register(
    "richdocumentscode_arm64",
    {
    "Built-in CODE Server" : "Serveur CODE intégré",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - Serveur CODE intégré",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Version intégrée du serveur Collabora Online Development Edition (CODE) pour les tests locaux et une utilisation hors production.",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Cette application doit être installée et utilisée conjointement avec l'application **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)**\nCollabora Online est une suite bureautique en ligne performante, basée sur LibreOffice, qui prend en charge tous les principaux formats de documents, de feuilles de calcul et de présentations.\nCette application fournit un serveur intégré disposant de toutes les fonctionnalités d'édition de document de Collabora Online. Simple à installer, pour une utilisation personnelle ou pour de petites équipes de travail. Un peu plus lent qu'un serveur autonome et dépourvu de fonctions avancées de scalabilité.\nLe téléchargement étant assez conséquent, donc il est possible que vous expérimentiez une déconnexion (timeout) en utilisant l'interface web. Vous pouvez utiliser l'interface de ligne de commande OCC pour installer le serveur:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\n`wwwrun` correspond à l'utilisateur de votre serveur web. Il s'agit de ```www-data``` sur Debian, Ubuntu et ses dérivés, `wwwrun` sur les distributions basées sur SUSE , `apache` sur Red Hat/Fedora et `http` sur Arch linux et ses dérivés.\n\nLes mises à jour peuvent être effectuées ainsi :\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nBien sûr, vous pouvez également augmenter l'utilisation mémoire et le temps de déconnexion par défaut de PHP, voir la [documentation Nextcloud en anglais] (https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Votre système est ARM64, mais vous avez installé la version x86_64 de cette application. Veuillez la supprimer et",
    "install the correct version from the Nextcloud App Store." : "Installez la bonne version depuis le magasin d'applications Nextcloud.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Votre système est x86_64, mais vous avez installé la version ARM64 de cette application. Veuillez la supprimer et",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Vous avez l'application Collabora Online activée. Pour plus d'informations et pour la configuration, veuillez visiter :",
    "Settings > Administration > Collabora Online" : "Paramètres > Administration > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "Le serveur CODE intégré est conçu pour fonctionner avec l'application Collabora Online habituelle.",
    "Install it from the Nextcloud App Store." : "L'installer depuis le magasin d'applications Nextcloud.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Une erreur est survenue en essayant de vérifier l'installation de l'application Collabora Online. Vous pouvez signaler cette erreur\n  avec le tag: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
