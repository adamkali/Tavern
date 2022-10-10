USE taverndatabase;

-- delete auth_token with id 64a0fe14bc118997faa69b0442dbbe24
DELETE FROM auth_tokens WHERE username = 'bingbong';
DELETE FROM users WHERE username = 'bingbong';
DELETE FROM auth_token_activations WHERE auth_email = 'kalinowskia223@gmail.com'