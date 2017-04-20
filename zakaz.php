<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['addres'])&&$_POST['addres']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'denis<dorroga24@mail.ru>, '; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новый заказ'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
	                    <meta http-equiv="content-language" content="ru">
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Адрес: '.$_POST['addres'].'</p>
                        <p>Телефон: <a href="tel:'.$_POST['phone'].'">'.$_POST['phone'].'</a></p>
                        <p>E-Mail: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a></p>
                        <p>Комментарий: '.$_POST['comm'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заказ <zakaz@xn----8sbnaqoij9bc7c8c.xn--p1ai>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo $message;
}
?>
