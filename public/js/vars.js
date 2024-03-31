MAX_USERS_PER_SERVER = 30;
MSG = {sync:0,getfloors:1,getone:3,action:4,welcome:5,itemNew:6,itemDie:7,getall:8,jump:9,selfUpdate:10,movement:11,
  join:12,error:13,event:14,alive:15,rotation:16,weapon:17,ally_create:18,ally_join:19,allianceJoinSchema:20,confirm_join:21,
  ally_get:22,ally_confirm:23,ally_leave:24,getname:25,users_get:26,kick_user:27,get_chat:28,send_chat:29,build:30,
  attack:31,itemReceive:32,craftItem:33,message:34,slot_get:35,itemDieBulk:36,dropObject:37,slots_get:38,slots_save:39,
  slots_obtain:40,close_modal:41, slots_exit:42,receiveDamage:43,setWeapon:44,
  getonearray:45
};

IActions = {jump:0,boxes:1,trap:2,bomb:3,left:4,right:5,attack:6,heal:7,door:8,turret:9,cupboard:10,gold:11};


floor_types = {snow:0,water:6,ice:7,left:8,right:9,grass:10,desert:11,lava:12,earth:13,animal:14,hide:15,cloud:16,coin:17,tree:18,rock:19,berrys:20,cactus:21,mouse:22,door:23,turret:24,cupboard:25,gold:26,ice:27,cave:28, water_lava: 29, };
Groups = {floor:0,players:1,obstacles:2,coins:3,bots:4,trees:5,house:6};

Errors = {full:0};
material_types = {normal:0,ice:7,left:8,right:9,grass:10,desert:11,lava:12,earth:13,animal:14,hide:15,cloud:16,water:17};
EVENTS = {Gathered : 0,Attacked:1, Jumped:2,NightStart:3,NightEnd:4, OutOfWater:5, OnWater:6, PassDoor:7}


animal_types = {agressive:0,peaceful:1,neutral:2};

object_type = {equip : 0,weapon : 1,build : 2,gather : 3, player : 4, coin : 5, world : 6, animal : 7, floor : 8, water : 9,skin:10}

