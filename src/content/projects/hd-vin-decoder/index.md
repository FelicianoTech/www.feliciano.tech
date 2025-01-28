---
title: "Harley Davidson VIN Decoder"
description: "A little app that tells you information about a Harley-Davidson VIN."
weight: 40
feature: "hd-vin-decoder.png"
ProjectType: "Software"
website: "/projects/hd-vin-decoder/"
---

Every street legal vehicle in the United States has a Vehicle Identification Number, otherwise known as a VIN.
Enter a Harley's VIN here (1986 and newer) and we can tell you if it's valid and if it is, some information about the bike.
Don't have a VIN? You can test this decoder with this VIN: `1HD1KEF14LB616481`

<form id="vin-decode-form">
	<input type="text" placeholder="Enter a VIN">
	<input type="submit" value="Check VIN">
</form>

<script type="text/JavaScript">
    document.querySelector( "#vin-decode-form" ).addEventListener( "submit", ( event ) => {

	    event.preventDefault();
    	decodeVIN( document.querySelector( "#vin-decode-form input[type='text']" ).value, document.querySelector( "#hd-vin-decoder-output" ));
    });
</script>

<div id="hd-vin-decoder-output" style="padding-top: 20px;"></div>

<script src="hd-vin-decoder.js"></script>
