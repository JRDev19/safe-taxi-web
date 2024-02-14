<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: '',
})
</script>

<template>
    <Modal>
        <form @submit.prevent="form.post(route('roles.store'))">
            <h1 class="text-2xl font-bold">Crear un nuevo rol</h1>
            <div class="form-group">
                <label for="name">
                    Nombre
                </label>
                <input required v-model="form.name" type="text" class="form-control" placeholder="Escribe un nombre">
                <div class="text-red-500" v-if="form.errors.name">
                    {{ form.errors.name }}
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
