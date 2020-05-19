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

function verifyCheckDigit( vin ){
	
	// setup
	vin = vin.toUpperCase();

	letterValues = {
			  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
			  J: 1, K: 2, L: 3, M: 4, N: 5,       P: 7,       R: 9,
			  S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
		0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
	};
	
	weights = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ];

	var runningTotal = 0;

	for( i = 0; i < vin.length; i++ ){
		runningTotal += letterValues[ vin[ i ]] * weights[ i ];
	}

	calcDigit = runningTotal % 11;

	if( calcDigit == 10 ){
		calcDigit = 'X';
	}

	if( calcDigit == vin[8] ){
		return true
	}else{
		return false
	}
}


// Much of this DB type data should move to a JSON file at some point
var manufacturerID = [
	{ "code": "1HD", "value": "Manufactured in the U.S.A. for the U.S.A." },
	{ "code": "5HD", "value": "Manufactured in the U.S.A. for other countries." },
	{ "code": "932", "value": "Manufactured in and for sale only in Brazil." },
	{ "code": "MEG", "value": "Manufactured in and for sale only in India." },
	{ "code": "MLY", "value": "Originally manufactured in Thailand." },
];

var weightClasses = [
	{ "code": "1", "value": "Heavyweight (901cc or larger)" },
	{ "code": "2", "value": "Middleweight electric" },
	{ "code": "4", "value": "Middleweight (351cc - 900cc)" },
	{ "code": "8", "value": "Sidecar" },
];

