<?php
   $username=$_POST['name'];
   $password=$_POST['passwords'];
   $coon=new mysqli('localhost','root','','db_jingdong_admin',3306);
    $sql="select * from admin where username='$username'";
    $coon->query("SET CHARACTER SET 'utf8'");
    $coon->query("SET NAMES 'utf8'");
    $str=$coon->query($sql);
    $str=$str->fetch_all();
    if(!$str){
    	echo 'username is not';
    }else{
    	if($password!=$str[0][2]){
    		echo 'password error';
    	}else{
    		echo 'success';
    	}
    }
?>