<?php

namespace App\Providers;

use Illuminate\Routing\Router as BaseRouter;
use Illuminate\Support\Str;

class RouteSoftDelete extends BaseRouter
{
    public function resourceSoftDelete($name, $controller, array $options = [])
    {
        $model = Str::singular($name); // this is optional, i need it for Route Model Binding
        //$modelSingular = substr($model, 0, -1);

        $this
            ->get(
                $name .'/trash',
                $controller . '@trash'
            )->name($name . '.trash')->withTrashed();

        $this
            ->delete(
                $name .'/drop'.'/{' . $model . '}',
                $controller . '@drop'
            )->name($name . '.drop')->withTrashed();

        $this
            ->patch(
                $name .'/restore'.'/{' . $model . '}',
                $controller . '@restore'
            )->name($name . '.restore')->withTrashed();

        $this
            ->post(
                $name .'/drop'.'/all',
                $controller . '@drop_all'
            )->name($name . '.drop.all')->withTrashed();

        $this
            ->post(
                $name .'/restore'.'/all',
                $controller . '@restore_all'
            )->name($name . '.restore.all')->withTrashed();


        //return $this->resource($name, $controller, $options);
    }
}
