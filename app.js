$(() => {
    console.log('rdy');

    //trzy funkcje do przenoszenia elementów między kolumnami
    let allowDrop = (ev) => {
        ev.preventDefault();
    }

    let drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    //a w tej przekazywanie danych o przenoszeniu do funkcji moveTask
    let drop = (ev) => {
        if (ev.target.classList.contains('progress')) {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            moveTask(document.getElementById(data).getAttribute('data-id'), ev.target.getAttribute('data-progress'));
        }
    }

    //pobieranie ajaxem tabeli tasków z bazy i sparsowanie ich do tablicy obiektów
    let getTasks = () => {
        $.ajax({
            url: "getTasks.php",
            success: (result) => {
                drawTasks(JSON.parse(result));
            }
        });
    };

    //generowanie divów z taskami dzięki wcześniej pobranej tabeli
    let drawTasks = (tasks) => {
        $('.task').remove();
        $.each(tasks, (i) => {
            $('.progress' + tasks[i].progress).append('<div class="task" draggable="true" data-id="' + tasks[i].id + '" id="task' + tasks[i].id + '" title="added: ' + tasks[i].added + ', moved: ' + tasks[i].moved + '" style="background-color: ' + tasks[i].color_hash + '">' + tasks[i].content + '</div>');
            addListeners();
        })
    };

    //przesyłanie ajaxem polecenia do przesunięcia taska do innej kolumny
    let moveTask = (id, col) => {
        $.ajax({
            url: 'moveTask.php?id=' + id + '&col=' + col,
            success: (result) => {
                console.log(result);
            }
        });
    };

    //każdorazowe dodawanie listenerów do każdego taska, aby móc go przesuwać
    let addListeners = () => {
        document.querySelectorAll('.progress').forEach((elem) => {
            elem.addEventListener('drop', (event) => {
                drop(event);
            });
        });

        document.querySelectorAll('.progress').forEach((elem) => {
            elem.addEventListener('dragover', (event) => {
                allowDrop(event);
            });
        });

        document.querySelectorAll('.task').forEach((elem) => {
            elem.addEventListener('dragstart', (event) => {
                drag(event);
            });
        });
    };

    //dodawanie taska ajaxem
    let addTask = (content, color) => {
        $.ajax({
            type: 'POST',
            url: 'addTask.php',
            data: {
                content,
                color
            },
            success: (result) => {
                console.log(result);
                if (result == 1) {
                    console.log('dodano');
                    //przy pomyslnym dodaniu ponowne pobranie taskow
                    getTasks();
                    document.querySelectorAll('.add-wrapper')[0].style.display = 'none';
                }
            }
        });
    };

    //wywołanie przesłania nowego taska przyciskiem
    document.querySelectorAll('.add-send')[0].addEventListener('click', () => {
        addTask(document.getElementById('addContent').value, document.getElementById('addColor').value);
    });

    //pokazywanie pola do dodawania tasków
    document.querySelectorAll('.add-button')[0].addEventListener('click', () => {
        document.querySelectorAll('.add-wrapper')[0].style.display = 'block';
    });

    //i chowanie go
    document.querySelectorAll('.add-wrapper-hide')[0].addEventListener('click', () => {
        document.querySelectorAll('.add-wrapper')[0].style.display = 'none';
    });

    //pobieranie taskow przy pierwszym zaladowaniu
    getTasks();



});