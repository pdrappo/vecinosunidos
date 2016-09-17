<?php

$container = $app->getContainer();

// lessql
$container['db'] = function ($c) {
    $settings = array(
            'host' => '',
            'user_db' => '',
            'pass_db' => '',
            'name_db' => ''
        );
    $pdo = new \PDO( 'mysql:host='.$settings['host'].';dbname='.$settings['name_db'], $settings['user_db'], $settings['pass_db']);
    $db = new \LessQL\Database( $pdo );
    return $db;
};