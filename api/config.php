<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

$tv = isset($_GET["tv"]) ? intval($_GET["tv"]) : 0;
if ($tv < 1 || $tv > 3) {
    http_response_code(400);
    echo json_encode(["error" => "TV inválida"]);
    exit;
}

$baseDir = __DIR__ . "/tv/{$tv}";
$file = $baseDir . "/config.json";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (!file_exists($file)) {
        http_response_code(404);
        echo json_encode(["error" => "Config no encontrada"]);
        exit;
    }
    readfile($file);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if ($data === null) {
    http_response_code(400);
    echo json_encode(["error" => "JSON inválido"]);
    exit;
}

if (!is_dir($baseDir)) {
    mkdir($baseDir, 0775, true);
}

$saved = file_put_contents(
    $file,
    json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
);

if ($saved === false) {
    http_response_code(500);
    echo json_encode(["error" => "No se pudo guardar el archivo"]);
    exit;
}

echo json_encode(["status" => "ok", "file" => "/api/tv/{$tv}/config.json"]);
