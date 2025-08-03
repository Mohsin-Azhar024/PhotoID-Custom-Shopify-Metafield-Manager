<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PhotoidController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware(['verify.shopify'])->group(function () {
    Route::get('/login',function(){
        if(auth()->user()){
            return redirect()->route('home');
        }else{
        return view('login');
        }
    })->name('login');

    Route::get('/', function () {
        return view('welcome');
    })->name('home');

    Route::get('/metafields', [PhotoidController::class, 'create']);
Route::get('/getmetafields', [PhotoidController::class, 'index']);
Route::get('/updateMetafieldData', [PhotoidController::class, 'updateMetafieldData']);

});
