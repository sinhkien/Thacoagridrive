OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "CODE zerbitzari integratua",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - CODE zerbitzari integratua",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Collabora Online Development Edition (CODE) zerbitzari integratua, tokiko probetarako eta ekoizpenik gabeko erabilerarako",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Aplikazio hau ** [Collabora Online] (https://apps.nextcloud.com/apps/richdocuments) ** aplikazioarekin batera instalatu eta erabili behar da.\n\nCollabora Online LibreOffice-n oinarritutako lineako bulegoko suite indartsua da, lankidetzako edizioarekin. Dokumentu, kalkulu orri eta aurkezpen fitxategi formatu nagusiak onartzen ditu eta arakatzaile moderno guztiekin batera funtzionatzen du.\n\nAplikazio honek zerbitzari integratua eskaintzen du Collabora Online dokumentuak editatzeko eginbide guztiekin. Instalatzeko erraza, erabilera pertsonalerako edo talde txikientzat. Zerbitzari autonomoa baino pixka bat motelagoa da eta eskalagarritasun ezaugarri aurreraturik gabekoa.\n\nDeskarga nahiko handia da, beraz, baliteke web-interfazea erabiltzean denbora ematea. OCC komando lerroaren tresna erabil dezakezu zerbitzari integratua instalatzeko:\n\n...\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n...\nNon `wwwrun` zure web zerbitzariaren erabiltzailea den. Hau da \"www-data\" Debian, Ubuntu eta deribatuetan, \"wwwrun\" SUSEn oinarritutako banaketetan, \"apache\" Red Hat / Fedora-n eta \"http\" Arch linux eta deribatuetan.\n\nEguneratzeak honela egin daitezke:\n...\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nJakina, bestela memoriaren erabilera eta PHP denbora-mugak handitu ditzakezu modu lehenetsian, ikusi [Nextcloud dokumentazioa.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Zure sistema ARM64 da, baina aplikazioaren x86_64 bertsioa instalatu duzu. Kendu hau eta",
    "install the correct version from the Nextcloud App Store." : "Instalatu bertsio zuzena Nextclouden Aplikazioen Biltegitik.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Zure sistema x86_64 da, baina aplikazioaren ARM64 bertsioa instalatu duzu. Kendu hau eta",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Collabora Online aplikazioa gaituta duzu. Informazio eta konfigurazio gehiagorako, egiaztatu:",
    "Settings > Administration > Collabora Online" : "Ezarpenak> Administrazioa> Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "CODE zerbitzari integratua Collabora Lineako ohiko aplikazioarekin lan egiteko diseinatuta dago.",
    "Install it from the Nextcloud App Store." : "Instalatu Nextclouden Aplikazioen Biltegitik.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Errore bat gertatu da Collabora Online aplikazioaren instalazioa egiaztatzen saiatzean. Akats honen berri eman dezakezu\n                      etiketa honekin: <em>richdocuments- EnabledCheckFailed</em>"
},
"nplurals=2; plural=(n != 1);");