OBJECT_DICT = {
    "floor":{
        name:"floor",
        type:object_type.floor,
        floor_type:floor_types.earth,
    },
    "cave":{
        name:"cave",
        type:object_type.floor,
        floor_type:floor_types.cave,
    },
    "lava":{
        name:"lava",
        type:object_type.floor,
        floor_type:floor_types.lava,
    },
    "ice":{
        name:"ice",
        type:object_type.floor,
        floor_type:floor_types.ice,
    },
    "water_lava":{
        name:"water_lava",
        type:object_type.water,
        floor_type:floor_types.water_lava,
    },
    "water":{
        name:"water",
        type:object_type.water,
        floor_type:floor_types.water,
    },
    "desert":{
        name:"desert",
        type:object_type.floor,
        floor_type:floor_types.desert,
    },
    "cloud":{
        name:"cloud",
        type:object_type.floor,
        floor_type:floor_types.cloud,
    },
    "hide":{
        name:"hide",
        type:object_type.floor,
        floor_type:floor_types.hide,
    },
    "grass":{
        name:"grass",
        type:object_type.floor,
        floor_type:floor_types.grass,
    },
    "earth":{
        name:"earth",
        type:object_type.floor,
        floor_type:floor_types.earth,
    },
    "player":{
        name:"Player",
        type:object_type.player,
        //fly:true,
        reward:{
            gold:10,
        },
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:50,
            height:50
          },
          /*1:{
            id : "fire",
            x:0,
            y:10,
            width:100,
            height:100
          },
          2:{
            id : "venom",
            x:1,
            y:1,
            width:100,
            height:100
          },
          3:{
            id : "smoke",
            x:10,
            y:10,
            width:100,
            height:100
          }*/
        },
        soundHit: "Hitting Player.mp3",
    },
    "penguin":{
        name:"Animal",
        type:object_type.animal,
        image:"penguin.svg",
        animal_type:animal_types.peaceful,
        life:26,
        range:50,
        x_speed:25,
        y_speed:100,
        max_width:8,
        min_width:7,
        attack_speed:1,
        attack_damage:2,
        attack_range:13,
        safe_distance:50,
        reward:{
          ice_block:1,
          food:2,
          gold:10,
        },
    },
    "bat":{
        name:"Bat",
        type:object_type.animal,
        image:"bat.svg",
        animal_type:animal_types.agressive,
        fly:true,
        life:50,
        range:50,
        x_speed:25,
        y_speed:100,
        max_width:8,
        min_width:7,
        attack_speed:1,
        attack_damage:15,
        attack_range:13,
        safe_distance:50,
        reward:{
          food:10,
          gold:10,
        },
    },
    "lava_slime":{
        name:"Animal",
        type:object_type.animal,
        image:"lava_slime.svg",
        animal_type:animal_types.peaceful,
        life:26,
        range:50,
        x_speed:25,
        y_speed:100,
        max_width:8,
        min_width:7,
        attack_speed:1,
        attack_damage:2,
        attack_range:13,
        safe_distance:50,
        reward:{
          lava_block:2,
          gold:10,
        },
    },
    "mouse":{
        name:"Animal",
        type:object_type.animal,
        image:"mouse.svg",
        animal_type:animal_types.peaceful,
        life:8,
        range:50,
        x_speed:25,
        y_speed:100,
        max_width:8,
        min_width:7,
        attack_speed:1,
        attack_damage:2,
        attack_range:13,
        safe_distance:50,
        reward:{
            food:2,
            gold:10,
        },
    },
    "pig":{
        name:"Pig",
        type:object_type.animal,
        image:"pig.svg",
        animal_type:animal_types.neutral,
        life:60,
        range:50,
        x_speed:25,
        y_speed:50,
        max_width:11,
        min_width:8,
        attack_speed:1,
        attack_damage:11,
        attack_range:13,
        safe_distance:50,
        reward:{
            food:20,
            gold:10,
        },
        soundHit: "Hitting PIg.mp3",
        soundAttack: "Pig Oing.mp3",
        soundDie: "Pig Dying.mp3",
   },
    "rabbit":{
        name:"Rabbit",
        type:object_type.animal,
        image:"rabbit.svg",
        animal_type:animal_types.peaceful,
        life:8,
        range:10,
        x_speed:25,
        y_speed:100,
        max_width:8,
        min_width:7,
        attack_speed:5,
        attack_damage:2,
        attack_range:13,
        safe_distance:100,
        reward:{
            food:5,
            gold:10,
        },
        soundHit: "Hitting Rat.mp3",
        soundAttack: "Rat Squeek.mp3",
        soundDie: "Rat Dying.mp3",
    },
    "cow":{
        name:"Cow",
        type:object_type.animal,
        image:"cow.svg",
        animal_type:animal_types.peaceful,
        life:100,
        range:100,
        x_speed:25,
        y_speed:50,
        max_width:11,
        min_width:7,
        attack_speed:1,
        attack_damage:10,
        attack_range:13,
        safe_distance:30,
        reward:{
            food:20,
            gold:10,
        },
        soundHit:"Hitting Cow.mp3",
        soundAttack: "Cow Moo.mp3",
        soundDie: "Cow Dying.mp3"
    },
    "snake":{
        name:"Snake",
        type:object_type.animal,
        image:"snake.svg",
        animal_type:animal_types.agressive,
        life:170,
        range:50,
        x_speed:35,
        y_speed:50,
        max_width:9,
        min_width:6,
        attack_speed:0.2,
        attack_damage:25,
        attack_range:13,
        safe_distance:50,
        reward:{
            food:1,
            gold:10,
            venom:2,
        },
        soundHit: "Hitting Snake.mp3",
        soundAttack: "Snake Attacking.mp3",
        soundDie: "Snake Dying.mp3",
    },
    "berrys":{
        name:"Berrys",
        type:object_type.world,
        reward:{
            food:1,
            berry_seed:0.3,
        },
        reward_attack:{
            food:1,
        },
        life:10,
        pass:true,
        grow_time:30,
        soundHit: "Hitting Berry bush.mp3"
      },
    "stick_plant":{
      name:"Dead bush",
      image:"stick-plant.svg",
      type:object_type.world,
      reward_attack:{
        sticks:1,
      },
      life:5,
      pass:1,
      soundHit: "Hitting BRanch.mp3"
    },
    "red_mushroom":{
      name:"Red Mushroom",
      image:"red_mushroom.svg",
      scale:0.5,
      offset_y: -2.55,
      type:object_type.world,
      reward_attack:{
          venom:1,
      },
      life:1,
      pass:true,
    },
    "tree":{
      name:"Tree",
      image:"pine.svg",
        type:object_type.world,
        reward_attack:{
          wood:1,
          sticks:0.1,
        },
        reward:{
          wood:5,
          pine_seed:0.3,
          sticks:1,
        },
        life:25,
        pass:1,
        grow_time:60,
        soundHit: "Hitting Tree.mp3"
    },
    "apple_tree":{
      name:"Apple Tree",
      image:"apple-tree.svg",
        type:object_type.world,
        reward:{
          wood:5,
          apple_tree_seed:0.3,
          sticks:1,
        },
        reward_attack:{
          wood:1,
          sticks:0.1,
        },
        life:25,
        pass:1,
        grow_time:60,
        soundHit: "Hitting Tree.mp3"
    },
    "cypress":{
      name:"Cypress",
      image:"cypress.svg",
        type:object_type.world,
        reward:{
          wood:5,
          cypress_seed:0.3,
          sticks:1,
        },
        reward_attack:{
          wood:1,
          sticks:0.1,
        },
        life:25,
        pass:1,
        grow_time:60,
        soundHit: "Hitting Tree.mp3"
    },
    "pine_seed":{
      name:"Pine Seed",
      image:"pine-seed.svg",
        type:object_type.build,
        max_stack:10,
        pass:1,
        sensor:true,
        only_ground:true,
        only_floor:true,
        seed:true,
        seed_result:"tree",
      },
    "cypress_seed":{
      name:"Cypress Seed",
      image:"pine-seed.svg",
        type:object_type.build,
        max_stack:10,
        pass:1,
        sensor:true,
        only_ground:true,
        only_floor:true,
        seed:true,
        seed_result:"cypress",
      },

"apple_tree_seed":{
  name:"Apple Tree Seed",
  image:"pine-seed.svg",
    type:object_type.build,
    max_stack:10,
    pass:1,
    sensor:true,
    only_ground:true,
    only_floor:true,
    seed:true,
    seed_result:"apple_tree",
  },
  "berry_seed":{
    name:"Berry Seed",
    image:"berry-seed.svg",
      type:object_type.build,
      max_stack:10,
      pass:1,
      sensor:true,
      only_ground:true,
      only_floor:true,
      seed:true,
      seed_result:"berrys",
    },
    "plant-grow":{
      name:"Growing",
      image:"plant_growing.svg",
        type:object_type.world,
        max_stack:10,
        life:5,
        pass:1,
        sensor:true,
        only_ground:true,
        plant_result:null,
        plant_grow_time:5,
    },
    "other-grow":{
      name:"Growing",
      //image:"plant_growing.svg",
        type:object_type.world,
        max_stack:10,
        life:5,
        pass:1,
        sensor:true,
        only_ground:true,
        plant_result:null,
        plant_grow_time:5,
    },
    "palmtree":{
        name:"Palm Tree",
        type:object_type.world,
        reward_attack:{
            food:1,
            wood:0.3,
        },
        life:20,
        soundHit: "Hitting Palm Tree.mp3"
    },
    "lava_rock":{
        name:"Lava Rock",
        image:"lava_rock.svg",
        type:object_type.world,
        reward_attack:{
            lava_block:1,
        },
        life:5,
        pass:1,
    },
    "ice_rock":{
      name:"Ice Rock",
      image:"ice_rock.svg",
        type:object_type.world,
        reward_attack:{
            ice_block:1,
        },
        life:5,
        pass:1,
    },
    "rock":{
        name:"Rock",
        type:object_type.world,
        reward_attack:{
          stones:1,
          metal:0.1,
          coal:0.1,
        },
        pass:1,
        life:25,
        soundHit: "Hitting Stone.mp3",
    },
    "rock-metal":{
        name:"Rock Metal",
        type:object_type.world,
        reward_attack:{
          stones:1,
          metal:1,
          coal:0.1,
        },
        pass:1,
        life:25,
        soundHit: "Hitting Metal.mp3",
    },
    "cactus":{
        name:"Cactus",
        type:object_type.world,
        reward_attack:{
            food:1,
        },
        spike: 10,
        life:25,
    },
    "hand":{
        name:"Hand",
        type:object_type.weapon,
        attacktype:"m",
        animation:"push",
        max_stack:1,
        gather_multiplier:1/**2*/,
        damage:5,
        range:4,
    },
