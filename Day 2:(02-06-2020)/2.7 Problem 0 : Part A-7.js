//Add 2 more activities to bar & foo cats
function add()
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
//adding activity 
cat.catFriends[0].activities[2]="sleep";
cat.catFriends[0].activities[3]="eat fish";
cat.catFriends[1].activities[2]="lying";
cat.catFriends[1].activities[3]="searching";
console.log(cat);
}
add();
