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
            'full_name' => 'required_if:photo_changed,true|string|max:255',
            'surnames' => 'required_if:photo_changed,true|string|max:255',
            'is_actived' => 'required_if:photo_changed,true|boolean',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ];
    }
    public function messages()
    {
        return [
            'full_name.required' => 'El nombre es obligatorio.',
            'surnames.required' => 'Los apellidos son obligatorios.',
            'is_actived.required' => 'El estado es obligatorio.',
            'photo.image' => 'El archivo debe ser una imagen.',
            'photo.mimes' => 'La imagen debe ser de tipo jpeg, png, jpg o gif.',
            'photo.max' => 'La imagen no debe ser mayor a 2MB.',
        ];
    }
    public function persist()
    {
        // Agrega esta línea para ver los datos validados
        dd($this->validated(), $this->file('photo'));

        $data = $this->validated();

        if ($this->hasFile('photo')) {
            $oldPhoto = $this->route('driver')->photo;
            if ($oldPhoto) {
                $oldPhotoPath = str_replace('/storage', 'public', $oldPhoto);
                if (Storage::exists($oldPhotoPath)) {
                    Storage::delete($oldPhotoPath);
                }
            }

            $path = $this->file('photo')->store('photos', 'public');
            $data['photo'] = Storage::url($path);
        } else {
            $data['photo'] = $this->route('driver')->photo;  // Mantener la foto anterior si no hay una nueva
        }

        // Agrega esta línea para ver los datos a ser actualizados
        dd($data);

        return $data;
    }
}
