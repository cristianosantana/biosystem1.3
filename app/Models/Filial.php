<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Filial extends Model
{
    use Notifiable;
    use SoftDeletes;
    public $timestamps = true;

    protected $dates = ['deleted_at'];
    protected $table = 'filials';
    protected $fillable = ['razao_social', 'cnpj'];

    /**
     * retorna dados da tabela, com ou sem paramentros.
     * if verifica se existe paramentro de busca.
     */
    public function getResults($razao_social = null)
    {
        if(!$razao_social)
        {
            return $this->get();
        }
        else
        {
            return $this->where('razao_social', 'LIKE', "%{$razao_social}%")->get();
        }
    }

    /**
     * relacionamento N:M, pois uma filial vende muitos
     * materiais e um material é vendo por varias filias.
     */
}