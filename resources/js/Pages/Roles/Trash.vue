<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import TableComponent from '@/Components/TableComponent.vue';

const props = defineProps({
    roles: {
        type: Object,
    },
});
</script>

<template>
    <AppLayout title="Dashboard - Roles">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Roles eliminados</h1>
                    <TableComponent :datos="roles" :datosEliminados="true" :arrBusquedas="['name']" :colUno="{datos: {'dato': 'name', 'nombre': 'Nombre'}}" :deletedAt="{nombre: 'Eliminado el'}" :rutaRestore="{ruta: 'roles.restore'}" :rutaDrop="{ruta: 'roles.drop'}" :rutaRestoreAll="{ruta: 'roles.restoreAll'}" :rutaDropAll="{ruta: 'roles.dropAll'}" :rutaExistentes="'roles.index'" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
