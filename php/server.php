<?php
function check($x, $y, $r)
{
    if ($x <= 0 && $y <= 0) {
        return $x + $y + ($r / 2) >= 0;
    } elseif ($x <= 0 && $y >= 0) {
        return $x ** 2 + $y ** 2 <= ($r / 2) ** 2;
    } elseif ($x >= 0 && $y <= 0) {
        return $x <= $r / 2 && $y >= -1 * $r;
    } else {
        return false;
    }
}

function valid($x, $y, $r){
    if ($x < -3 || $x > 5){
        return false;
    } elseif ($y <= -3 || $y >= 5){
        return false;
    } elseif ($r < 1 || $r > 5){
        return false;
    } else{
        return true;
    }
}

    session_start();
    if(!isset($_SESSION['data'])) {
        $_SESSION['data'] = array();
    }
    $xValue = $_GET['x'];
    $yValue = $_GET['y'];
    $rValue = $_GET['r'];
    $timezoneOffset = $_GET['timezone'];

    $currentTime = date('H:i:s', time() - $timezoneOffset * 60);

    if(valid($xValue, $yValue, $rValue)) {
        $result = check($xValue, $yValue, $rValue);
        $text_result = $result ? 'hit' : 'miss';

        $executionTime = round((microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) * 1000, 3);
        
        $answer = array("x"=>$xValue, "y"=>$yValue, "r"=>$rValue, "result"=>$text_result, "current_time"=>$currentTime,
            "execution_time"=>$executionTime);

        $_SESSION['data'][] = $answer;

        echo "<tr>";
        echo "<td>" . $xValue. "</td>";
        echo "<td>" . $yValue . "</td>";
        echo "<td>" . $rValue . "</td>";
        echo "<td>" . $text_result . "</td>";
        echo "<td>" . $currentTime . "</td>";
        echo "<td>" . $executionTime . "</td>";
        echo "</tr>";
    } else {
        http_response_code(400);
        header("400 Invalid values for request");
        include("400.php");
        die();
    }
?>