var modelID = [
	{ "code": "AA", "type": "touring", "value": "FLH" },
	{ "code": "AB", "type": "touring", "value": "FLHP" },
	{ "code": "AC", "type": "touring", "value": "FLH" },
	{ "code": "AD", "type": "touring", "value": "FLH - Classic" },
	{ "code": "AE", "type": "touring", "value": "FLT" },
	{ "code": "AF", "type": "touring", "value": "FLTC" },
	{ "code": "AH", "type": "touring", "value": "FLHP - Deluxe" },
	{ "code": "AJ", "type": "touring", "value": "FLH - Heritage" },
	{ "code": "AK", "type": "touring", "value": "FLHS" },
	{ "code": "AL", "type": "touring", "value": "FLH - Shrine" },
	{ "code": "DA", "type": "touring", "value": "FLT, FLHTP" },
	{ "code": "DB", "type": "touring", "value": "FLTC" },
	{ "code": "DC", "type": "touring", "value": "FLHT" },
	{ "code": "DD", "type": "touring", "value": "FLHT" },
	{ "code": "DE", "type": "touring", "value": "FLHTC" },
	{ "code": "DF", "type": "touring", "value": "FLHTP" },
	{ "code": "DG", "type": "touring", "value": "FLHTC Shrine" },
	{ "code": "DH", "type": "touring", "value": "FLTC" },
	{ "code": "DJ", "type": "touring", "value": "FLHTC" },
	{ "code": "DK", "type": "touring", "value": "FLTC Shrine" },
	{ "code": "DM", "type": "touring", "value": "FLTCU - Ultra" },
	{ "code": "DN", "type": "touring", "value": "FLTCU - Ultra" },
	{ "code": "DP", "type": "touring", "value": "FLHTC" },
	{ "code": "DS", "type": "touring", "value": "FLTCU - Ultra Shrine" },
	{ "code": "DT", "type": "touring", "value": "FLHTCU - Ultra Shrine" },
	{ "code": "FA", "type": "touring", "value": "FLHRS, FLHS" },
	{ "code": "FB", "type": "touring", "value": "FLHRI, FLHR" },
	{ "code": "FC", "type": "touring", "value": "FLHTCUI, FLHTCU" },
	{ "code": "FD", "type": "touring", "value": "FLHR" },
	{ "code": "FE", "type": "touring", "value": "FLTCUI" },
	{ "code": "FF", "type": "touring", "value": "FLHTCI, FLHTC" },
	{ "code": "FG", "type": "touring", "value": "FLHTCUI" },
	{ "code": "FH", "type": "touring", "value": "FLHPI" },
	{ "code": "FL", "type": "touring", "value": "FLHTCUI, FLHTCU" },
	{ "code": "FM", "type": "touring", "value": "FLHTPI" },
	{ "code": "FP", "type": "touring", "value": "FLTR" },
	{ "code": "FR", "type": "touring", "value": "FLHRCI, FLHRC" },
	{ "code": "FS", "type": "touring", "value": "FLTRI" },
	{ "code": "FT", "type": "touring", "value": "FLHPEI" },
	{ "code": "FW", "type": "touring", "value": "FLHR Shrine" },
	{ "code": "KA", "type": "touring", "value": "FLHX" },
	{ "code": "KB", "type": "touring", "value": "FLHX" },
	{ "code": "KE", "type": "touring", "value": "FLHTK" },
	{ "code": "KG", "type": "touring", "value": "FLTRU" },
	{ "code": "KH", "type": "touring", "value": "FLTRX" },
	{ "code": "KX", "type": "touring", "value": "SIDECAR TLE ULTRA" },
	{ "code": "MA", "type": "touring", "value": "FLHTCUTG - Trike" },
	{ "code": "MB", "type": "touring", "value": "Trike" },
	{ "code": "PF", "type": "touring", "value": "FLSTDSE" },
	{ "code": "PG", "type": "touring", "value": "FLHRSEI2" },
	{ "code": "PR", "type": "touring", "value": "FLHTCUSE7 - CVO" },
	{ "code": "PY", "type": "touring", "value": "FLSTSE3 - CVO" },
	{ "code": "PZ", "type": "touring", "value": "FLHXSE - CVO" },
	{ "code": "MC", "type": "touring", "value": "FLRT" },
	{ "code": "BA", "type": "dyna-glide", "value": "FXE" },
	{ "code": "BB", "type": "dyna-glide", "value": "FXEF, FXSTDI" },
	{ "code": "BC", "type": "dyna-glide", "value": "FXS" },
	{ "code": "BD", "type": "dyna-glide", "value": "FXB" },
	{ "code": "BE", "type": "dyna-glide", "value": "FXWG" },
	{ "code": "BF", "type": "dyna-glide", "value": "FXSB" },
	{ "code": "BG", "type": "dyna-glide", "value": "FXDG" },
	{ "code": "EA", "type": "dyna-glide", "value": "FXR" },
	{ "code": "EB", "type": "dyna-glide", "value": "FXRS" },
	{ "code": "EC", "type": "dyna-glide", "value": "FXRT" },
	{ "code": "ED", "type": "dyna-glide", "value": "FXRP - Windshield" },
	{ "code": "EE", "type": "dyna-glide", "value": "FXRDG" },
	{ "code": "EF", "type": "dyna-glide", "value": "FXRP - Fairing" },
	{ "code": "EG", "type": "dyna-glide", "value": "FXRS-SP Sport Edition" },
	{ "code": "EH", "type": "dyna-glide", "value": "FXRD" },
	{ "code": "EJ", "type": "dyna-glide", "value": "FXRC" },
	{ "code": "EK", "type": "dyna-glide", "value": "FXRP - C.H.P." },
	{ "code": "EL", "type": "dyna-glide", "value": "FXLR" },
	{ "code": "EM", "type": "dyna-glide", "value": "FXRS – CON" },
	{ "code": "ES", "type": "dyna-glide", "value": "FXR" },
	{ "code": "ET", "type": "dyna-glide", "value": "FXR" },
	{ "code": "EV", "type": "dyna-glide", "value": "FXR" },
	{ "code": "GA", "type": "dyna-glide", "value": "FXDB-D Daytona" },
	{ "code": "GB", "type": "dyna-glide", "value": "FXDB-S Sturgis" },
	{ "code": "GC", "type": "dyna-glide", "value": "FXDC" },
	{ "code": "GD", "type": "dyna-glide", "value": "FXDL" },
	{ "code": "GE", "type": "dyna-glide", "value": "FXDWG" },
	{ "code": "GG", "type": "dyna-glide", "value": "FXDS-CON" },
	{ "code": "GH", "type": "dyna-glide", "value": "FXD" },
	{ "code": "GJ", "type": "dyna-glide", "value": "FXDX" },
	{ "code": "GK", "type": "dyna-glide", "value": "FXDP" },
	{ "code": "GL", "type": "dyna-glide", "value": "FXDXT" },
	{ "code": "GM", "type": "dyna-glide", "value": "FXDI" },
	{ "code": "GN", "type": "dyna-glide", "value": "FXDL" },
	{ "code": "GP", "type": "dyna-glide", "value": "FXDWG" },
	{ "code": "GR", "type": "dyna-glide", "value": "FXDXI" },
	{ "code": "GT", "type": "dyna-glide", "value": "FXDC" },
	{ "code": "GV", "type": "dyna-glide", "value": "FXDC" },
	{ "code": "GX", "type": "dyna-glide", "value": "TL" },
	{ "code": "GY", "type": "dyna-glide", "value": "FXDF" },
	{ "code": "GZ", "type": "dyna-glide", "value": "FLD" },
	{ "code": "PB", "type": "dyna-glide", "value": "FXDWG" },
	{ "code": "PE", "type": "dyna-glide", "value": "FXDWG3" },
	{ "code": "PS", "type": "dyna-glide", "value": "FXDSE" },
	{ "code": "PX", "type": "dyna-glide", "value": "FSDFSE" },
	{ "code": "VA", "type": "dyna-glide", "value": "FXDBP" },
	{ "code": "BH", "type": "softail", "value": "FXST" },
	{ "code": "BJ", "type": "softail", "value": "FLST, FLSTC" },
	{ "code": "BK", "type": "softail", "value": "FXSTC" },
	{ "code": "BL", "type": "softail", "value": "FXSTS" },
	{ "code": "BM", "type": "softail", "value": "FLSTF" },
	{ "code": "BN", "type": "softail", "value": "FLSTN" },
	{ "code": "BP", "type": "softail", "value": "FXSTSB" },
	{ "code": "BR", "type": "softail", "value": "FLSTS" },
	{ "code": "BS", "type": "softail", "value": "FXSTD" },
	{ "code": "BT", "type": "softail", "value": "FXSTB" },
	{ "code": "BV", "type": "softail", "value": "FXST" },
	{ "code": "BW", "type": "softail", "value": "FLSTC" },
	{ "code": "BX", "type": "softail", "value": "FLSTF" },
	{ "code": "BY", "type": "softail", "value": "FLSTC" },
	{ "code": "BZ", "type": "softail", "value": "FXSTSI" },
	{ "code": "JA", "type": "softail", "value": "FXSTB" },
	{ "code": "JB", "type": "softail", "value": "FXSTDI" },
	{ "code": "JD", "type": "softail", "value": "FLSTN" },
	{ "code": "JE", "type": "softail", "value": "FLST" },
	{ "code": "JF", "type": "softail", "value": "FLSTI" },
	{ "code": "JG", "type": "softail", "value": "FLSTF" },
	{ "code": "JH", "type": "softail", "value": "FLSTC" },
	{ "code": "JJ", "type": "softail", "value": "FXCW" },
	{ "code": "JK", "type": "softail", "value": "FXCWC" },
	{ "code": "JL", "type": "softail", "value": "FXSTC" },
	{ "code": "JM", "type": "softail", "value": "FLSTSB" },
	{ "code": "JN", "type": "softail", "value": "FLSTFB" },
	{ "code": "JP", "type": "softail", "value": "FXS" },
	{ "code": "JR", "type": "softail", "value": "FLS" },
	{ "code": "PF", "type": "softail", "value": "FXSTDSE" },
	{ "code": "PH", "type": "softail", "value": "FXSTDSE" },
	{ "code": "PL", "type": "softail", "value": "FLSTFSE" },
	{ "code": "PN", "type": "softail", "value": "FLSTFSE" },
	{ "code": "PT", "type": "softail", "value": "FXSTSSE" },
	{ "code": "PY", "type": "softail", "value": "FLSTSE" },
	{ "code": "JT", "type": "softail", "value": "FLSTFBS" },
	{ "code": "CA", "type": "sportster", "value": "XLH" },
	{ "code": "CB", "type": "sportster", "value": "XLS" },
	{ "code": "CC", "type": "sportster", "value": "XLX" },
	{ "code": "CD", "type": "sportster", "value": "XR-1000" },
	{ "code": "CE", "type": "sportster", "value": "XL 883H" },
	{ "code": "CF", "type": "sportster", "value": "XL 883 Deluxe" },
	{ "code": "CG", "type": "sportster", "value": "XL 1200C" },
	{ "code": "CH", "type": "sportster", "value": "XL 1200S" },
	{ "code": "CJ", "type": "sportster", "value": "XL 883C" },
	{ "code": "CK", "type": "sportster", "value": "XL 883R" },
	{ "code": "CN", "type": "sportster", "value": "XL883" },
	{ "code": "CM", "type": "sportster", "value": "XL883L" },
	{ "code": "CP", "type": "sportster", "value": "XL883C" },
	{ "code": "CR", "type": "sportster", "value": "XL883L", "model": "XL883L SuperLow" },
	{ "code": "CS", "type": "sportster", "value": "XL883R" },
	{ "code": "CT", "type": "sportster", "value": "XL1200C", "model": "XL1200C 1200 Custom" },
	{ "code": "CV", "type": "sportster", "value": "XL1200R" },
	{ "code": "CW", "type": "sportster", "value": "XL1200L" },
	{ "code": "CX", "type": "sportster", "value": "XL1200L" },
	{ "code": "CY", "type": "sportster", "value": "XL50" },
	{ "code": "CZ", "type": "sportster", "value": "XL1200N" },
	{ "code": "LA", "type": "sportster", "value": "XR1200" },
	{ "code": "LC", "type": "sportster", "value": "XL1200X", "model": "XL1200X Forty-Eight" },
	{ "code": "LD", "type": "sportster", "value": "XR1200X" },
	{ "code": "LE", "type": "sportster", "value": "XL883N", "model": "XL883N Iron 883" },
	{ "code": "LF", "type": "sportster", "value": "XL1200V" },
	{ "code": "LH", "type": "sportster", "value": "XL1200CP" },
	{ "code": "LJ", "type": "sportster", "value": "XL1200CA" },
	{ "code": "LK", "type": "sportster", "value": "XL1200CB" },
	{ "code": "LL", "type": "sportster", "value": "XL1200T", "model": "XL1200T SuperLow 1200T" },
	{ "code": "LM", "type": "sportster", "value": "XL1200CX", "model": "XL1200CX Roadster" },
	{ "code": "LP", "type": "sportster", "value": "XL1200NS", "model": "XL1200NS Iron 1200" },
	{ "code": "LR", "type": "sportster", "value": "XL1200XS", "model": "XL1200XS Forty-Eight® Special" },
	{ "code": "HA", "type": "v-rod", "value": "VRSCA" },
	{ "code": "HC", "type": "v-rod", "value": "VRSCR" },
	{ "code": "HD", "type": "v-rod", "value": "VRSCD" },
	{ "code": "HF", "type": "v-rod", "value": "VRSCA" },
	{ "code": "HH", "type": "v-rod", "value": "VRSCDX" },
	{ "code": "HJ", "type": "v-rod", "value": "VRSCX" },
	{ "code": "HP", "type": "v-rod", "value": "VRSCF" },
	{ "code": "NA", "type": "street", "value": "XG500" },
	{ "code": "NB", "type": "street", "value": "XG750" },
	{ "code": "XA", "type": "electric", "value": "ELW", "model": "ELW LiveWire" },
];

