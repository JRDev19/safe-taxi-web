<script setup>

import Modal from "@/Components/MomentumModal.vue";
import Swal from 'sweetalert2';
import { router } from '@inertiajs/vue3'

const props = defineProps({
    menu: {
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
            router.delete(route('menus.destroy', id))
        }
    });
};
</script>

<template>
    <Modal>
            <h1 class="text-2xl font-bold">Visualizar menú</h1>
            <div class="form-group">
                <p>Menú padre</p>
                <p>{{ $props.menu.menu_self.name }}</p>
                <p>Nombre</p>
                <p>{{ $props.menu.name }}</p>
                <p>URL destino</p>
                <p>{{ $props.menu.destination_url }}</p>
            </div>
            <a class="btn" :href="route('menus.edit', menu.id )">EDIT</a>
            <a class="btn cursor-pointer" @click="destroy(menu.id)">Borrar</a>
    </Modal>
</template>

<script>
</script>
