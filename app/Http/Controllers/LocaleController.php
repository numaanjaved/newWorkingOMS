<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Closure;
use App;

class LocaleController extends Controller
{
    public function index($locale = 'en'){

        $available_locales = config('app.available_locales');
        if(in_array($locale, $available_locales)){
            \Session::put('locale', $locale);
            App::setLocale($locale);
        }
        return back();
    }
}
