<?php

namespace App\Support;

class Greeting
{
    public static function hello(string $name): string
    {
        return 'Hello, '.$name;
    }
}
