<script setup>

import Modal from "@/Components/MomentumModal.vue";
import Swal from 'sweetalert2';
import { router, Link } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

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
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#EF4444',
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route('permissions.destroy', id))
        }
    });
};
</script>

<template>
    <Modal>
            <h1 class="text-2xl font-bold text-center">Visualizar rol</h1>
            <div class="form-group flex flex-col items-center gap-2">
                <label for="permisoPadre" class="w-full">Permiso padre</label>
                <InputText class="w-full" id="permisoPadre" :placeholder="permission.permission_self.alias" disabled />
                <label for="alias" class="w-full">Alias</label>
                <InputText class="w-full" id="alias" :placeholder="permission.alias" disabled />

                <div class="w-full flex items-start gap-4">
                    <Link :href="route('permissions.edit', permission.id)">
                        <Button label="Editar" icon="pi pi-file-edit" aria-label="Ver" class="py-1 px-2 bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500" />
                    </Link>
                    <Button label="Borrar" icon="pi pi-trash" class="py-1 px-2 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600" @click.prevent="destroy(permission.id)" />
                </div>

            </div>
    </Modal>
</template>

<script>
</script>
