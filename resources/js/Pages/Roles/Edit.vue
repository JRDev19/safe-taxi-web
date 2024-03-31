<script setup>
import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const props = defineProps({
    role: {
        type: Object,
    },
});

const form = useForm({
    name: props.role.name,
});

</script>

<template>
    <Modal>
        <form @submit.prevent="form.put(route('roles.update', props.role.id))">
            <h1 class="text-2xl font-bold">Edita el rol</h1>
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
            <Button type="submit" label="Editar" class="mt-2 px-6 py-1  bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500" />
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
