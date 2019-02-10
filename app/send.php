<?php

  $name = $_POST['user_name'];
  $theme = $_POST['user_theme'];
  $email = $_POST['user_email'];
  
  $token = "764000482:AAH79WOgmyDmmWAgLuB8vc2p31p0sTCmQZY";
  
  $chat_id = "369395946";
  
  $arr = array(
    'Имя пользователя: ' => $name,
    'Тема: ' => $theme,
    'Email' => $email
  );
  
  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    echo "Thank you";
  } else {
    echo "Error";
  }
?>