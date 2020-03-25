<?php
if ((isset($_GET['id'])) && (isset($_GET['col']))) {
    require 'db.php';
    //zapobieganie sql i html injection
    $id = $con->real_escape_string(htmlentities($_GET['id']));
    $col = $con->real_escape_string(htmlentities($_GET['col']));

    //zaaktualizowanie kolumny przesuniętego taska w bazie
    if ($con->query('UPDATE tasks SET progress = "' . $col . '", moved = now() WHERE tasks.id = ' . $id)) {
        print true;
    } else {
        print false;
    }
} else {
    print false;
}

?>