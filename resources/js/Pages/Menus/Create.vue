<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: '',
    id_parent: '',
    destination_url: '',
})

const props = defineProps({
    menus: {
        type: Object,
    },
});
</script>

<template>
    <Modal>
        <form @submit.prevent="form.post(route('menus.store'))">
            <h1 class="text-2xl font-bold">Crear un nuevo menú</h1>
            <div class="form-group flex flex-col">
                <label for="id_parent">
                    Menú padre
                </label>

                <select required class="form-control" v-model="form.id_parent">
                    <option value="">Selecciona un menú padre</option>
                    <option :value="menu.id" v-for="menu in menus" :key="menu.id">{{ menu.name }}</option>
                </select>
                <div class="text-red-500" v-if="form.errors.id_parent">
                    {{ form.errors.id_parent }}
                </div>

                <label for="name">
                    Nombre
                </label>
                <input required v-model="form.name" type="text" class="form-control" placeholder="Escribe un nombre">
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
            <button type="submit" class="btn btn-primary">Crear</button>
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
