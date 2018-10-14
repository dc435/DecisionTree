//Initial value definitions:
//Probabilities:
	let pWinPrelim, pLosePrelim, pWinMain, pLoseMain, pDamLow, pDamMid, pDamHigh;
	let awardHigh, awardMid, awardLow, awardLoseMain, awardLosePrelim;
	let costsHigh, costsMid, costsLow, costsLoseMain, costsLosePrelim, OPcostsHigh, OPcostsMid, OPcostsLow, OPcostsLoseMain, OPcostsLosePrelim;
	let netHigh, netMid, netLow, netLoseMain, netLosePrelim;
	let netHighp, netMidp, netLowp, netLoseMainp, netLosePrelimp;
	let erHigh, erMid, erLow, erLoseMain, erLosePrelim;
	let erTotal;
	let caseProgress = 0;

	let pInputs = document.getElementsByClassName("userInputProb");
	for (let i = 0; i < pInputs.length; i++) {
		pInputs[i].onblur=calculate;
	};
	let amountInputs = document.getElementsByClassName("userInputAmount");
	for (let i = 0; i < amountInputs.length; i++) {
		amountInputs[i].onblur=calculate;
	};

initialSetUp ();
calculate ();

function initialSetUp () {

	//Initial value definitions:
	//Probabilities:
	pWinPrelim = 0.8;
	pLosePrelim = 0.2;
	pWinMain = 0.8;
	pLoseMain = 0.2;
	pDamLow = 0.2;
	pDamMid = 0.7;
	pDamHigh = 0.1;

	//Award range:
	awardHigh = 2500000;
	awardMid = 1750000;
	awardLow = 1000000; 
	awardLoseMain = 0;
	awardLosePrelim = 0;

	//Costs:
	costsHigh = -600000;
	costsMid = -600000;
	costsLow = -600000;
	costsLoseMain = -600000;
	costsLosePrelim = -200000;
	OPcostsHigh = 0;
	OPcostsMid = 0;
	OPcostsLow = 0;
	OPcostsLoseMain = -400000;
	OPcostsLosePrelim = -150000;

	netHigh = awardHigh + costsHigh + OPcostsHigh;
	netMid = awardMid + costsMid + OPcostsMid;
	netLow = awardLow + costsLow + OPcostsLow;
	netLoseMain = awardLoseMain + costsLoseMain + OPcostsLoseMain;
	netLosePrelim = awardLosePrelim + costsLosePrelim + OPcostsLosePrelim;

	netHighp = pWinPrelim * pWinMain * pDamHigh;
	netMidp = pWinPrelim * pWinMain * pDamMid;
	netLowp = pWinPrelim * pWinMain * pDamLow;
	netLoseMainp = pWinPrelim * pLoseMain;
	netLosePrelimp = pLosePrelim;

	erHigh = netHigh * netHighp;
	erMid = netMid * netMidp;
	erLow = netLow * netLowp;
	erLoseMain = netLoseMain * netLoseMainp;
	erLosePrelim = netLosePrelim * netLosePrelimp;

	erTotal = erHigh + erMid + erLow + erLoseMain + erLosePrelim;

	pInputs = document.getElementsByClassName("userInputProb");
	for (let i = 0; i < pInputs.length; i++) {
		pInputs[i].onblur=calculate;
		pInputs[i].style.backgroundColor = "lightgrey";
		pInputs[i].style.borderColor = "lightgrey";
	};
	amountInputs = document.getElementsByClassName("userInputAmount");
	for (let i = 0; i < amountInputs.length; i++) {
		amountInputs[i].onblur=calculate;
		amountInputs[i].style.backgroundColor = "lightgrey";
	};

	document.getElementById("pWinPrelim").value = pWinPrelim;
	document.getElementById("pLosePrelim").value = pLosePrelim;
	document.getElementById("pWinMain").value = pWinMain;
	document.getElementById("pLoseMain").value = pLoseMain;
	document.getElementById("pDamLow").value = pDamLow;
	document.getElementById("pDamMid").value = pDamMid;
	document.getElementById("pDamHigh").value = pDamHigh;

	document.getElementById("awardHigh").value = awardHigh;
	document.getElementById("awardMid").value = awardMid;
	document.getElementById("awardLow").value = awardLow;
	document.getElementById("awardLoseMain").value = awardLoseMain;
	document.getElementById("awardLosePrelim").value = awardLosePrelim;

	document.getElementById("costsHigh").value = costsHigh;
	document.getElementById("costsMid").value = costsMid;
	document.getElementById("costsLow").value = costsLow;
	document.getElementById("costsLoseMain").value = costsLoseMain;
	document.getElementById("costsLosePrelim").value = costsLosePrelim;

	document.getElementById("OPcostsHigh").value = OPcostsHigh;
	document.getElementById("OPcostsMid").value = OPcostsMid;
	document.getElementById("OPcostsLow").value = OPcostsLow;
	document.getElementById("OPcostsLoseMain").value = OPcostsLoseMain;
	document.getElementById("OPcostsLosePrelim").value = OPcostsLosePrelim;	

	document.getElementById("erTotal").innerHTML = numberWithCommas(Math.round(erTotal));	

	caseProgress = 0;
}

