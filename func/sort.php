<?php
    function sortProject(array &$arr)
    {
        $CopieArr = $arr;
        $newArray = [];

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
                else if($min["categorie"] < $val["categorie"])
                {
                    $min = $val;
                    $minKey = $key;
                }
                else if($min["categorie"] == $val["categorie"])
                {
                    if($min["Date"] < $val["Date"])
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