<!DOCTYPE html>
<html lang="en">
<head>
    <script src="script.js"></script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N34ZK35');
    checkTestType();
    </script>
    <!-- End Google Tag Manager -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EBCWHSN1LX"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EBCWHSN1LX');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awin Test - Success Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script>
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'purchase',
            'pageCategory': 'successPage',
            'testType': checkTestType(),
            'ecommerce': {
                'purchase':{
                    'id': getOrderID(),
                    'currency': "BRL",
                    'revenue': '300.00',
                    'shipping': '10.00',
                    'coupon': 'testCoupon',
                    //Products information
                    'products': [{
                        'id': '925678982567899',
                        'name': 'Experiência Anual',
                        'price': '150',
                        'quantity': '1',
                        'sku':'987654674859650',
                        'category': 'First Test Category',
                        'testId': '925678982567899',
                        'testName': 'Experiência Anual',
                        'testPrice': '150',
                        'testQuantity': '1',
                        'testSku':'987654674859650',
                        'testCategory': 'First Test Category'
                    },{
                        'id': '7563425324534657',
                        'name': 'Vinho teste',
                        'price': '100',
                        'quantity': '1',
                        'sku':'2435465542564561',
                        'category': 'Second Test Category',
                        'testId': '7563425324534657',
                        'testName': 'Vinho teste',
                        'testPrice': '100',
                        'testQuantity': '1',
                        'testSku':'2435465542564561',
                        'testCategory': 'Second Test Category'                         
                    }
                    ,{
                        'id': '7563425324534657',
                        'name': 'Especial Mensal',
                        'price': '50',
                        'quantity': '1',
                        'category': 'Second Test Category',
                        'testId': '7563425324534657',
                        'testName': 'Especial Mensal',
                        'testPrice': '50',
                        'testQuantity': '1',
                        'testCategory': 'Second Test Category'                         
                    }
                ]
                }
            }
        });
    </script>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N34ZK35"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <section class="sec">
        <header>
            <a href = "#" onclick="homePageType()"><img src = "logo.png" class = "logo"></a>
            <h2 class = "productName">Awin Test Purchase</h2>
        </header>
        
        <?php echo "My first PHP script!";?>

        <div class="content">
            <div class="textBox">
                <h2>Did<b style="font-size: larger;"> it </b> fire?</h2>
                    <p>Check in the "network" tab of the developer tools (press F12 and refresh)</p>
                    <br>
                <br>

                <script type="text/javascript">
                if(checkTestType() == "CodeIntegration"){
                    var source = "AwinChannelCookie"; // Nome do cookie identificador da última mídia

                    //Retribui o valor do cookie “origem”
                    var _getSource = function (source) {
                        source += "=";
                        var aCookies = document.cookie.split(";");

                        for (var i = 0; i < aCookies.length; i++) {
                            while (aCookies[i].charAt(0) == " ") aCookies[i] = aCookies[i].substring(1);
                            if (aCookies[i].indexOf(source) != -1) {
                                return aCookies[i].substring(source.length, aCookies[i].length);
                            }
                        }
                    };

                    if (_getSource(source)) {
                        var sChannel = _getSource(source);
                    } else {
                        var sChannel = "aw"; // Nenhuma mídia paga auxiliou na jornada, padrão retorna para Awin e a checagem de interação com Awin será feita pelo cookie "_aw_sn_26905"
                    }

                    purchaseID = getOrderID();

                    alert("Your Order ID is => " + purchaseID);

                    var awPixel = new Image(0, 0);
                    awPixel.src = "https://www.awin1.com/sread.img?tt=ns&tv=2&merchant="+ checkMID() +"&amount=1.00&ch=" + sChannel + "&parts=DEFAULT:1.00&ref=" + purchaseID + "&vc=&cr=BRL&testmode=0";

                    /*** Do not change ***/
                    var AWIN = {};
                    AWIN.Tracking = {};
                    AWIN.Tracking.Sale = {};
                    /*** Set your transaction parameters ***/
                    AWIN.Tracking.Sale.amount = "1.00";
                    AWIN.Tracking.Sale.channel = sChannel; 
                    AWIN.Tracking.Sale.orderRef = purchaseID;
                    AWIN.Tracking.Sale.parts = "DEFAULT:1.00";
                    AWIN.Tracking.Sale.currency = "BRL";
                    AWIN.Tracking.Sale.voucher = "";
                    AWIN.Tracking.Sale.test = "0";
                    
                    appendAwinMastertag();
                }
                </script>
            </div>
            <div class="productImg">
                <img src="awin.png" class="rtx">
            </div>
        </div>
    </section>
</body>

</html>
