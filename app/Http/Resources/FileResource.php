<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id'=>$this->id,
            'nombre'=>$this->nombre,
            'path'=>$this->path,
            'materia_id'=>$this->materia_id,
            'user_id'=>$this->user_id
        ];
    }
}
