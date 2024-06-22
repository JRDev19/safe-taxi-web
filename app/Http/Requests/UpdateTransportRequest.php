<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTransportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    public function attributes()
    {
        return [
            'model' => 'Modelo',
            'sub_model' => 'Sub_modelo',
            'car_plate' => 'Matrícula',
            'brand' => 'Marca',
            'sub_brand' => 'Sub_marca',
            'economic_number' => 'Número Economico',
            'is_actived' => 'Estado'
        ];
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'model' => 'required|string|max:255',
            'sub_model' => 'required|string|max:255',
            'car_plate' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'sub_brand' => 'required|string|max:255',
            'economic_number' => 'required|string|max:255',
            'is_actived' => 'required|boolean'
        ];
    }
}
