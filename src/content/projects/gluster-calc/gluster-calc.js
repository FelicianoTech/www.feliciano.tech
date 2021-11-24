function calcDataBricks( parityBricks, totalBricks ){

	return totalBricks - parityBricks;
}

function calcTotalBricks( parityBricks, dataBricks ){

	if ( parityBricks <= 0 ){
		return -1;
	}

	totalBricks = parityBricks + dataBricks ;
	totalMinimum = ( 2 * parityBricks ) + 1;

	if( totalBricks >= totalMinimum ){
		return totalBricks;
	}

	return totalMinimum;
}

function calcStripeSize( dataBricks ){

	stripeSize = 512 * dataBricks;
	let suffix = "";

	if( checkOptimalStripe( stripeSize )){
		suffix =" (optimal)";
	}

	return stripeSize + " bytes" + suffix;
}

function checkOptimalStripe( value ){
	return Math.log2( value ) % 1 === 0;
}

function dvCalcUsableStorage( size, dataBricks ){
	return (size * dataBricks) + " GiB";
}

function dvCalcTotalStorage( size, totalBricks ){
	return Number( size ) * Number( totalBricks );
}

function dvCalcStoragePercent( size, dataBricks, totalBricks ){
	return (( size * dataBricks ) / (size * totalBricks) * 100 ).toFixed(1) + "%";
}

function decodeVIN( vin, div ){
	
	// setup
	div.html( "" );
	vin = vin.toUpperCase();

	if( vin.length == 0 ){

		div.append( "Error: Please enter a VIN." );
		return;
	}

	if( vin.length != 17 ){
	
		div.append( "Error: Not a valid VIN. Must be 17-characters." );
		return;
	}

	if( verifyCheckDigit( vin ) == false ){
	
		div.append( "Error: Not a valid VIN." );
		return;
	}

	var manufID;
	manufacturerID.forEach( function( item ){
		
		if( item.code == vin.substring( 0, 3 ) ){
			manufID = item.value;
		}
	});

	var weightClass;
	weightClasses.forEach( function( item ){
		
		if( item.code == vin.substring( 3, 4 ) ){
			weightClass = item.value;
		}
	});

	var model;
	modelID.forEach( function( item ){
		
		if( item.code == vin.substring( 4, 6 ) ){
			model = item.value;
		}
	});

	var engine;
	engines.forEach( function( item ){
		
		if( item.code == vin.substring( 6, 7 ) ){
			engine = item.value;
		}
	});

	var introduction;
	introductionPeriods.forEach( function( item ){
		
		if( item.code == vin.substring( 7, 8 ) ){
			introduction = item.value;
		}
	});

	var mfgPlant;
	var yearGroup;
	manufacturingPlant.forEach( function( item ){
		
		if( item.code == vin.substring( 10, 11 ) ){
			mfgPlant = item.value;
			yearGroup = item.yearGroup;
		}
	});

	var modelYear;
	modelYears.forEach( function( item ){
		
		if( item.code == vin.substring( 9, 10 ) ){
			modelYear = item.value[ yearGroup ];
		}
	});


	div.append( "<table>" +
		"<thead><tr><th colspan=2>Info for VIN: " + vin + "</th></tr></thead>" +
		"<tbody>" +
		"<tr><td>Manufactured:</td><td>" + manufID + "</td></tr>" +
		"<tr><td>Weight class:</td><td>" + weightClass + "</td></tr>" +
		"<tr><td>Model designation:</td><td>" + model + "</td></tr>" +
		"<tr><td>Engine:</td><td>" + engine + "</td></tr>" +
		"<tr><td>Introduced:</td><td>" + introduction + "</td></tr>" +
		"<tr><td>Model year:</td><td>" + modelYear + "</td></tr>" +
		"<tr><td>Manufacturing plant:</td><td>" + mfgPlant + "</td></tr>" +
		"</tbody>" +
		"<tfoot><tr><td colspan=2 style='text-align:right;font-size:smaller;'>HD VIN Decoder v1.0.0</td></tr></tfoot>" +
		"</table>" );
}
