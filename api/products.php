<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

require __DIR__ . "/db.php";

try {
    $stmt = $pdo->query("SELECT id, category_id, name, description, price_clp, image_url FROM vs_products ORDER BY name ASC");
    $rows = $stmt->fetchAll();
    echo json_encode(["items" => $rows]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "db"]);
}
