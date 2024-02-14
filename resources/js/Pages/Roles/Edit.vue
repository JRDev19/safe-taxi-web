<script setup>

import Modal from "@/Components/MomentumModal.vue";
import { useForm } from "@inertiajs/vue3";

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
            <div class="form-group">
                <label for="name">
                    Nombre
                </label>
                <input v-model="form.name" type="text" class="form-control" placeholder="Escribe un nombre">
                <div class="text-red-500" v-if="form.errors.name">
                    {{ form.errors.name }}
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
