var shardKey = {eventDateTime: 1, assetId: 1};

db.getSiblingDB("Test_System_CustomersShared").routeResult.ensureIndex(shardKey);

sh.enableSharding("Test_System_CustomersShared");
sh.shardCollection("Test_System_CustomersShared.routeResult", shardKey);

sh.addShardTag("shard-a", "live");
sh.addShardTag("shard-b", "live");
sh.addShardTag("shard-c", "archive");


var archiveEndDate = new ISODate("2012-01-01T00:00:00Z");
var liveStartDate = new ISODate("2012-01-01T00:00:01Z");

sh.addTagRange(
	"Test_System_CustomersShared.routeResult", 
	{eventDateTime:MinKey, assetId: MinKey},
	{eventDateTime: archiveEndDate, assetId: MaxKey}, 
	"archive");

sh.addTagRange(
	"Test_System_CustomersShared.routeResult", 
	{eventDateTime:liveStartDate, assetId: MinKey},
	{eventDateTime:MaxKey, assetId: MaxKey}, 
	"live");