function calculate() {

	pWinPrelim = document.getElementById("pWinPrelim").value * 1;
	pLosePrelim = document.getElementById("pLosePrelim").value * 1;
	pWinMain = document.getElementById("pWinMain").value * 1;
	pLoseMain = document.getElementById("pLoseMain").value * 1;
	pDamLow = document.getElementById("pDamLow").value * 1;
	pDamMid = document.getElementById("pDamMid").value * 1;
	pDamHigh = document.getElementById("pDamHigh").value * 1;

	awardHigh = document.getElementById("awardHigh").value * 1;
	awardMid = document.getElementById("awardMid").value * 1;
	awardLow = document.getElementById("awardLow").value * 1;
	awardLoseMain = document.getElementById("awardLoseMain").value * 1;
	awardLosePrelim = document.getElementById("awardLosePrelim").value * 1;

	costsHigh = document.getElementById("costsHigh").value * 1; 
	costsMid = document.getElementById("costsMid").value * 1; 
	costsLow = document.getElementById("costsLow").value * 1;
	costsLoseMain = document.getElementById("costsLoseMain").value * 1;
	costsLosePrelim = document.getElementById("costsLosePrelim").value * 1;

	OPcostsHigh = document.getElementById("OPcostsHigh").value * 1;
	OPcostsMid= document.getElementById("OPcostsMid").value * 1;
	OPcostsLow = document.getElementById("OPcostsLow").value * 1;
	OPcostsLoseMain = document.getElementById("OPcostsLoseMain").value * 1;
	OPcostsLosePrelim = document.getElementById("OPcostsLosePrelim").value * 1;

	netHigh = awardHigh + costsHigh + OPcostsHigh;
	netMid = awardMid + costsMid + OPcostsMid;
	netLow = awardLow + costsLow + OPcostsLow;
	netLoseMain = awardLoseMain + costsLoseMain + OPcostsLoseMain;
	netLosePrelim = awardLosePrelim + costsLosePrelim + OPcostsLosePrelim;

	netHighp = pWinPrelim * pWinMain * pDamHigh;
	netMidp = pWinPrelim * pWinMain * pDamMid;
	netLowp = pWinPrelim * pWinMain * pDamLow;
	netLoseMainp = pWinPrelim * pLoseMain;
	netLosePrelimp = pLosePrelim;

	erHigh = netHigh * netHighp;
	erMid = netMid * netMidp;
	erLow = netLow * netLowp;
	erLoseMain = netLoseMain * netLoseMainp;
	erLosePrelim = netLosePrelim * netLosePrelimp;

	erTotal = erHigh + erMid + erLow + erLoseMain + erLosePrelim;

	document.getElementById("netHigh").innerHTML = numberWithCommas(Math.round(netHigh*100)/100);
	document.getElementById("netMid").innerHTML = numberWithCommas(Math.round(netMid*100)/100);
	document.getElementById("netLow").innerHTML = numberWithCommas(Math.round(netLow*100)/100);
	document.getElementById("netLoseMain").innerHTML = numberWithCommas(Math.round(netLoseMain*100)/100);
	document.getElementById("netLosePrelim").innerHTML = numberWithCommas(Math.round(netLosePrelim*100)/100);

	document.getElementById("netHighp").innerHTML = Math.round(netHighp*1000)/1000;
	document.getElementById("netMidp").innerHTML = Math.round(netMidp*1000)/1000;
	document.getElementById("netLowp").innerHTML = Math.round(netLowp*1000)/1000;
	document.getElementById("netLoseMainp").innerHTML = Math.round(netLoseMainp*1000)/1000;
	document.getElementById("netLosePrelimp").innerHTML = Math.round(netLosePrelimp*1000)/1000;	

	document.getElementById("erHigh").innerHTML = numberWithCommas(Math.round(erHigh));
	document.getElementById("erMid").innerHTML = numberWithCommas(Math.round(erMid));
	document.getElementById("erLow").innerHTML = numberWithCommas(Math.round(erLow));
	document.getElementById("erLoseMain").innerHTML = numberWithCommas(Math.round(erLoseMain));
	document.getElementById("erLosePrelim").innerHTML = numberWithCommas(Math.round(erLosePrelim));		

	document.getElementById("erTotal").innerHTML = numberWithCommas(Math.round(erTotal));	
	document.getElementById("erTotal").style.color = "black";

	document.getElementById("numberWarning").style.visibility = "hidden";
	document.getElementById("probWarning").style.visibility = "hidden";

	let numberQuery = this.value*1;

	if (isNaN(numberQuery)) {
		this.style.backgroundColor = "indianred";
	} 
	else {
		this.style.backgroundColor = "lightgrey";
	}

	let pInputsAnyNotNumbers = false;
	for (let i = 0; i < pInputs.length; i++) {
		if (isNaN(pInputs[i].value)) pInputsAnyNotNumbers = true;
	};
	if (pInputsAnyNotNumbers) {
		document.getElementById("numberWarning").style.visibility = "visible";
		document.getElementById("erTotal").innerHTML = "Input Error";
		document.getElementById("erTotal").style.color = "indianred";
	};

	let amountInputsAnyNotNumbers = false;
	for (let i = 0; i < amountInputs.length; i++) {
		if (isNaN(amountInputs[i].value)) amountInputsAnyNotNumbers = true;
	};
	if (amountInputsAnyNotNumbers) {	
		document.getElementById("numberWarning").style.visibility = "visible";
		document.getElementById("erTotal").innerHTML = "Input Error";
		document.getElementById("erTotal").style.color = "indianred";	};

	if (((pWinPrelim + pLosePrelim) >= 1.01) || ((pWinPrelim + pLosePrelim) <= 0.99)) {
		document.getElementById("probWarning").style.visibility = "visible";
		document.getElementById("erTotal").innerHTML = "Input Error";
		document.getElementById("erTotal").style.color = "indianred";
		document.getElementById("pWinPrelim").style.borderColor = "indianred";
		document.getElementById("pLosePrelim").style.borderColor = "indianred";
	}
	else {
		document.getElementById("pWinPrelim").style.borderColor = "lightgrey";
		document.getElementById("pLosePrelim").style.borderColor = "lightgrey";
	}

	if (((pWinMain + pLoseMain) >= 1.01) || ((pWinMain + pLoseMain) <= 0.99)) {
		document.getElementById("probWarning").style.visibility = "visible";
		document.getElementById("erTotal").innerHTML = "Input Error";
		document.getElementById("erTotal").style.color = "indianred";
		document.getElementById("pWinMain").style.borderColor = "indianred";
		document.getElementById("pLoseMain").style.borderColor = "indianred";
	}
	else {
		document.getElementById("pWinMain").style.borderColor = "lightgrey";
		document.getElementById("pLoseMain").style.borderColor = "lightgrey";
	}

	if (((pDamLow + pDamMid + pDamHigh) >= 1.01) || ((pDamLow + pDamMid + pDamHigh) <= 0.99)) {
		document.getElementById("probWarning").style.visibility = "visible";
		document.getElementById("erTotal").innerHTML = "Input Error";
		document.getElementById("erTotal").style.color = "indianred";
		document.getElementById("pDamLow").style.borderColor = "indianred";
		document.getElementById("pDamMid").style.borderColor = "indianred";
		document.getElementById("pDamHigh").style.borderColor = "indianred";
	}
	else {
		document.getElementById("pDamLow").style.borderColor = "lightgrey";
		document.getElementById("pDamMid").style.borderColor = "lightgrey";
		document.getElementById("pDamHigh").style.borderColor = "lightgrey";
	}
}

