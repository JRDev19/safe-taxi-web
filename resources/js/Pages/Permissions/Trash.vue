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
    <AppLayout title="Dashboard - Permissions">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Permisos eliminados</h1>
                    <TableComponent :datos="permissions" :datosEliminados="true" :arrBusquedas="['permission_self.alias', 'alias']" :colUno="{datos: {'dato': 'permission_self.alias', 'nombre': 'Permiso Padre'}}" :colDos="{datos: {'dato': 'alias', 'nombre': 'Alias'}}" :deletedAt="{nombre: 'Eliminado el'}" :rutaRestore="{ruta: 'permissions.restore'}" :rutaDrop="{ruta: 'permissions.drop'}" :rutaRestoreAll="{ruta: 'permissions.restoreAll'}" :rutaDropAll="{ruta: 'permissions.dropAll'}" :rutaExistentes="'permissions.index'" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
