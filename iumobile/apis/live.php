﻿<?php
include('include/header.inc.php');
$info=$db->GetRow("select * from ktvs where id='$_GET[id]'");
include('include/footer.inc.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN" xml:lang="zh-CN">
	<head>
		<title>record</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<style type="text/css" media="screen">
		html, body { height:100%; background-color: #666666;}
		body { margin:0; padding:0; overflow:hidden; }
		#flashContent { width:100%; height:100%; }
		</style>
	</head>
	<body>
		<h1><?php echo $info['name']?>直播页</h1>
		<div id="flashContent">
			<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="960" height="540" id="record" align="middle">
				<param name="movie" value="record.swf?ktvid=<?php echo $info['id']?>" />
				<param name="quality" value="high" />
				<param name="bgcolor" value="#666666" />
				<param name="play" value="true" />
				<param name="loop" value="true" />
				<param name="wmode" value="gpu" />
				<param name="scale" value="showall" />
				<param name="menu" value="true" />
				<param name="devicefont" value="false" />
				<param name="salign" value="" />
				<param name="allowScriptAccess" value="sameDomain" />
				<!--[if !IE]>-->
				<object type="application/x-shockwave-flash" data="record.swf?ktvid=<?php echo $info['id']?>" width="960" height="540">
					<param name="movie" value="record.swf?ktvid=<?php echo $info['id']?>" />
					<param name="quality" value="high" />
					<param name="bgcolor" value="#666666" />
					<param name="play" value="true" />
					<param name="loop" value="true" />
					<param name="wmode" value="gpu" />
					<param name="scale" value="showall" />
					<param name="menu" value="true" />
					<param name="devicefont" value="false" />
					<param name="salign" value="" />
					<param name="allowScriptAccess" value="sameDomain" />
				<!--<![endif]-->
					<a href="http://www.adobe.com/go/getflash">
						<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获得 Adobe Flash Player" />
					</a>
				<!--[if !IE]>-->
				</object>
				<!--<![endif]-->
			</object>
		</div>
	</body>
</html>