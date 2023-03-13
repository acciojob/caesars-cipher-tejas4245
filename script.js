// Your Script here.
function rot13(str) {
	let decodedStr="";
	for(let i=0;i<str.length;i++){
		let char =str[i];
		if (char.match(/[A-Z])){
					   let charCode =str.charCodeAt(i)-65;
		charCode=(charCode+13)%26;
		charCode=(charCode+13)%26;
		char=string.fromCharCode(charCode+65);
	}
	decodeStr+=char;
}
return decodeStr;
	
}
