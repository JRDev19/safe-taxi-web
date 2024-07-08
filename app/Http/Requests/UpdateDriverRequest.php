<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class UpdateDriverRequest extends FormRequest
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
            'is_actived' => 'required|boolean',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
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
