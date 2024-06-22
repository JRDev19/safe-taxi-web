<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAssignmentRequest extends FormRequest
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
            'id_driver' => 'Id Taxista',
            'id_transport' => 'Id Transporte',
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
            'id_driver' => 'required|exists:drivers,id',
            'id_transport' => 'required|exists:transports,id',
            'is_actived' => 'boolean',
        ];
    }
}
