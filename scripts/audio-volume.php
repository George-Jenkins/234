<?php

$fileArray = scandir("../tmp-digital-files");

foreach($fileArray as $file){

exec('/usr/local/bin/ffmpeg -i ../tmp-digital-files/"'.$file.'" -af "volume=2.5" ../digital-files/"'.$file.'"');
unlink("../tmp-digital-files/".$file);

}//foreach


?>