<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$address = $_POST['address'];
$phone = $_POST['phone'];

$total = $_POST['total'];
$card = $_POST['card'];
$credit_card = $_POST['credit_card'];
$exp_date = $_POST['exp_date'];


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
        <h3>Purchase Review/Confirmation page </h3>


        <p> <strong> Name: </strong> <?php echo $first_name . " " . $last_name ?></p>
        <p> <strong> Address: </strong> <?php echo $address ?></p>
        <p> <strong>Phone:  </strong><?php echo $phone ?></p>

        <p><strong> Products:</strong> </p>
        <br>
        <?php
        if (!empty($_POST['items'])) {
            // Counting number of checked checkboxes.
            $checked_count = count($_POST['items']);
            echo "You have purchased the following " . $checked_count . " item(s): <br/>";
            // Loop to store and display values of individual checked checkbox.
            foreach ($_POST['items'] as $selected) {
                switch ($selected) {

                    case 5:
                        // echo  "<input type='checkbox' id='item_0' name='items[]' value= " . $selected . "class='item'>";
                        echo "<label > Chocolat <span class='price'>$5</span></label><br>";
                        break;
                    case 3:
                        //   echo  "<input type='checkbox' id='item_1' name='items[]' value= " . $selected . "class='item'>";
                        echo "<label > Milk <span class='price'>$5</span></label><br>";
                        break;
                    case 10:
                        //   echo  "<input type='checkbox' id='item_2' name='items[]' value= " . $selected . "class='item'>";
                        echo "<label >  Bread x 3 Packs <span class='price'>$5</span></label><br>";
                        break;
                    case 6:
                        //   echo  "<input type='checkbox' id='item_3' name='items[]' value= " . $selected . "class='item'>";
                        echo "<label > Water 2 Gallons <span class='price'>$5</span></label><br>";
                        break;
                }
            }
        }

        ?>


        <br>
        <p> <strong> Total: </strong>  <?php echo $total ?></p>

  
            <p><strong>Card Type:</strong> 
                <?php


                if ($card == "visa") {
                    echo " Visa </p>";
                } else if ($card == "mastercard") {
                    echo "Mastercard </p>";
                } else if ($card == "american") {

                    echo " American Express </p>";
                }
                ?>





    

        <p> <strong>Credit card #: </strong> <?php echo $credit_card ?></p>

        <p> <strong> Credit Card Expiration Date: </strong> <?php echo $exp_date ?></p>





        <div class="form-bottom">
            <form id="form" method="post" action="assign11_a.php">


                <input class="button" name="action" type="submit" id="Submit" value="Confirm">
                <input class="button reset" name="action" type="submit" id="Cancel" value="Cancel">
        </div>
        </form>







    </main>

    <footer>
        <p>&copy; <a href="../index.html">Hector Rodriguez</a> | Venezuela | <a href="https://www.byui.edu/online">BYUI
                Online Learning</a></p>

    </footer>
</body>

</html>