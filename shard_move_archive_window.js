// move archive on to new day:

sh.stopBalancer();

db.getSiblingDB("config").tags.remove({ns: "Test_System_CustomersShared.routeResult"});

var archiveEndDate = new ISODate("2012-01-02T00:00:00Z");
var liveStartDate = new ISODate("2012-01-02T00:00:01Z");

sh.addTagRange(
	"Test_System_CustomersShared.routeResult", 
	{eventDateTime:MinKey, assetId: MinKey},
	{eventDateTime:archiveEndDate, assetId: MaxKey}, 
	"archive");

sh.addTagRange(
	"Test_System_CustomersShared.routeResult", 
	{eventDateTime:liveStartDate, assetId: MinKey},
	{eventDateTime:MaxKey, assetId: MaxKey}, 
	"live");
	
sh.startBalancer();