<?php
	session_start();
	header('Content-Type:text/html;charset=UTF-8');
	function load_Det(){
		include('../config.php');

		$numberQuery = mysql_query("SELECT number FROM candidates",$con);
		$counter = 0;
		while($row = mysql_fetch_array($numberQuery)){
			$number = $row[0];
			$detailInfo_1 = mysql_query("SELECT name,number,college,style,proof,introduce FROM candidates WHERE number='$number'",$con);
			if(!$detailInfo_1){
				die("Error in getting details". mysql_error());
			}
			$detailInfo = mysql_fetch_row($detailInfo_1);
			$json_infoDet = array(
				"name"=>$detailInfo[0],
				"number"=>$detailInfo[1],
				"college"=>$detailInfo[2],
				"style"=>$detailInfo[3],
				"proof"=>$detailInfo[4],
				"introduce"=>$detailInfo[5]
			);
			foreach ($json_infoDet as $key => $value) {
				$json_infoDet[$key] = urlencode($value);
			}
			//$json_return = serialize($json_infoDet);
			$ret = json_encode($json_infoDet);
			$ret = urldecode($ret);
			echo $ret;
			$jsonName = "introduce_".$number.".json";
			$jsonFile = fopen($jsonName, "w");
			fwrite($jsonFile, $ret);
		}
	}
	load_Det();
?>	