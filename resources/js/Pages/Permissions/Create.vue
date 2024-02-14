<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    alias: '',
    id_parent: '',
})

const props = defineProps({
    permissions: {
        type: Object,
    },
});
</script>

<template>
    <Modal>
        <form @submit.prevent="form.post(route('permissions.store'))">
            <h1 class="text-2xl font-bold">Crear un nuevo permiso</h1>
            <div class="form-group flex flex-col">
                <label for="id_parent">
                    Permiso padre
                </label>

                <select required class="form-control" v-model="form.id_parent">
                    <option value="">Selecciona un permiso padre</option>
                    <option :value="permission.id" v-for="permission in permissions" :key="permission.id">{{ permission.alias }}</option>
                </select>
                <div class="text-red-500" v-if="form.errors.id_parent">
                    {{ form.errors.id_parent }}
                </div>
                <label for="alias">
                    Alias
                </label>
                <input required v-model="form.alias" type="text" class="form-control" placeholder="Escribe un alias">
                <div class="text-red-500" v-if="form.errors.alias">
                    {{ form.errors.alias }}
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
