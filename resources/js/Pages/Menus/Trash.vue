<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Swal from 'sweetalert2';
import { router } from '@inertiajs/vue3';
import TableComponent from '@/Components/TableComponent.vue';

const props = defineProps({
    menus: {
        type: Object,
    },
});
</script>

<template>
    <AppLayout title="Dashboard - Menús">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Menús eliminados</h1>
                    <TableComponent :datos="menus" :datosEliminados="true" :arrBusquedas="['menu_self.name', 'name', 'destination_url']" :colUno="{datos: {'dato': 'menu_self.name', 'nombre': 'Menú padre'}}" :colDos="{datos: {'dato': 'name', 'nombre': 'Nombre'}}" :colTres="{datos: {'dato': 'destination_url', 'nombre': 'URL destino'}}" :deletedAt="{nombre: 'Eliminado el'}" :rutaRestore="{ruta: 'menus.restore'}" :rutaDrop="{ruta: 'menus.drop'}" :rutaRestoreAll="{ruta: 'menus.restoreAll'}" :rutaDropAll="{ruta: 'menus.dropAll'}" :rutaExistentes="'menus.index'" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
