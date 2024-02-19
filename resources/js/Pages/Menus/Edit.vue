<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

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
            <h1 class="text-2xl font-bold">Edita el menú</h1>
            <div class="form-group flex flex-col">
                <label for="id_parent">
                    Menú padre
                </label>
                <select required class="form-control" v-model="form.id_parent">
                    <option value="">Selecciona un menú padre</option>
                    <option :value="menu.id" v-for="menu in menus" :key="menu.id">{{ menu.name }}</option>
                </select>

                <label for="name">
                    Nombre
                </label>
                <input v-model="form.name" type="text" class="form-control" placeholder="Escribe un nombre">
                <div class="text-red-500" v-if="form.errors.name">
                    {{ form.errors.name }}
                </div>

                <label for="destination_url">
                    Url destino
                </label>
                <input required v-model="form.destination_url" type="text" class="form-control" placeholder="Escribe una URL destino">
                <div class="text-red-500" v-if="form.errors.destination_url">
                    {{ form.errors.destination_url }}
                </div>
            </div>
            <input type="hidden" name="_token" :value="csrf">
            <button type="submit" class="btn btn-primary">Editar</button>
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
