<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UserServiceTest extends TestCase
{
    use RefreshDatabase;

    public function testCheckAutor()
    {
        $user = factory(User::class)->make();
        $var = true;
        $this->assertSame($var,true);
    }
}
