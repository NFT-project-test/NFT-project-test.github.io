var modal
var modalContent

var lastUpdate=new Date().getTime()
var modalID=0
var baseNum = '';
var currentAddr = '';
var usrBal;
var diVS;

window.addEventListener('load', async function() {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable() // Request access
        nftContract =await new web3.eth.Contract(nftAbi, nftAddr)
        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]    
        setTimeout(function(){
            controlLoop()
            controlLoopFaster()
        },1000);
      } catch (error) {
          // User denied account access...
          console.error(error)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      nftContract = await new web3.eth.Contract(nftAbi, nftAddr)
      let accounts = await web3.eth.getAccounts()
      currentAddr = accounts[0]  
      setTimeout(function(){
          controlLoop()
          controlLoopFaster()
      },1000);
    } 
    
    setTimeout(checkForBinanceChain, 1500)
})

function controlLoop(){
    refreshData()
    setTimeout(controlLoop,2500)
}
function controlLoopFaster(){
    refreshData()
    setTimeout(controlLoopFaster,30)
}

function stripDecimals(str, num){
	if (str.indexOf('.') > -1){
		var left = str.split('.')[0];
		var right = str.split('.')[1];
		return left + '.' + right.slice(0,num);
	}
	else {
		return str;
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}

function refreshData(){

    var balanceElem = document.getElementById('contractBal');
    var baseNum = 0;
    contractBalance(function(result){
        rawStr = numberWithCommas(Number(result).toFixed(3));
        balanceElem.textContent = 'Contract Balance: ' + stripDecimals(rawStr, 3) + ' BNB';
    });
    
    web3.eth.getBalance(currentAddr).then(result => {
        rawStr = numberWithCommas(Number(web3.utils.fromWei(result)).toFixed(3));
        document.getElementById('userBNB').textContent = 'Your Balance: ' + stripDecimals(rawStr, 3) + ' BNB';
    }).catch((err) => {
        console.log(err)
    });

    var userBalanceElem = document.getElementById('user-balance');
    userBalance(function(result){
        rawStr = numberWithCommas(Number(result).toFixed(0));
        userBalanceElem.textContent = stripDecimals(rawStr, 0) + ' NFT';
    });

    var divBalanceElem = document.getElementById('divs-balance');
    claimelbleDivsMan(function(result){
        rawStr = numberWithCommas(Number(result).toFixed(3));
        divBalanceElem.textContent = stripDecimals(rawStr, 3) + '  claimable BNB';
    });
;
}

function mint2(){
    let BNBspenddoc=document.getElementById('ethtospend')
    let amountNFT= Math.ceil((BNBspenddoc.value)*1)
let bnbConvert = (web3.utils.toWei(BNBspenddoc.value))/3
    console.log(bnbConvert, " BNB")
    console.log(amountNFT," NFT")
    mint(amountNFT,bnbConvert,function(){
        displayTransactionMessage();
    });
}

function findBaseNum(num){
    var ret = 0
    if(num>1000000){
        ret = 1000000
    }
    if(num>1000000000){
        ret = 1000000000
    }
    if(num>1000000000000){
        ret = 1000000000000
    }
    if(num>1000000000000000){
        ret = 1000000000000000
    }
    if(num>1000000000000000000){
        ret = 1000000000000000000
    }
    if(num>1000000000000000000000){
        ret = 1000000000000000000000
    }
    if(num>1000000000000000000000000){
        ret = 1000000000000000000000000
    }
    if(num>1000000000000000000000000000){
        ret = 1000000000000000000000000000
    }
    if(num>1000000000000000000000000000000){
        ret = 1000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    return ret;
}
function findBaseText(num){
    var ret = ''
    if(num>1000000){
        ret = 'Million'
    }
    if(num>1000000000){
        ret = 'Billion'
    }
    if(num>1000000000000){
        ret = 'Trillion'
    }
    if(num>1000000000000000){
        ret = 'Quadrillion'
    }
    if(num>1000000000000000000){
        ret = 'Quintillion'
    }
    if(num>1000000000000000000000){
        ret = 'Sextillion'
    }
    if(num>1000000000000000000000000){
        ret = 'Septillion'
    }
    if(num>1000000000000000000000000000){
        ret = 'Octillion'
    }
    if(num>1000000000000000000000000000000){
        ret = 'Nonillion'
    }
    if(num>1000000000000000000000000000000000){
        ret = 'Decillion'
    }
    if(num>1000000000000000000000000000000000000){
        ret = 'Undecillion'
    }
    if(num>1000000000000000000000000000000000000000){
        ret = 'Duodecillion'
    }
    if(num>1000000000000000000000000000000000000000000){
        ret = 'Tredecillion'
    }
    if(num>1000000000000000000000000000000000000000000000){
        ret = 'Quattuordecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000){
        ret = 'Quindecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000){
        ret = 'Sexdecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000){
        ret = 'Septendecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000){
        ret = 'Octodecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000){
        ret = 'Novemdecillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Vigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Unvigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Duovigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Trevigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Quattuorvigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Quinvigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Sexvigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Septenvigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Octovigintillion'
    }
    if(num>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        ret = 'Novemvigintillion'
    }
    return ret;
}

function checkMarketEggsVal(quantity){
    quantity=Number(quantity)
    modifier = ' Quattuorvigintillion'
    finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000;
    if (finalquantity > 1) {
        return finalquantity.toFixed(1)+modifier;
    } else {
        return finalquantity.toFixed(5)+modifier;
    }
}

function translateQuantity(quantity,precision){
    quantity=Number(quantity)
    finalquantity=quantity
    modifier=''
    
    if (quantity < 1e6) {
      return (quantity).toFixed(2)
    }

    //console.log('??quantity ',typeof quantity)
    if(quantity>1000000){
        modifier=' Million'
        finalquantity=quantity/1000000
    }
    if(quantity>1000000000){
        modifier=' Billion'
        finalquantity=quantity/1000000000
    }
    if(quantity>1000000000000){
        modifier=' Trillion'
        finalquantity=quantity/1000000000000
    }
    if(quantity>1000000000000000){
        modifier=' Quadrillion'
        finalquantity=quantity/1000000000000000
    }
    if(quantity>1000000000000000000){
        modifier=' Quintillion'
        finalquantity=quantity/1000000000000000000
    }
    if(quantity>1000000000000000000000){
        modifier=' Sextillion'
        finalquantity=quantity/1000000000000000000000
    }
    if(quantity>1000000000000000000000000){
        modifier=' Septillion'
        finalquantity=quantity/1000000000000000000000000
    }
    if(quantity>1000000000000000000000000000){
        modifier=' Octillion'
        finalquantity=quantity/1000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000){
        modifier=' Nonillion'
        finalquantity=quantity/1000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000){
        modifier=' Decillion'
        finalquantity=quantity/1000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000){
        modifier = ' Undecillion'
        finalquantity=quantity/1000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000){
        modifier = ' Duodecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000){
        modifier = ' Tredecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000){
        modifier = ' Quattuordecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000){
        modifier = ' Quindecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000){
        modifier = ' Sexdecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000){
        modifier = ' Septendecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000){
        modifier = ' Octodecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Novemdecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Vigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Unvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Duovigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Trevigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Quattuorvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Quinvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Sexvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Septenvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Octovigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Novemvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(precision == undefined){
        precision=0
        if(finalquantity<10000){
            precision=1
        }
        if(finalquantity<1000){
            precision=2
        }
        if(finalquantity<100){
            precision=3
        }
        if(finalquantity<10){
            precision=4
        }
    }
    if(precision==0){
        finalquantity=Math.floor(finalquantity)
    }
    return finalquantity.toFixed(precision)+modifier;
}
function removeModal2(){
    $('#adModal').modal('toggle');
}
function removeModal(){
        modalContent.innerHTML=""
        modal.style.display = "none";
}
function displayTransactionMessage(){
    displayModalMessage("Transaction Submitted")
}
function displayModalMessage(message){
    modal.style.display = "block";
    modalContent.textContent=message;
    setTimeout(removeModal,3000)
}
function formatBNBValue(BNBstr){
    return parseFloat(parseFloat(BNBstr).toFixed(4));
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function copyRef() {
  var copyText = document.getElementById("copytextthing");
  copyText.style.display="block"
  copyText.select();
  document.execCommand("Copy");
  copyText.style.display="none"
  displayModalMessage("copied link to clipboard")
  //alert("Copied the text: " + copyText.value);
}

function secondsToString(seconds)
{
    seconds=Math.max(seconds,0)
    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    var endstr=""

    return numhours + "h " + numminutes + "m "//+numseconds+"s";
}
function disableButtons(){
    var allnumminers=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="none"
        }
    }
    var allnumminers=document.getElementsByClassName('btn-md')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="none"
        }
    }
}
function enableButtons(){
    var allnumminers=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="inline-block"
        }
    }
        var allnumminers=document.getElementsByClassName('btn-md')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="inline-block"
        }
    }
}
function onlyLetters(text){
    return text.replace(/[^0-9a-zA-Z\s\.!?,]/gi, '')
}
function checkOnlyLetters(str){
    var pattern=new RegExp('^[0-9a-zA-Z\s\.!?,]*$')
      if(!pattern.test(str)) {
        return false;
      } else {
        return true;
      }
}
function onlyurl(str){
     return str.replace(/[^0-9a-zA-Z\.?&\/\+#=\-_:]/gi, '')
}
function validurlsimple(str){
    var pattern=new RegExp('^[a-z0-9\.?&\/\+#=\-_:]*$')
      if(!pattern.test(str)) {
        return false;
      } else {
        return true;
      }
}
function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
  if(!pattern.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}
function callbackClosure(i, callback) {
    return function() {
        return callback(i);
    }
}