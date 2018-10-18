<?php
$myReq = array();

// Get the below values from your vendor dashboard, Vendor Settings / Integrations
$myReq['vendor_id'] = 34736;
$myReq['vendor_auth_code'] = "d8c55da9085d35e7aead545d3fbfc88cddaf8eb8e2f495340d";

$errMsg = "";

if (isset($_POST['subscription_id'])) {
    $myReq['product_id'] = $_POST['subscription_id'];
} else {
    $errMsg = "No subscription ID passed";
}
if (isset($_POST['recurring_prices'])) {
    $myReq['recurring_prices'] = explode(",", $_POST['recurring_prices']);
} else {
    $errMsg = "No recurring price passed";
}
if (isset($_POST['title'])) {
    $myReq['title'] = $_POST['title'];
}
if (isset($_POST['prices'])) {
    $myReq['prices'] = explode(",", $_POST['prices']);
}
if (isset($_POST['trial_days'])) {
    $myReq['trial_days'] = $_POST['trial_days'];
}
if (isset($_POST['custom_message'])) {
    $myReq['custom_message'] = $_POST['custom_message'];
}
if (isset($_POST['quantity'])) {
    $myReq['quantity'] = $_POST['quantity'];
}
if (isset($_POST['passthrough'])) {
    $myReq['passthrough'] = $_POST['passthrough'];
}
$myReq['expires'] = date('Y-m-d', strtotime("+1 days"));

try {
    if ($errMsg) {
        throw new Exception($errMsg, 500);
    } else {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,"https://vendors.paddle.com/api/2.0/product/generate_pay_link");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,
                    http_build_query($myReq));

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close($ch);
        echo $server_output;
    }
} catch (Exception $e) {
    header('HTTP/1.0 400 Bad error');
    echo json_encode(array(
        'error' => array(
            'msg' => $e->getMessage(),
            'code' => $e->getCode(),
        ),
    ));
}
?>