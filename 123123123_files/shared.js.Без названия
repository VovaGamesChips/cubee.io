
/*
BinSON.init({
	bufferSize:2000,
	startOffset:1,
});
*/



// Define the schema
playerSchema = schemapack.build({
  "__empty": 'uint8',
  id: 'varuint',
  name: 'string',
  x: 'varint',
  y: 'varint',
 // r: 'varint',
  sprite: 'varuint',
  scale: 'varuint',
  data:[{name: "string", value: "varuint"}],
  list:[{slot: "varuint", id: "varint"}],
});

// Define the schema
floorSchema = schemapack.build([
[
    { "id": "varuint", "obj": "varint", "x": "varint", "y": "varint", "r": "float32", "width": "varint", "height": "varint" }
]
]);




// Define the schema
welcomeSchema = schemapack.build({ "empty": "uint8","userid": "varuint" });
joinSchema = schemapack.build({ "__empty":"uint8","name":"string","skin":"string" });
aliveSchema = schemapack.build({"__empty":"uint8"});


// Define the schema
//syncSchema = schemapack.build({ "empty": "uint8","list":[["int16"]] });
// Define the schema

syncSchema = schemapack.build({ "__empty": "uint8","list":[{
  x: 'uint16',
  y: 'uint16',
  r: 'varint',
/*  l: 'varuint',
  w: 'varuint',*/
  id: 'varuint',
}]
 });

weaponSchema = schemapack.build({ "__empty": "uint8","id": "varint" });


jumpSchema = schemapack.build({ "__empty": "uint8","action":"varuint","magnitude":"varint","r":"varint", });



// Define the schema
itemSchema = schemapack.build({
  "__empty": "uint8",
  x: 'varuint',
  y: 'varuint',
  //r: 'varuint',
  sprite: 'varuint',
  scale: 'varuint',
  id: 'varuint',
  list:[{slot: "varuint", id: "varint"}],
});


coinDieSchema = schemapack.build({
  "__empty": "uint8",
  id: 'varuint',
});



updateSelfSchema =schemapack.build({
    "__empty": "uint8",
	coins:"varuint",
	/*wood:"varuint",
	food:"varuint",
	rocks:"varuint",*/
	ranking:[{id: "varuint",rank: "varuint",name: "string", coins: "varuint"}],
});


errorsSchema = schemapack.build({
    "__empty": "uint8",
	id:"varuint",
});


movementSchema = schemapack.build({
    "__empty": "uint8",
	id:"varuint",
	state:"varuint",
});


saveSlotSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  related_id:"varuint",
  quantity:"varuint",
});

setWeaponSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  w:"varuint",
});


obtainSlotSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  position:"varuint",
});

eventSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  eventid:"varuint",
});
inflingeDamageSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  related_id:"varuint",
  life:"varuint",
});







itemReceivedSchema =  schemapack.build({
  "__empty":"uint8",
  id:"varuint",
  q:"varint",
});


rotationSchema =  schemapack.build({
  "__empty":"uint8",
  r:"varint",
});

allianceSchema =  schemapack.build({
  "__empty":"uint8",
  name:"string",
});



allianceJoinSchema =  schemapack.build({
  "__empty":"uint8",
  name:"string",
  id:"varuint",
});




allyGetSchema =schemapack.build({
    "__empty": "uint8",
  list:["string"],
});
itemsDieSchema =schemapack.build({
    "__empty": "uint8",
  ids:["varuint"],
});


usersGetSchema =schemapack.build({
    "__empty": "uint8",
  list:[{name: "string", id: "varuint"}],
});

slotListSchema =schemapack.build({
    "__empty": "uint8",
  list:[{id: "varuint",quantity:"varuint"}],
});


nameSendSchema =  schemapack.build({
  "__empty":"uint8",
  name:"string",
  alliance:"string",
  id:"varuint",
  owner:"varuint",
});

chatGetSchema =schemapack.build({
    "__empty": "uint8",
  list:[{name: "string", text: "string"}],
});
chatMessageClientSchema =schemapack.build({
    "__empty": "uint8",
  id: "varuint",
  name: "string",
  text: "string",
});
chatMessageSchema =schemapack.build({
    "__empty": "uint8",
  text:"string",
});


buildSchema =schemapack.build({
    "__empty": "uint8",
    action: "varuint",
    x: "varuint",
    y: "varuint"
});

dropObjectSchema =schemapack.build({
    "__empty": "uint8",
    id: "varuint",
    q: "varuint",
    x: "varuint",
    y: "varuint"
});




slotSchema =schemapack.build({
    "__empty": "uint8",
  id:"varuint",
  list:[{slot: "varuint", id: "varint"}],
});

getOneArraySchema =schemapack.build({
    "__empty": "uint8",
  list:[{
    id: 'varuint',
    name: 'string',
    x: 'varint',
    y: 'varint',
   // r: 'varint',
    sprite: 'varuint',
    scale: 'varuint',
    data:[{name: "string", value: "varuint"}],
    list:[{slot: "varuint", id: "varint"}],
  }],
});
