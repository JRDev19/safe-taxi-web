<script setup>

import Modal from "@/Components/MomentumModal.vue";
import Swal from 'sweetalert2';
import { router } from '@inertiajs/vue3'

const props = defineProps({
    permission: {
        type: Object,
    },
});

const destroy = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar este registro?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar este registro.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route('permissions.destroy', id))
        }
    });
};
</script>

<template>
    <Modal>
            <h1 class="text-2xl font-bold">Visualizar rol</h1>
            <div class="form-group">
                <p>Permiso padre</p>
                <p>{{ $props.permission.permission_self.alias }}</p>
                <p>Alias</p>
                <p>{{ $props.permission.alias }}</p>
            </div>
            <a class="btn" :href="route('permissions.edit', permission.id )">EDIT</a>
            <a class="btn cursor-pointer" @click="destroy(permission.id)">Borrar</a>
    </Modal>
</template>

<script>
</script>
