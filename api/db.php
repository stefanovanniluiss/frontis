<?php
// Simple PDO bootstrap. Adjust credentials if needed.
$dsn  = 'mysql:host=localhost;dbname=dastefan_menu;charset=utf8mb4';
$user = 'dastefan_menu';
$pass = 'viasanto';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'db']);
    exit;
}
