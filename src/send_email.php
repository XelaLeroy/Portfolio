<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Veuillez remplir correctement le formulaire.";
        exit;
    }

    $recipient = "leroyalex2607@gmail.com";
    $subject = "Nouveau message de $name";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Merci ! Votre message a été envoyé.";
    } else {
        http_response_code(500);
        echo "Oops ! Une erreur est survenue, veuillez réessayer.";
    }
} else {
    http_response_code(403);
    echo "Méthode de requête non autorisée.";
}
?>
