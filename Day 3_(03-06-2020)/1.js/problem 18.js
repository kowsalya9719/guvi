Problem:
Create a function to calculate the distance between two points defined by their x, y coordinates

function getDistance(x1, y1, x2, y2)
{
 var sum1=x1+x2;
 var sum2=y1+y2;
 return(sum1-sum2);
}
console.log(getDistance(100, 100, 400, 300));
