<?php

namespace Class;

require_once 'vendor/autoload.php';

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class BaseController
{
    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    protected function render(string $view, array $params = []) : void
    {
        echo $this->twig->render($view, $params);
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    protected function renderError(\Exception $e) : void
    {
        http_response_code(500);

        error_log("Message:\n". $e->getMessage());
        error_log("Trace:\n". $e->getTraceAsString());

        echo $this->twig->render("pages/error/error.html.twig", [
            "message" => "Une erreur inconnue a eu lieu",
            "title" => "Erreur 500"
        ]);
    }
}