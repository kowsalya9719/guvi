//Add height and weight to Fluffy
function fluffy()
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
//Adding height and weight to Fluffy
cat[3]={"height":"15"};
cat[4]={"weight":"5"};
console.log(cat);
}
fluffy();
