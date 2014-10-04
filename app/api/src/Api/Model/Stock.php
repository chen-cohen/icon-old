<?php
/**
 * Created by IntelliJ IDEA.
 * User: chen cohen
 * Date: 05/01/14
 * Time: 21:07
 * To change this template use File | Settings | File Templates.
 */
namespace Api\Model;


class Stock
{


	public static function getStock(){
	$host = 'localhost';
	$port = '3306';
	$database = 'icon';
	$user = 'root';
	$password = '';
	$table = "stock";
	$pg_con = new PDO("mysql:host={$host}; dbname={$database}; port={$port}", $user, $password);




	$pg_con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$query="select * from stock";
	$results = $pg_con->query($query)->fetchAll(PDO::FETCH_ASSOC) ;

	return $results;
	}


}


