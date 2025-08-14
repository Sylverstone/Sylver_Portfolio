<?php
    if (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) {
        define("BASE_URL", "/RemakePortfolio");
    } else {
        define("BASE_URL", "");
    }
?>