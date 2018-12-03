<?php
		$username=$_POST['name'];
		$password=$_POST['passwords'];
    $coon=new mysqli('localhost','root','','db_jingdong_admin',3306);
    $sql="select * from admin where username='$username'";
    $coon->query("SET CHARACTER SET 'utf8'");
    $coon->query("SET NAMES 'utf8'");
    $str=$coon->query($sql);
    $str=$str->fetch_assoc();
    if($str) {
        echo '用户名以存在';
    } else {
        $sql="INSERT INTO admin(username,password)VALUES('$username','$password')";
        $res=$coon->query($sql);
        if($res){
        	echo '注册成功';
        }
    }
	
?>