<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    permission: {
        type: Object,
    },
    permissions: {
        type: Object,
    }
});

const form = useForm({
    alias: props.permission.alias,
    id_parent: props.permission.id_parent,
});

</script>

<template>
    <Modal>
        <form @submit.prevent="form.put(route('permissions.update', props.permission.id))">
            <h1 class="text-2xl font-bold">Edita el permiso</h1>
            <div class="form-group flex flex-col">
                <label for="id_parent">
                    Permiso padre
                </label>
                <select required class="form-control" v-model="form.id_parent">
                    <option value="">Selecciona un permiso padre</option>
                    <option :value="permission.id" v-for="permission in permissions" :key="permission.id">{{ permission.alias }}</option>
                </select>

                <label for="alias">
                    Alias
                </label>
                <input v-model="form.alias" type="text" class="form-control" placeholder="Escribe un alias">
                <div class="text-red-500" v-if="form.errors.alias">
                    {{ form.errors.alias }}
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
