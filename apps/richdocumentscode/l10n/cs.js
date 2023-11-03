OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "Vestavěný CODE server",
    "Collabora Online - Built-in CODE Server" : "Collabora Online – vestavěný CODE server",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Vestavěný server Collabora Online Development Edition (CODE) pro místní zkoušení a neprodukční použití",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Tato aplikace musí být instalována a používána společně s aplikací **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** .\n\nCollabora Online je užitečný online kancelářský balík založený na LibreOffice s možností společného editování, který podporuje všechny nejdůležitější formáty textových souborů, prezentací a tabulek a funguje ve všech nejpoužívanějších prohlížečích.\n\nTato aplikace poskytuje vestavěný server se všemi funkcemi pro úpravu dokumentů pro Collabora Online. Jednoduchá instalace, pro soukromé použití i pro malé týmy spolupracovníků. Jen o trochu pomalejší. než samostatný server a nepodporuje pokročilé možností pro další rozšíření.\n\nStahuje se velké množství dat, takže je možné, že při instalaci přes webové rozhraní dojde k vypršení časového limitu. Pro instalaci vestavěného serveru, můžete použít OCC příkaz v terminálu:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nKde `wwwrun` je uživatel vašeho webového serveru. To znamená ```www-data``` v Debianu, Ubuntu a jejich derivátech, `wwwrun` na SUSE založených distribucích, `apache` v Red Hat/Fedora a `http` na Arch linuxu a jeho derivátech.\n\nAktualizace můžete provéct takto:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nSamozřejmě, můžete zvýšit limit pro využití paměti a časové limity PHP než ty, které se používají v základním nastavení, viz [Nextcloud dokumentace.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Váš systém má architekturu ARM64, ale nainstalovali jste x86_64 variantu aplikace. Odeberte ji a",
    "install the correct version from the Nextcloud App Store." : "nainstalujte správnou variantu z katalogu Nextcloud aplikací.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Váš systém má architekturu x86_64, ale nainstalovali jste ARM64 variantu aplikace. Odeberte ji a",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Zapnuli jste aplikaci Collabora Online. Další informace a to, jak nastavit jsou k dispozici na:",
    "Settings > Administration > Collabora Online" : "Nastaveni > Správa > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "Vestavěný CODE server je navržen pro fungování s obvyklou aplikací Collabora Online.",
    "Install it from the Nextcloud App Store." : "Nainstalujte ji z Nextcloud katalogu aplikací.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Došlo k chybě při pokusu o zkontrolování instalace Collabora Online. Při hlášení chyby použijte štítek: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
