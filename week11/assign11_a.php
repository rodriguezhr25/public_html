<?php
$result = "";
        if ($_POST['action'] == 'Confirm') {
            $result = "The order has been Confirmed!";
        } else if ($_POST['action'] == 'Cancel') {
            $result = "The order has been Canceled!";
        } 
?>

<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Internet Sale</title>

<link rel="stylesheet" href="css/styles.css" />


</style>
</head>

<body>
    <main>
        <header class="top-header">
            <section class="headings">
                <h1> Online Store</h1>
                <div id="motto">Buy all you need</div>
            </section>

        </header>

        <main>

        <h1><?php echo $result ?></h1>
        <h5><a href="assign11.html">Buy More</a></h5>
        </main>  








    </main>

    <footer>
        <p>&copy; <a href="../index.html">Hector Rodriguez</a> | Venezuela | <a href="https://www.byui.edu/online">BYUI
                Online Learning</a></p>

    </footer>
</body>

</html>