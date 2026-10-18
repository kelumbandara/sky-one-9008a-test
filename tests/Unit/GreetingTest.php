<?php

use App\Support\Greeting;

it('greets', fn () => expect(Greeting::hello('Sky'))->toBe('Hello, Sky'));