function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
 }

function refresh () {
 	initialSetUp ();
	calculate ();
}

function toggleProgress () {
 	
	if (caseProgress == 0) {
		alreadyWonPrelimSetUp ();
		caseProgress = 1;
		calculate ();
		
	}
	else if (caseProgress == 1) {
		alreadyWonMainSetUp ();
		caseProgress = 2;
		calculate ();
	}
	else if (caseProgress == 2) {
		initialSetUp ();
		caseProgress = 0;
		calculate ();
	}
 	
}

function alreadyWonPrelimSetUp () {

	//Initial value definitions:
	//Probabilities:
	pWinPrelim = 1.0;
	pLosePrelim = 0.0;
	pWinMain = 0.8;
	pLoseMain = 0.2;
	pDamLow = 0.2;
	pDamMid = 0.7;
	pDamHigh = 0.1;

	//Award range:
	awardHigh = 2500000;
	awardMid = 1750000;
	awardLow = 1000000; 
	awardLoseMain = 0;
	awardLosePrelim = 0;

	//Costs:
	costsHigh = -600000;
	costsMid = -600000;
	costsLow = -600000;
	costsLoseMain = -600000;
	costsLosePrelim = -200000;
	OPcostsHigh = 0;
	OPcostsMid = 0;
	OPcostsLow = 0;
	OPcostsLoseMain = -400000;
	OPcostsLosePrelim = -150000;

	netHigh = awardHigh + costsHigh + OPcostsHigh;
	netMid = awardMid + costsMid + OPcostsMid;
	netLow = awardLow + costsLow + OPcostsLow;
	netLoseMain = awardLoseMain + costsLoseMain + OPcostsLoseMain;
	netLosePrelim = awardLosePrelim + costsLosePrelim + OPcostsLosePrelim;

	netHighp = pWinPrelim * pWinMain * pDamHigh;
	netMidp = pWinPrelim * pWinMain * pDamMid;
	netLowp = pWinPrelim * pWinMain * pDamLow;
	netLoseMainp = pWinPrelim * pLoseMain;
	netLosePrelimp = pLosePrelim;

	erHigh = netHigh * netHighp;
	erMid = netMid * netMidp;
	erLow = netLow * netLowp;
	erLoseMain = netLoseMain * netLoseMainp;
	erLosePrelim = netLosePrelim * netLosePrelimp;

	erTotal = erHigh + erMid + erLow + erLoseMain + erLosePrelim;

	pInputs = document.getElementsByClassName("userInputProb");
	for (let i = 0; i < pInputs.length; i++) {
		pInputs[i].onblur=calculate;
		pInputs[i].style.backgroundColor = "lightgrey";
		pInputs[i].style.borderColor = "lightgrey";
	};
	amountInputs = document.getElementsByClassName("userInputAmount");
	for (let i = 0; i < amountInputs.length; i++) {
		amountInputs[i].onblur=calculate;
		amountInputs[i].style.backgroundColor = "lightgrey";
	};

	document.getElementById("pWinPrelim").value = pWinPrelim;
	document.getElementById("pLosePrelim").value = pLosePrelim;
	document.getElementById("pWinMain").value = pWinMain;
	document.getElementById("pLoseMain").value = pLoseMain;
	document.getElementById("pDamLow").value = pDamLow;
	document.getElementById("pDamMid").value = pDamMid;
	document.getElementById("pDamHigh").value = pDamHigh;

	document.getElementById("awardHigh").value = awardHigh;
	document.getElementById("awardMid").value = awardMid;
	document.getElementById("awardLow").value = awardLow;
	document.getElementById("awardLoseMain").value = awardLoseMain;
	document.getElementById("awardLosePrelim").value = awardLosePrelim;

	document.getElementById("costsHigh").value = costsHigh;
	document.getElementById("costsMid").value = costsMid;
	document.getElementById("costsLow").value = costsLow;
	document.getElementById("costsLoseMain").value = costsLoseMain;
	document.getElementById("costsLosePrelim").value = costsLosePrelim;

	document.getElementById("OPcostsHigh").value = OPcostsHigh;
	document.getElementById("OPcostsMid").value = OPcostsMid;
	document.getElementById("OPcostsLow").value = OPcostsLow;
	document.getElementById("OPcostsLoseMain").value = OPcostsLoseMain;
	document.getElementById("OPcostsLosePrelim").value = OPcostsLosePrelim;	

	document.getElementById("erTotal").innerHTML = numberWithCommas(Math.round(erTotal));	
}

