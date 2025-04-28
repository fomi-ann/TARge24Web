<?php
    // Get the username and passsword from request
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Two variables:
    $ok = true;
    $messages = array(); // for errors

    // Check if username empty
    if (!isset($username) || empty($username)) {
        $ok = false;
        $messages[] = 'Username cannot be empty!';
    }

    // Check if password empty
    if (!isset($password) || empty($password)) {
        $ok = false;
        $messages[] = 'Password cannot be empty!';
    }

    // If correct
    if ($ok) {
        if ($username === 'anna' && $password === 'fomina') {
            $ok = true;
            $messages[] = 'Successful login!';
        } else {
            $ok = false;
            $messages[] = 'Incorect username / password combination!';
        }
    }

    // Output json string with data about attempted login
    echo json_encode(
        array(
            'ok' => $ok, // true / false
            'messages' => $messages // array with all of the messages
        )
    );
?>