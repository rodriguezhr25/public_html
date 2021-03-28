<?php
    $apr = $_GET['apr'];
    $term = $_GET['term'];
    $p = $_GET['amount'];

    $i = $apr / 100 / 12; //monthly interest rate
    $n = $term * 12; //number of payments
   
    $monthlyPaymenths = $p * $i * (pow(1 + $i, $n)) / (pow(1 + $i, $n) - 1);
    $monthlyPaymenths = round($monthlyPaymenths,2);
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Mortage Calculator</title>

 <link rel="stylesheet" href="css/styles.css" />


 </style>
 </head>

 <body>
     <main>
         <header class="top-header">
             <section class="headings">
                 <h1> Mortage Calculator</h1>
                 <div id="motto">Calculate your payments</div>
             </section>

         </header>
         <h3>These are the details of the mortage required </h3>
        
            <h4> APR (Annual Percentage Rate): <span> <?php echo $apr ?> </span>  </h4>
            <h4> Loan Term: <span> <?php echo $term ?>  </span></h4>
            <h4> Loan Amount: <span> <?php echo $p ?> </span>  </h4>
            <h4> Monthly Payment: <span> <?php echo $monthlyPaymenths ?> </span> </h4>
        </label>      
   

      

         <h5><a href="mortage.html">Return</a></h5>

     </main>

     <footer>
         <p>&copy; <a href="../index.html">Hector Rodriguez</a> | Venezuela | <a href="https://www.byui.edu/online">BYUI
                 Online Learning</a></p>

     </footer>
 </body>

 </html>