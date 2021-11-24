---
title: "GlusterFS Calculator"
description: "Determine node count and disk space in a GlusterFS Dispersed volume."
weight: 8
feature: "default.png"
ProjectType: "Software"
website: "/projects/gluster-calc/"
---

<style type="text/css">

	#gluster-calc-form{
		width: 80%;
	}

	#parityBricks{
		display: inline-block;
		width: 24%;
	}

	span.first-row{
		display: inline-block;
		width: 5%;
		text-align: center;
	}

	#dataBricks{
		display: inline-block;
		width: 24%;
	}

	#totalBricks{
		display: inline-block;
		width: 39%;
	}

	#usableStorage{
		display: inline-block;
		width: 39%;
	}

	#percentStorage{
		display: inline-block;
		width: 20%;
	}

	#totalStorage{
		display: inline-block;
		width: 39%;
	}

	#gluster-calc-form :disabled{
		color: black;
	}
</style>

<h2>Gluster Dispersed Volume Calculator</h2>

<form id="gluster-calc-form">
	<label id="parityBricks"># bricks to lose:
		<input type="text" value="1" />
	</label>
	<span class="first-row">x</span>
	<label id="dataBricks"># data bricks:
		<input type="text" value="2" />
	</label>
	<span class="first-row">=</span>
	<label id="totalBricks">Total Bricks:
		<input type="text" value="3" disabled />
	</label>
	<label id="brickSize">brick size in GiB:
		<input type="text" value="100" />
	</label>
	<label id="usableStorage">Usable Storage:
		<input type="text" value="200 GiB" disabled />
	</label>
	<label id="percentStorage">% of:
		<input type="text" value="66.0%" disabled />
	</label>
	<label id="totalStorage">Total Storage:
		<input type="text" value="300 GiB" disabled />
	</label>
	<label id="stripeSize">Stripe Size:
		<input type="text" value="1024 (optimal)" disabled />
	</label>
</form>

<script src="gluster-calc.js"></script>

<script type="text/JavaScript">

$( "#gluster-calc-form" ).change( function( event ){

	event.preventDefault();

	parityBricks = Number( $( "#parityBricks input" ).val());
	dataBricks = Number( $( "#dataBricks input" ).val());
	brickSize = Number( $( "#brickSize input" ).val());

	if( parityBricks <= 0 ){

		alert( "# of to lose bricks needs to be higher than 0!" );
		return;
	}

	totalBricks = calcTotalBricks( parityBricks, dataBricks );
	dataBricks = calcDataBricks( parityBricks, totalBricks );
	usableStorage = dvCalcUsableStorage( brickSize, dataBricks );
	totalStorage = dvCalcTotalStorage( brickSize, totalBricks );
	percSize = dvCalcStoragePercent( brickSize, dataBricks, totalBricks );
	stripeSize = calcStripeSize( dataBricks );

	$( "#dataBricks input" ).val( dataBricks );
	$( "#totalBricks input" ).val( totalBricks );
	$( "#usableStorage input" ).val( usableStorage );
	$( "#percentStorage input" ).val( percSize );
	$( "#stripeSize input" ).val( stripeSize );

});

</script>
