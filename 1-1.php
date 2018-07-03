<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-26 10:47:26
 * @version $Id$
 */
header("Content-type:text/html;charset=utf-8");

$con = new PDO("mysql:host=127.0.0.1;dbname=news",'root','root',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8';"));

$sql = "select * from user ";
//PDO::prepare —准备要执行的SQL语句并返回一个 PDOStatement 对象
$command = $con->prepare($sql);
//PDOStatement::execute — 执行一条预处理语句
$command->execute();

//PDOStatement::fetchAll — 返回一个包含结果集中所有行的数组
$userArr = $command->fetchAll();
if(count($userArr) > 0){
    foreach($userArr as $user){
        print_r(json_encode($user));
    }
}else{
    echo "没有数据";
}