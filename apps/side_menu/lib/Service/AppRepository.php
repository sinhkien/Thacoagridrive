<?php

namespace OCA\SideMenu\Service;

use OC\User\User;
use OCP\INavigationManager;
use OCP\L10N\IFactory;

/**
 * class AppRepository.
 *
 * @author Simon Vieille <simon@deblan.fr>
 */
class AppRepository
{
    /**
     * @var \OC_App
     */
    protected $ocApp;

    /**
     * @var IFactory
     */
    protected $l10nFactory;

    /**
     * @var ConfigProxy
     */
    protected $config;

    /**
     * @var CategoryRepository
     */
    protected $categoryRepository;

    /**
     * @var INavigationManager
     */
    protected $navigationManager;

    public function __construct(
        \OC_App $ocApp,
        INavigationManager $navigationManager,
        IFactory $l10nFactory,
        ConfigProxy $config,
        CategoryRepository $categoryRepository
    ) {
        $this->ocApp = $ocApp;
        $this->l10nFactory = $l10nFactory;
        $this->config = $config;
        $this->navigationManager = $navigationManager;
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Retrieves visibles apps.
     *
     * @return array
     */
    public function getVisibleApps()
    {
        $navigation = $this->navigationManager->getAll();
        $appCategoriesCustom = $this->config->getAppValueArray('apps-categories-custom', '[]');
        $categories = $this->categoryRepository->getOrderedCategories();
        $apps = $this->ocApp->listAllApps();
        $visibleApps = [];

        foreach ($apps as $app) {
            $id = $app['id'];

            foreach ([$app['id'], $app['id'].'_index'] as $id) {
                if (isset($navigation[$id])) {
                    $app['name'] = $this->getAppName($app);
                    $app['href'] = $navigation[$id]['href'];
                    $app['icon'] = $navigation[$id]['icon'];

                    $visibleApps[$id] = $app;
                }
            }
        }

        foreach ($navigation as $app) {
            if ('external_index' === substr($app['id'], 0, 14)) {
                $visibleApps[$app['id']] = [
                    'id' => $app['id'],
                    'name' => $this->getAppName($app),
                    'href' => $app['href'],
                    'icon' => $app['icon'],
                    'category' => [
                        'external_links',
                    ],
                ];
            } elseif ('files' === $app['id']) {
                $visibleApps[$app['id']] = [
                    'id' => $app['id'],
                    'name' => $this->getAppName($app),
                    'href' => $app['href'],
                    'icon' => $app['icon'],
                    'category' => [],
                ];
            }
        }

        foreach ($visibleApps as $id => $app) {
            if (isset($appCategoriesCustom[$id], $categories[$appCategoriesCustom[$id]])) {
                $visibleApps[$id]['category'] = [$appCategoriesCustom[$id]];
            }
        }

        return $visibleApps;
    }

    public function getAppName($app)
    {
        return $this->config->getAppValue(
            'app.navigation.name',
            $this->l10nFactory->get($app['id'])->t($app['name']),
            $app['id']
        );
    }

    public function getOrderedApps(?User $user = null)
    {
        $apps = $this->getVisibleApps();
        $orders = $this->config->getAppValueArray('apps-order', '[]');

        if (null !== $user && !$this->config->getAppValueBool('force', '0')) {
            $userOrders = $this->config->getUserValueArray($user, 'apps-order', '[]');

            if (!empty($userOrders)) {
                $orders = $userOrders;
            }
        }

        usort($apps, function ($a, $b) use ($orders) {
            $ak = array_keys($orders, $a['id'])[0] ?? null;
            $bk = array_keys($orders, $b['id'])[0] ?? null;

            if (null === $ak || null === $bk) {
                return ($a['name'] < $b['name']) ? -1 : 1;
            }

            return $ak < $bk ? -1 : 1;
        });

        return $apps;
    }
}