/*    "bucket":{
        name:"Bucket",
        image:"bucket.svg",
        description:"",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:20,
        range:5,
        cost:{
            wood:10,
            stones:10
        },
        life:180
    },*/
    "wood_sword":{
        name:"Wood Sword",
        description:"High damage weapon",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:14,
        range:5,
        cost:{
          sticks:1,
          wood:15,
        },
        life:180,
        sound:"Sword Swinging.mp3",
    },
    "stone_sword":{
        name:"Stone Sword",
        description:"High damage weapon",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:17,
        range:7,
        cost:{
          sticks:5,
          stones:40
        },
        life:200,
        sound:"Sword Swinging.mp3",
    },
    "venom_sword":{
        name:"Venom Sword",
        description:"High damage weapon, poison your enemys.",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:25,
        range:8,
        cost:{
          stone_sword:1,
          venom:25
        },
        life:1000,
        buf_apply:"poisoned",
        sound:"Sword Swinging.mp3",

    },
    "gold_sword":{
        name:"Gold Sword",
        description:"High damage weapon",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:30,
        range:8,
        cost:{
          stone_sword:1,
          gold:1000
        },
        life:1500,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
        },
        sound:"Sword Swinging.mp3",
    },
    "axe":{
        name:"Axe",
        description:"Gather wood faster",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:10,
        range:7,
        gather_multiplier:2/**2*/,
        gather_effect:["wood","sticks"],
        cost:{
          sticks:5,
          wood:40,
        },
        life:1500,
        sound:"Axe Swinging.mp3"
    },
    "pickaxe":{
        name:"Pickaxe",
        description:"Gather rocks faster",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:10,
        range:7,
        gather_multiplier:2/**2*/,
        gather_effect:["stones","metal"],
        cost:{
          sticks:5,
          stones:40
        },
        life:1500,
        sound:"Pick Axe Swing.mp3"
    },
    "hammer":{
        name:"Carpenter Hammer",
        image:"hammer.svg",
        description:"Removes your own construction. \nLow Damage.",
        craft_category:"Weapons",
        type:object_type.weapon,
        attacktype:"m",
        animation:"tool",
        max_stack:1,
        damage:6,
        range:5,
        cost:{
            wood:30,
            stones:30,
            gold:100
        },
        life:180
    },
    "wood_helmet":{
        name:"Wood Helmet",
        description:"Mind is everything",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:0,
        cost:{
            wood:50,
            stones:10
        },
        life:40
    },
    "wood_pants":{
        name:"Wood Pants",
        description:"Protect your nuts",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:1,
        cost:{
            wood:50,
            stones:10
        },
        life:40
    },
    "stone_helmet":{
        name:"Stone Helmet",
        description:"Mind is everything",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:0,
        cost:{
            wood:30,
            stones:100
        },
        life:100
    },
    "stone_pants":{
        name:"Stone Pants",
        description:"Protect your nuts",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:1,
        cost:{
            wood:30,
            stones:100
        },
        life:100
    },
    "metal_helmet":{
      name:"Metal Helmet",
      image:"metal_helmet.svg",
        description:"Mind is everything",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:0,
        cost:{
          metal:50,
          stones:100
        },
        life:175
    },
    "metal_pants":{
        name:"Metal Pants",
        image:"metal_pants.svg",
        description:"Protect your nuts",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:1,
        cost:{
          metal:50,
          stones:100
        },
        life:175
    },
    "gold_helmet":{
        name:"Gold Helmet",
        description:"Mind is everything \n( Although gold is not bad )",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:0,
        cost:{
            wood:300,
            stones:300,
            gold:1000
        },
        life:200,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:150,
            height:150
          },
        }
    },
    "gold_pants":{
        name:"Gold Pants",
        description:"Protect your nuts \n Give gold per second",
        craft_category:"Equipment",
        type:object_type.equip,
        max_stack:1,
        slot:1,
        cost:{
            wood:300,
            stones:300,
            gold:1000
        },
        life:200,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:150,
            height:150
          },
        }
    },
    "wood_block":{
        name:"Wood Block",
        description:"Weak",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        cost:{
            wood:10,
        },
        life:150,
        craft_time:5,
        soundHit: "Hitting Wood.mp3"
    },
    "wood_door":{
        name:"Wood door",
        description:"Can pass and shot through",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        pass:1,
        cost:{
            wood_block:2,
        },
        life:150,
        soundHit: "Hitting Wood.mp3"
    },
    "stone_block":{
        name:"Stone Block",
        description:"Stronger",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        cost:{
            wood_block:2,
            stones:20,
        },
        life:350,
        craft_time:15
    },
    "stone_door":{
        name:"Stone door",
        description:"Can pass and shoot through",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        pass:1,
        cost:{
          stone_block:2,
        },
        life:350
    },
    "metal_block":{
        name:"Metal Block",
        image:"metal_block.svg",
        description:"Stronger",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        cost:{
          wood_block:1,
          metal:30,
        },
        life:550,
        craft_time:30,
        soundHit:"Hitting Metal.mp3"
    },
    "metal_door":{
      name:"Metal door",
      image:"metal_door.svg",
        description:"Can pass and shot through",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        pass:1,
        cost:{
            metal_block:2,
        },
        life:550,
        soundHit:"Hitting Metal.mp3"
    },
    "metal_trap":{
        name:"Metal trap",
        description:"",
        image:"metal_trap.svg",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:1,
        cost:{
          metal_block:2,
        },
        life:200,
        spike:20,
        sound: "Springing Trap.mp3",
        soundHit:"Hitting Metal.mp3"
    },
    "candle":{
        name:"Candle",
        description:"Light up your base and get animals away. \n Prevent spawn of players and animals near it.",
        image:"torch.svg",
        craft_category:"Furniture",
        type:object_type.build,
        max_stack:10,
        cost:{
          wood:25,
          stones:25,
        },
        pass:1,
        sensor:true,
        life:50,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
          1:{
            id : "fire",
            x:0,
            y:0,
            width:100,
            height:100
          },
        }
    },
    "campfire":{
        name:"Campfire",
        description:"Light up your base and get animals away, \ncan only be placed on ground. \nPrevent spawn of players and animals near it.\nCreates coal over time.",
        image:"campfire.svg",
        craft_category:"Furniture",
        type:object_type.build,
        max_stack:10,
        cost:{
          wood:25,
          stones:25,
        },
        life:50,
        pass:1,
        sensor:true,
        only_ground:true,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
          1:{
            id : "fire",
            x:0,
            y:0,
            width:100,
            height:100
          },
        },
        ambienceSound: "Campfire.mp3"
    },
    "chest":{
        name:"Chest",
        description:"",
        image:"chest.svg",
        craft_category:"Furniture",
        type:object_type.build,
        max_stack:1,
        cost:{
          wood_block:2,
        },
        life:75,
        pass:true,
        sensor:true,
        click:1,
        slots:15,
        only_ground:true,
    },
    "furnace":{
        name:"Furnace",
        description:"Refine materials with coal. \nGet coal using campfires.",
        image:"furnace.svg",
        modal_message:"Refine materials with coal. \nGet coal using campfires.",
        craft_category:"Furniture",
        type:object_type.build,
        max_stack:10,
        cost:{
          coal:5,
          stone_block:2,
        },
        life:55,
        pass:true,
        sensor:true,
        click:1,
        slots:2,
        slot_conf:{
          0:["coal"],
          1:["stones","wood","food","metal"],
        },
        craft_requirements:{
          "metal_block":{"metal" : 25, "coal":2},
          "stone_block":{"stones" : 15, "coal":2},
          "potion":{"food" : 15, "coal":2},
        },
        only_ground:true,
    },
    "quarry":{
        name:"Quarry",
        description:"Gather minerals from floor.",
        image:"quarry.svg",
        craft_category:"Furniture",
        type:object_type.build,
        max_stack:10,
        cost:{
          coal:25,
          stone_block:3,
          metal_block:3,
        },
        life:150,
        click:1,
        modal_message:"Plenty this with coal to start mining.",
        slots:2,
        slot_conf:{
          0:["coal"],
          1:["coal"],
        },
        pass:true,
        sensor:true,
        only_ground:true,
        only_floor:true,
        scale:2.0,
    },
    "gold_block":{
         name:"Gold block",
        description:"Weak, gives gold per second",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        cost:{
            wood:100,
            stones:100
        },
        life:50,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
        },
        soundHit: "Hitting Gold.mp3"
    },
