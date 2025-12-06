<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

require __DIR__ . "/db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $raw = file_get_contents("php://input");
    $data = json_decode($raw, true);
    $id = isset($data["id"]) ? intval($data["id"]) : 0;
    $price = isset($data["price_clp"]) ? intval($data["price_clp"]) : null;

    if ($id <= 0 || $price === null) {
        http_response_code(400);
        echo json_encode(["error" => "id/price_clp requeridos"]);
        exit;
    }

    try {
        $stmt = $pdo->prepare("UPDATE vs_products SET price_clp = :price WHERE id = :id");
        $stmt->execute(["price" => $price, "id" => $id]);
        echo json_encode(["status" => "ok", "id" => $id, "price_clp" => $price]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "db"]);
    }
    exit;
}

try {
    $stmt = $pdo->query("SELECT id, category_id, name, description, price_clp, image_url FROM vs_products ORDER BY name ASC");
    $rows = $stmt->fetchAll();
    echo json_encode(["items" => $rows]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "db"]);
}
