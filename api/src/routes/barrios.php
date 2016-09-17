<?php

/**
	 * Devuelve todos los barrios.
*/
$app->get('/barrios', function ($request, $response, $args) {

	$barrios = $this->db->barrios();

    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($barrios, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
});

/**
	 * Carga un nuevo barrio.
	 * @param post data
	 * @return Barrio creado
*/
$app->post('/barrios', function ($request, $response, $args) {

	$barrio = $request->getParsedBody();
	$row = $this->db->createRow('barrios', $barrio);
	$row->save();
	//unset( $row->limite_oeste ); Esto elimina la propiedad
    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array("status" => "ok", "barrio" => $row), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        
});

/**
	 * Edita un barrio.
	 * @param post data
	 * @return Barrio editado
*/
$app->put('/barrios/{id}', function ($request, $response, $args) {
	$id = $args['id'];
	$barrio = $request->getParsedBody();
	$row = $this->db->barrios($id);
	unset($barrio[ 'id' ]);
	$row->update($barrio);

    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array("status" => "ok", "barrio" => $row), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        
});

/**
	 * Edita un barrio.
*/
$app->delete('/barrios/{id}', function ($request, $response, $args) {
	$id = $args['id'];
	$row = $this->db->barrios($id);
	$row->delete();

    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array("status" => "ok"), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        
});