/*    "defensive":{
         name:"Defensive",
        description:"Defensive",
        craft_category:"Structures",
        type:object_type.build,
        max_stack:10,
        cost:{
            wood:100,
            stones:100
        },
        life:50,
        range:100,
    },*/
    "wood":{
        name:"Wood",
        type:object_type.gather,
        max_stack:10,
        attacktype:"s",
        animation:"shot",
        damage:5,
        pass:1,
    },
    "coal":{
      name:"Coal",
      image:"coal.svg",
        type:object_type.gather,
        max_stack:10,
        attacktype:"s",
        animation:"shot",
        damage:5,
        pass:1,
    },
    "venom":{
        name:"Venom",
        type:object_type.gather,
        max_stack:10,
        attacktype:"s",
        animation:"shot",
        damage:1,
        pass:1,
    },
    "sticks":{
      name:"Sticks",
      image:"stick.svg",
        type:object_type.gather,
        attacktype:"s",
        animation:"shot",
        pass:1,
        damage:4,
    },
    "food":{
        name:"Food",
        type:object_type.gather,
        attacktype:"h",
        animation:"eat",
        heal_:"h",
        pass:1,
        life:5,
        sound: "Eating Berries.mp3"
    },
    "potion":{
         name:"Small Potion",
         image:"small_potion.svg",
         description:"Heal yourself faster",
        craft_category:"Weapons",
        type:object_type.attack,
        animation:"eat",
        attacktype:"h",
        max_stack:10,
        cost:{
            food:20,
        },
        life:25,
        craft_time:2,
        sound: "Drinking Potion.mp3"
    },
    "bigpotion":{
         name:"Big Potion",
         image:"big_potion.svg",
        description:"Heal yourself faster",
        craft_category:"Weapons",
        animation:"eat",
        type:object_type.attack,
        attacktype:"h",
        max_stack:10,
        cost:{
            potion:3,
        },
        life:100,
        sound: "Drinking Potion.mp3"
    },
    "metal":{
        name:"Metal",
        type:object_type.gather,
        attacktype:"s",
        animation:"shot",
        damage:10,
        pass:1,
        soundHit:"Hitting Metal.mp3"
    },
    "stones":{
        name:"Stones",
        type:object_type.gather,
        attacktype:"s",
        animation:"shot",
        damage:7,
        pass:1,
        soundHit: "Hitting Stone.mp3",
    },
    "ice_block":{
      name:"Ice",
      image:"ice_rock.svg",
        type:object_type.gather,
        attacktype:"s",
        animation:"shot",
        damage:7,
        pass:1,
    },
    "lava_block":{
        name:"Lava",
        image:"lava_rock.svg",
        type:object_type.gather,
        attacktype:"s",
        animation:"shot",
        damage:20,
        pass:1,
    },
    "gold":{
        name:"Gold",
        attacktype:"s",
        animation:"shot",
        type:object_type.gather,
        damage:1,
        pass:1,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:50,
            height:50
          },
        }
    },
    "poisoned":{
        name:"Poisoned",
        type:object_type.equip,
        slot:2,
        buf_type:{
            "life" : -5
        },
        buf_time:7,
        particles:{
          0:{
            id : "venom",
            x:0,
            y:0,
            width:100,
            height:100
          },
        }
    },
    "furnace_burning":{
        name:"Furnace working",
        type:object_type.skin,
        image:"furnace_burning.svg",
        slot:3,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
          1:{
            id : "smoke",
            x:0,
            y:-7.3,
            width:100,
            height:100
          }
        },
        ambienceSound: "Furnace.mp3"

    },
    "quarry_working":{
        name:"Quarry working",
        type:object_type.skin,
        //image:"furnace_burning.svg",
        slot:3,
        particles:{
          0:{
            id : "light",
            x:0,
            y:0,
            width:100,
            height:100
          },
          1:{
            id : "smoke",
            x:-3.5,
            y:-8,
            width:100,
            height:100
          }
        },
        activeSound: "quarry.mp3"
    },
    "cara1":{
        name:"Face 1",
        type:object_type.skin,
        image:"cara1.svg",
        slot:3,
    },
    "cara2":{
        name:"Face 2",
        type:object_type.skin,
        image:"cara2.svg",
        slot:3,
    },
    "cara3":{
        name:"Face 3",
        type:object_type.skin,
        image:"cara3.svg",
        slot:3,
    },
    "cara4":{
        name:"Face 4",
        type:object_type.skin,
        image:"cara4.svg",
        slot:3,
    },
    "cara5":{
        name:"Face 5",
        type:object_type.skin,
        image:"cara5.svg",
        slot:3,
    },
    "cara6":{
        name:"Face 6",
        type:object_type.skin,
        image:"cara6.svg",
        slot:3,
    },
    "cara7":{
        name:"Face 7",
        type:object_type.skin,
        image:"cara7.svg",
        slot:3,
    },
    "cara8":{
        name:"Face 8",
        type:object_type.skin,
        image:"cara8.svg",
        slot:3,
    },
    "cara9":{
        name:"Face 9",
        type:object_type.skin,
        image:"cara9.svg",
        slot:3,
    },
    "cara10":{
        name:"Face 10",
        type:object_type.skin,
        image:"cara10.svg",
        slot:3,
    },
    "cara11":{
        name:"Face 11",
        type:object_type.skin,
        image:"cara11.svg",
        slot:3,
    },
    "cara12":{
        name:"Face 12",
        type:object_type.skin,
        image:"cara12.svg",
        slot:3,
    },
    "cara13":{
        name:"Face 13",
        type:object_type.skin,
        image:"cara13.svg",
        slot:3,
    },
    "cara14":{
        name:"Face 14",
        type:object_type.skin,
        image:"cara14.svg",
        slot:3,
    },

  "expression1":{
      name:"Face 1",
      type:object_type.skin,
      image:"Expression1.png",
      slot:3,
  },
  "expression2":{
      name:"Face 2",
      type:object_type.skin,
      image:"Expression2.png",
      slot:3,
  },
  "expression3":{
      name:"Face 3",
      type:object_type.skin,
      image:"Expression3.png",
      slot:3,
  },
  "expression4":{
      name:"Face 4",
      type:object_type.skin,
      image:"Expression4.png",
      slot:3,
  },
  "expression5":{
      name:"Face 5",
      type:object_type.skin,
      image:"Expression5.png",
      slot:3,
  },
  "expression6":{
      name:"Face 6",
      type:object_type.skin,
      image:"Expression6.png",
      slot:3,
  },
  "expression7":{
      name:"Face 7",
      type:object_type.skin,
      image:"Expression7.png",
      slot:3,
  },
  "expression8":{
      name:"Face 8",
      type:object_type.skin,
      image:"Expression8.png",
      slot:3,
  },
  "expression9":{
      name:"Face 9",
      type:object_type.skin,
      image:"Expression9.png",
      slot:3,
  },
  "expression10":{
      name:"Face 10",
      type:object_type.skin,
      image:"Expression10.png",
      slot:3,
  },
}
ID_OBJECTS = {};
OBJECTS_ID = {};
var contador = 0;
for (var k in OBJECT_DICT){
    OBJECTS_ID[k] = contador;
    ID_OBJECTS[contador] = k;
    OBJECT_DICT[k].id = k;
    OBJECT_DICT[k].c_id = contador;
    contador++;
}

