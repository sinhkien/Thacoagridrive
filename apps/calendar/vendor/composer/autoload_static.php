<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitCalendar
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Calendar\\' => 13,
        ),
        'B' => 
        array (
            'Bamarni\\Composer\\Bin\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Calendar\\' => 
        array (
            0 => __DIR__ . '/../..' . '/lib',
        ),
        'Bamarni\\Composer\\Bin\\' => 
        array (
            0 => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src',
        ),
    );

    public static $classMap = array (
        'Bamarni\\Composer\\Bin\\ApplicationFactory\\FreshInstanceApplicationFactory' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/ApplicationFactory/FreshInstanceApplicationFactory.php',
        'Bamarni\\Composer\\Bin\\ApplicationFactory\\NamespaceApplicationFactory' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/ApplicationFactory/NamespaceApplicationFactory.php',
        'Bamarni\\Composer\\Bin\\BamarniBinPlugin' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/BamarniBinPlugin.php',
        'Bamarni\\Composer\\Bin\\CommandProvider' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/CommandProvider.php',
        'Bamarni\\Composer\\Bin\\Command\\BinCommand' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Command/BinCommand.php',
        'Bamarni\\Composer\\Bin\\Command\\CouldNotCreateNamespaceDir' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Command/CouldNotCreateNamespaceDir.php',
        'Bamarni\\Composer\\Bin\\Config\\Config' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Config/Config.php',
        'Bamarni\\Composer\\Bin\\Config\\ConfigFactory' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Config/ConfigFactory.php',
        'Bamarni\\Composer\\Bin\\Config\\InvalidBamarniComposerExtraConfig' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Config/InvalidBamarniComposerExtraConfig.php',
        'Bamarni\\Composer\\Bin\\Input\\BinInputFactory' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Input/BinInputFactory.php',
        'Bamarni\\Composer\\Bin\\Input\\InvalidBinInput' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Input/InvalidBinInput.php',
        'Bamarni\\Composer\\Bin\\Logger' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/Logger.php',
        'Bamarni\\Composer\\Bin\\PublicIO' => __DIR__ . '/..' . '/bamarni/composer-bin-plugin/src/PublicIO.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Calendar\\AppInfo\\Application' => __DIR__ . '/../..' . '/lib/AppInfo/Application.php',
        'OCA\\Calendar\\BackgroundJob\\CleanUpOutdatedBookingsJob' => __DIR__ . '/../..' . '/lib/BackgroundJob/CleanUpOutdatedBookingsJob.php',
        'OCA\\Calendar\\Controller\\AppointmentConfigController' => __DIR__ . '/../..' . '/lib/Controller/AppointmentConfigController.php',
        'OCA\\Calendar\\Controller\\AppointmentController' => __DIR__ . '/../..' . '/lib/Controller/AppointmentController.php',
        'OCA\\Calendar\\Controller\\BookingController' => __DIR__ . '/../..' . '/lib/Controller/BookingController.php',
        'OCA\\Calendar\\Controller\\ContactController' => __DIR__ . '/../..' . '/lib/Controller/ContactController.php',
        'OCA\\Calendar\\Controller\\EmailController' => __DIR__ . '/../..' . '/lib/Controller/EmailController.php',
        'OCA\\Calendar\\Controller\\PublicViewController' => __DIR__ . '/../..' . '/lib/Controller/PublicViewController.php',
        'OCA\\Calendar\\Controller\\SettingsController' => __DIR__ . '/../..' . '/lib/Controller/SettingsController.php',
        'OCA\\Calendar\\Controller\\ViewController' => __DIR__ . '/../..' . '/lib/Controller/ViewController.php',
        'OCA\\Calendar\\Dashboard\\CalendarWidget' => __DIR__ . '/../..' . '/lib/Dashboard/CalendarWidget.php',
        'OCA\\Calendar\\Dashboard\\CalendarWidgetV2' => __DIR__ . '/../..' . '/lib/Dashboard/CalendarWidgetV2.php',
        'OCA\\Calendar\\Db\\AppointmentConfig' => __DIR__ . '/../..' . '/lib/Db/AppointmentConfig.php',
        'OCA\\Calendar\\Db\\AppointmentConfigMapper' => __DIR__ . '/../..' . '/lib/Db/AppointmentConfigMapper.php',
        'OCA\\Calendar\\Db\\Booking' => __DIR__ . '/../..' . '/lib/Db/Booking.php',
        'OCA\\Calendar\\Db\\BookingMapper' => __DIR__ . '/../..' . '/lib/Db/BookingMapper.php',
        'OCA\\Calendar\\Events\\BeforeAppointmentBookedEvent' => __DIR__ . '/../..' . '/lib/Events/BeforeAppointmentBookedEvent.php',
        'OCA\\Calendar\\Exception\\ClientException' => __DIR__ . '/../..' . '/lib/Exception/ClientException.php',
        'OCA\\Calendar\\Exception\\NoSlotFoundException' => __DIR__ . '/../..' . '/lib/Exception/NoSlotFoundException.php',
        'OCA\\Calendar\\Exception\\ServiceException' => __DIR__ . '/../..' . '/lib/Exception/ServiceException.php',
        'OCA\\Calendar\\Http\\JsonResponse' => __DIR__ . '/../..' . '/lib/Http/JsonResponse.php',
        'OCA\\Calendar\\Listener\\AppointmentBookedListener' => __DIR__ . '/../..' . '/lib/Listener/AppointmentBookedListener.php',
        'OCA\\Calendar\\Listener\\UserDeletedListener' => __DIR__ . '/../..' . '/lib/Listener/UserDeletedListener.php',
        'OCA\\Calendar\\Migration\\Version2040Date20210908101001' => __DIR__ . '/../..' . '/lib/Migration/Version2040Date20210908101001.php',
        'OCA\\Calendar\\Migration\\Version3000Date20211109132439' => __DIR__ . '/../..' . '/lib/Migration/Version3000Date20211109132439.php',
        'OCA\\Calendar\\Migration\\Version3010Date20220111090252' => __DIR__ . '/../..' . '/lib/Migration/Version3010Date20220111090252.php',
        'OCA\\Calendar\\Migration\\Version4050Date20230614163505' => __DIR__ . '/../..' . '/lib/Migration/Version4050Date20230614163505.php',
        'OCA\\Calendar\\Notification\\Notifier' => __DIR__ . '/../..' . '/lib/Notification/Notifier.php',
        'OCA\\Calendar\\Profile\\AppointmentsAction' => __DIR__ . '/../..' . '/lib/Profile/AppointmentsAction.php',
        'OCA\\Calendar\\Service\\Appointments\\AppointmentConfigService' => __DIR__ . '/../..' . '/lib/Service/Appointments/AppointmentConfigService.php',
        'OCA\\Calendar\\Service\\Appointments\\AvailabilityGenerator' => __DIR__ . '/../..' . '/lib/Service/Appointments/AvailabilityGenerator.php',
        'OCA\\Calendar\\Service\\Appointments\\BookingCalendarWriter' => __DIR__ . '/../..' . '/lib/Service/Appointments/BookingCalendarWriter.php',
        'OCA\\Calendar\\Service\\Appointments\\BookingService' => __DIR__ . '/../..' . '/lib/Service/Appointments/BookingService.php',
        'OCA\\Calendar\\Service\\Appointments\\DailyLimitFilter' => __DIR__ . '/../..' . '/lib/Service/Appointments/DailyLimitFilter.php',
        'OCA\\Calendar\\Service\\Appointments\\EventConflictFilter' => __DIR__ . '/../..' . '/lib/Service/Appointments/EventConflictFilter.php',
        'OCA\\Calendar\\Service\\Appointments\\Interval' => __DIR__ . '/../..' . '/lib/Service/Appointments/Interval.php',
        'OCA\\Calendar\\Service\\Appointments\\MailService' => __DIR__ . '/../..' . '/lib/Service/Appointments/MailService.php',
        'OCA\\Calendar\\Service\\Appointments\\SlotExtrapolator' => __DIR__ . '/../..' . '/lib/Service/Appointments/SlotExtrapolator.php',
        'OCA\\Calendar\\Service\\CategoriesService' => __DIR__ . '/../..' . '/lib/Service/CategoriesService.php',
        'OCA\\Calendar\\Service\\JSDataService' => __DIR__ . '/../..' . '/lib/Service/JSDataService.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitCalendar::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitCalendar::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitCalendar::$classMap;

        }, null, ClassLoader::class);
    }
}
