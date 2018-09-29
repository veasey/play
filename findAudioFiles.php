<?php

$audioFiles = [];
foreach (glob("*.mp3") as $file) {
  $audioFiles[] = $file;
}

echo json_encode($audioFiles);
exit;
