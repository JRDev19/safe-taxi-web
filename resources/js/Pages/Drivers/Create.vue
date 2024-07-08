<script setup>
import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const form = useForm({
    full_name: '',
    surnames: '',
    photo: null
})

const props = defineProps({
    drivers: {
        type: Object,
    },
});

const handleFileChange = (event) => {
    form.photo = event.target.files[0];
}


</script>

<template>
    <Modal>
        <form @submit.prevent="form.post(route('drivers.store'))">
            <h1 class="text-2xl font-bold text-center">Crear un nuevo conductor</h1>
            <div class="form-group flex flex-col w-full">

                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <InputText id="full_name" v-model="form.full_name" class="w-full" />
                    <label for="full_name">Escribe un nombre</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.full_name">
                    {{ form.errors.full_name }}
                </div>

                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <InputText id="surnames" v-model="form.surnames" class="w-full" />
                    <label for="surnames">Escribe los apellidos</label>
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.surnames">
                    {{ form.errors.surnames }}
                </div>


                <FloatLabel class="w-full md:w-14rem mt-6 mb-0">
                    <input type="file" @change="handleFileChange" accept="image/*" class="w-full" />
                </FloatLabel>
                <div class="text-red-500 w-full flex justify-end mt-1 text-sm" v-if="form.errors.photo">
                    <p>{{ form.errors.photo }}</p>
                </div>

            </div>
            <input type="hidden" name="_token" :value="csrf">
            <div class="flex justify-end">
                <Button type="submit" label="Crear" class="mt-6 px-6 py-1 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"  />
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
