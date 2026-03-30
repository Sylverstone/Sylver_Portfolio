<?php

namespace Class;

use Symfony\Component\Yaml\Yaml;
#[\Attribute]
class Route
{

    public string $path;

    /**@var string[] $methods*/
    public array $methods;

    public string $alias;

    /**
     * @param string $path
     * @param string[] $methods
     */
    function __construct(string $path, array $methods = ["GET"], string $alias = "")
    {
        $this->path = $path;
        $this->methods = $methods;

        if($alias == ""){
            $this->alias = $path;
        }
        else
        {
            $this->alias = $alias;
        }

        $origin_yaml = Yaml::parse(file_get_contents("./Config/alias.yml"));

        $val = [
            $this->alias => $path,
        ];

        $new_yaml = array_merge($origin_yaml,$val);

        $yaml = Yaml::dump($new_yaml);

        file_put_contents("./Config/alias.yml", $yaml);

    }
}