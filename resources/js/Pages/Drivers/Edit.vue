<script setup>
import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

const props = defineProps({
    driver: {
        type: Object,
    },
});


const form = useForm({
    full_name: props.driver.full_name,
    surnames: props.driver.surnames,
    is_actived: props.driver.is_actived,
    photo: props.driver.photo
});

const options = [
    { label: 'Activo', value: 1 },
    { label: 'Inactivo', value: 0 }
];


</script>

<template>
    <Modal>
        <form @submit.prevent="form.put(route('drivers.update', props.driver.id))">
            <h1 class="text-2xl font-bold text-center">Edita el conductor</h1>
            <div class="form-group flex flex-col w-full">
                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <InputText id="full_name" v-model="form.full_name" class="w-full" />
                    <label for="full_name">Escribe un nombre</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.full_name">
                   <p> {{ form.errors.full_name }}</p>
                </div>

                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <InputText id="surnames" v-model="form.surnames" class="w-full" />
                    <label for="surnames">Escribe los apellidos</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.surnames">
                   <p> {{ form.errors.surnames }}</p>
                </div>

                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <Dropdown id="is_actived" v-model="form.is_actived" :options="options" option-label="label" option-value="value" class="w-full" />
                    <label for="is_actived">Estado</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.is_actived">
                   <p>{{ form.errors.is_actived }}</p>
                </div>

                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <InputText id="photo" v-model="form.photo" class="w-full" />
                    <label for="photo">Escribe una URL de la foto</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.photo">
                    <p>{{ form.errors.photo }}</p>
                </div>
            </div>
            <input type="hidden" name="_token" :value="csrf">
            <div class="flex justify-end">
                <Button type="submit" label="Editar" class="mt-6 px-6 py-1 bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" />
            </div>
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