function alreadyWonMainSetUp () {

	//Initial value definitions:
	//Probabilities:
	pWinPrelim = 1.0;
	pLosePrelim = 0.0;
	pWinMain = 1.0;
	pLoseMain = 0.0;
	pDamLow = 0.2;
	pDamMid = 0.7;
	pDamHigh = 0.1;

	//Award range:
	awardHigh = 2500000;
	awardMid = 1750000;
	awardLow = 1000000; 
	awardLoseMain = 0;
	awardLosePrelim = 0;

	//Costs:
	costsHigh = -600000;
	costsMid = -600000;
	costsLow = -600000;
	costsLoseMain = -600000;
	costsLosePrelim = -200000;
	OPcostsHigh = 0;
	OPcostsMid = 0;
	OPcostsLow = 0;
	OPcostsLoseMain = -400000;
	OPcostsLosePrelim = -150000;

	netHigh = awardHigh + costsHigh + OPcostsHigh;
	netMid = awardMid + costsMid + OPcostsMid;
	netLow = awardLow + costsLow + OPcostsLow;
	netLoseMain = awardLoseMain + costsLoseMain + OPcostsLoseMain;
	netLosePrelim = awardLosePrelim + costsLosePrelim + OPcostsLosePrelim;

	netHighp = pWinPrelim * pWinMain * pDamHigh;
	netMidp = pWinPrelim * pWinMain * pDamMid;
	netLowp = pWinPrelim * pWinMain * pDamLow;
	netLoseMainp = pWinPrelim * pLoseMain;
	netLosePrelimp = pLosePrelim;

	erHigh = netHigh * netHighp;
	erMid = netMid * netMidp;
	erLow = netLow * netLowp;
	erLoseMain = netLoseMain * netLoseMainp;
	erLosePrelim = netLosePrelim * netLosePrelimp;

	erTotal = erHigh + erMid + erLow + erLoseMain + erLosePrelim;

	pInputs = document.getElementsByClassName("userInputProb");
	for (let i = 0; i < pInputs.length; i++) {
		pInputs[i].onblur=calculate;
		pInputs[i].style.backgroundColor = "lightgrey";
		pInputs[i].style.borderColor = "lightgrey";
	};
	amountInputs = document.getElementsByClassName("userInputAmount");
	for (let i = 0; i < amountInputs.length; i++) {
		amountInputs[i].onblur=calculate;
		amountInputs[i].style.backgroundColor = "lightgrey";
	};

	document.getElementById("pWinPrelim").value = pWinPrelim;
	document.getElementById("pLosePrelim").value = pLosePrelim;
	document.getElementById("pWinMain").value = pWinMain;
	document.getElementById("pLoseMain").value = pLoseMain;
	document.getElementById("pDamLow").value = pDamLow;
	document.getElementById("pDamMid").value = pDamMid;
	document.getElementById("pDamHigh").value = pDamHigh;

	document.getElementById("awardHigh").value = awardHigh;
	document.getElementById("awardMid").value = awardMid;
	document.getElementById("awardLow").value = awardLow;
	document.getElementById("awardLoseMain").value = awardLoseMain;
	document.getElementById("awardLosePrelim").value = awardLosePrelim;

	document.getElementById("costsHigh").value = costsHigh;
	document.getElementById("costsMid").value = costsMid;
	document.getElementById("costsLow").value = costsLow;
	document.getElementById("costsLoseMain").value = costsLoseMain;
	document.getElementById("costsLosePrelim").value = costsLosePrelim;

	document.getElementById("OPcostsHigh").value = OPcostsHigh;
	document.getElementById("OPcostsMid").value = OPcostsMid;
	document.getElementById("OPcostsLow").value = OPcostsLow;
	document.getElementById("OPcostsLoseMain").value = OPcostsLoseMain;
	document.getElementById("OPcostsLosePrelim").value = OPcostsLosePrelim;	

	document.getElementById("erTotal").innerHTML = numberWithCommas(Math.round(erTotal));	
}
