OC.L10N.register(
    "richdocumentscode_arm64",
    {
    "Built-in CODE Server" : "Máy chủ CODE được tích hợp sẵn",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - Máy chủ CODE được tích hợp sẵn",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Máy chủ Collabora Online Development Edition (CODE) được tích hợp sẵn để thử nghiệm cục bộ và sử dụng cho mục đích phi sản xuất",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Collabora Online là bộ ứng dụng văn phòng trực tuyến dựa trên LibreOffice với khả năng cộng tác chỉnh sửa, hỗ trợ tất cả các tài liệu chính, định dạng tệp bảng tính và bản trình bày và hoạt động cùng với tất cả các trình duyệt hiện đại.\n\nỨng dụng này cung cấp một máy chủ tích hợp với tất cả các tính năng chỉnh sửa tài liệu của Collabora Online. Dễ dàng cài đặt, sử dụng cá nhân hoặc cho các nhóm nhỏ. Chậm hơn một chút so với máy chủ độc lập và không có các tính năng nâng cao về khả năng mở rộng..\n\nTải xuống khá lớn nên bạn có thể gặp phải tình trạng time-out khi sử dụng giao diện web. Bạn có thể sử dụng công cụ dòng lệnh OCC để cài đặt máy chủ tích hợp sẵn:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode_arm64\n```\nTrong đó `wwwrun` là người dùng máy chủ web của bạn.Đó  là `` www-data '' trên Debian, Ubuntu và các dẫn xuất, `wwwrun` trên các bản phân phối dựa trên SUSE,` apache` trên Red Hat / Fedora và `http` trên Arch linux và các dẫn xuất.\n\nCập nhật có thể được thực hiện như sau:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nTất nhiên, bạn có thể tăng mức sử dụng bộ nhớ và thời gian chờ PHP theo mặc định. ",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Hệ thống của bạn là ARM64, nhưng bạn đã cài đặt phiên bản x86_64 của ứng dụng. Vui lòng xóa nó và",
    "install the correct version from the Nextcloud App Store." : "cài đặt phiên bản chính xác từ vWorkspace App Store.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Hệ thống của bạn là x86_64, nhưng bạn đã cài đặt phiên bản ARM64 của ứng dụng. Vui lòng xóa nó và",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Bạn đã bật ứng dụng Collabora Online. Để biết thêm thông tin và cấu hình, vui lòng kiểm tra:",
    "Settings > Administration > Collabora Online" : "Cài đặt > Quản lí > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "Máy chủ CODE tích hợp sẵn được thiết kế để làm việc với ứng dụng Collabora Online thông thường.",
    "Install it from the Nextcloud App Store." : "Cài đặt ứng dụng từ vWorkspace App Store",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Đã xảy ra lỗi khi cố gắng kiểm tra cài đặt ứng dụng Collabora Online của bạn. Bạn có thể báo cáo lỗi này\n                với thẻ: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=1; plural=0;");