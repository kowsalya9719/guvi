//Print the total weight of catFriends
function weight()
{
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
//the total weight of catFriends
var weight1=cat.catFriends[0].weight;
var weight2=cat.catFriends[1].weight;
var total=weight1+weight2;
console.log(total);
}
weight();
