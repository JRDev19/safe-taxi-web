<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class StoreDriverRequest extends FormRequest
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
            'full_name' => 'Nombre',
            'surnames' => 'Apellidos',
            'is_actived' => 'Estado',
            'photo' => 'Foto'
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
            'full_name' => 'required|string|max:255',
            'surnames' => 'required|string|max:255',
            'is_actived' => 'boolean',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];

        
    }
    public function messages()
    {
        return [
            'full_name.required' => 'El :attribute es obligatorio.',
            'full_name.string' => 'El :attribute debe ser una cadena de texto.',
            'full_name.max' => 'El :attribute no puede tener más de :max caracteres.',
            'surnames.required' => 'Los :attribute son obligatorios.',
            'surnames.string' => 'Los :attribute deben ser una cadena de texto.',
            'surnames.max' => 'Los :attribute no pueden tener más de :max caracteres.',
            'is_actived.boolean' => 'El :attribute debe ser verdadero o falso.',
            'photo.image' => 'La :attribute debe ser una imagen.',
            'photo.mimes' => 'La :attribute debe ser un archivo de tipo: :values.',
            'photo.max' => 'La :attribute no puede ser mayor de :max kilobytes.',
        ];
    }
    public function persist()
    {
        $data = $this->validated();

        if ($this->hasFile('photo')) {
            $path = $this->file('photo')->store('photos', 'public');
            $data['photo'] = Storage::url($path);
        }

        return $data;
    }
}