function getDraw(type){
    var ret = new PIXI.Graphics();
    width = 10;
    ret.x = 0;
    ret.y = 0;

    switch (type) {
      case "earth":
      ret.x = 0;
      ret.y = 0;

      ret.lineStyle(0.5, 0xa47c48, 0.2);
      ret.beginFill(0xa47c48, 1);
      ret.drawRect(-width, -width , width*2, width*2);




      ret.endFill();


          break;
    case "desert":
    ret.x = 0;
    ret.y = 0;

    ret.lineStyle(0.5, 0xFAE1AF, 0.2);
    ret.beginFill(0xFAE1AF, 1);
    ret.drawRect(-width, -width , width*2, width*2);




    ret.endFill();

        break;
      case "cloud":
      ret.x = 0;
      ret.y = 0;

      ret.lineStyle(0.5, 0xFFFFFF, 0);
      ret.beginFill(0xFFFFFF, 0.3);
      ret.drawRect(-width, -width , width*2, width*2);




      ret.endFill();

          break;
      case "grass":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0x006700, 0.2);
          ret.beginFill(0x006700, 1);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;

        case "snow":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0xF4F4F4, 0.2);
          ret.beginFill(0xF4F4F4, 1);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;
        case "cave":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0x333333, 0.2);
          ret.beginFill(0x333333, 1);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;
        case "water":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0x0892d0, 0.2);
          ret.beginFill(0x0892d0, 0.7);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;
        case "water_lava":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0xD00000, 0.2);
          ret.beginFill(0xD00000, 0.7);
          ret.drawRect(-width, -width , width*2, width*2);



          ret.endFill();


              break;
        case "lava":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0xD00000, 0.2);
          ret.beginFill(0xD00000, 1);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;
        case "hide":
          ret.x = 0;
          ret.y = 0;

          ret.lineStyle(0.5, 0xFFFFFF, 0.2);
          ret.beginFill(0xCD0000, 1);
          ret.drawRect(-width, -width , width*2, width*2);




          ret.endFill();


              break;

        case "hand":
                ret.x = 0;
                ret.y = 0;
                ret.lineStyle(0.5, 0x000000, 0.1);
                ret.beginFill(0xFFFFFF, 1);
                ret.drawRect(6, -1, 3, 3);

                ret.endFill();
            break;
    case "empty":
          ret.x = 0;
          ret.y = 0;
          ret.lineStyle(0.5, 0x000000, 0);
          ret.beginFill(0xFFD700, 0);
          ret.drawRect(-width / 2, -width / 2, width, width);
          ret.endFill();
        break;
    case "wood_sword":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(0, -1.0, 7, 2);


            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-1, -2.5, 2,5.25);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-2, -1, 2, 2);


            ret.endFill();
        break;
    case "venom_sword":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x5dca31, 1);
            ret.drawRect(0, -1.5, 10, 3);


            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-1, -2.5, 2,5.25);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-2, -1, 2, 2);


            ret.endFill();
        break;
    case "stone_sword":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xC0C0C0, 1);
            ret.drawRect(0, -1.5, 9, 3);


            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-1, -2.5, 2,5.25);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-2, -1, 2, 2);


            ret.endFill();
        break;
    case "gold_sword":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xFFD700, 1);
            ret.drawRect(0, -1.5, 10, 3);


            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-1, -2.5, 2,5.25);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-2, -1, 2, 2);


            ret.endFill();
        break;
    case "axe":
            ret.x = 0;
            ret.y = 0;
            /*ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xFFC0FF, 1);
            ret.drawRect(0, -1.5, 9, 3);
*/

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xC0C0C0, 1);
            ret.drawRect(5, -3, 4, 6);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-2, -1, 11, 2);


            ret.endFill();
        break;
    case "pickaxe":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xC0C0C0, 1);
            ret.drawRect(6, -4, 2, 8);

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-2, -1, 11, 2);


            ret.endFill();
        break;
    case "wood_helmet":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-width / 2-au, -width / 2-au, width+au*2, width / 2-au);
            ret.endFill();
        break;
    case "wood_pants":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-width / 2-au, 0, width+au*2, width / 2+au*2);
            ret.endFill();
        break;
    case "stone_helmet":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(-width / 2-au, -width / 2-au, width+au*2, width / 2-au);
            ret.endFill();
        break;
    case "stone_pants":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(-width / 2-au, 0, width+au*2, width / 2+au*2);
            ret.endFill();
        break;
    case "gold_helmet":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xFFD700, 1);
            ret.drawRect(-width / 2-au, -width / 2-au, width+au*2, width / 2-au);
            ret.endFill();
        break;
    case "gold_pants":
            ret.x = 0;
            ret.y = 0;
            au=0.5;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xFFD700, 1);
            ret.drawRect(-width / 2-au, 0, width+au*2, width / 2+au*2);
            ret.endFill();
        break;
    case "wood":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.1);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-5, -5, 10, 10);

            ret.endFill();
        break;
      case "metal":
              ret.x = 0;
              ret.y = 0;
              ret.lineStyle(0.5, 0x000000, 0.1);
              ret.beginFill(0x777777, 1);
              ret.drawRect(-5, -5, 10, 10);

              ret.endFill();
      break;
        case "stones":
                ret.x = 0;
                ret.y = 0;
                ret.lineStyle(0.5, 0x000000, 0.1);
                ret.beginFill(0xCCCCCC, 1);
                ret.drawRect(-5, -5, 10, 10);

                ret.endFill();
            break;
    case "food":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.1);
            ret.beginFill(0x990000, 0.5);
            ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    /*case "potion":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.1);
            ret.beginFill(0x990000, 0.5);
            ret.drawRect(-width / 2, -width / 2, width, width);
            ret.beginFill(0x990000, 0.5);
            ret.drawRect(-width / 2+2.5, -width / 2+2.5, width-5, width-5);
            ret.endFill();
        break;
    case "bigpotion":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.1);
            ret.beginFill(0x990000, 0.5);
            ret.drawRect(-width / 2-1, -width / 2-1, width+2, width+2);
            ret.beginFill(0x990000, 1);
            ret.drawRect(-width / 2+2.5, -width / 2+2.5, width-5, width-5);
            ret.endFill();
        break;*/
        case "gold_block":
                ret.x = 0;
                ret.y = 0;
                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xFFD700, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);
                ret.endFill();
            break;
          case "defensive":
                  ret.x = 0;
                  ret.y = 0;
                  ret.lineStyle(0.5, 0x000000, 0.2);
                  ret.beginFill(0xFF00FF, 1);
                  ret.drawRect(-width / 2, -width / 2, width, width);
                  ret.endFill();
              break;
    case "gold":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xFFD700, 1);
            ret.drawRect(-width / 2, -width /2, width, width);
            ret.endFill();
        break;
        case "wood_block":
                ret.x = 0;
                ret.y = 0;
                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-5, -5, 10, 10);


                // Draw the line (endPoint should be relative to myGraph's position)
                ret.lineStyle(0.5, 0x000000,0.2)
                .moveTo(2, 0)
                .lineTo(2, 5);

                ret.lineStyle(0.5, 0x000000,0.2)
                .moveTo(-2, -5)
                .lineTo(-2, 0);

                ret.lineStyle(0.5, 0x000000,0.2)
                .moveTo(-5, 0)
                .lineTo(5, 0);


                ret.endFill();
            break;
    case "stone_block":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(-5, -5, 10, 10);
            ret.lineStyle(1, 0x000000, 0.2);

            // Move it to the beginning of the line
            //ret.position.set(0, 0);

            // Draw the line (endPoint should be relative to myGraph's position)
            ret.lineStyle(0.5, 0x000000,0.2)
            .moveTo(2, 0)
            .lineTo(2, 5);

            ret.lineStyle(0.5, 0x000000,0.2)
            .moveTo(-2, -5)
            .lineTo(-2, 0);

            ret.lineStyle(0.5   , 0x000000,0.2)
            .moveTo(-5, 0)
            .lineTo(5, 0);

            //ret.position.set(0, 0);

            /*ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(0, -5, 0.1, 10);
            ret.endFill();*/
        break;
    case "wood_door":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xDEB887, 1);
            ret.drawRect(-width / 2, -width / 2, width, width);

            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-width / 2 + 2, -width / 2 + 2, width - 4, width - 2);
            ret.endFill();
        break;
    case "stone_door":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(-width / 2, -width / 2, width, width);

            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-width / 2 + 2, -width / 2 + 2, width - 4, width - 2);
            ret.endFill();
        break;
    case "stones":
            ret.x = 0;
            ret.y = 0;

            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x8B5D2E, 1);
            ret.drawRect(0, -0.25, 8, 0.5);


            ret.lineStyle(0.5, 0x000000, 0.1);
            ret.beginFill(0xA9A9A9, 1);
            ret.drawRect(-2, -2, 4, 4);




            ret.endFill();
        break;
        case "rock-metal":
                ret.x = 0;
                ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xA9A9A9, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);

                ret.lineStyle(0.5, 0x000000, 0.1);
                ret.beginFill(0x000000, 0.1);
                ret.drawRect(-width / 2+4, -width / 2+4, width-4.2, width-4.2);



                ret.endFill();
            break;
            case "rock":
                    ret.x = 0;
                    ret.y = 0;

                    ret.lineStyle(0.5, 0x000000, 0.2);
                    ret.beginFill(0xA9A9A9, 1);
                    ret.drawRect(-width / 2, -width / 2, width, width);




                    ret.endFill();
                break;
    case "player":
            ret.x = 0;
            ret.y = 0;

            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0xF4F4F4, 1);
            ret.drawRect(-width / 2, -width / 2, width, width);




            ret.endFill();
        break;
    case "coin":
            ret.x = 0;
            ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xD4AF37, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    case "venom":
            ret.x = 0;
            ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0x5dca31, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    case "poisoned":
            ret.x = 0;
            ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0);
                ret.beginFill(0x5dca31, 0);
                ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    case "berrys":
            ret.x = 0;
            ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0x66CD00, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);


                ret.lineStyle(1, 0x000000, 0);
                ret.beginFill(0x990000, 1);
                ret.drawRect(-3, -2, 1.5, 1.5);

                ret.lineStyle(1, 0x000000, 0);
                ret.beginFill(0x990000, 1);
                ret.drawRect(1, 1, 1.5, 1.5);


            ret.endFill();
        break;
    /*case "tree":
            ret.x = 0;
            ret.y = 0;

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);


                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0x66CD00, 1);
                ret.drawRect(-width, -width - width - width / 2, width * 2, width * 2 + 2);

            ret.endFill();
        break;*/
    case "palmtree":
            ret.x = 0;
            ret.y = 0;

                /*ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-(width * 2) / 2, -(width * 2) / 2, width * 2, width * 2);

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-(width * 3) / 2, -(width * 3) / 2, width * 3, width * 3);*/

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, 0, width, width/2);

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, -(width*1)/2, width, width/2);

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, -(width*2)/2, width, width/2);

                ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, -(width*3)/2, width, width/2);


                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.rotation = 0.3;
                ret2.y = -(width*3)/2;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x66CD00, 1);
                ret2.drawRect(-2, -width/2, width*2-5, width/2-1);
                ret.addChild(ret2);

                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.rotation = -0.3;
                ret2.y = -(width*3)/2;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x66CD00, 1);
                ret2.drawRect(-width*2+2+5, -width/2, width*2-5, width/2-1);
                ret.addChild(ret2);



                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.rotation = -0.7;
                ret2.y = -(width*3)/2;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x66CD00, 1);
                ret2.drawRect(-width*2+2+5, -width/2, width*2-5, width/2);
                ret.addChild(ret2);


                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.rotation = 0.7;
                ret2.y = -(width*3)/2;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x66CD00, 1);
                ret2.drawRect(-2, -width/2, width*2-5, width/2);
                ret.addChild(ret2);



                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.x = -1;
                ret2.rotation = 0;
                ret2.y = -(width*3)/2-4 ;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x8B4513 , 0.9);
                 ret2.drawRect(-2, 4, 2.5, 2.5);
                ret.addChild(ret2);

                var ret2 = new PIXI.Graphics();
                width = 10;
                ret2.x = 1;
                ret2.rotation = 0;
                ret2.y = -(width*3)/2-3;

                ret2.lineStyle(0.5, 0x000000, 0.2);
                ret2.beginFill(0x8B4513 , 0.9);
                ret2.drawRect(-2, 2, 3, 3);
                ret.addChild(ret2);



                /*ret.lineStyle(0.5, 0x000000, 0.2);
                ret.beginFill(0xDEB887, 1);
                ret.drawRect(-width / 2, -width / 2, width, width);*/



            ret.endFill();
        break;
    case "cactus":
            ret.x = 0;
            ret.y = 0;

            ret.lineStyle(0.5, 0x000000, 0.2);
            ret.beginFill(0x679E5E, 1);
            ret.drawRect(-width / 2, -width / 2, width, width);

            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(3, -3 - 0.75, 3, 1.5);


            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(3, 0 - 0.75, 3, 1.5);

            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(3, 3 - 0.75, 3, 1.5);



            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-6.25, -3 - 0.75, 3, 1.5);


            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-6.25, 0 - 0.75, 3, 1.5);

            ret.lineStyle(1, 0x000000, 0);
            ret.beginFill(0x000000, 1);
            ret.drawRect(-6.25, 3 - 0.75, 3, 1.5);
            ret.endFill();
        break;
    case "invisible":
            ret.x = 0;
            ret.y = 0;

            ret.lineStyle(0, 0x000000, 0);
            ret.beginFill(0xA9A9A9, 0);
            ret.drawRect(-width / 2, -width / 2, width, width);




            ret.endFill();
        break;
    case "green":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0x0EA313, 0.4);
            ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    case "red":
            ret.x = 0;
            ret.y = 0;
            ret.lineStyle(0, 0x000000, 0.1);
            ret.beginFill(0xD80D0D, 0.4);
            ret.drawRect(-width / 2, -width / 2, width, width);
            ret.endFill();
        break;
    default:
        if (OBJECT_DICT[type] != undefined && OBJECT_DICT[type].image != null){
            ret.x = 0;
            ret.y = 0;
            scale = 1.0;
            if (OBJECT_DICT[type].scale != undefined){
              scale = OBJECT_DICT[type].scale;
            }
            /*console.log(OBJECT_DICT[type].image);
            console.log(images_objects[type]);*/
              //beeTexture = new PIXI.Texture.fromImage(images_objects[type], undefined, undefined, scale)
                var bee = new PIXI.Sprite(PIXI.Texture.fromImage(OBJECT_DICT[type].image, undefined, undefined, scale))
                /*bee.position.x = randomPos ? (Math.random() * width) : mousePos.x
                bee.position.y = randomPos ? (Math.random() * height) : mousePos.y
                bee.speedX = (Math.random() - 0.5) * 10
                bee.speedY = (Math.random() - 0.5) * 10

                bee.accX = (Math.random() - 0.5) * 0.1
                bee.accY = (Math.random() - 0.5) * 0.1
              */
                bee.anchor.y = 0.5
                bee.anchor.x = 0.5
                bee.scale.set(0.1*scale)
                //bees.push(bee)
                //bee.rotation = (Math.random() - 0.5)
                ret.addChild(bee)



            }
            break;
    }



    return ret;
}



