<script setup>
import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const props = defineProps({
    menu: {
        type: Object,
    },
    menus: {
        type: Object,
    }
});

const form = useForm({
    name: props.menu.name,
    id_parent: props.menu.id_parent,
    destination_url: props.menu.destination_url,
});

</script>

<template>
    <Modal>
        <form @submit.prevent="form.put(route('menus.update', props.menu.id))">
            <h1 class="text-2xl font-bold text-center">Editar el menú</h1>
            <div class="form-group flex flex-col items-center">
                <FloatLabel class="w-full md:w-14rem m-6 mb-0">
                    <Dropdown v-model="form.id_parent" inputId="id_parent" :options="menus" optionLabel="name" class="w-full" optionValue="id" />
                    <label for="id_parent">Selecciona un menú padre</label>
                </FloatLabel>

                <FloatLabel class="w-full md:w-14rem m-6 mb-0">
                    <InputText id="name" v-model="form.name" class="w-full" />
                    <label for="name">Escribe un nombre</label>
                </FloatLabel>
                <div class="text-red-500 ml-6 text-sm" v-if="form.errors.name">
                    {{ 'El campo nombre es requerido' }}
                </div>

                <FloatLabel class="w-full md:w-14rem m-6 mb-0">
                    <InputText id="url" v-model="form.destination_url" class="w-full" />
                    <label for="url">Escribe una URL destino</label>
                </FloatLabel>
                <div class="text-red-500 ml-6 text-sm" v-if="form.errors.destination_url">
                    {{ 'El campo URL debe tener entre 3 y 50 carácteres' }}
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
