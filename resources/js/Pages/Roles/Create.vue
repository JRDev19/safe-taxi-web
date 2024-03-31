<script setup>
import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const form = useForm({
    name: '',
})
</script>

<template>
    <Modal>
        <form @submit.prevent="form.post(route('roles.store'))">
            <h1 class="text-2xl font-bold text-center">Crear un nuevo rol</h1>
            <div class="form-group flex flex-col items-center">
                <FloatLabel class="w-full md:w-14rem m-6 mb-0">
                    <InputText id="name" v-model="form.name" class="w-full" />
                    <label for="name">Escribe un nombre</label>
                </FloatLabel>
                <div class="text-red-500 ml-6 text-sm" v-if="form.errors.name">
                    {{ 'El campo nombre es requerido' }}
                </div>
            </div>
            <input type="hidden" name="_token" :value="csrf">
            <Button type="submit" label="Crear" class="mt-2 px-6 py-1  bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600" />
        </form>
    </Modal>
</template>

<script>
export default {
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
    props: {
        errors: Object
    },
}
</script>
