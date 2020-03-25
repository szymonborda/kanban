<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="app.js"></script>
    <script>
        
    </script>
    <title>Kanban</title>
</head>

<body>
    <div class="wrapper">
        <div class="container content">
            <div class="to-do progress progress0" data-progress="0">
                <h1>To do</h1>
                <div class="add-button">+</div>
            </div>
            <div class="doing progress progress1" data-progress="1">
                <h1>Doing</h1>
            </div>
            <div class="done progress progress2" data-progress="2">
                <h1>Done</h1>
            </div>
        </div>
        <div class="add-wrapper">
            <div class="add-box">
                <div class="add-form">
                    <div class="add-form-textarea-box">
                        <textarea name="content" id="addContent" cols="30" rows="10"></textarea>
                    </div>
                    <div class="add-form-color-box">
                        Color: <input type="color" name="color" id="addColor" value="#289ad7">
                    </div>
                    <div class="add-buttons-box">
                        <div class="add-send">Add</div>
                        <div class="add-wrapper-hide">Back</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>