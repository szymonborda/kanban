<?php
    //sprawdzanie czy są zmienne w poście
    if ((isset($_POST['content'])) && (isset($_POST['color']))) {
        require 'db.php';
        //zapobieganie sql i html injection
        $content = $con->real_escape_string(htmlentities($_POST['content']));
        $color = $con->real_escape_string(htmlentities($_POST['color']));
        //dodawanie taska do bazy
        if($con->query('INSERT INTO tasks (added, color_hash, progress, content, moved) VALUES (now(), "' . $color . '", 0, "' . $content . '", now())')) {
            print true;
        } else {
            print false;
        }
    } else {
        print false;
    }
    
?>