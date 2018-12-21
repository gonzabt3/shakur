<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventoResource extends JsonResource
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
            'temas'=>$this->temas,
            'fecha'=>$this->fecha,
            'materia_id'=>$this->materia_id,
            'user_id'=>$this->user_id
        ];
    }
}
