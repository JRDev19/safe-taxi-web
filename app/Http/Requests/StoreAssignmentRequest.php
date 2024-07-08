<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAssignmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'is_actived' => $this->input('is_actived', true),
        ]);
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
            'id_driver' => [
                'required',
                'exists:drivers,id',
                Rule::unique('assignments')->where(function ($query) {
                    return $query->where('id_driver', $this->id_driver);
                }),
            ],
            'id_transport' => [
                'required',
                'exists:transports,id',
                Rule::unique('assignments')->where(function ($query) {
                    return $query->where('id_transport', $this->id_transport);
                }),
            ],
            'is_actived' => 'boolean',
        ];
    }

    public function messages()
    {
        return [
            'id_driver.unique' => 'Este taxista ya tiene una asignación.',
            'id_transport.unique' => 'Este número económico ya tiene una asignación.',
        ];
    }
}
