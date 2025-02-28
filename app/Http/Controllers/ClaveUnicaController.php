<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\User;

class ClaveUnicaController extends Controller
{
	/**
	* Login Clave única
	*/
	public function autenticar(Request $request){
		/* Primer paso, redireccionar al login de clave única */
		$url_base       = "https://accounts.claveunica.gob.cl/openid/authorize/";
		$client_id      = env("CLAVEUNICA_CLIENT_ID");
		$redirect_uri   = urlencode(env('APP_URL')."/claveunica/callback");

		$state 			= csrf_token();
		$scope      	= 'openid run name';

		$params     	= '?client_id='.$client_id.
						'&redirect_uri='.$redirect_uri.
						'&scope='.$scope.
						'&response_type=code'.
						'&state='.$state;

		return redirect()->to($url_base.$params)->send();
	}

	public function callback(Request $request) {
		/* Segundo paso, el usuario ya se autentificó correctamente en CU y retornó a nuestro sistema */

		/* Nos aseguramos que vengan los parámetros desde CU */
		// if ($request->missing(['code','name'])) {
		// 	return redirect()->route('welcome');
		// }

		/* Recepcionamos los siguientes parametros desde CU */
		$code   = $request->input('code');
		$state  = $request->input('state'); 

		$url_base       = "https://accounts.claveunica.gob.cl/openid/token/";
		$client_id      = env("CLAVEUNICA_CLIENT_ID");
		$client_secret  = env("CLAVEUNICA_SECRET_ID");
		$redirect_uri   = urlencode(env('APP_URL')."/claveunica/callback");

		$scope = 'openid+run+name';

		$response = Http::asForm()->post($url_base, [
			'client_id'     => $client_id,
			'client_secret' => $client_secret,
			'redirect_uri'  => $redirect_uri,
			'grant_type'    => 'authorization_code',
			'code'          => $code,
			'state'         => $state,
		]);

		
		$access_token = json_decode($response)->access_token ?? null;

		/** Si no existe el access token */
		if(is_null($access_token))
		{
			return redirect()->route('claveunica.login');
		}

		/* Paso 3, obtener los datos del usuario en base al $access_token */
		return redirect('/siremx/logincu/'.$access_token);
	}

	public function logout() {
		/* Nos iremos al cerrar sesión en clave única y luego volvermos a nuestro sistema */
		if(env('APP_ENV') == 'local')
		{
			/* Si es ambiente de desarrollo cerramos sólo localmente */
			//dd('llegue');
			return redirect()->route('logout');
		}
		else
		{
			/** Cerrar sesión clave única */
			/* Url para cerrar sesión en clave única */
			$url_logout     = "https://accounts.claveunica.gob.cl/api/v1/accounts/app/logout?redirect=";
			/* Url para luego cerrar sesión en nuestro sistema */
			$url_redirect   = env('APP_URL')."/authenticate/logout";
			$url            = $url_logout.urlencode($url_redirect);
			return redirect($url);
		}
	}
}
