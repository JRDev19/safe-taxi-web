import { createApp, h } from "vue"
import { createInertiaApp } from "@inertiajs/vue3"
import { modal } from "momentum-modal"
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net-dt";
import './bootstrap';
import '../css/app.css';

DataTable.use(DataTablesLib);

function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path]
    }
  }

  throw new Error(`Page not found: ${name}`)
}

createInertiaApp({
    title: (title) => `${title}`,
  progress: false,
  resolve: name =>
    resolvePageComponent(name, import.meta.glob("./Pages/**/*.vue")),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(modal, {
        resolve: name =>
          resolvePageComponent(name, import.meta.glob("./Pages/**/*.vue"))
      })
      .use(plugin)
      .use(ZiggyVue)
      .component('DataTable', DataTable)
      .mount(el)
  }
})
