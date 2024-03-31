<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import TableComponent from '@/Components/TableComponent.vue';

const props = defineProps({
    permissions: {
        type: Object,
    },
});
</script>

<template>
    <AppLayout title="Dashboard - Permisos">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Permisos</h1>
                    <TableComponent :datos="permissions" :datosExistentes="true" :rutaCreate="'permissions.create'" :rutaTrash="'permissions.trash'" :arrBusquedas="['permission_self.alias', 'alias']" :colUno="{datos: {'dato': 'permission_self.alias', 'nombre': 'Permiso Padre'}}" :colDos="{datos: {'dato': 'alias', 'nombre': 'Alias'}}" :createdAt="{nombre: 'Creado'}" :updatedAt="{nombre: 'Actualizado'}" :rutaShow="{ruta: 'permissions.show'}" :rutaEdit="{ruta: 'permissions.edit'}" :rutaDestroy="{ruta: 'permissions.destroy'}" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