var PARTICLE_DICT  = {
  fire : {
    particle:"particle.png",
    effect:{
      "alpha": {
        "start": 1,
        "end": 1
      },
      "scale": {
        "start": 0.05,
        "end": 0.01,
        "minimumScaleMultiplier": 1.1
      },
      "color": {
        "start": "#bac72a",
        "end": "#ff5e00"
      },
      "speed": {
        "start": 30,
        "end": 0,
        "minimumSpeedMultiplier": 0.5
      },
      "acceleration": {
        "x": 0,
        "y": 18
      },
      "maxSpeed": 0,
      "startRotation": {
        "min": -80,
        "max": -100
      },
      "noRotation": false,
      "rotationSpeed": {
        "min": 120,
        "max": 1
      },
      "lifetime": {
        "min": 0.5,
        "max": 1
      },
      "blendMode": "normal",
      "frequency": 0.039,
      "emitterLifetime": -1,
      "maxParticles": 20,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": true,
      "spawnType": "point",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 10
      }
    }
  },
  light : {
    particle:"particle.png",
    effect: {
      "alpha": {
        "start": 0.8,
        "end": 0.8
      },
      "scale": {
        "start": 1,
        "end": 1,
        "minimumScaleMultiplier": 1
      },
      "color": {
        "start": "#ffffff",
        "end": "#ffffff"
      },
      "speed": {
        "start": 10,
        "end": 10,
        "minimumSpeedMultiplier": 0.01
      },
      "acceleration": {
        "x": 0,
        "y": 0
      },
      "maxSpeed": 1,
      "startRotation": {
        "min": 3,
        "max": 360
      },
      "noRotation": true,
      "rotationSpeed": {
        "min": 0,
        "max": 0
      },
      "lifetime": {
        "min": 0.6,
        "max": 0.6
      },
      "blendMode": "normal",
      "frequency": 0.25,
      "emitterLifetime": -1,
      "maxParticles": 4,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": true,
      "spawnType": "circle",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 0
      }
    }
  },
  venom:{
    particle:"particle.png",
    effect: {
      "alpha": {
        "start": 0.4,
        "end": 0.5
      },
      "scale": {
        "start": 0.25,
        "end": 0.001,
        "minimumScaleMultiplier": 0.5
      },
      "color": {
        "start": "#23ad00",
        "end": "#007514"
      },
      "speed": {
        "start": 5,
        "end": 0,
        "minimumSpeedMultiplier": 1
      },
      "acceleration": {
        "x": 0,
        "y": 0
      },
      "maxSpeed": 0,
      "startRotation": {
        "min": 0,
        "max": 360
      },
      "noRotation": true,
      "rotationSpeed": {
        "min": 0,
        "max": 0
      },
      "lifetime": {
        "min": 2,
        "max": 2
      },
      "blendMode": "normal",
      "frequency": 0.1,
      "emitterLifetime": -1,
      "maxParticles": 35,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": true,
      "spawnType": "circle",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 2
      }
    }
  },
  smoke:{
    particle:"smokeparticle.png",
    effect: {
    	"alpha": {
    		"start": 0.45,
    		"end": 0
    	},
    	"scale": {
        "start": 0.01,
        "end": 0.04,
    		"minimumScaleMultiplier": 1
    	},
    	"color": {
    		"start": "#85888d",
    		"end": "#100f0c"
    	},
    	"speed": {
    		"start": 5,
    		"end": 0,
    		"minimumSpeedMultiplier": 1
    	},
    	"acceleration": {
    		"x": 0,
    		"y": -112
    	},
    	"maxSpeed": 0,
    	"startRotation": {
    		"min": 250,
    		"max": 290
    	},
    	"noRotation": false,
    	"rotationSpeed": {
    		"min": 0,
    		"max": 0
    	},
    	"lifetime": {
    		"min": 0.2,
    		"max": 0.4
    	},
    	"blendMode": "normal",
    	"frequency": 0.00001,
    	"emitterLifetime": -1,
    	"maxParticles": 40,
    	"pos": {
    		"x": 0,
    		"y": 0
    	},
    	"addAtBack": true,
    	"spawnType": "point"
    }
  },
  jump:{
    particle:"particle.png",
    effect: {
    	"alpha": {
    		"start": 0.1,
    		"end": 0.1
    	},
    	"scale": {
    		"start": 1/7,
    		"end": 1/9,
    		"minimumScaleMultiplier": 1
    	},
    	"color": {
    		"start": "#f0f0f0",
    		"end": "#dedede"
    	},
    	"speed": {
    		"start": 100/5,
    		"end": 0,
    		"minimumSpeedMultiplier": 1
    	},
    	"acceleration": {
    		"x": 0,
    		"y": -220/5
    	},
    	"maxSpeed": 0,
    	"startRotation": {
    		"min": 0,
    		"max": 360/47
    	},
    	"noRotation": false,
    	"rotationSpeed": {
    		"min": 0,
    		"max": 0
    	},
    	"lifetime": {
    		"min": 0.2,
    		"max": 0.8
    	},
    	"blendMode": "normal",
    	"frequency": 0.001,
    	"emitterLifetime": 0.3,
    	"maxParticles": 18,
    	"pos": {
    		"x": 0,
    		"y": 5
    	},
    	"addAtBack": true,
    	"spawnType": "burst",
    	"particlesPerWave": 3,
    	"particleSpacing": 10,
    	"angleStart": 80
    }
  },

};
