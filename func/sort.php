<?php
    function sortProject(array &$arr)
    {
        $CopieArr = $arr;
        $newArray = [];

        $toID = [
            "PRO" => 1,
            "PHARE" => 2,
            "PERSO" => 0,
        ];

        while(count($CopieArr) > 0)
        {
            $min = null;
            $minKey = null;
            foreach($CopieArr as $key => $val)
            {
                if(is_null($min))
                {
                     $min = $val;
                     $minKey = $key;
                }
                else if($toID[$min["categorie"]] < $toID[$val["categorie"]])
                {
                    $min = $val;
                    $minKey = $key;
                }
                else if($min["categorie"] == $val["categorie"])
                {
                    if($min["Annee"] < $val["Annee"])
                    {
                        $min = $val;
                        $minKey = $key;
                    }
                }
                   
            }
            unset($CopieArr[$minKey]);
            $newArray[$minKey] = $min;
        }

        $arr = $newArray;
    }
?>