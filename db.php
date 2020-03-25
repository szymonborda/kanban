<?php
    //połączenie z bazą
    $con = new mysqli('localhost', 'root', '', 'kanban');
    if ($con->connect_errno) {
        printf("Connect failed: %s\n", $con->connect_error);
        exit();
    }
?>