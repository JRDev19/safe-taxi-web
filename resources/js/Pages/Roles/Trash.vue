<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Swal from 'sweetalert2';
import { router } from '@inertiajs/vue3'

window.restore = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas restaurar este registro?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar este registro.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Restaurar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.patch(route('roles.restore', id))
        }
    });
};

window.drop = (id) => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar para siempre este registro?',
        text: 'Recuerda que no podrás recuperar este registro después de eliminarlo.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route('roles.drop', id))
        }
    });
};

const restoreAll = () => {
    Swal.fire({
        title: '¿Estás seguro de que deseas restaurar todos los registros?',
        text: 'Recuerda que cuentas con un plazo de 30 días para recuperar los registros.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Restaurar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route('roles.restoreAll'))
        }
    });
};

const dropAll = () => {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar todos los registros?',
        text: 'Recuerda que no podrás recuperar los registros después de eliminarlos.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route('roles.dropAll'))
        }
    });
};
const props = defineProps({
    roles: {
        type: Object,
    },
});

const options =
{
    bLengthChange: false,
    responsive: true,
    select: true,
    language:
    {
        search: 'Buscar',
        lengthMenu: "Mostrando _MENU_ registros por página",
        zeroRecords: 'No hay registros para mostrar',
        info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
        infoFiltered: '(Filtrados de _MAX_ registros.)',
        infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
        paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' },
    }
};

const columns =
    [
        { data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` } },
        { data: "name" },
        { data: null, render: function (data) { return new Date(data.deleted_at).toLocaleString() } },
        { data: null, render: function (data) {
            return `
                <div>
                    <a class="btn cursor-pointer" onclick="restore(${data.id})">Restaurar</a>
                    <a class="btn cursor-pointer" onclick="drop(${data.id})">Eliminar</a>

                </div>
            `;
            }
        }
    ];

</script>

<template>
    <AppLayout title="Dashboard - Roles">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-6 py-10">
                    <h1 class="text-2xl font-bold">Listado de Roles eliminados</h1>
                    <div class="relative float-right z-10 top-[35px]">
                        <a type="button" @click="restoreAll()">Restaurar todos </a>
                        <a type="button" @click="dropAll()"> Eliminar todos </a>

                    </div>
                    <DataTable :data="roles" :columns="columns" :options="options" class="display nowrap">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Eliminado el</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                    </DataTable>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