var engines = [
	{ "code": "A", "value": "1130 Revolution (100 CV)" },
	{ "code": "B", "value": "1450 Fuel Injected Counter Balanced" },
	{ "code": "C", "value": "1550" },
	{ "code": "D", "value": "1550 EFI" },
	{ "code": "E", "value": "1690 EFI, Revelation electric power train" },
	{ "code": "F", "value": "1690 Balanced-EFI" },
	{ "code": "G", "value": "1246 Revolution EFI" },
	{ "code": "H", "value": "1246 (2001-2009), 1000 Ironhead XL" },
	{ "code": "J", "value": "1246" },
	{ "code": "K", "value": "1340 Shovelhead" },
	{ "code": "L", "value": "1340 Evolution" },
	{ "code": "M", "value": "883 Evolution XL, Twin Cam 103" },
	{ "code": "N", "value": "1100 Evolution XL" },
	{ "code": "P", "value": "1200 Evolution XL" },
	{ "code": "A", "value": "500cc Liquid Cooled Revolution X" },
	{ "code": "R", "value": "1340 Evolution Fuel Injected" },
	{ "code": "S", "value": "500 Single (Armstrong Military)" },
	{ "code": "V", "value": "Twin Cam 88 Carburetor, 130B" },
	{ "code": "W", "value": "Twin Cam 88 Fuel Injected" },
	{ "code": "Y", "value": "Twin Cam 88 Counter Balanced - Carb" },
	{ "code": "Z", "value": "1130 Revolution" },
	{ "code": "1", "value": "1450 EFI" },
	{ "code": "2", "value": "883cc ESPFI" },
	{ "code": "3", "value": "1202cc ESPFI" },
	{ "code": "4", "value": "1584 ESPFI" },
	{ "code": "5", "value": "1584 ESPFI, Twin Cam 96B" },
	{ "code": "6", "value": "1200" },
	{ "code": "8", "value": "1800 ESPFI" },
	{ "code": "9", "value": "1800 ESPFI H 1250 ESPFI" },
	{ "code": "B", "value": "749cc Liquid Cooled Revolution X" },
];

