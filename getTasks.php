<?php
    require 'db.php';

    $tasks = $con->query('SELECT * FROM tasks ORDER BY moved asc');
    $rows = array();
    while($r = mysqli_fetch_assoc($tasks)) {
        $rows[] = $r;
    }
    print json_encode($rows);
    
    $con->close();

    //proste pobranie wszystkich tasków z bazy oraz zwrócenie ich jako tablica obiektów JSON
?>