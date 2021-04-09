function textFormat(value = "",format = ""){
	const valLength = format.replace(/[^x]/g,"").length;
	
	let prevIndex = 0;
	let result = ""
	
	for (let i = 0; i < value.length; i++) {
		if(format.length === result.length)break;
		const currentIndex = format.indexOf("x",prevIndex);
 		
		const prevStr = format.slice(prevIndex,currentIndex)
		result += prevStr + value[i];
		
		if (i+1 === valLength){
			result += format.slice(currentIndex + 1,format.length)
		};
		// Track the previous index
		prevIndex = currentIndex + 1;
	}
	return result
}
export default textFormat;