var introductionPeriods = [
	{ "code": "1", "value": "Domestic" },
	{ "code": "2", "value": "California" },
	{ "code": "3", "value": "Canada" },
	{ "code": "4", "value": "Domestic (Mid-Year)" },
	{ "code": "5", "value": "Japan" },
	{ "code": "6", "value": "Australia" },
	{ "code": "A", "value": "Canada (Normal)" },
	{ "code": "B", "value": "Canada (Mid-Year)" },
	{ "code": "C", "value": "International (Normal)" },
	{ "code": "D", "value": "International (Mid-Year)" },
	{ "code": "E", "value": "Japan (Normal)" },
	{ "code": "F", "value": "Japan (Mid-Year)" },
	{ "code": "G", "value": "Australia (Normal)" },
	{ "code": "H", "value": "Australia (Mid-Year)" },
	{ "code": "J", "value": "Brazil (Normal)" },
	{ "code": "K", "value": "Brazil (Mid-Year)" },
	{ "code": "L", "value": "Asia Pacific (Normal)" },
	{ "code": "M", "value": "Asia Pacific (Mid-Year)" },
	{ "code": "N", "value": "India (Normal)" },
	{ "code": "P", "value": "India (Mid-Year)" },
];

var modelYears = [
	{ "code": "A", "value": ["1980", "2010"] },
	{ "code": "B", "value": ["1981", "2011"] },
	{ "code": "C", "value": ["1982", "2012"] },
	{ "code": "D", "value": ["1983", "2013"] },
	{ "code": "E", "value": ["1984", "2014"] },
	{ "code": "F", "value": ["1985", "2015"] },
	{ "code": "G", "value": ["1986", "2016"] },
	{ "code": "H", "value": ["1987", "2017"] },
	{ "code": "J", "value": ["1988", "2018"] },
	{ "code": "K", "value": ["1989", "2019"] },
	{ "code": "L", "value": ["1990", "2020"] },
	{ "code": "M", "value": ["1991", "2021"] },
	{ "code": "N", "value": ["1992", "2022"] },
	{ "code": "P", "value": ["1993", "2023"] },
	{ "code": "R", "value": ["1994", "2024"] },
	{ "code": "S", "value": ["1995", "2025"] },
	{ "code": "T", "value": ["1996", "2026"] },
	{ "code": "V", "value": ["1997", "2027"] },
	{ "code": "W", "value": ["1998", "2028"] },
	{ "code": "X", "value": ["1999", "2029"] },
	{ "code": "Y", "value": ["2000", "2030"] },
	{ "code": "1", "value": ["2001", "2031"] },
	{ "code": "2", "value": ["2002", "2032"] },
	{ "code": "3", "value": ["2003", "2033"] },
	{ "code": "4", "value": ["2004", "2034"] },
	{ "code": "5", "value": ["2005", "2035"] },
	{ "code": "6", "value": ["2006", "2036"] },
	{ "code": "7", "value": ["2007", "2037"] },
	{ "code": "8", "value": ["2008", "2038"] },
	{ "code": "9", "value": ["2009", "2039"] },
];

var manufacturingPlant = [
	{ "code": "B", "value": "York, PA", "yearGroup": 1 },
	{ "code": "Y", "value": "York, PA", "yearGroup": 0 },
	{ "code": "T", "value": "Tomahawk, WI", "yearGroup": 0 },
	{ "code": "J", "value": "Milwaukee, WI", "yearGroup": 0 },
	{ "code": "K", "value": "Kansas City, MO", "yearGroup": 0 },
	{ "code": "D", "value": "Manaus, Brazil", "yearGroup": 0 },
	{ "code": "E", "value": "Buell East Troy", "yearGroup": 0 },
	{ "code": "N", "value": "Haryana, India (Bawal District Rewari)", "yearGroup": 0 },
	{ "code": "C", "value": "Kansas City, MO", "yearGroup": 1 },
];
