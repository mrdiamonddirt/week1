// const emptySpaceLessDry = "       |       |\n".repeat(3)
const emptySpace = "       |".repeat(2) //comment out if using const emptySpaceNotDry
const line = "-".repeat(23)
var table = [emptySpace,emptySpace,emptySpace,line,emptySpace,emptySpace,emptySpace,line,emptySpace,emptySpace,emptySpace];
// if using emptySpaceLessDry replace all 3 emptySpace's with 1 emptySpaceLessDry
for(var i in table){
	console.log(table[i]);
}