<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class UserResource {
    public function update(int $id,array $request){
        $user = User::find($id);
        
        return $user->update($request);
    }
}
