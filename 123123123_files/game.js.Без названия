ismobile = false;
if (typeof window.orientation !== 'undefined') {
  ismobile = true
}

let savedVolumeSFX = parseInt(localStorage.getItem("sfx_volume")) || 0.6;
let audioSFXList = [];


var aiptag = aiptag || {};
aiptag.cmd = aiptag.cmd || [];
aiptag.cmd.player = aiptag.cmd.player || [];

window.aiptag = window.aiptag || {cmd: []};
aiptag.cmd.display = aiptag.cmd.display || [];
aiptag.cmd.player = aiptag.cmd.player || [];



aiptag.cmp = {
  show: true,
  position: "centered",  //centered, bottom
  button: true,
  buttonText: "Privacy settings",
  buttonPosition: "bottom-left" //bottom-left, bottom-right, top-left, top-right
}

// // Load them google fonts before starting...!
host = document.location.host;
megaserver = document.location.host;
particles_array = [];


//megaserver = "46.101.82.29";
window.WebFontConfig = {
  google: {
    families: ['Bungee', 'Quattrocento Sans']
  },

  active: function () {
    // do something
  }
};
const loader = new PIXI.loaders.Loader(); // you can also create your own if you want
loader.add('atlas', 'public/img/pack/atlas.json');

//var beeSvg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/bee.svg";
var images_objects = {};
for (key in OBJECT_DICT) {
  if (OBJECT_DICT[key].image != undefined) {
    //console.log(key);
    //  images_objects[key] = "public/img/" + OBJECT_DICT[key].image;
    // Chainable `add` to enqueue a resource
    try {
      // loader.add("public/img/" + OBJECT_DICT[key].image);

    } catch (e) {}
  }
}
for (key in PARTICLE_DICT) {

  if (PARTICLE_DICT[key].particle != undefined) {
    //console.log(key);
    //  images_objects[key] = "public/img/" + PARTICLE_DICT[key].image;
    // Chainable `add` to enqueue a resource
    try {
      // loader.add("public/img/" + PARTICLE_DICT[key].particle);

    } catch (e) {}
  }
}




loader.load((loader, resources) => {
  // for (key in OBJECT_DICT) {
  //   if (OBJECT_DICT[key].image != undefined) {
  //     var k = "public/img/" + OBJECT_DICT[key].image;
  //     scale = 1.0;
  //
  //     if (OBJECT_DICT[key].scale != undefined) {
  //       scale = OBJECT_DICT[key].scale;
  //     }
  //     images_objects[key] = new PIXI.Texture.fromImage(k, undefined, undefined, scale)
  //   }
  // }
  // for (key in PARTICLE_DICT) {
  //   if (PARTICLE_DICT[key].particle != undefined) {
  //     var k = "public/img/" + PARTICLE_DICT[key].particle;
  //     scale = 1.0;
  //
  //     if (PARTICLE_DICT[key].scale != undefined) {
  //       scale = PARTICLE_DICT[key].scale;
  //     }
  //     images_objects[key] = new PIXI.Texture.fromImage(k, undefined, undefined, scale)
  //   }
  // }


  init();


});

// throughout the process multiple signals can be dispatched.
loader.onProgress.add(() => {

}); // called once per loaded/errored file
loader.onError.add(() => {}); // called once per errored file
loader.onLoad.add(() => {

}); // called once per loaded file
loader.onComplete.add(() => {
  $("#join_game").val("Start");
}); // called once when the queued resources all load.






/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function () {
  var wf = document.createElement('script');
  wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
/* jshint ignore:end */


var requestUrl = "https://ip-api.com/json";
var country = "";


var number = {};

var max_players = MAX_USERS_PER_SERVER;
var countries_region = {};
countries_region["europe"] = ["Spain", "France", "Belgium", "Russia", "Italy", "Germany", "Netherlands", "United Kingdom", "Ukraine", "Poland", "Turkey", "Czech Republic", "Belarus", "Kazakhstan", "Romania"];
//var countries_region["Asia"] = {"Spain"};
countries_region["eeuu"] = ["United States", "Mexico", "Venezuela", "Chile", "Brazil", "Canada", "Brazil"];
countries_region["asia"] = ["Mongolia", "China", "India", "China", "Vietnam", "Japan", "Australia", "Indonesia", "Malaysia", "Malaysia", "Taiwan", "Philipines", "Singapore", "Vietnam", "Thailand"];
var region_countries = {
  "AMSTERDAM": "europe",
  "PARIS": "europe",
  "NEW YORK": "eeuu",
  "EEUU": "eeuu",
  "SINGAPORE": "asia",
  "nyc2": "eeuu",
  "nyc3": "eeuu",
  "fr1": "europe",
  "fr2": "europe",
  "fr3": "europe",
  "ams1": "europe",
  "ams2": "europe",
  "ams3": "europe",
  "lon1": "europe",
  "lon2": "europe",
  "europe": "europe",
  "asia": "asia",
  "ASIA": "asia",
  "INDIA": "asia",
  "EEUU-WEST": "eeuu",
  "EEUU-EAST": "eeuu",
  "EEUU WEST": "eeuu",
  "EEUU EAST": "eeuu",
  "america": "eeuu",
  "EUROPE": "europe" /*,"LOCALHOST1":"europe","LOCALHOST2":"eeuu","LOCALHOST3":"asia"*/
};

function getServerName(reg) {
  var name = "Unknown";
  if (reg == "fr1" || reg == "fr2" || reg == "fr3") {
    name = "France";
  } else if (reg == "ams1" || reg == "ams2" || reg == "ams3") {
    name = "Amsterdam";
  } else if (reg == "nyc1" || reg == "nyc2" || reg == "nyc3") {
    name = "New York";
  } else if (reg == "lon1" || reg == "lon2" || reg == "lon3") {
    name = "London";
  }
  return name;
}
var userid;
var objects = {};
var body_user;
var container;


//var aux = 0;
/*var aux_steptime = 0;
var aux_aux_steptime = 0;*/


var sprites = {};
var socket = null;
var last_ping = Date.now();

function init() {
  $(".loading").fadeOut(600);
  refreshHosts();
  $.ajax({
    url: requestUrl,
    type: 'GET',
    success: function (json) {
      country = json.country;
      //refreshHosts();
      CreateServerSelect();


    },
    error: function (err) {}
  });


  function initAipPreroll() {
    // aipPlayer=undefined;
    if (typeof aipPlayer != "undefined") {
      //return;
      adplayer = new aipPlayer({
        AD_WIDTH: 960,
        AD_HEIGHT: 540,
        AD_DISPLAY: 'default', //default, fullscreen, center, fill
        AD_CENTERPLAYER: false,
        LOADING_TEXT: 'loading advertisement',
        PREROLL_ELEM: document.getElementById('preroll'),
        AIP_COMPLETE: function () {
          /*******************
           ***** WARNING *****
           *******************
           Please do not remove the PREROLL_ELEM
           from the page, it will be hidden automaticly.
           If you do want to remove it use the AIP_REMOVE callback below
          */
          //alert("Ad Completed");
          JoinGame();
        },
        AIP_REMOVE: function () {
          // Here it's save to remove the PREROLL_ELEM from the page
          // But it's not necessary
        }
      });
    } else {
      //alert("Ad Failed");
      JoinGame();
      // Failed to load the adslib ads are probably blocked
      // don't call the startPreRoll function.
      // it will result in an error.
    }
  }

  function getScript(src, callback) {
    var headElm = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    var once = true;
    script.async = "async";
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = src;
    script.onload = script.onreadystatechange = function () {
      if (once && (!script.readyState || /loaded|complete/.test(script.readyState))) {
        once = false;
        callback();
        script.onload = script.onreadystatechange = null;
      }
    };

    headElm.appendChild(script);
  }

  getScript('//api.adinplay.com/player/v2/CBE/cubee.io/player.min.js', initAipPreroll);




  $(".skins ul li").on("click", function () {
    $(".skins .active").removeClass("active");
    $(this).addClass("active");
  });




  function CreateServerSelect() {
    if (hosts != undefined && Object.keys(hosts).length > 0) {
      var selecteditem = false;
      var lista = {};
      $("#serverlist").html('');
      var selected = false;
      var i = 0;
      for (ip in hosts) {
        if (lista[hosts[ip][0]] == undefined) {
          lista[hosts[ip][0]] = "";
          number[hosts[ip][0]] = 0;
        }
        number[hosts[ip][0]] += 1;
        var select = "";
        var max_p = hosts[ip][2];
        var name = hosts[ip][3];

        if (selecteditem == false && countries_region[region_countries[hosts[ip][0]]] != undefined && countries_region[region_countries[hosts[ip][0]]].indexOf(country) > -1) {
          var us = hosts[ip][1];
          if (us < max_p) {
            selecteditem = true;
            select = ' selected="selected"';
            selected = true;

          }
        }
        lista[hosts[ip][0]] += '<option users="' + hosts[ip][1] + '" max_players="' + max_p + '" ' + select + ' value="' + ip + '">' + name.replace("-", " ") + " " + number[hosts[ip][0]] + ' - [' + hosts[ip][1] + '/' + max_p + ']</option>';
      }

      var last_r = "";
      for (reg in lista) {
        if (last_r != reg) {
          if (last_r != "") {
            $("#serverlist").append('</optgroup>');
          }
          $("#serverlist").append('<optgroup label="' + reg.replace("-", " ").replace("prod", "") + '">');
          last_r = reg;
        }
        $("#serverlist").append(lista[reg]);

      }



      if (!selected) {
        var finish = false;
        $("#serverlist option").each(function (index) {
          if (!finish && $(this).attr("users") < $(this).attr("max_players")) {
            $(this).attr("selected", "true");
            //if(socket == null) initializeSocket(false);

            finish = true;
            //break;
          }
        });
        if (!finish) {
          setTimeout(function () {
            showMessage("All servers are full.");
            hideMessage(1000);
          }, 1000);
        } else {
          //hideMessage(0);

        }
      }


    } else {
      setTimeout(function () {
        refreshHosts();
      }, 1000);
    }

  }



  $("#serverlist").on("change", function (index) {
    //if (socket != undefined){
    initializeSocket(false);
    //}
  });









  var width_screen = $(window).width();
  var height_screen = $(window).height();

  window.onresize = function (event) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    //this part resizes the canvas but keeps ratio the same
    width_screen = $(window).width();
    height_screen = $(window).height();

    app.view.style.width = w + "px";
    app.view.style.height = h + "px";
    //this part adjusts the ratio:
    app.renderer.resize(w, h);
    // app.renderer.plugins.interaction.destroy();
    // app.renderer.plugins.interaction = null;

    click_area.x = width_screen / 2;
    click_area.y = height_screen / 2;
    click_area.width = width_screen;
    click_area.height = height_screen;


    ranking_text_container.anchorRight = 20;

    ranking_text_container.y = 10;


    equipation_layer.x = width_screen / 2 - equipation_layer.width / 2 + 50
    equipation_layer.y = height_screen - (equipation_layer.height) + 80

    app.renderer.resize(width_screen, height_screen);
    uiStage.resize(width_screen, height_screen);



    inventory.anchorLeft = width_screen / 2 - 190;
    container_map.scale.x = 15;
    container_map.scale.y = 15;


    while (width_screen / (container_map.scale.x) < 250) {
      container_map.scale.x -= 0.1;
      container_map.scale.y -= 0.1;

    }
    if (body_user != undefined) {
      container_map.x = -body_user.x * container_map.scale.x + width_screen / 2;
      container_map.y = -body_user.y * container_map.scale.y + height_screen / 2;
    }
    ambient.width = width_screen * 2;
    ambient.height = height_screen * 2;

  }



  var app = new PIXI.Application(width_screen, height_screen, {
    backgroundColor: 0x7EC0EE
  });
  // var stage = new PIXI.Stage(0xAAFFFF);

  // app.renderer = PIXI.autoDetectRenderer(width_screen, height_screen);
  // app.renderer.backgroundColor = 0x061639;

  //app.renderer.plugins.interaction.interactionFrequency = 1002;


  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);


  if (!isChrome) {
    $("#name_choose").append("<p class=\"alert_message\"><strong>ADVISE:</strong> Your browser is not fully compatible. For a better experience install <a href=\"https://www.google.com/chrome/browser/desktop/index.html\">Chrome</a></p>");
  }

  app.stage = new PIXI.display.Stage();

  //app.stage.displayList = new PIXI.DisplayList();
  var uiStage = new PIXI.UI.Stage(window.innerWidth, window.innerHeight);
  app.stage.addChild(uiStage);


  /*  var hudLayer = new PIXI.DisplayGroup(3, false);
    var playersLayer = new PIXI.DisplayGroup(2, false);
    var mapLayer = new PIXI.DisplayGroup(-1, false);
    var botsLayer = new PIXI.DisplayGroup(1, false);
*/
  //var hudLayer = 0;
  var playersLayer = 1;
  var mapLayer = 2;
  var botsLayer = 3;


  document.body.appendChild(app.view);

  container_map = new PIXI.Container();

  container_map.interactive = true;

  // Shows hand cursor
  container_map.buttonMode = true;

  container_map.hitArea = new PIXI.Rectangle(-2000, -2000, 8500, 8500);

  var topLayer = new PIXI.display.Layer();
  var middleTopLayer = new PIXI.display.Layer();
  var middleLayer = new PIXI.display.Layer();
  var bottomLayer = new PIXI.display.Layer();
  var hudLayer = new PIXI.display.Layer();
  var hudLayerMap = new PIXI.display.Layer();
  var overHudLayerMap = new PIXI.display.Layer();


  var overlayFirst = new PIXI.display.Layer();
  var overlaySecond = new PIXI.display.Layer();
  var overlayThird = new PIXI.display.Layer();
  var overlayFourth = new PIXI.display.Layer();



  // EL GRADIENTE PARAR LA LUZ
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  var grd = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
  grd.addColorStop(0, "rgba(144,195,212,0.5)");
  //grd.addColorStop(0, "rgba(15,33,102,1)");
  grd.addColorStop(1, "rgba(144,195,212,1)");
  //ctx.fillStyle = grd;
  ctx.fillStyle = grd;

  //ctx.fillStyle="#FFFFFF";
  ctx.beginPath();
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //ctx.arc(50,50,10005,0,2*Math.PI);
  ctx.fill();
  var background_sky = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
  background_sky.scale.x = 2;
  background_sky.scale.y = 2;
  /*  var sky_obj = new PIXI.Graphics();

    sky_obj.beginFill(0x000000, 0.8);
    sky_obj.drawRect(0, 0, window.innerWidth, window.innerHeight);
    sky_obj.endFill();*/
  //sky_obj.fillRect(10,10,200,100);
  //  app.stage.addChild(background_sky); //<-- try comment it*/

  app.stage.addChild(bottomLayer);
  app.stage.addChild(container_map);
  app.stage.addChild(middleLayer);
  app.stage.addChild(middleTopLayer);
  app.stage.addChild(topLayer);

  var lighting = new PIXI.display.Layer();
  lighting.on('display', function (element) {
    element.blendMode = PIXI.BLEND_MODES.SCREEN
  });
  lighting.filters = [new PIXI.filters.VoidFilter()];
  lighting.filters[0].blendMode = PIXI.BLEND_MODES.MULTIPLY;

  lighting.filterArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
  // lighting.filterArea = new PIXI.Rectangle(100, 100, 600, 400); //<-- try uncomment it
  var ambient = new PIXI.Graphics();
  ambient.beginFill(0x000000, 0.8);
  ambient.drawRect(0, 0, window.innerWidth, window.innerHeight);
  ambient.endFill();
  lighting.addChild(ambient); //<-- try comment it*/

  tween = new TWEEN.Tween(ambient)
    .to({
      alpha: "0"
    }, 100);

  //tween.chain(tweenBack2);
  tween.start();




  app.stage.addChild(lighting);

  uiStage.parent.addChild(hudLayer);
  hudLayer.alpha = 0;
  overlayFourth.alpha = 0;
  uiStage.parent.addChild(overHudLayerMap);




  var font = 'Bungee';
  var font2 = "Quattrocento Sans";
  var text_style = new PIXI.TextStyle({
    fontFamily: font,
    fontSize: 12,
    lineHeight: 17,
    //fontStyle: 'italic',
    // fontWeight: 'bold',
    fill: '#ffffff', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: true,
    wordWrapWidth: 440
  });


  var text_style_modal_title = new PIXI.TextStyle({
    fontFamily: font,
    fontSize: 31,
    // fontStyle: 'italic',
    //fontWeight: 'bold',
    fill: '#000000', // gradient
    stroke: '#FFFFFF',
    strokeThickness: 25,
    dropShadow: true,
    dropShadowColor: '#FFFFFF',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: true,
    wordWrapWidth: 440
  });

  var text_style_health = new PIXI.TextStyle({
    fontFamily: font,
    fontSize: 21,
    // fontStyle: 'italic',
    //fontWeight: 'bold',
    fill: '#e60000', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: true,
    wordWrapWidth: 440
  });

  var text_style_coins = new PIXI.TextStyle({
    fontFamily: font,
    fontSize: 16,
    //  fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: true,
    wordWrapWidth: 440
  });

  var text_style_equipation = new PIXI.TextStyle({
    fontFamily: font,
    align: 'center',
    fontSize: 12,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_buttons_inventory = new PIXI.TextStyle({
    fontFamily: font2,
    align: 'center',
    fontSize: 11,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: 'rgba(0,0,0,1)', // gradient
    stroke: '#000000',
    strokeThickness: 0,
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_slot_accepted = new PIXI.TextStyle({
    fontFamily: font2,
    align: 'center',
    fontSize: 11,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#000000', // gradient
    stroke: '#000000',
    strokeThickness: 0,
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_quant_inventory = new PIXI.TextStyle({
    fontFamily: font2,
    align: 'center',
    fontSize: 12,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: 'rgba(255,255,255,1)', // gradient
    stroke: 'rgba(0,0,0,0.5)',
    strokeThickness: 4,
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 0,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_popin = new PIXI.TextStyle({
    fontFamily: font,
    align: 'center',
    fontSize: 10,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });

  var text_style_ranking = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 13,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 0,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_button = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 17,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#000000', // gradient
    stroke: '#000000',
    strokeThickness: 0,
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });

  var text_style_ranking_self = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 13,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#82e096', // gradient
    stroke: '#fffa00',
    strokeThickness: 0,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_ranking_self_leader = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 16,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#82e096', // gradient
    stroke: '#fffa00',
    strokeThickness: 0,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var text_style_ranking_leader = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#fffa00',
    strokeThickness: 0,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });

  var text_style_ranking_bottom = new PIXI.TextStyle({
    fontFamily: font,
    align: 'left',
    fontSize: 11,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 0,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });


  var text_style_equipation_selected = new PIXI.TextStyle({
    fontFamily: font,
    align: 'center',
    fontSize: 12,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#FF00FF',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });


  var text_style_players = new PIXI.TextStyle({
    fontFamily: font,
    align: 'center',
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });


  var text_style_icons = new PIXI.TextStyle({
    fontFamily: "FontAwesome",
    align: 'center',
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#FFFFFF', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });

  var text_style_icons_hover_g = new PIXI.TextStyle({
    fontFamily: "FontAwesome",
    align: 'center',
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#00C670', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });



  var text_style_icons_hover_r = new PIXI.TextStyle({
    fontFamily: "FontAwesome",
    align: 'center',
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    //fill: '#FFD700', // gradient
    fill: '#E51B1B', // gradient
    stroke: '#000000',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    wordWrap: false,
    wordWrapWidth: 440
  });
  var welcomed = false;
  var joining = false;


  var margin = 10;
  var width = 19;
  var drag_inventory = false;
  var drag_inventory_id = 0;
  var drag_inventory_id_quantity = 1;


  inventory = new PIXI.UI.Container();
  inventory.anchorBottom = 80;
  inventory.anchorLeft = "30%";
  /*inventory.width = 300;
  inventory.height = 80;*/
  inventory.scrollX = true;
  inventory.scrollY = false;

  inventory.width = 300;
  inventory.parentLayer = overlayFourth;
  inventory.visible = true;
  //inventory.x = 0;
  //inventory.y = +20+margin*2+2;

  var ui_width = 22;

  function resetInventory() {
    for (var i = inventory.children.length - 1; i >= 0; i--) {


      inventory.removeChild(inventory.children[i]);
    };
    for (var j = 0; j <= 11; j++) {
      var item_container33 = new PIXI.UI.Container();
      var item_container = new PIXI.Container();
      item_container.parentLayer = overlayFourth;
      /*item_container.anchorBottom = container.anchorRight = container.anchorTop = 18;
      item_container.anchorLeft = "40%";*/
      item_container.x = (inventory.children.length) * (ui_width * 2);
      item_container.y = +ui_width / 2;


      item_container.interactive = true;
      //createDragAndDropFor(item_container);


      item_container.alpha = 0.8;
      var coins_text2 = getDraw("empty");
      var graphcontainer = new PIXI.Container();
      graphcontainer.addChild(coins_text2);
      graphcontainer.scale.x = 2.7;
      graphcontainer.scale.y = 2.7;



      graphcontainer.x = 10;
      graphcontainer.y = 10;
      item_container.key = j + 1;


      var cantidad = new PIXI.Text("", text_style_quant_inventory);
      cantidad.y = 17;
      var background2 = new PIXI.Graphics();
      background2.x = 0;
      background2.y = 0;
      background2.lineStyle(1, 0xFFFFFF, 1);
      background2.beginFill(0xFFFFFF, 0.1);
      background2.drawRect((-ui_width / 2), (-ui_width / 2), ui_width * 2, ui_width * 2);
      background2.endFill();
      item_container.addChild(background2);
      item_container.addChild(graphcontainer);
      item_container.addChild(cantidad);
      var button_message = new PIXI.Text("" + (j + 1), text_style_buttons_inventory);
      button_message.y = -8;
      button_message.x = 20;
      background2.addChild(button_message);


      item_container33.container.addChild(item_container);
      item_container33.obj_id = -1;
      item_container33.obj_q = 0;

      item_container.interactive = true;
      item_container.p = item_container33;

      inventory.addChild(item_container33);
      item_container.pointerover = function (mouseData) {}
      item_container.pointerout = function (mouseData) {
        /*if(drag_inventory && this.key == drag_inventory_id){
            alert("stop");
            drag_inventory = false;
        }*/
        hidePopin();
      }
      item_container.pointerdown = function (mouseData) {
        //console.log(inventory.children[this.key - 1].obj_id);
        if (inventory.children[this.key - 1].obj_id > -1) {
          //drag_drop_phantom.clear();
          container_map.removeChild(drag_drop_phantom);
          drag_drop_phantom = new PIXI.Container();
          drag_drop_phantom.alpha = 1;
          drag_drop_phantom.scale.x = 0.4;
          drag_drop_phantom.scale.y = 0.4;
          drag_drop_phantom.parentLayer = overlayThird;
          drag_drop_phantom.addChild(getDraw(ID_OBJECTS[this.p.obj_id]));
          var state = new PIXI.Text("", text_style_equipation);
          state.x = -10;
          state.y = -15;
          state.scale.x = 0.5;
          state.scale.y = 0.5;
          state.parentLayer = overlayThird;

          drag_drop_phantom.addChild(state);



          container_map.addChild(drag_drop_phantom);

          drag_drop_phantom.x = Math.round((body_user.x + (vector[1]) * (length / container_map.scale.x)) / 10) * 10;
          drag_drop_phantom.y = Math.round((body_user.y + (vector[0]) * (length / container_map.scale.y)) / 10) * 10;

          drag_drop_phantom.visible = true;

          drag_inventory = true;
          drag_inventory_id = this.key;
          drag_inventory_id_quantity = 1;
        }
      }

      item_container.pointerover = function (mouseData) {
        if (drag_inventory) {
          // console.log(this.key);
        }

        if (this.p.obj_id == -1) {
          //console.log(this.parent);
          showPopin("key " + this.key + "\n\nEmpty");
        } else {
          var obj = OBJECT_DICT[ID_OBJECTS[this.p.obj_id]];
          showPopin("key " + this.key + "\n " + obj.name);
        }
        if (drag_drop_phantom.visible && drag_drop_phantom.children[1] != undefined) {
          drag_drop_phantom.children[1].text = "Move";
        }
      };


      item_container.pointerup = function (mouseData) {
        mouseDown = -1;
        sendMouseInput(0);
        if (drag_drop_phantom.visible) {
          drag_drop_phantom.visible = false;
        }
        if (drag_inventory) {
          drag_inventory = false;
          if (drag_inventory_id != this.key) {
            //alert(drag_inventory_id + " por "+ this.key);
            /* inventory.children[drag_inventory_id-1]
             inventory.children[this.key-1]
             */

            var it_1_id = inventory.children[drag_inventory_id - 1].obj_id;
            var it_2_id = inventory.children[this.key - 1].obj_id;

            var it_1_text = inventory.children[drag_inventory_id - 1].container.children[0].children[2].text;
            var it_2_text = inventory.children[this.key - 1].container.children[0].children[2].text;


            for (var ii = 0; ii < 2; ii++) {
              if (ii <= 0) {
                gui_obj = inventory.children[drag_inventory_id - 1];
                id = it_2_id;
                quantity = it_2_text;
              } else {
                gui_obj = inventory.children[this.key - 1];
                id = it_1_id;
                quantity = it_1_text;
              }

              //alert(id);



              gui_obj.container.children[0].children[1].removeChild(gui_obj.container.children[0].children[1].children[0]);
              gui_obj.container.children[0].children[1].scale.x = 2.7;
              gui_obj.container.children[0].children[1].scale.y = 2.7;

              // gui_obj.container.children[0].removeChild(gui_obj.container.children[0].children[2]);
              if (id > -1) {
                if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.equip) {
                  gui_obj.container.children[0].children[1].addChild(getDraw("player"));
                  gui_obj.container.children[0].children[1].children[0].addChild(getDraw(ID_OBJECTS[id]));
                  /*gui_obj.container.children[0].children[1].scale.x = 2.7;
                  gui_obj.container.children[0].children[1].scale.y = 2.7;*/
                  // alert("equip");
                } else {
                  gui_obj.container.children[0].children[1].addChild(getDraw(ID_OBJECTS[id]));
                  if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.gather) {
                    /*gui_obj.container.children[0].children[1].scale.x = 1;
                    gui_obj.container.children[0].children[1].scale.y = 1;*/
                  }
                }
                if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.weapon) {
                  gui_obj.container.children[0].children[1].x = 12;
                  gui_obj.container.children[0].children[1].y = 19;
                  gui_obj.container.children[0].children[1].rotation = -1.8;
                  /*gui_obj.container.children[0].children[1].scale.x = 2.7;
                  gui_obj.container.children[0].children[1].scale.y = 2.7;*/
                } else {
                  gui_obj.container.children[0].children[1].x = 10;
                  gui_obj.container.children[0].children[1].y = 10;
                  gui_obj.container.children[0].children[1].rotation = 0;
                  if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.build) {
                    /*gui_obj.container.children[0].children[1].scale.x = 2.7;
                    gui_obj.container.children[0].children[1].scale.y = 2.7;*/
                  }
                }
              } else {
                gui_obj.container.children[0].children[1].addChild(getDraw("empty"));
                gui_obj.container.children[0].children[1].x = 10;
                gui_obj.container.children[0].children[1].y = 10;
                gui_obj.container.children[0].children[1].rotation = 0;
                /*gui_obj.container.children[0].children[1].scale.x = 2.7;
                gui_obj.container.children[0].children[1].scale.y = 2.7;*/
              }
              //gui_obj.container.children[0].addChild(new PIXI.Text("", text_style_equipation));
              gui_obj.obj_id = id;
              gui_obj.container.children[0].children[2].text = quantity;
              gui_obj.container.children[0].children[2].x = -gui_obj.container.children[0].children[2].width / 2 + 10

            }
            sendWeapon(userid, "hand", true)
            // setWeapon(userid, "hand",true);

          }
        }
        //console.log(drag_inventory);
        if (this.p.obj_id != -1) {
          //  console.log(menu_ui);
          if (menu_ui != null) {
            //console.log(this.p);
            //alert(it_1_id);
            var monster = {
              __empty: 0,
              id: menu_object_id_opened,
              quantity: drag_inventory_id_quantity,
              related_id: this.p.obj_id,
            };
            //console.log(monster);

            socket.emit(MSG.slots_save, saveSlotSchema.encode(monster));
            //alert("sdf");
          } else {
            // setWeapon(userid, ID_OBJECTS[this.p.obj_id],true);
            sendWeapon(userid, ID_OBJECTS[this.p.obj_id], true)

          }

          //alert("test");
        } else {
          // setWeapon(userid, "hand",true);
          sendWeapon(userid, "hand", true)

        }

      }

    }


  }
  resetInventory();
  var container_menu = null;

  function HideMenuObject() {
    if (container_menu != null) {
      menu_ui = null;
      menu_object_opened = null;
      menu_object_id_opened = null;
      uiStage.removeChild(container_menu);
    }
  }
  var stopTimeout = true;

  function setAcceleratingTimeout(callback, start_timeout, factor) {
    var internalCallback = function (counter) {
      return function () {
        if (!stopTimeout) {
          window.setTimeout(internalCallback, start_timeout - (++counter * factor));
          callback();
        }
      }
    }(0);

    window.setTimeout(internalCallback, factor);
  };
  var modal_list = {};

  function CreateModal(title, body, success) {
    /*if (modal != null){
      uiStage.removeChild(modal);
    }*/
    var container_full = new PIXI.UI.Container();
    container_full.anchorTop = 0;
    container_full.anchorLeft = 0;
    var background_back = new PIXI.Graphics();
    background_back.x = 0;
    background_back.y = 0;
    background_back.lineStyle(1, 0xFFFFFF, 0);
    background_back.beginFill(0xFFFFFF, 0.3);
    background_back.drawRect((-width_screen / 2), (-height_screen / 2), width_screen * 2, height_screen * 2);
    background_back.endFill();
    background_back.interactive = true;
    background_back.parentLayer = overlayFirst;


    background_back.on('pointerup', function (e) {
      success();
      uiStage.removeChild(container_full);
      if (drag_drop_phantom.visible) {
        drag_drop_phantom.visible = false;
      }
      e.preventDefault();

    });

    width = 400;
    height = 300;
    container_full.container.addChild(background_back);


    var container_inner = new PIXI.UI.Container();
    container_inner.parentLayer = overlayFirst;
    container_inner.x = (width_screen / 2);
    container_inner.y = (height_screen / 2);

    var background_modal = new PIXI.Graphics();
    background_modal.x = 0;
    background_modal.y = 0;
    background_modal.lineStyle(1, 0xFFFFFF, 1);
    background_modal.beginFill(0xFFFFFF, 0.80);
    background_modal.drawRect((-width / 2), (-height / 2), width, height);
    background_modal.endFill();
    background_modal.interactive = true;

    if (modal_list != undefined && Object.keys(modal_list).length > 0) {
      background_modal.parentLayer = overlayThird;
    } else {
      background_modal.parentLayer = overlayFirst;
    }
    background_modal.on('pointerup', function (e) {
      if (drag_drop_phantom.visible) {
        drag_drop_phantom.visible = false;
      }
      e.preventDefault();

    });
    container_inner.container.addChild(background_modal);

    var close_text = new PIXI.Text("X", text_style_modal_title);
    close_text.x = 0 + (width / 2) - (close_text.width / 2);
    close_text.y = 0 - (height / 2) - (close_text.height / 2);
    if (modal_list != undefined && Object.keys(modal_list).length > 0) {
      close_text.parentLayer = overlayThird;
    } else {
      close_text.parentLayer = overlayFirst;
    }
    close_text.interactive = true;
    container_inner.container.addChild(close_text);
    close_text.on('pointerup', function (e) {
      success();
      uiStage.removeChild(container_full);
      if (drag_drop_phantom.visible) {
        drag_drop_phantom.visible = false;
      }
      e.preventDefault();

    });

    var quantity_text = new PIXI.Text(title, text_style_modal_title);
    quantity_text.x = 0 - (width / 2) + 20;
    quantity_text.y = 0 - (height / 2) - (quantity_text.height / 2);

    if (modal_list != undefined && Object.keys(modal_list).length > 0) {
      quantity_text.parentLayer = overlayThird;
    } else {
      quantity_text.parentLayer = overlayFirst;
    }
    container_inner.container.addChild(quantity_text);

    container_inner.addChild(body);

    container_full.addChild(container_inner);
    uiStage.addChild(container_full);
    container_full.success = success;
    modal_list[body.id] = container_full;

    return container_full;

  }

  var drag_inventory_id_quantity_add = 0;

  function createDropModal(success) {
    var container_inner = new PIXI.UI.Container();
    var modal_result;
    var quantity_text = new PIXI.Text("How many items?", text_style_modal_title);
    quantity_text.x = 0 - quantity_text.width / 2;
    quantity_text.y = 0 - (quantity_text.height / 2) - 20;
    quantity_text.parentLayer = overlayThird;
    container_inner.container.addChild(quantity_text);


    var quantity_text = new PIXI.Text("1", text_style_modal_title);
    quantity_text.x = 0 - quantity_text.width / 2;
    quantity_text.y = 0 - (quantity_text.height / 2) + 20;
    quantity_text.parentLayer = overlayThird;
    container_inner.container.addChild(quantity_text);
    var timer;
    var quantity_less_text = new PIXI.Text("-", text_style_modal_title);
    quantity_less_text.x = 0 - quantity_text.width / 2 - 50;
    quantity_less_text.y = 0 - (quantity_text.height / 2) + 20;
    quantity_less_text.parentLayer = overlayThird;
    quantity_less_text.interactive = true;
    quantity_less_text.on('pointerdown', function (evt) {
      drag_inventory_id_quantity_add = -1;
      IntervalAddQuantity();
    });
    quantity_less_text.on('pointerup', function (evt) {
      stopTimeout = true;
      drag_inventory_id_quantity_add = 0;
    });


    var quantity_ok = new PIXI.Text("OK", text_style_modal_title);
    quantity_ok.x = 0 - quantity_ok.width / 2 + 100;
    quantity_ok.y = 0 - (quantity_ok.height / 2) + 100;
    quantity_ok.parentLayer = overlayThird;
    quantity_ok.interactive = true;
    quantity_ok.on('pointerdown', function (evt) {


    });
    quantity_ok.on('pointerup', function (evt) {
      stopTimeout = true;
      drag_inventory_id_quantity_add = 0;
      modal_result.success();
      uiStage.removeChild(modal_result);

    });

    container_inner.container.addChild(quantity_ok);

    var quantity_all = new PIXI.Text("ALL", text_style_modal_title);
    quantity_all.x = 0 - quantity_text.width / 2 + 100;
    quantity_all.y = 0 - (quantity_text.height / 2) + 20;
    quantity_all.parentLayer = overlayThird;
    quantity_all.interactive = true;
    quantity_all.on('pointerdown', function (evt) {


    });
    quantity_all.on('pointerup', function (evt) {
      stopTimeout = true;
      drag_inventory_id_quantity_add = 0;
      var quantity = parseInt(inventory.children[drag_inventory_id - 1].container.children[0].children[2].text);

      quantity_text.text = quantity;
      quantity_text.x = -quantity_text.width / 2;
      drag_inventory_id_quantity = quantity;

    });

    container_inner.container.addChild(quantity_all);






    function IntervalAddQuantity() {
      clearTimeout(timer);
      stopTimeout = false;
      setAcceleratingTimeout(function () {
        if (drag_inventory_id_quantity_add != 0) {
          num = parseInt(quantity_text.text) + drag_inventory_id_quantity_add;
          var quantity = inventory.children[drag_inventory_id - 1].container.children[0].children[2].text;
          if (num <= 0) {
            num = 1;
          }
          if (num > quantity) {
            num = parseInt(quantity);
          }
          quantity_text.text = num;
          quantity_text.x = -quantity_text.width / 2;
          drag_inventory_id_quantity = num;

        }

      }, 300, 10);
    }
    //timer = setTimeout();





    container_inner.container.addChild(quantity_less_text);

    var quantity_more_text = new PIXI.Text("+", text_style_modal_title);
    quantity_more_text.x = 0 - quantity_text.width / 2 + 50;
    quantity_more_text.y = 0 - (quantity_text.height / 2) + 20;
    quantity_more_text.parentLayer = overlayThird;
    quantity_more_text.interactive = true;

    quantity_more_text.on('pointerdown', function (evt) {
      drag_inventory_id_quantity_add = 1;
      IntervalAddQuantity();
    });

    quantity_more_text.on('pointerup', function (evt) {
      stopTimeout = true;
      drag_inventory_id_quantity_add = 0;
    });


    container_inner.container.addChild(quantity_more_text);

    modal_result = CreateModal("Quantity", container_inner, function () {
      success();
    });
  }

  function DropItem(id) {
    success = function () {

      if (id == false) {
        if (drag_drop_phantom.children[1].text != "Too far") {

          var it_1_id = inventory.children[drag_inventory_id - 1].obj_id;

          //alert(it_1_id);
          var monster = {
            __empty: 0,
            id: it_1_id,
            q: drag_inventory_id_quantity,
            x: Math.abs(drag_drop_phantom.x),
            y: -drag_drop_phantom.y
          };

          socket.emit(MSG.dropObject, dropObjectSchema.encode(monster));
          drag_drop_phantom.visible = false;

        } else {
          drag_drop_phantom.visible = false;

        }
      } else if (drag_drop_phantom.children[1].text != "Too far") {
        var it_1_id = inventory.children[drag_inventory_id - 1].obj_id;
        var monster = {
          __empty: 0,
          id: id,
          related_id: it_1_id,
          quantity: drag_inventory_id_quantity,
        };

        socket.emit(MSG.slots_save, saveSlotSchema.encode(monster));
        drag_drop_phantom.visible = false;

      } else {
        drag_drop_phantom.visible = false;

      }
    };
    if (id == false) {
      if (drag_drop_phantom.visible && drag_drop_phantom.children[1].text != "Too far") {

        var quantity = parseInt(inventory.children[drag_inventory_id - 1].container.children[0].children[2].text);
        if (quantity > 1) {
          createDropModal(success);
        } else {
          success();
        }
        drag_drop_phantom.visible = false;

      } else {
        drag_drop_phantom.visible = false;
      }
      return;
    } else if (drag_drop_phantom.visible && drag_drop_phantom.children[1].text != "Too far") {
      if (drag_drop_phantom.visible && drag_drop_phantom.children[1].text != "Too far") {
        createDropModal(success);
        drag_drop_phantom.visible = false;

      } else {
        drag_drop_phantom.visible = false;
      }
    }
  }

  function CreateMenuItem(width, obj, position) {
    var container_item = new PIXI.UI.Container();

    var background22 = new PIXI.Graphics();
    background22.x = 0;
    background22.y = 0;
    background22.lineStyle(1, 0x333333, 1);
    background22.beginFill(0x333333, 0);
    background22.drawRect((-width / 2), (-width / 2), width, width);
    background22.endFill();
    background22.interactive = true;
    background22.parentLayer = overlaySecond;
    background22.on('pointerdown', function (evt) {
      mouseDown = -1;
      sendMouseInput(0);
      var monster = {
        __empty: 0,
        id: menu_object_id_opened,
        position: position,
      };
      //console.log(monster);

      socket.emit(MSG.slots_obtain, obtainSlotSchema.encode(monster));







    });
    background22.on('pointerup', function (evt) {
      mouseDown = -1;
      sendMouseInput(0);
      if (drag_drop_phantom.visible) {
        DropItem(menu_object_id_opened);
      }
    });

    var menu_item = new PIXI.Container();
    menu_item.width = width;
    menu_item.height = width;
    menu_item.parentLayer = overlaySecond;
    container_item.container.addChild(menu_item);
    if (obj != undefined && obj.id > 0) {

      var item = getDraw(ID_OBJECTS[obj.id]);

      item.scale.x = 2;
      item.scale.y = 2;
      menu_item.addChild(item);

      var quantity_text = new PIXI.Text(obj.quantity, text_style_quant_inventory);
      quantity_text.x = -quantity_text.width / 2;
      quantity_text.y = -quantity_text.height / 2;
      menu_item.addChild(quantity_text);



    }


    menu_item.addChild(background22);
    return container_item;
  }

  var menu_object_opened, menu_object_id_opened;
  var menu_ui;

  function refreshMenuObject(list) {
    if (menu_ui == null) {
      return;
    }
    for (var i = 0; i < list.length; i++) {
      var object = list[i];

      if (menu_ui != null) {
        //uiStage.removeChild(modal_objects);
        menu_ui.children[0].removeChild(menu_ui.children[0].children[0]);
        menu_ui.children[0].addChild(listMenuObject(menu_object_opened, list));
      }
    }

  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  function listMenuObject(obj, list) {
    if (obj == null) {
      return;
    }
    var container_item_list = new PIXI.UI.Container();
    container_item_list.parentLayer = hudLayerMap
    var message = obj.modal_message;
    if (obj.craft_requirements) {
      message += "\nCrafting table:\n";
      for (var craftable in obj.craft_requirements) {
        message += OBJECT_DICT[craftable].name + ":";
        for (var requirement in obj.craft_requirements[craftable]) {
          message += " " + obj.craft_requirements[craftable][requirement] + " " + OBJECT_DICT[requirement].name + " +";
        }
        message = message.substring(0, message.length - 1); // "12345.0"
        message += "\n";
      }
    }



    var bodydescription = new PIXI.Text(message, text_style_slot_accepted);
    bodydescription.parentLayer = overlaySecond;
    container_item_list.container.addChild(bodydescription);
    var fila_max = 5;
    var fila_num = 0;
    var fila_num_max = 0;

    var column_num = 0;
    var width = 50;
    var num_items = obj.slots;


    for (var i = 0; i < num_items; i++) {
      if (i % fila_max == 0) {
        fila_num++;
        column_num = 0;
      }

      if (fila_num_max < i && fila_num_max < fila_max - 1) {
        fila_num_max = i;
      }
      var container_item;
      if (list != undefined && list[i] != undefined) {
        container_item = CreateMenuItem(width, list[i], i);
        if (obj.slot_conf != undefined) {
          //console.log(obj.slot_conf[i]);
          string_accepted = "Accepts:\n";
          for (var key in obj.slot_conf[i]) {
            string_accepted += capitalizeFirstLetter(obj.slot_conf[i][key]) + "\n";
          }

          var menu_title2 = new PIXI.Text(string_accepted, text_style_slot_accepted);
          menu_title2.x = -menu_title2.width / 2;
          menu_title2.y = 40;
          menu_title2.parentLayer = overlaySecond;
          container_item.container.addChild(menu_title2);
        }

      } else {
        container_item = CreateMenuItem(width, null, i);
      }
      container_item.anchorLeft = column_num * width;
      container_item.anchorTop = fila_num * width;





      container_item_list.addChild(container_item);
      container_item_list.x = -((width * fila_num_max) / 2);
      container_item_list.y = -(((width / 2) * (fila_num + 1)));
      bodydescription.x = -bodydescription.width / 2 + 25;
      bodydescription.y = -bodydescription.height / 2 - 20;
      column_num++;
    }





    return container_item_list;
  }

  function createMenuObject(obj, id) {
    if (container_menu != null) {
      uiStage.removeChild(container_menu);
    }




    //alert(it_1_id);
    var monster = {
      __empty: 0,
      id: id,
    };

    socket.emit(MSG.slots_get, errorsSchema.encode(monster));

    menu_object_opened = obj;
    menu_object_id_opened = id;

    /*

        container_menu = new PIXI.UI.Container();
        var ui_width = 300;
        var ui_height = 200;

        var menu_title = new PIXI.UI.Text(obj.name, text_style_button);
        menu_title.anchorTop = -ui_height/2-30;
        menu_title.anchorLeft = -ui_width/2;
        container_menu.addChild(menu_title);

        var menu_close = new PIXI.UI.Text("X", text_style_button);
        menu_close.anchorTop = -ui_height/2-30;
        menu_close.anchorRight = -ui_width/2;
        container_menu.addChild(menu_close);


        container_menu.parentLayer = overHudLayerMap;
        container_menu.anchorTop = height_screen/2;
        container_menu.anchorLeft = width_screen/2;

        var background = new PIXI.Graphics();
        background.x = -ui_width/4;
        background.y = -ui_height/4;
        background.lineStyle(0, 0xFFFFFF, 1);
        background.beginFill(0xFFFFFF, 0.3);
        background.drawRect((-ui_width / 2), (-ui_height / 2), ui_width * 2, ui_height * 2);
        background.endFill();
        background.width=ui_width;
        background.height=ui_height;
        background.parentLayer = overHudLayerMap;
        background.interactive = true;
        background.on('pointerdown', function(evt) {
          mouseDown = -1;
        });

        background.on('pointerover', function(evt) {
          mouseDown = -1;
          showPopin("yeah");
        });

        background.on('pointerout', function(evt) {
          mouseDown = -1;
          hidePopin();
        });


        container_menu.container.addChild(background);
        uiStage.addChild(container_menu);
    */
    var container_item_list = listMenuObject(obj);
    container_item_list.id = menu_object_id_opened;

    inventory.parentLayer = overlayFourth;
    if (menu_ui != null) {
      uiStage.removeChild(menu_ui);
      delete menu_ui;
      delete menu_object_opened;
      delete menu_object_id_opened;
    }
    modal_list = {};
    
    PlaySound("Chest.mp3");

    menu_ui = CreateModal(obj.name, container_item_list, function () {
      var monster = {
        "__empty": 0,
        "id": menu_object_id_opened,
      };
      socket.emit(MSG.slots_exit, errorsSchema.encode(monster));
      menu_ui = null;
      menu_object_opened = null;
      menu_object_id_opened = null;
    });


    //container_menu.addChild(container_item_list);
  }



  var click_container_full = new PIXI.UI.Container();
  var craft_menu = new PIXI.UI.Container();
  craft_menu.parentLayer = overlayFourth;

  var click_area = getDraw("invisible");
  click_area.parentLayer = hudLayer;
  click_container_full.container.addChild(click_area);
  uiStage.addChild(click_container_full);
  click_area.interactive = true;
  click_area.x = width_screen / 2;
  click_area.x = height_screen / 2;
  click_area.width = width_screen;
  click_area.height = height_screen;
  click_area.scale.x = 2;
  click_area.scale.y = 2;

  click_area.on('pointerdown', function (evt) {
    HideMenuObject();
    mouseDown = 0;
    sendMouseInput(1);
    /*  if (body_user != undefined) {
        sendWeaponAction(body_user.weapon);
        //sendJump(body_user.weapon);
      }*/
    if (drag_drop_phantom.visible) {
      drag_drop_phantom.visible = false;
    }
  });


  click_area.on('pointerover', function (evt) {
    hidePopin();
    //updateDropHereMessage();
  });
  /*click_area.on('pointermove', function(evt) {
    //hidePopin();
    updateDropHereMessage();
  });*/

  function updateDropHereMessage() {
    if (drag_drop_phantom.visible) {
      //alert("s");
      var center_x = width_screen / 2;
      var center_y = height_screen / 2;


      vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
      length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);

      success = false;

      //drag_drop_phantom.children[0].text="Drop here"+length;
      if (drag_drop_phantom.children[1] != undefined) {
        if (length < 150) {
          drag_drop_phantom.children[1].text = "Drop";
        } else {
          drag_drop_phantom.children[1].text = "Too far";
        }
      }


    }
  }


  click_area.on('pointerup', function (evt) {
    mouseDown = -1;
    sendMouseInput(0);
    DropItem(false);
  });
  craft_menu.x = 10;
  craft_menu.y = 10;
  uiStage.addChild(craft_menu);
  uiStage.addChild(inventory);
  uiStage.parent.addChild(hudLayerMap);
  uiStage.parent.addChild(overlayFirst);
  uiStage.parent.addChild(overlaySecond);
  uiStage.parent.addChild(overlayThird);
  uiStage.parent.addChild(overlayFourth);

  /*  var background = new PIXI.Graphics();
        background.x = 0;
        background.y = 0;
        background.lineStyle(1, 0xFFFFFF, 1);
        background.beginFill(0xFFFFFF, 0.3);
        background.drawRect(0, 0, 300, 300);
        background.endFill();
        craft_menu.addChild(background);
*/
  var last_category = "";
  var used_cat = [];
  var category_table = {};
  craft_menu.categorys = [];
  var offset = 0;
  for (var key in OBJECT_DICT) {
    var category = OBJECT_DICT[key].craft_category;
    var object = OBJECT_DICT[key];
    if (category != undefined) {
      if (last_category != category && used_cat.indexOf(category) == -1) {
        last_category = category;
        used_cat.push(last_category);
        var item_container = new PIXI.Container();

        if (category == "Structures") {
          var coins_text = getDraw("wood_door");
          coins_text.x = 10;
          coins_text.y = 10;
          coins_text.scale.x = 2.7;
          coins_text.scale.y = 2.7;
          coins_text.rotation = 0;
        } else if (category == "Equipment") {
          var coins_text = getDraw("player");
          coins_text.x = 10;
          coins_text.y = 10;
          coins_text.scale.x = 2.7;
          coins_text.scale.y = 2.7;
          coins_text.rotation = 0;
          coins_text.addChild(getDraw("wood_helmet"));
        } else if (category == "Weapons") {
          /*var coins_text = new PIXI.Graphics();
          coins_text.x = 5;
          coins_text.y = 5;
          coins_text.lineStyle(1, 0xFFFFFF, 1);
          coins_text.beginFill(0xFFFF00, 0.3);
          coins_text.drawRect(-10,-10,20,20);
          coins_text.endFill();*/
          var coins_text = getDraw("wood_sword");
          coins_text.x = 12;
          coins_text.y = 19;
          coins_text.scale.x = 2.7;
          coins_text.scale.y = 2.7;
          coins_text.rotation = -1.8;
        } else if (category == "Furniture") {
          /*var coins_text = new PIXI.Graphics();
          coins_text.x = 5;
          coins_text.y = 5;
          coins_text.lineStyle(1, 0xFFFFFF, 1);
          coins_text.beginFill(0xFFFF00, 0.3);
          coins_text.drawRect(-10,-10,20,20);
          coins_text.endFill();*/
          var coins_text = getDraw("furnace");
          coins_text.x = 10;
          coins_text.y = 10;
          coins_text.scale.x = 2.7;
          coins_text.scale.y = 2.7;
          coins_text.rotation = 0;
        }


        item_container.x = offset + ui_width / 2;
        item_container.y = +ui_width / 2;
        item_container.interactive = true;
        item_container.alpha = 0.8;
        item_container.category = category;
        item_container.parentLayer = overlayFourth;

        craft_menu.container.addChild(item_container);
        OBJECT_DICT[key].ui_category = item_container;
        craft_menu.categorys.push(item_container);

        var background = new PIXI.Graphics();
        background.x = 0;
        background.y = 0;
        background.lineStyle(0, 0xFFFFFF, 1);
        background.beginFill(0xFFFFFF, 0.3);
        background.drawRect((-ui_width / 2), (-ui_width / 2), ui_width * 2, ui_width * 2);
        background.endFill();
        //background.parent=item_container;

        item_container.addChild(background);
        item_container.addChild(coins_text);

        offset += ui_width * 2 + 1;
        //alert(last_category);
        item_container.pointerover = function (mouseData) {
          //this.alpha = 1;
          showPopin(this.category);



        }
        item_container.pointerup = function (mouseData) {
          mouseDown = -1;
          sendMouseInput(0);
        }
        item_container.pointerout = function (mouseData) {
          if (category_table[this.category].visible) {
            this.alpha = 1;
          } else {
            this.alpha = 0.3;
          }
          hidePopin();
        }
        item_container.category = category;
        item_container.pointerdown = function (mouseData) {
          for (var key in category_table) {
            category_table[key].visible = false;
          }
          category_table[this.category].visible = true;


          for (var h in craft_menu.categorys) {
            if (category_table[craft_menu.categorys[h].category].visible) {
              craft_menu.categorys[h].alpha = 1;
            } else {
              craft_menu.categorys[h].alpha = 0.3;
            }

          }

        }





        category_table[category] = new PIXI.UI.ScrollingContainer();
        /*category_table[category].anchorBottom = container.anchorRight = container.anchorTop = 18;
        category_table[category].anchorLeft = "40%";*/
        category_table[category].width = 1200;
        category_table[category].visible = false;
        category_table[category].x = 10;
        category_table[category].y = +ui_width * 2 + 2 + 10;


        category_table[category].pos_y = ui_width / 2;
        category_table[category].pos_x = -ui_width - ui_width / 2 - 2;


        uiStage.addChild(category_table[category]);

        /*category_table[category] = new PIXI.Container();
                category_table[category].x = 0;
                category_table[category].y = +20+margin*2+2;
*/
        var item_container2 = new PIXI.UI.Container();
        item_container2.x = 0;
        item_container2.y = 0;
        //item_container2.interactive = true;
        item_container2.alpha = 1;
        item_container2.parentLayer = overlayFourth;

        /*var background = new PIXI.Graphics();
        background.x = 0;                category_table[category].width = 300;
        category_table[category].height = 80;
        category_table[category].scrollX = true;
        category_table[category].scrollY = false;

        background.y = 0;
        background.lineStyle(0, 0xFFFFFF, 1);
        background.beginFill(0xFFFF00, 0.3);
        background.drawRect(0, 0, 600 , 80);
        background.endFill();
        item_container2.container.addChild(background);*/
        category_table[category].width = 380;
        category_table[category].parentLayer = overHudLayerMap;
        category_table[category].height = 180;
        category_table[category].scrollX = true;
        category_table[category].scrollY = true;
        category_table[category].addChild(item_container2);


      }






      var item_container22 = new PIXI.UI.Container();

      category_table[category].pos_x += ((ui_width * 2) + 2);
      item_container22.x = category_table[category].pos_x;
      item_container22.y = category_table[category].pos_y;
      var item_container = new PIXI.Container();
      /*item_container.anchorBottom = container.anchorRight = container.anchorTop = 18;
      item_container.anchorLeft = "40%";*/


      item_container.interactive = true;
      //createDragAndDropFor(item_container);

      item_container.alpha = 0.8;
      var item_container44 = new PIXI.Container();

      var coins_text2 = getDraw(object.id);
      if (object.type == object_type.equip) {
        item_container44.addChild(getDraw("player"));
      }

      item_container44.addChild(coins_text2);
      item_container44.scale.x = 2.7;
      item_container44.scale.y = 2.7;
      item_container44.x = 10;
      item_container44.y = 10;

      if (object.type == object_type.weapon) {
        item_container44.x = 12;
        item_container44.y = 19;
        item_container44.rotation = -1.8;
      }
      item_container.parentLayer = overlayFourth;


      item_container.id = object.id;
      item_container.obj = object;
      item_container.interactive = true;
      item_container.pointerdown = function (mouseData) {
        var monster = {
          "__empty": 0,
          "id": OBJECTS_ID[this.id],
        };
        socket.emit(MSG.craftItem, errorsSchema.encode(monster));

        //setWeapon(userid,this.id);
      }
      item_container.pointerup = function (mouseData) {
        mouseDown = -1;
        sendMouseInput(0);
      }
      item_container.pointerover = function (mouseData) {
        var cost_text = "";
        for (var c in this.obj.cost) {
          cost_text += OBJECT_DICT[c].name + " :" + this.obj.cost[c] + "\n";
        }
        showPopin(this.obj.name + "\n\n " + (this.obj.description != undefined ? this.obj.description + "\n\n" : "") + "Cost: \n" + cost_text);
      }
      item_container.pointerout = function (mouseData) {
        hidePopin();
      }


      var background2 = new PIXI.Graphics();
      background2.x = 0;
      background2.y = 0;
      background2.lineStyle(0, 0xFFFFFF, 1);
      background2.beginFill(0xFFFFFF, 0.3);
      background2.drawRect((-ui_width / 2), (-ui_width / 2), ui_width * 2, ui_width * 2);
      background2.endFill();
      item_container.addChild(background2);
      item_container.addChild(item_container44);

      item_container22.container.addChild(item_container);
      category_table[category].addChild(item_container22);
      if ((category_table[category].children.length - 1) % 6 <= 0 && category_table[category].children.length != 1) {
        category_table[category].pos_x = -ui_width - ui_width / 2 - 2;
        category_table[category].pos_y += ((ui_width * 2) + 2);
      }

      OBJECT_DICT[key].ui_element = item_container22;
    }

  }


  //ALLIANCE BUTTON
  var alliance_button = new PIXI.UI.Container();

  var alliance_text = new PIXI.Text("Alliance", text_style_button);
  alliance_text.parentLayer = overlayFourth;
  /*alliance_text.y = 2
  alliance_text.x = -15*/
  alliance_button.anchorTop = 21;
  alliance_button.anchorLeft = 215;
  alliance_button.height = 22;
  var background2 = new PIXI.Graphics();
  background2.x = 0;
  background2.y = 0;
  background2.lineStyle(0, 0xFFFFFF, 1);
  background2.beginFill(0xFFFFFF, 0.3);
  background2.drawRect((-alliance_text.width / 2) + 25, (-alliance_button.height / 2), alliance_text.width * 2 - 50, alliance_button.height * 2);
  background2.endFill();
  alliance_button.container.addChild(background2);
  background2.interactive = true;
  background2.parentLayer = overlayFourth;
  alliance_button.alpha = 0.5;
  background2.pointerup = function (mouseData) {
    $(".modal").hide();
    $("#alliance_menu").show();
    UpdateAlliances();
  }
  background2.pointerover = function (mouseData) {
    this.parent.alpha = 1;
    showPopin("Create and join alliances");
  }
  background2.pointerout = function (mouseData) {
    this.parent.alpha = 0.5;
    hidePopin();
  }


  alliance_button.container.addChild(alliance_text);


  uiStage.addChild(alliance_button);



  var popin = new PIXI.UI.Container();
  popin.visible = false;
  //popin.container.addChild(getDraw("sword"));
  var popin_inside = new PIXI.UI.Container();
  popin_inside.x = 50;
  var background = new PIXI.Graphics();
  background.parentLayer = overHudLayerMap;
  background.x = 0;
  background.y = 0;
  popin_inside.container.addChild(background);
  popin_inside.parentLayer = overHudLayerMap;

  popin_margin = 10;
  popin.addChild(popin_inside);
  var popintext = new PIXI.Text("Weapons", text_style_popin);
  popintext.parentLayer = overlayFourth;
  popintext.x = 0 - popintext.width / 2;
  popintext.y = 0;
  popin_inside.container.addChild(popintext);
  popin.text = popintext;
  popin.popin_inside = popin_inside;

  background.lineStyle(1, 0xFFFFFF, 1);
  background.beginFill(0xFFFFFF, 0.3);
  background.drawRect(-popintext.width / 2 - popin_margin, -popin_margin, popintext.width + popin_margin * 2, popintext.height + popin_margin * 2);
  background.endFill();
  popin.ui_background = background;

  uiStage.addChild(popin);

  function showPopin(text) {
    popin.visible = true;
    popin.text.text = text;
    popin.text.x = 0 - popin.text.width / 2;
    popin.popin_inside.x = 0 + popin.text.width / 2 + 30;
    background.clear();
    background.lineStyle(1, 0xFFFFFF, 1);
    background.beginFill(0xFFFFFF, 0.3);
    background.drawRect(-popin.text.width / 2 - popin_margin, -popin_margin, popin.text.width + popin_margin * 2, popin.text.height + popin_margin * 2);
    background.endFill();


  }

  function hidePopin() {
    popin.visible = false;
  }

  var equipation_layer = new PIXI.Container();
  var actual_x = 1;
  var space_between = 80;

  /*createHudItem('1\n Sword', "Gather resources", true, IActions.attack)
  createHudItem('2\n Throw \nstones', "No \nstones", false, IActions.boxes)
  createHudItem('3\n Eat', "No \nfood", false, IActions.heal)
  createHudItem('4\n Block', "Cost \n10 Wood", false, IActions.trap)
  createHudItem('5\n Door', "Cost \n50 Wood", false, IActions.door)
  createHudItem('6\n Gold', "Cost \n50 Wood\n50 Stones", false, IActions.gold)*/
  /* createHudItem('6\n Coin',500,"Cost \n10 Stone",false,IActions.turret)
 /* createHudItem('7\n Cupboard',600,"Cost \n50 Wood",false,IActions.cupboard)
*/


  function createHudItem(name, help, active, action) {


    var item_container = new PIXI.Container();
    var item_full = new PIXI.Container();
    item_full.x = actual_x;
    item_container.x = 0;
    item_container.alpha = 0;

    item_container.interactive = true;

    // Shows hand cursor
    item_container.buttonMode = true;
    item_container.on('pointerdown', function (evt) {
      // setWeapon(userid, action,true)
      sendWeapon(userid, action, true)
    });


    item_full.active = active;
    var coins_text = new PIXI.Text(name, text_style_equipation);
    coins_text.x = 0 - coins_text.width / 2;
    coins_text.y = 0 - coins_text.height / 2;


    var background = new PIXI.Graphics();
    background.x = 0;
    background.y = 0;
    background.lineStyle(1, 0xFFFFFF, 1);
    background.beginFill(0xFFFFFF, 0.3);
    background.drawRect(-35, -35, 70, 70);
    background.endFill();
    item_container.addChild(background);
    item_container.addChild(coins_text);


    if (help != "") {
      var help_container = new PIXI.Container();
      item_container.x = 0;
      help_container.alpha = 0;
      help_container.y = -60;
      var coins_text = new PIXI.Text(help, text_style_equipation);
      coins_text.x = 0 - coins_text.width / 2;
      coins_text.y = -20 - coins_text.height / 2;


      var background = new PIXI.Graphics();
      background.x = 0;
      background.y = -20;
      background.lineStyle(0, 0x000000, 0.1);
      background.beginFill(0xFFFFFF, 0.8);
      background.drawRect(-40, -40, 80, 80);
      background.endFill();
      help_container.addChild(background);
      help_container.addChild(coins_text);
      //item_container.addChild(help_container);
      item_full.addChild(help_container);

    }



    item_full.addChild(item_container);
    equipation_layer.addChild(item_full);
    actual_x += space_between;
  }

  equipation_layer.displayGroup = hudLayer;
  equipation_layer.parentLayer = hudLayer;


  app.stage.addChild(equipation_layer);



  /*
    var health_text = new PIXI.Text('Health',text_style_health);
    health_text.x = 30;
    health_text.y = $(window).height()-140;

    app.stage.addChild(health_text);*/
  /*    var materials_container = new PIXI.Container();

    var coins_text = new PIXI.Text('Gold: 0', text_style_coins);
    coins_text.x = 30;
    coins_text.y = $(window).height() - 120;
    coins_text.displayGroup = hudLayer;

    materials_container.addChild(coins_text);

    var wood_text = new PIXI.Text('Wood: 0', text_style_coins);
    wood_text.x = 30;
    wood_text.y = $(window).height() - 100;
    wood_text.displayGroup = hudLayer;

    materials_container.addChild(wood_text);

    var rock_text = new PIXI.Text('Stones: 0', text_style_coins);
    rock_text.x = 30;
    rock_text.y = $(window).height() - 80;
    rock_text.displayGroup = hudLayer;

    materials_container.addChild(rock_text);

    var food_text = new PIXI.Text('Food: 0', text_style_coins);
    food_text.x = 30;
    food_text.y = $(window).height() - 60;
    food_text.displayGroup = hudLayer;

    materials_container.addChild(food_text);
    app.stage.addChild(materials_container);

*/
  var ranking_text_container = new PIXI.UI.Container();
  ranking_text_container.anchorRight = "0";
  var ranking_text = new PIXI.UI.Text('', text_style_ranking);
  ranking_text.x = $(window).width() - 120;
  ranking_text.y = 0;
  ranking_text.parentLayer = overlayFourth;
  ranking_text_container.parentLayer = overlayFourth;
  ranking_text_container.container.parentLayer = overlayFourth;




  ranking_text_container.addChild(ranking_text);



  uiStage.addChild(ranking_text_container);

  var minimap = new PIXI.Container();
  topLayer.addChild(minimap);


  var lastsync = [];


  window.onresize();

  $("#cookie label").on("click", function () {
    $("#cookie").hide();
    localStorage.setItem("cookie_accepted", true)
  });
  if (localStorage.getItem("cookie_accepted") != undefined) {
    setTimeout(function () {
      $("#cookie").fadeOut();
    }, 1000);


  }

  container_map.pivot.set(0, 0);



  divs = [];


  // EL GRADIENTE PARAR LA LUZ
  var canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  var ctx = canvas.getContext('2d');
  var grd = ctx.createRadialGradient(50, 50, 0, 50, 50, 50);
  grd.addColorStop(0, "rgba(255,255,255,0.5)");
  grd.addColorStop(1, "rgba(255,255,255,0)");
  //ctx.fillStyle = grd;
  ctx.fillStyle = grd;

  //ctx.fillStyle="#FFFFFF";
  ctx.beginPath();
  ctx.arc(50, 50, 10005, 0, 2 * Math.PI);
  ctx.fill();




  function createObject(data) {
    if (objects[data.id] == undefined) {
      var bunny = new PIXI.Container();
      bunny.sprite = data.sprite;

      bunny.zOrder = 0;
      bunny.zIndex = 0;


      bunny.obj = OBJECT_DICT[ID_OBJECTS[bunny.sprite]];
      var width = (bunny.obj.width != undefined) ? bunny.obj.width : 10;


      //bunny.type = type;
      bunny.x = data.x;
      bunny.y = -data.y;
      bunny.width = width;
      bunny.height = -width;
      bunny.save_width = width;
      bunny.save_height = -width;
      bunny.x_int_start = data.x;
      bunny.y_int_start = -data.y;
      bunny.x_int = bunny.x;
      bunny.y_int = bunny.y;
      bunny.id = data.id;

      var graphics = getDraw(ID_OBJECTS[bunny.sprite]);

      bunny.addChild(graphics);
      bunny.scale.x = (data.scale / 100);
      bunny.scale.y = (data.scale / 100);
      objects[data.id] = bunny;


      container_map.addChild(bunny);


      if (bunny.obj.type == object_type.player) {
        bunny.parentLayer = topLayer;
        bunny.displayGroup = playersLayer;
      } else if (bunny.obj.type == object_type.animal) {
        bunny.parentLayer = topLayer;
        bunny.displayGroup = botsLayer;
      } else if (bunny.obj.type == object_type.world) {
        bunny.parentLayer = bottomLayer;
        bunny.displayGroup = mapLayer;
      } else if (bunny.obj.type == object_type.build) {
        bunny.parentLayer = middleLayer;
        bunny.displayGroup = botsLayer;
      } else {
        bunny.parentLayer = middleLayer;
        bunny.displayGroup = botsLayer;
      }

      //console.log(data);
      for (var item in data.data) {
        data[data.data[item]["name"]] = data.data[item]["value"];
      }


      if (data.life != null) {
        bunny.life = data.life * 10;
        bunny.max_life = data.max_life * 10;
      } else {
        bunny.life = bunny.obj.life;
        bunny.max_life = bunny.obj.life;
      }


      if (bunny.life != null && bunny.obj.type == object_type.player || bunny.obj.type == object_type.animal) {
        var width_l = ((bunny.save_width / bunny.max_life) * bunny.life);

        var bar_color = "green";
        if (width_l < bunny.save_width) {
          bar_color = "red"
        }

        bunny.removeChild(bunny.ui_life);
        // alert("life");
        var life = getDraw(bar_color);
        life.x = 0;
        life.y = -bunny.save_width / 2 - 2;
        life.width = width_l;
        life.height = 2;
        life.parentLayer = hudLayer;
        bunny.addChild(life);
        bunny.ui_life = life;


        /*

        width_l = ((bunny.save_width / 3) * 3);
        var life = getDraw("green");
        life.x = 0;
        life.y = -bunny.save_width / 2-2;
        life.width = bunny.save_width-1;
        life.height = 2;
        bunny.addChild(life);
        bunny.ui_life = life;*/
      }

      if (data.name != undefined) {
        var name = new PIXI.Text(data.name, text_style_players);
        name.x -= (name.width / 2) * 0.2;
        name.y = -width / 2 - 11;
        name.scale.x = 0.2;
        name.scale.y = 0.2;
        bunny.name_ui = name;
        bunny.addChild(name);
      }

      // TODO: Check if it's being thrown by a player and not spawned by death or something
      /*if (bunny.obj.attacktype == "s"){
        PlaySound('Throwing Objects.mp3',false);
      }*/




      if (objects[data.id] !== undefined) {
        bunny.slot = {};

        for (var k in data.list) {
          var obj = data.list[k];
          var id_object = ID_OBJECTS[obj.id];
          //console.log(id_object);
          bunny.slot[obj.slot] = getDraw(id_object);
          bunny.addChild(bunny.slot[obj.slot]);

          if (id_object != undefined) {
            var particles = getParticles(OBJECT_DICT[id_object]);
            bunny.addChild(particles);
          }


          /*  if (id_object == "poisoned") {
              particles_array[particles_array.length] = new PIXI.particles.Emitter(
                // The PIXI.Container to put the emitter in
                // if using blend modes, it's important to put this
                // on top of a bitmap, and not use the root stage Container
                objects[data.id].slot[obj.slot], [PIXI.Texture.fromImage('http://' + window.location.host + '/public/img/particle.png')],
                // Emitter configuration, edit this to change the look
                // of the emitter
                );
              particles_array[particles_array.length - 1].x = 0;
              particles_array[particles_array.length - 1].y = 0;
              particles_array[particles_array.length - 1].emit = true;
            }*/



        }
      } else {
        bunny.slot = {};
        bunny.slot[0] = getDraw("empty");
        bunny.slot[1] = getDraw("empty");
        bunny.addChild(bunny.slot[0]);
        bunny.addChild(bunny.slot[1]);
      }

      var click_container = new PIXI.Container();
      var graphics2 = getDraw("empty");
      graphics2.width = width;
      graphics2.height = -width;
      click_container.addChild(graphics2);

      click_container.interactive = true;
      click_container.x = 0;
      click_container.y = 0;
      click_container.width = width;
      click_container.height = -width;
      click_container.parentLayer = overHudLayerMap;
      if (bunny.obj.click != null) {
        click_container.on('pointerdown', function (evt) {
          createMenuObject(bunny.obj, bunny.id);
          mouseDown = -1;
          sendMouseInput(0);
          //alert("test");
          /*  mouseDown = 0;
            if (body_user != undefined) {
                sendWeaponAction(body_user.weapon);
                //sendJump(body_user.weapon);
            }*/
        });
      } else {

        click_container.on('pointerdown', function (evt) {
          mouseDown = 0;
          sendMouseInput(1);
          /*if (body_user != undefined) {
            sendWeaponAction(body_user.weapon);
            //sendJump(body_user.weapon);
          }*/
          if (drag_drop_phantom.visible) {
            drag_drop_phantom.visible = false;
          }

        });

      }



      click_container.on('pointerup', function (evt) {
        hidePopin();
        mouseDown = -1;
        sendMouseInput(0);
        DropItem(bunny.id);
      });
      click_container.on('pointerover', function (evt) {
        showPopin(bunny.obj.name);
        if (drag_drop_phantom.visible && bunny.obj.click != undefined && bunny.obj.click == true) {
          drag_drop_phantom.children[1].text = "Store";
        }

      });
      click_container.on('pointerout', function (evt) {
        hidePopin();
      });

      bunny.addChild(click_container);

      //console.log(bunny.obj);
      var particles = getParticles(bunny.obj);
      bunny.addChild(particles);





    }
    /*else{
    	console.log("ya existe");
    }*/
  }




  container_map.x = 0;
  container_map.y = 1930;
  container_map.scale.x = 15;
  container_map.scale.y = 15;

  //if (width_screen / (container.scale.x + scalechange) > 150) {
  while (width_screen / (container_map.scale.x) < 250) {
    container_map.scale.x -= 0.1;
    container_map.scale.y -= 0.1;
  }
  //  }

  $("body").bind('mousewheel', function (e) {
    if (!$("#overlay").is("visible")) {
      if (body_user != undefined) {
        container_map.x = -body_user.x * container_map.scale.x + width_screen / 2;
        container_map.y = -body_user.y * container_map.scale.y + height_screen / 2;

      }
      /*  if (drag_drop_phantom.visible) {
          if (e.originalEvent.wheelDelta / 120 > 0) {
            drag_inventory_id_quantity += 1;
          } else {
            drag_inventory_id_quantity -= 1;
          }
          if (drag_inventory_id_quantity <= 0) {
            drag_inventory_id_quantity = 1;
          } else {
            var quantity = inventory.children[drag_inventory_id - 1].container.children[0].children[2].text;
            if (drag_inventory_id_quantity > quantity) {
              drag_inventory_id_quantity = parseInt(quantity);
            }
          }



          //updateDropHereMessage();
          //click_area.trigger("mousemove");
          //drag_drop_phantom.children[0].text="Drop here " + drag_inventory_id_quantity;

        } else {*/
      var scalechange = 0;
      if (e.originalEvent.wheelDelta / 120 > 0) {
        scalechange += 0.2;
      } else {
        scalechange -= 0.2;
      }

      if (width_screen / (container_map.scale.x + scalechange) > 150) {
        if (width_screen / (container_map.scale.x + scalechange) < 250) {
          container_map.scale.x += scalechange;
          container_map.scale.y += scalechange;
        } else {
          if (scalechange > 0) {
            container_map.scale.x += scalechange;
            container_map.scale.y += scalechange;
          }
        }
      } else {
        container.scale.x = 4.4;
        container.scale.y = 4.4;
      }

      // }
    }
  });


  /*
    if (mouseDown != mousedown_save){
      var monster = {
        __empty: 0,
        id: IActions.left,
        state: mouseDown,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));
      mousedown_save = mouseDown;
    }
  */

  var date_time = new Date();

  var last_sync = new Date().getTime();
  var data_time_actual = new Date().getTime();
  var last_sync_after = 1;
  var last_sync_after_after = 1;

  var mousedown_save = 0;

  function sendMouseInput(state) {
    /*if (body_user.cooldown > 0) {
      body_user.cooldown -= delta;
    } else {
      if (body_user.cooldown <= 0 && mouseDown == 0) {
        sendWeaponAction(body_user.weapon);
      }
    }
    */
    if (state != mousedown_save) {
      if (state == 1 && body_user.weapon.type == object_type.build) {
        if (build_phantom.x > 0) {
          var monster = {
            __empty: 0,
            action: OBJECTS_ID[body_user.weapon.id],
            x: Math.abs(build_phantom.x),
            y: -build_phantom.y
          };
          socket.emit(MSG.build, buildSchema.encode(monster));
        }

      } else {
        var monster = {
          __empty: 0,
          id: IActions.attack,
          state: state,
        };
        socket.emit(MSG.movement, movementSchema.encode(monster));
      }
      mousedown_save = state;
    }

  }


  var rotation_interval = 0;
  var rotation_interval_max = 10;

  var alive_interval = 0;
  var alive_interval_max = 90;

  // Listen for animate update
  app.ticker.add(function (delta) {


    if (alive_interval <= 0) {
      alive_interval = alive_interval_max;

      if ($("#alliance_menu").is(":visible") && (body_user.alliance == "" || body_user.alliance == undefined)) {
        var monster = {
          __empty: 0,
        };
        socket.emit(MSG.ally_get, aliveSchema.encode(monster));
      } else if (body_user != undefined && body_user.alliance_owner != undefined && body_user.alliance_owner == userid) {
        var list = {
          "__empty": 0
        };
        socket.emit(MSG.users_get, aliveSchema.encode(list));
      }
    } else {
      alive_interval -= delta;
    }


    if (rotation_interval <= 0) {
      rotation_interval = rotation_interval_max;

      if (socket != undefined) {

        var center_x = width_screen / 2;
        var center_y = height_screen / 2;

        vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
        length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
        vector[0] /= length;
        vector[1] /= length;



        var monster = {
          __empty: 0,
          r: Math.round(Math.atan2(vector[0], vector[1]) * 10),
        };

        socket.emit(MSG.rotation, rotationSchema.encode(monster));
      }


    } else {
      rotation_interval -= delta;
    }

    data_time_actual = new Date().getTime();


    updateDropHereMessage();
    if (drag) {
      drag.position.x += e.data.originalEvent.movementX;
      drag.position.y += e.data.originalEvent.movementY;
    }

    if (body_user != undefined) {
      //  background_sky.x = body_user.x;
      map_height = 30 * 78
      //background_sky.y = -window.innerHeight / 2 + body_user.y / 2;
    }
    if (popin != null) {
      popin.x = currentMousePos.x;
      popin.y = currentMousePos.y;
    }

    //aux += delta;
    //if (aux_steptime > 0){
    //if (delta > 2) console.log(delta);
    /*console.log(data_time_actual);
    console.log(last_sync);
    console.log(data_time_actual-last_sync);*/
    for (var key in objects) {
      var object = objects[key];
      if (object.x_int != undefined && object.t_int != undefined && (object.obj.type == object_type.player || object.obj.type == object_type.gather || object.obj.type == object_type.animal) /*&& object.visible == true*/ ) {

        if (object.x_int_start != object.x_int || object.y_int_start != object.y_int) {





          object.x = object.x_int_start * (1.0 - ((delta / 10))) + (object.x_int * ((delta / 10)));
          object.y = object.y_int_start * (1.0 - ((delta / 10))) + (object.y_int * ((delta / 10)));
          object.x_int_start = object.x;
          object.y_int_start = object.y;



        }



      }

    }


    if (body_user != undefined) {
      // if (body_user.weapon == IActions.trap || body_user.weapon == IActions.door || body_user.weapon == IActions.gold || body_user.weapon == IActions.turret || body_user.weapon == IActions.cupboard) {
      updateWeaponDirection();
      // }
      container_map.x = -body_user.x * container_map.scale.x + width_screen / 2;
      container_map.y = -body_user.y * container_map.scale.y + height_screen / 2;
    }

    // console.log(app.ticker.elapsedMS);

    for (key in particles_array) {
      //particle.emit = true;
      particles_array[key].update(delta / 100);


      if (particles_array[key]._emit == false) {
        particles_array[key].destroy();
        particles_array.splice(key, 1);

        //delete particles_array[key];
        //break;
      }

    }


  });

  function updateWeaponDirection() {

    if (!drag_drop_phantom.visible && body_user != undefined && body_user.ui_weapon != undefined) {

      var center_x = width_screen / 2;
      var center_y = height_screen / 2;


      vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
      length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
      vector[0] /= length;
      vector[1] /= length;


      // magnitude:Math.round((length*100)/4.4)
      if (body_user.weapon.type == object_type.build) {
        if (length > 50 * container_map.scale.x) {
          //alert("t");
          length = 50 * container_map.scale.x;
        }


        build_phantom.x = Math.round((body_user.x + (vector[1]) * (length / container_map.scale.x)) / 10) * 10;
        build_phantom.y = Math.round((body_user.y + (vector[0]) * (length / container_map.scale.y)) / 10) * 10;

        build_phantom.visible = true;


        /*  body_user.ui_weapon.scale.x = 0.5;
          body_user.ui_weapon.scale.y = 0.5;*/


      } else {
        build_phantom.visible = false;
        //if (body_user.weapon.type == object_type.weapon || body_user.weapon.type == object_type.gather){
        /*}
          else{
              if(body_user.weapon.type != object_type.equip){
                  body_user.ui_weapon.scale.x = 0.5;
                  body_user.ui_weapon.scale.y = 0.5;
              }
          }*/
      }
      if (body_user.tween == undefined) {
        body_user.ui_weapon.rotation = Math.atan2(vector[0], vector[1]);
      }
      if (vector[1] < 0) {
        body_user.ui_weapon.scale.y = -1;
      } else {
        body_user.ui_weapon.scale.y = 1;
      }

    }

    if (drag_drop_phantom.visible) {
      build_phantom.visible = false;
      var center_x = width_screen / 2;
      var center_y = height_screen / 2;


      vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
      length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
      vector[0] /= length;
      vector[1] /= length;


      // magnitude:Math.round((length*100)/4.4)
      //if (body_user.weapon.type == object_type.build) {
      /*if (length > 50 * container.scale.x) {
          //alert("t");
          length = 50 * container.scale.x;
      }*/
      if (body_user != null) {
        drag_drop_phantom.x = Math.round((body_user.x + (vector[1]) * (length / container_map.scale.x)));
        drag_drop_phantom.y = Math.round((body_user.y + (vector[0]) * (length / container_map.scale.y)));
      }

      //drag_drop_phantom.visible = true;

      /*  } else {
            build_phantom.visible = false;
        }*/

    }
  }

  var cammmm = true;
  var currentMousePos = {
    x: -1,
    y: -1
  };
  eventmove = "mousemove"
  if (ismobile) {
    eventmove = "pointermove"
  }

  $(document).on(eventmove, function (event) {

    currentMousePos.x = event.originalEvent.pageX;
    currentMousePos.y = event.originalEvent.pageY;
    return false;

  });
  //$("body").pointerup(function(event) {

  ///  drag_drop_phantom.visible = false;


  //  });




  /*$("canvas").on("mousedown",function(e){

      if($("#alliance_menu").is(":visible")){
          $("#alliance_menu").hide();
      }


      e.preventDefault();
  });*/




  $(".join").hide();
  $("#game").show();



  $(".error").show();

  var autojump;

  function sendWeaponAction(weapon) {

    if (body_user.cooldown <= 0) {
      var center_x = width_screen / 2;
      var center_y = height_screen / 2;

      vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
      length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);

      if (weapon.type == object_type.build) {
        if (build_phantom.x > 0) {
          var monster = {
            __empty: 0,
            action: OBJECTS_ID[weapon.id],
            x: Math.abs(build_phantom.x),
            y: -build_phantom.y
          };
          mouseDown = -1;
          socket.emit(MSG.build, buildSchema.encode(monster));
        }

      } else {
        var monster = {
          __empty: 0,
          action: OBJECTS_ID[weapon.id],
          r: Math.round((Math.atan2(vector[0], vector[1])) * 100),
          magnitude: Math.round((length * 100) / container_map.scale.x)
        };

        socket.emit(MSG.attack, jumpSchema.encode(monster));
      }

      body_user.cooldown = 30;
    }



  }

  function weaponAnimation(body) {
    weapon = body.weapon;
    if (body.tween == undefined) {
      /*objects[data.id].tween.stop();
      objects[data.id].tween.start();*/


      /*vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
            length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
        */
      /*console.log("start");
             console.log(weapon);*/
      //alert(weapon.animation);

      if (weapon.sound) {
        PlaySound(weapon.sound);
      }

      if (weapon.animation == "tool") {
        body.tween = new TWEEN.Tween(body.ui_weapon)
          .to({
            rotation: "-0.5"
          }, 50)
          .repeat(0);

        tweenBack = new TWEEN.Tween(body.ui_weapon)
          .to({
            rotation: "+1"
          }, 80)
          .repeat(0);

        tweenBack2 = new TWEEN.Tween(body.ui_weapon)
          .to({
            rotation: "-0.5"
          }, 50)
          .repeat(0);


        body.tween.chain(tweenBack);
        //tween.chain(tweenBack2);
        tweenBack.chain(tweenBack2).onComplete(function () {
          /*console.log("complete");*/
          //   container.removeChild(name);
          try {
            delete body.tween;
          } catch (e) {}
        });
        body.tween.start();


      } else if (weapon.animation == "eat") {
        var xsave = body.ui_weapon.x;
        var ysave = body.ui_weapon.y;

        body.tween = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: Math.cos(body.ui_weapon.rotation) * -5,
            y: Math.sin(body.ui_weapon.rotation) * -5
          }, 50)
          .repeat(0)

        tweenBack = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: xsave,
            y: ysave
          }, 80)
          .repeat(0);


        /* tween = new TWEEN.Tween(body.ui_weapon)
                  .to({
                      x: "+3",
                      y: "+3"
                  }, 50)
                  .repeat(0)

              tweenBack = new TWEEN.Tween(body.ui_weapon)
                  .to({
                      x: "-3",
                      y: "-3"
                  }, 80)
                  .repeat(0)
*/
        body.tween.chain(tweenBack).onComplete(function () {
          //  console.log("complete");
          //   container.removeChild(name);
          try {
            delete body.tween;
          } catch (e) {}
        });
        //tween.chain(tweenBack2);
        //tweenBack.chain(tweenBack2);
        body.tween.start();



      } else if (weapon.animation == "shot") {
        var xsave = body.ui_weapon.x;
        var ysave = body.ui_weapon.y;

        body.tween = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: Math.cos(body.ui_weapon.rotation) * -4,
            y: Math.sin(body.ui_weapon.rotation) * -4
          }, 60)
          .repeat(0)

        tweenBack = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: xsave,
            y: ysave
          }, 30)
          .repeat(0);


        /* tween = new TWEEN.Tween(body.ui_weapon)
                  .to({
                      x: "+3",
                      y: "+3"
                  }, 50)
                  .repeat(0)

              tweenBack = new TWEEN.Tween(body.ui_weapon)
                  .to({
                      x: "-3",
                      y: "-3"
                  }, 80)
                  .repeat(0)
*/
        body.tween.chain(tweenBack).onComplete(function () {
          //console.log("complete");
          //   container.removeChild(name);
          try {
            delete body.tween;
          } catch (e) {}
        });
        //tween.chain(tweenBack2);
        //tweenBack.chain(tweenBack2);
        body.tween.start();



      } else /*if (weapon.animation == "push")*/ {
        //alert( body_user.ui_weapon.x)
        var xsave = body.ui_weapon.x;
        var ysave = body.ui_weapon.y;

        body.tween = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: Math.cos(body.ui_weapon.rotation) * 5,
            y: Math.sin(body.ui_weapon.rotation) * 5
          }, 50)
          .repeat(0)

        tweenBack = new TWEEN.Tween(body.ui_weapon)
          .to({
            x: xsave,
            y: ysave
          }, 80)
          .repeat(0);


        /* tween = new TWEEN.Tween(body.ui_weapon)
                    .to({
                        x: "+3",
                        y: "+3"
                    }, 50)
                    .repeat(0)

                tweenBack = new TWEEN.Tween(body.ui_weapon)
                    .to({
                        x: "-3",
                        y: "-3"
                    }, 80)
                    .repeat(0)
*/
        body.tween.chain(tweenBack).onComplete(function () {
          //console.log("complete");
          //   container.removeChild(name);
          try {
            delete body.tween;
          } catch (e) {}
        });
        //tween.chain(tweenBack2);
        //tweenBack.chain(tweenBack2);
        body.tween.start();


      }
    }
  }

  function sendJump(action) {

    if (body_user.cooldown <= 0) {
      var center_x = width_screen / 2;
      var center_y = height_screen / 2;

      vector = [currentMousePos.y - center_y, currentMousePos.x - center_x];
      length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);


      var monster = {
        __empty: 0,
        action: action,
        r: Math.round((Math.atan2(vector[0], vector[1])) * 100),
        magnitude: Math.round((length * 100) / container_map.scale.x)
      };
      socket.emit(MSG.jump, jumpSchema.encode(monster));

    }


  }

  var numberOfJoinsBeforePreroll = 3;
  var joins = localStorage.getItem("number_joins");
  if (joins == null) {
    joins = 0;
  }
  if (joins < 0) {
    joins = 0;
  }

  $("#join_game").on("click", function () {
    //initAipPreroll();
    $("#ad_p").hide();
    $(".top-add").hide();
    if (joins <= 0 && typeof adplayer != undefined) {
      joins = numberOfJoinsBeforePreroll;
      adplayer.startPreRoll();
    } else {
      JoinGame();
    }
    return false;
  });


  /// OBTENEMOS EL INPUT DEL TECLADO. Guardamos y quitamos las teclas pulsadas permitiendo asi pulsar varias teclas a la vez.
  var lastEvent;
  var heldKeys = {};
  var mouseDown = -1;

  document.onkeydown = function (event) {
    var keyCode = event.which || event.keyCode;

    if (keyCode == 13 && !$("#alliance_menu").is(":visible")) { // 6
      if ($("#overlay").is(":visible")) {
        JoinGame()
      } else {

        if (!$("#chat_text").is(":focus")) {
          //$("#chat").show();
          $("#chat_text").focus();
        } else {
          $("#chat_send").click();
          $("#chat_text").val("");
          $("#chat_text").blur();
          //$("#chat").hide();
        }
      }

    }


    if ($("#overlay").is(":visible") || $("#chat_text").is(":focus")) {
      //alert("input");
      return;
    }

    if (lastEvent == keyCode) {
      return;
    }
    lastEvent = keyCode;
    heldKeys[keyCode] = true;


    if (keyCode == 65 || keyCode == 37) { // A
      var monster = {
        __empty: 0,
        id: IActions.left,
        state: 1,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    } else if (keyCode == 68 || keyCode == 39) { // D
      var monster = {
        __empty: 0,
        id: IActions.right,
        state: 1,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    } else if (keyCode == 87 || keyCode == 38) { // W
      var monster = {
        __empty: 0,
        id: IActions.jump,
        state: 1,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    } else if (keyCode == 32 || keyCode == 69) { // A
      mouseDown = 0
      sendMouseInput(1);
    } else if (keyCode == 83 || keyCode == 40) { // 1
      //socket.emit(MSG.action, "2");
      var monster = {
        __empty: 0,
        action: IActions.jump,
        magnitude: 80,
        r: Math.round((Math.PI / 2) * 100),
      };
      socket.emit(MSG.jump, jumpSchema.encode(monster));
    } else if (keyCode >= 49 && keyCode <= 49 + 8) { // 1
      //alert(event.keyCode-48);
      //alert(inventory.children[event.keyCode-48].obj_id);
      if (inventory.children[keyCode - 49].obj_id != -1 && ID_OBJECTS[inventory.children[keyCode - 49].obj_id] != body_user.weapon.id) {
        // setWeapon(userid, ID_OBJECTS[inventory.children[keyCode - 49].obj_id],true);
        sendWeapon(userid, ID_OBJECTS[inventory.children[keyCode - 49].obj_id], true);
      } else {
        // setWeapon(userid, "hand",true);
        sendWeapon(userid, "hand", true);
      }
    }


  };





  function sendWeapon(id, weapon_id, emit = true) {
    var body = objects[id];
    if (id == userid) {
      resetEquipationLayer();

      if (emit) {
        // setTimeout(function() {
        var monster = {
          __empty: 0,
          id: OBJECTS_ID[OBJECT_DICT[weapon_id].id],
        };
        socket.emit(MSG.weapon, weaponSchema.encode(monster));
        /*if (body.weapon.type == object_type.equip) {
          setWeapon(userid, "hand");
        }*/

        // }, 10);

      }

    }


  }

  function setWeapon(id, weapon_id, emit = true) {
    var body = objects[id];
    body.weapon = OBJECT_DICT[weapon_id];
    //alert(body_user.weapon);
    if (id == userid) {
      resetEquipationLayer();
      // if (body.weapon.type == object_type.equip) {
      //   setWeapon(userid, "hand");
      // }


      /*if(emit){
        setTimeout(function() {
          var monster = {
            __empty: 0,
            id: OBJECTS_ID[body_user.weapon.id],
          };
          socket.emit(MSG.weapon, weaponSchema.encode(monster));
          if (body.weapon.type == object_type.equip) {
            setWeapon(userid, "hand");
          }

        }, 10);

      }*/

    }
    // if(!emit){

    saved_rotation = 0;
    if (body.ui_weapon != undefined) {
      saved_rotation = body.ui_weapon.rotation;
      body.removeChild(body.ui_weapon);
    }


    //if (body.weapon == 0) {
    var draw = getDraw("hand");
    body.addChild(draw);
    if (body.weapon.id != "hand") {
      var draw2 = getDraw(body.weapon.id);
      draw2.x = 9.5;
      draw2.y = 0.5;
      if (body.weapon.type == object_type.weapon) {
        draw2.scale.x = 1;
        draw2.scale.y = 1;
      } else {
        draw2.scale.x = 0.5;
        draw2.scale.y = 0.5;
      }
      draw.addChild(draw2);
    }
    draw.displayGroup = hudLayer;
    draw.parentLayer = topLayer;

    body.ui_weapon = draw;


    body.ui_weapon.rotation = saved_rotation;

    if (id == userid && body.weapon.type == object_type.build /*(body.weapon != IActions.attack && body.weapon != IActions.boxes && body.weapon != IActions.heal )*/ ) {
      //build_phantom.clear();
      /*for (var i = build_phantom.children.length - 1; i >= 0; i--) {
        build_phantom.removeChild(build_phantom.children[i]);
      };*/
      container_map.removeChild(build_phantom);
      build_phantom = new PIXI.Container();
      build_phantom_image = getDraw(body.weapon.id);
      build_phantom.addChild(build_phantom_image);
      if (body_user.weapon.scale != undefined && body_user.weapon.scale > 1) {
        build_phantom_image.scale.x = body_user.weapon.scale;
        build_phantom_image.scale.y = body_user.weapon.scale;
        build_phantom_image.x += (10 * body_user.weapon.scale) / 4;
        build_phantom_image.y -= (10 * body_user.weapon.scale) / 4;
      } else {

      }

      container_map.addChild(build_phantom);
      //body.addChild(draw);
      //build_phantom =new PIXI.Graphics();
      /*build_phantom.lineStyle(1, 0x000000, 0.2);
      build_phantom.beginFill(0xDEB887, 1);
      build_phantom.drawRect(-5, -5, 10, 10);
      build_phantom.endFill();*/
      //container.addChild(build_phantom);

    }

    /*if (id != userid && body.weapon.type != object_type.weapon/*(body.weapon != IActions.attack && body.weapon != IActions.boxes && body.weapon != IActions.heal )*/
    /*){
            	body.ui_weapon.scale.x = 0.4;
            	body.ui_weapon.scale.y = 0.4;

            }
            else{*/
    body.ui_weapon.scale.x = 1;
    body.ui_weapon.scale.y = 1;
    //  }
    if (draw2 != undefined) {
      var particles = getParticles(body.weapon);
      draw2.addChild(particles);
    }


    if (id == userid) {
      for (var j in inventory.children) {
        obj_id = inventory.children[j].obj_id;
        gui_obj = inventory.children[j];

        if (obj_id == body.weapon.c_id) {
          /*gui_obj.container.children[0].children[1].removeChild(gui_obj.container.children[0].children[1].children[0]);
                  // gui_obj.container.children[0].removeChild(gui_obj.container.children[0].children[2]);
                   gui_obj.container.children[0].children[1].addChild(getDraw("empty"));
                    setWeapon(userid,"hand");
                   inventory.children[j].obj_id=-1;
                   gui_obj.container.children[0].children[2].text="0";*/

          gui_obj.container.children[0].alpha = 1;

          //break;
        } else {
          gui_obj.container.children[0].alpha = 0.6;
        }
      }
      updateWeaponDirection();
    }
    // }

  }

  function resetEquipationLayer() {
    for (var i = 0; i < equipation_layer.children.length; i++) {
      equipation_layer.children[i].children[0].alpha = 0;
      equipation_layer.children[i].children[1].alpha = 0.6;
      // equipation_layer.children[i].children[0].alpha = 0;
      if (equipation_layer.children[i].active == false) {
        equipation_layer.children[i].children[0].alpha = 0;
        equipation_layer.children[i].children[1].alpha = 0.1;
      }
    }



    if (body_user.weapon == IActions.attack) {
      equipation_layer.children[0].children[1].alpha = 1;
      /*  equipation_layer.children[0].children[1].alpha = 1;
        equipation_layer.children[0].children[0].alpha = 0;*/
    } else if (body_user.weapon == IActions.boxes) {
      equipation_layer.children[1].children[1].alpha = 1;

    } else if (body_user.weapon == IActions.heal) {
      equipation_layer.children[2].children[1].alpha = 1;
    } else if (body_user.weapon == IActions.trap) {
      equipation_layer.children[3].children[1].alpha = 1;
    } else if (body_user.weapon == IActions.door) {
      equipation_layer.children[4].children[1].alpha = 1;
    } else if (body_user.weapon == IActions.gold) {
      equipation_layer.children[5].children[1].alpha = 1;
    }




  }

  var timeout = null;
  var timeout1 = null;


  function fireMessage(x, y, text, type, draw_name) {

    var message_container = new PIXI.Container();
    container_map.addChild(message_container);
    message_container.x = x;
    message_container.y = y;
    var name = new PIXI.Text(text, text_style);
    name.scale.x = 0.2;
    name.scale.y = 0.2;
    name.x = -(name.width / 2);
    name.y = -(name.height / 2) - 4;
    var draw = getDraw(draw_name);
    draw.x = 0;
    draw.y = 0;
    draw.scale.x = 0.4;
    draw.scale.y = 0.4;
    message_container.parentLayer = overlayFirst;
    message_container.addChild(draw);
    message_container.addChild(name);

    message_container.alpha = 0.1;
    if (type == 2) {
      container_map.y = y - 20;
      container_map.alpha = 1;
      var tween = new TWEEN.Tween(message_container)
        .to({
          y: message_container.y - getRandomArbitrary(2, 7),
          x: message_container.x,
          alpha: 1
        }, 1350)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(function () {
          container_map.removeChild(message_container);
        })
        .start();
    } else {
      var tween = new TWEEN.Tween(message_container)
        .to({
          y: message_container.y - getRandomArbitrary(8, 12),
          x: message_container.x + getRandomArbitrary(-5, 5),
          alpha: 1
        }, 350)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(function () {
          container_map.removeChild(message_container);
        })
        .start();
    }
  }

  document.onkeyup = function (event) {
    var keyCode = event.which || event.keyCode;
    lastEvent = null;
    delete heldKeys[keyCode];


    if (keyCode === 65 || keyCode === 37) { // A
      var monster = {
        __empty: 0,
        id: IActions.left,
        state: 0,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    }

    if (keyCode === 68 || keyCode === 39) { // A
      var monster = {
        __empty: 0,
        id: IActions.right,
        state: 0,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    }

    if (keyCode === 87 || keyCode === 38) { // A
      var monster = {
        __empty: 0,
        id: IActions.jump,
        state: 0,
      };

      socket.emit(MSG.movement, movementSchema.encode(monster));

    }

    if (keyCode === 32 || keyCode === 69) { // A
      mouseDown = -1;
      sendMouseInput(0)

    }

    //info.data = JSON.stringify(heldKeys);
  }
  document.onbeforeunload = function () {
    socket.onclose = function () {}; // disable onclose handler first
    socket.close();
  }


  /*setInterval(function() {
      //if (!$("#overlay").is(":visible")){
      var diff = Date.now() - last_ping;


      if ( diff >35000){
        die();

        showMessage("ERROR CONNECTING WITH SERVER.");
        initializeSocket(false);

      }
      else
      if ( diff >10000){
           showMessage("ERROR CONNECTING WITH SERVER.");
           hideMessage(1000);

         }

      //}
  }, 5000);*/

  function die() {
    body_user = null;
    $("#overlay").show();
    tween = new TWEEN.Tween(hudLayer)
      .to({
        alpha: "0"
      }, 100);

    //tween.chain(tweenBack2);
    tween.start();
    tween = new TWEEN.Tween(overlayFourth)
      .to({
        alpha: "0"
      }, 100);

    //tween.chain(tweenBack2);
    tween.start();
    $("#ad_p").show();
    $(".top-add").show();

    $("#ui_html").hide();
    $("#alliance_menu").hide();
    //alert("test");
    aiptag.cmd.display.push(function () {
      aipDisplayTag.display('cewb-io_300x600');
      aipDisplayTag.display('cewb-io_970x250');
    });
  }



  CreateServerSelect();
  $("#user_name").focus();







  function showMessage(message) {
    $("#message").show();
    $("#message").text(message);
  }



  function hideMessage(time) {
    setTimeout(function () {
      $("#message").hide()
    }, time);

  }
  var build_phantom = new PIXI.Graphics();
  var drag_drop_phantom = new PIXI.Graphics();
  drag_drop_phantom.visible = false;



  function initializeSocket(join_auto) {
    if (socket != null) {
      socket.disconnect();
    }
    /*if (socket != undefined){
      socket.close();
    }*/
    if ($("#serverlist").val() != "Loading...") {
      host = $("#serverlist").val();
    } else {
      if ($("body").hasClass("loading_game")) {
        $("body").removeClass("loading_game");
        showMessage("Servers under maintenance");
        hideMessage(1000);
      }
      return;
    }
    //alert(host);

    socket = wsBinary.connect('wss://' + host + '', {
      'force new connection': true
    });
    socket.error = function () {
      $("body").removeClass("loading_game");
      showMessage("Error");
    }; // disable onclose handler first



    socket.on(MSG.alive, function (rawData) {
      // console.log("alive")
      //alert("are you alive?");
      last_ping = Date.now();
      var monster = {
        "__empty": 0
      };
      socket.emit(MSG.alive, aliveSchema.encode(monster));
    });



    function addInventory(id, quantity) {
      if (body_user == undefined) {
        return;
      }
      if (body_user.inventory[id] == undefined) {
        body_user.inventory[id] = quantity;
      } else {
        body_user.inventory[id] += quantity;
      }
      if (quantity > 0) {
        fireMessage(body_user.x, body_user.y, quantity, 0.3, ID_OBJECTS[id])
      }
      var found = false;
      for (var j in inventory.children) {
        obj_id = inventory.children[j].obj_id;
        gui_obj = inventory.children[j];

        if (obj_id == id) {
          if (body_user.inventory[obj_id] <= 0) {
            gui_obj.container.children[0].children[1].removeChild(gui_obj.container.children[0].children[1].children[0]);
            // gui_obj.container.children[0].removeChild(gui_obj.container.children[0].children[2]);
            gui_obj.container.children[0].children[1].addChild(getDraw("empty"));
            inventory.children[j].obj_id = -1;
            gui_obj.container.children[0].children[2].text = "";
            setWeapon(userid, "hand");
          } else /* if(OBJECT_DICT[ID_OBJECTS[id]].max_stack > parseInt(gui_obj.container.children[0].children[2].text))*/ {
            gui_obj.container.children[0].children[2].text = parseInt(gui_obj.container.children[0].children[2].text) + quantity;
            gui_obj.container.children[0].children[2].x = -gui_obj.container.children[0].children[2].width / 2 + 10
            if (parseInt(gui_obj.container.children[0].children[2].text) <= 0) {
              gui_obj.container.children[0].children[2].text = "";
            }

          }
          //else{
          found = true;
          //}

          break;
        }
      }
      if (!found) {
        for (var j in inventory.children) {
          obj_id = inventory.children[j].obj_id;
          gui_obj = inventory.children[j];
          if (obj_id == -1) {
            gui_obj.container.children[0].children[1].removeChild(gui_obj.container.children[0].children[1].children[0]);
            // gui_obj.container.children[0].removeChild(gui_obj.container.children[0].children[2]);

            if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.equip) {
              gui_obj.container.children[0].children[1].addChild(getDraw("player"));
              gui_obj.container.children[0].children[1].children[0].addChild(getDraw(ID_OBJECTS[id]));
            } else {
              gui_obj.container.children[0].children[1].addChild(getDraw(ID_OBJECTS[id]));
              /*if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.gather) {
                gui_obj.container.children[0].children[1].scale.x = 1;
                gui_obj.container.children[0].children[1].scale.y = 1;
              }*/
            }
            if (OBJECT_DICT[ID_OBJECTS[id]].type == object_type.weapon) {
              gui_obj.container.children[0].children[1].x = 12;
              gui_obj.container.children[0].children[1].y = 19;
              gui_obj.container.children[0].children[1].rotation = -1.8;
            } else {
              gui_obj.container.children[0].children[1].x = 10;
              gui_obj.container.children[0].children[1].y = 10;
              gui_obj.container.children[0].children[1].rotation = 0;
            }
            //gui_obj.container.children[0].addChild(new PIXI.Text("", text_style_equipation));
            inventory.children[j].obj_id = id;
            gui_obj.container.children[0].children[2].text = quantity;
            gui_obj.container.children[0].children[2].x = -gui_obj.container.children[0].children[2].width / 2 + 10
            //gui_obj.container.children[0].children[1].visible = false;
            //gui_obj.container.children[0].children[1].clear();
            // gui_obj.container.children[0].children[1] = getDraw(obj_id);
            break;
          }
        }
      }
      updateCraftmenu();



    }

    function updateCraftmenu() {
      if (body_user == undefined) {
        return;
      }
      for (var key in OBJECT_DICT) {
        var obj = OBJECT_DICT[key];
        if (obj.cost != undefined) {
          var success = true;
          for (var kk in obj.cost) {
            if (body_user.inventory[OBJECTS_ID[kk]] == undefined || body_user.inventory[OBJECTS_ID[kk]] < obj.cost[kk]) {
              success = false;
            }
          }
          if (success) {
            obj.ui_element.alpha = 1;
          } else {
            obj.ui_element.alpha = 0.2;
          }

        }
      }



    }

    socket.on(MSG.itemReceive, function (rawData) {
      var decoded = itemReceivedSchema.decode(rawData);
      addInventory(decoded.id, decoded.q);

    });
    socket.on(MSG.slots_get, function (rawData) {
      var decoded = slotListSchema.decode(rawData);
      var data = decoded.list;
      refreshMenuObject(data)

    });
    socket.on(MSG.close_modal, function (rawData) {
      var decoded = weaponSchema.decode(rawData);
      /*console.log(decoded);
      console.log(modal_list);
      console.log("modal_list");*/
      modal_list[decoded.id].success();
      uiStage.removeChild(modal_list[decoded.id]);
      modal_list[decoded.id] = null;
    });
    socket.on(MSG.sync, function (rawData) {
      //lastsync = [];
      // $(".latency").text(aux_steptime);
      /* aux_steptime = aux;
       aux_aux_steptime = aux;*/

      //aux = 0;
      last_sync_after_after = last_sync_after;

      var aux = last_sync;
      last_sync = new Date().getTime();
      last_sync_after = last_sync - aux;
      if (last_sync_after <= 0) {
        last_sync_after = 1;
      }




      var decoded = syncSchema.decode(rawData);
      var data = decoded.list;

      for (var i = 0; i < data.length; i++) {

        if (data[i].id == userid) {
          body_user = objects[data[i].id];
        }


        //lastsync.push(data[i].id);


        if (objects[data[i].id] != undefined) {
          var object = objects[data[i].id];
          //if (object.x_int == undefined) {
          /*object.x_int_start = object.x;
          object.y_int_start = object.y;
          //object.r_int_start = -(data[i].r / 8);
*/
          //}
          //object.last_int = Date.now();
          object.t_int = 0;
          /*object.x = data[i].x;
          object.y = -data[i].y;*/
          object.x_int = data[i].x;
          object.y_int = -data[i].y;

          if (Math.round(object.y_int * 10) / 10 === Math.round(object.y * 10) / 10 && Math.round(object.x_int) !== Math.round(object.x)) {
            let distance = Math.abs(object.x_int - object.x);
            if (distance > 7) {
              PlaySound('walking1.mp3', false);
            }
          }


          if (object.swimming == true) {
            let distanceX = Math.abs(object.x_int - object.x);
            let distanceY = Math.abs(object.y_int - object.y);
            if (distanceX > 5 || distanceY > 5) {
              PlaySound('Swimming.mp3', false);
            }
          }



          

          //console.log(last_sync-data_time_actual);
          /*if (object.tween_move == null){
            object.t_int = {value: 0};
            //object.tween_move.onComplete.removeAll();



            /*object.tween_move = new TWEEN.Tween( object ).to( { x_int: data[i].x, y_int: -data[i].y }, (last_sync_after) ).onUpdate( function() {
              this.x = this.x_int;
              this.y = this.y_int;
            }).interpolation( TWEEN.Interpolation.Linear ).easing( TWEEN.Easing.Linear.None ).start();*/

          /*}
          else{
            /*object.tween_move_value = {value: 0};
            object.tween_move.pendingDelete = false;
              object.tween_move.to({value: 1},last_sync_after).start();
          /*  object.tween_move = new TWEEN.Tween(object.tween_move_value).to({value: 1},last_sync_after)
              .onUpdate(function() {
                if (object.tween_move_value >= 0.99) object.tween_move_value = 0.99;
                // Do some linear interpolation between the start and end values:
                object.x = object.x_int_start + object.tween_move_value.value * (object.x_int - object.x_int_start);
                object.y = object.y_int_start + object.tween_move_value.value * (object.y_int - object.y_int_start);
              }).easing( TWEEN.Easing.Linear.None ).start();
              object.tween_move.pendingDelete = false;
            /*object.tween_move = new TWEEN.Tween(object.tween_move_value).to({value: 1},last_sync_after)
              .onUpdate(function() {
                // Do some linear interpolation between the start and end values:
                object.x = object.x_int_start + object.tween_move_value.value * (object.x_int - object.x_int_start);
                object.y = object.y_int_start + object.tween_move_value.value * (object.y_int - object.y_int_start);
              }).easing( TWEEN.Easing.Linear.None ).start();*/
          //object.tween_move.stop();
          //object.tween_move = null;
          /*  object.tween_move.pendingDelete = false;
            object.tween_move.pause();
            console.log(last_sync_after);
            object.tween_move.to( { x_int: data[i].x, y_int: -data[i].y }, last_sync_after ).resume();*/
          //  }

          /**if (userid == data[i].id) {
            container_map.x = -data[i].x * container_map.scale.x + width_screen / 2;
            container_map.y = data[i].y * container_map.scale.y + height_screen / 2;
          }
/

        /*  objects[key].x = lerp[0];
          objects[key].y = lerp[1];

*/





          if (data[i].id != userid) {
            if (object.ui_weapon != undefined) {
              //  if (object.weapon.type == object_type.weapon){
              if (object.tween == undefined) {
                object.ui_weapon.rotation = data[i].r / 10;
                /*console.log(object.ui_weapon.rotation)
                console.log(Math.cos(object.ui_weapon.rotation))*/
                //console.log(object.ui_weapon.rotation*90);
                if (Math.abs(object.ui_weapon.rotation * 90) > 135) {
                  object.ui_weapon.scale.y = -1;
                } else {
                  object.ui_weapon.scale.y = 1;
                }
              }

              //  }

            }
          } /*else{console.log("myselfs synced"+data[i].x + ","+data[i].y);}*/

        } else {
          //console.log(data[i].id + " no inicializado ¿?");
        }


      }

      /*  if (lastsync.length == 0 && body_user != null) {
          die();
        }*/
      try {
        if (body_user != undefined) {
          for (var key in objects) {
            var object = objects[key];

            if (key > 5) {
              vector = [object.x - body_user.x, object.y - body_user.y];
              length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
              if (length > 160) {
                object.visible = false;
                if (object.obj.type !== object_type.water && object.obj.type !== object_type.floor && lastsync != null && lastsync != undefined && lastsync.length > 0) {
                  object.destroy();
                  container_map.removeChild(object);
                  delete objects[key];
                }

              } else {
                object.visible = true;

              }
            }

            /*if (object.obj.type !== object_type.water && object.obj.type !== object_type.floor && lastsync != null && lastsync != undefined && lastsync.length > 0) {
              if (object.obj.type !== object_type.player && object.obj.type !== object_type.animal) {
                if (object.x > body_user.x + 100 || object.x < body_user.x - 100) {
                  object.visible = false;
                  object.destroy();
                  container_map.removeChild(object);
                  delete objects[key];
                }
              } else if (!((lastsync.indexOf(parseInt(key))) > -1)) {

                object.visible = false;
                object.destroy();

                container_map.removeChild(object);
                object.destroy({texture:true, baseTexture:true});
                delete objects[key];

              }
            }
            else{
              if (key > 5 && (object.x > body_user.x + 100 || object.x < body_user.x - 100 || object.y < body_user.y - 100 || object.y > body_user.y + 100)) {
                alert("s")
                object.visible = false;
                object.destroy();

                container_map.removeChild(object);
                object.destroy({texture:true, baseTexture:true});
                delete objects[key];
              } else{
                object.visible = true;
              }

            }*/


          }




        }
      } catch (e) {

      }




    });


    floors_objects = [];


    socket.on(MSG.getfloors, function (rawData) {

      container_map.removeChildren();


      build_phantom = new PIXI.Graphics();
      build_phantom.x = 100;
      build_phantom.y = -100;
      build_phantom.lineStyle(1, 0x000000, 0);
      build_phantom.beginFill(0xFF00FF, 0);
      build_phantom.drawRect(-5, -5, 10, 10);
      build_phantom.endFill();
      build_phantom.parentLayer = topLayer;

      container_map.addChild(build_phantom);




      var decoded = floorSchema.decode(rawData);
      //console.log(decoded);
      var data = decoded[0];
      //hideMessage(1);


      for (var key in objects) {
        //alert("resm");
        objects[key].destroy();
        delete objects[key];
      }

      /*

            if (data.userid != null) {
              userid = data.userid;
            }
      */

      // var texture = new PIXI.Texture.fromImage("http://" + megaserver + "/public/img/floor_texture_default.svg", undefined, undefined, 1)

      var container_map_temp = new PIXI.Container();


      for (var i = 0; i < data.length; i++) {

        var bunny = new PIXI.Graphics();









        bunny.id = data[i].id;
        //bunny.sprite = data[i].sprite;
        bunny.type = data[i].type;
        bunny.width = data[i].width;
        bunny.height = -data[i].height;
        bunny.save_width = data[i].width;
        bunny.save_height = -data[i].height;
        bunny.x = data[i].x;
        bunny.y = -data[i].y;
        bunny.pivot.x = bunny.width / 2;
        bunny.pivot.y = bunny.height / 2;
        bunny.visible = true;
        /*bunny.x = data[i].x;
        bunny.y = -data[i].y;
        bunny.width = data[i].width;
        bunny.height = -data[i].height;*/
        bunny.rotation = -data[i].r;
        //console.log(bunny.obj);
        bunny.obj = OBJECT_DICT[ID_OBJECTS[data[i].obj]];
        if (bunny.obj.floor_type == floor_types.ice) {
          bunny.lineStyle(1, 0x4D9DE0, 0.2);
          bunny.beginFill(0x4D9DE0, 1);

        } else if (bunny.obj.floor_type == floor_types.snow) {
          bunny.lineStyle(1, 0xF4F4F4, 0.2);
          bunny.beginFill(0xF4F4F4, 1);
        } else if (bunny.obj.floor_type == floor_types.cave) {
          bunny.lineStyle(1, 0xF4F4F4, 0);
          bunny.beginFill(0x333333, 1);
        } else if (bunny.obj.floor_type == floor_types.water) {
          bunny.lineStyle(1, 0x0892d0, 0.2);
          bunny.beginFill(0x0892d0, 0.7);
        } else if (bunny.obj.floor_type == floor_types.water_lava) {
          bunny.lineStyle(1, 0xD00000, 0.2);
          bunny.beginFill(0xD00000, 0.7);
        } else if (bunny.obj.floor_type == floor_types.grass) {
          bunny.lineStyle(1, 0x006700, 0.2);
          bunny.beginFill(0x006700, 1);
        } else if (bunny.obj.floor_type == floor_types.desert) {
          bunny.lineStyle(1, 0xFAE1AF, 0.2);
          bunny.beginFill(0xFAE1AF, 1);
        } else if (bunny.obj.floor_type == floor_types.lava) {
          bunny.lineStyle(1, 0xD00000, 0.2);
          bunny.beginFill(0xD00000, 1);
        } else if (bunny.obj.floor_type == floor_types.earth) {
          bunny.lineStyle(1, 0xa47c48, 0.2);
          bunny.beginFill(0xa47c48, 1);
        } else if (bunny.obj.floor_type == floor_types.hide) {
          bunny.lineStyle(1, 0xFFFFFF, 0.2);
          bunny.beginFill(0xCD0000, 0.1);
        } else if (bunny.obj.floor_type == floor_types.cloud) {
          bunny.lineStyle(1, 0xFFFFFF, 0);
          bunny.beginFill(0xFFFFFF, 0.1);

          /* bunny.lineStyle(1, 0xFFFFFF, 0.2);
           bunny.beginFill(0xFFFFFF, 0.8);*/
        } else {
          bunny.lineStyle(1, 0xFF00FF, 0.2);
          bunny.beginFill(0xFF00FF, 1);
        }

        bunny.zOrder = 0;
        bunny.parentLayer = bottomLayer;
        bunny.drawRect(-(data[i].width / 2), -(data[i].height / 2), data[i].width, data[i].height);
        //graphics.drawCircle(0, 0,  2.5);
        bunny.endFill();

        //bunny.addChild(graphics);
        // objects[data[i].id] = bunny;


        container_map_temp.addChild(bunny);
        // bunny = null;
        // container_map.addChild(bunny);
        //floors_objects.push(bunny);
        /*if (bunny.obj.floor_type == floor_types.earth) {

          var floor_texture = new PIXI.extras.TilingSprite(texture,bunny.width,bunny.height)
          floor_texture.anchor.y = 0.5
          floor_texture.anchor.x = 0.5
          floor_texture.tileScale.set(0.2)
          bunny.addChild(floor_texture);
        }*/

      }
      // console.log(data);
      // var ttt = app.renderer.generateTexture( container_map_temp,{autoResize:true} );
      // container_map_temp.destroy();
      //
      // // console.log(ttt);
      // window.app = app;
      // var map = new PIXI.Sprite(ttt);
      // // map.anchor.x = 0.5;
      // // map.anchor.y = 0.5;
      // // map.scale.x = 1;
      // // map.scale.y =1;
      // map.texture.mipmap = true;
      // map.texture = ttt;
      // container_map.addChild(map)
      container_map.addChild(container_map_temp)
      // map.position.y=-map.height+200-4
      // map.position.x=-100+4








    });


    socket.on(MSG.itemDieBulk, function (rawData) {
      var data = itemsDieSchema.decode(rawData);
      //console.log(data.ids);
      for (i = 0; i < data.ids.length; i++) {
        if (objects[data.ids[i]] !== undefined) {

          if (userid == data.ids[i]) {
            die();
          }

          container_map.removeChild(objects[data.ids[i]]);

          try{
            if (objects[data.ids[i]].ambienceSoundAudio) {
              audioSFXList.splice(audioSFXList.indexOf(objects[data.ids[i]].ambienceSoundAudio), 0);
  
              objects[data.ids[i]].ambienceSoundAudio.pause();
              delete objects[data.ids[i]].ambienceSoundAudio;
            }  
          }
          catch(err){console.log(err)}

          delete objects[data.ids[i]];
        }
        //add += '<div class="item"><p>'+data.list[i]+'</p><button class="join_ally" ally="'+data.list[i]+'">Join</button></div>';
      }

    });


    socket.on(MSG.itemDie, function (rawData) {
      var data = coinDieSchema.decode(rawData);
      if (userid == data.id) {
        die();
      }

      if (objects[data.id] !== undefined) {
        try{
          if (objects[data.id].ambienceSoundAudio) {
            audioSFXList.splice(audioSFXList.indexOf(objects[data.id].ambienceSoundAudio), 0);

            objects[data.id].ambienceSoundAudio.pause();
            delete objects[data.id].ambienceSoundAudio;
          }
        }
        catch(err){console.log(err)}


        container_map.removeChild(objects[data.id]);
        delete objects[data.id];
      }
    });




    /*setTimeout(function(){



        },6000);

*/






    socket.on(MSG.allianceJoinSchema, function (rawData) {
      var data = allianceJoinSchema.decode(rawData)


      var item_container = new PIXI.UI.Container();
      item_container.x = width_screen / 2;
      item_container.y = 30;

      var background = new PIXI.Graphics();
      background.x = -100;
      background.y = 0;
      background.lineStyle(1, 0xFFFFFF, 1);
      background.beginFill(0xFFFFFF, 0.4);
      background.drawRect(-50, -17, 300, 50);
      background.endFill();
      background.parentLayer = overlayFourth;


      item_container.container.addChild(background);


      var coins_text2 = new PIXI.Text("Join request: " + data.name, text_style_equipation);
      coins_text2.x = 0 - background.width / 2 + 20;
      coins_text2.y = 0;
      coins_text2.parentLayer = overlayFourth;

      item_container.container.addChild(coins_text2);



      var coins_text3 = new PIXI.Text('\uf00c ', text_style_icons);
      coins_text3.x = 0 + background.width / 2 - 90;
      coins_text3.y = 0 - coins_text3.width / 2;
      coins_text3.scale.x = 2;
      coins_text3.scale.y = 2;
      coins_text3.text = '\uf00c ';
      coins_text3.parentLayer = overlayFourth;
      item_container.container.addChild(coins_text3);




      coins_text3.interactive = true;

      // Shows hand cursor
      coins_text3.buttonMode = true;
      coins_text3.on('pointerdown', function (evt) {
        var monster = {
          "__empty": 0,
          "id": data.id,
        };
        socket.emit(MSG.ally_confirm, errorsSchema.encode(monster));
        uiStage.removeChild(item_container);
        var list = {
          "__empty": 0
        };
        socket.emit(MSG.users_get, aliveSchema.encode(list));

        return false;
        //setWeapon(userid,action)
      });

      coins_text3.on('pointerover', function (evt) {
        coins_text3.style = text_style_icons_hover_g;
        return false;
      });

      coins_text3.on('pointerout', function (evt) {
        coins_text3.style = text_style_icons;
        return false;

      });


      var coins_text4 = new PIXI.Text('\uf00d ', text_style_icons);
      coins_text4.x = 0 + background.width / 2 - 45;
      coins_text4.y = 0 - coins_text4.width / 2;
      coins_text4.scale.x = 2;
      coins_text4.scale.y = 2;
      coins_text4.parentLayer = overlayFourth;
      coins_text4.text = '\uf00d ';
      item_container.container.addChild(coins_text4);




      coins_text4.interactive = true;

      // Shows hand cursor
      coins_text4.buttonMode = true;
      coins_text4.on('pointerdown', function (evt) {
        uiStage.removeChild(item_container);
        return false;

      });

      coins_text4.on('pointerover', function (evt) {
        coins_text4.style = text_style_icons_hover_r;
        return false;

      });

      coins_text4.on('pointerout', function (evt) {
        coins_text4.style = text_style_icons;
        return false;

      });




      uiStage.addChild(item_container);

      setTimeout(function () {
        uiStage.removeChild(item_container);

      }, 8000);








    });

    socket.on(MSG.send_chat, function (rawData) {
      var data = chatMessageClientSchema.decode(rawData);
      //alert(data.text);
      // $("#alliance_menu .list").html("");

      var add = "";

      //for (i=0;i<data.list.length;i++){
      add += '<div class="item' + ((data.id == userid) ? " myself" : "") + '"><p>' + data.name + ": &nbsp;<span class='text'>" + data.text + '</span></p>' + "</div>";
      //}
      $("#chat .list").append(add);
      $("#chat .list").scrollTop(9999999);

      if (objects[data.id] != undefined) {
        fireMessage(objects[data.id].x, objects[data.id].y, data.text, 2)
      }




    });

    socket.on(MSG.message, function (rawData) {
      var data = chatMessageSchema.decode(rawData);
      fireMessage(body_user.x, body_user.y, data.text, 2)




    });
    socket.on(MSG.slot_get, function (rawData) {
      var data = slotSchema.decode(rawData);

      if (objects[data.id] !== undefined) {
        for (var k in data.list) {
          var obj = data.list[k];
          var id_object = ID_OBJECTS[obj.id];

         /* if (objects[data.id].ambienceSound == undefined && objects[data.id].ambienceSoundAudio) {
            audioSFXList.splice(audioSFXList.indexOf(objects[data.id].ambienceSoundAudio), 0);

            objects[data.id].ambienceSoundAudio.pause();
            delete objects[data.id].ambienceSoundAudio;
          }*/

          objects[data.id].removeChild(objects[data.id].slot[obj.slot]);
          objects[data.id].slot[obj.slot] = getDraw(id_object);
          objects[data.id].addChild(objects[data.id].slot[obj.slot]);
          if (obj.id != -1) {

            var particles = getParticles(OBJECT_DICT[id_object]);
            objects[data.id].slot[obj.slot].addChild(particles);

            try{
              if (OBJECT_DICT[id_object].ambienceSound) {
                objects[data.id].ambienceSoundAudio = new Audio('public/sfx/sfx/' + OBJECT_DICT[id_object].ambienceSound);
                audioSFXList.push(objects[data.id].ambienceSoundAudio);
                objects[data.id].ambienceSoundAudio.volume = savedVolumeSFX;
                objects[data.id].ambienceSoundAudio.play();
                objects[data.id].ambienceSoundAudio.addEventListener('ended', function () {
                  this.currentTime = 0;
                  this.play();
                }, false);
              }
            }
            catch(err){console.log(err)}
    
          }

        }
      }


    });



    socket.on(MSG.get_chat, function (rawData) {
      var data = chatGetSchema.decode(rawData);

      var add = "";

      for (i = 0; i < data.list.length; i++) {
        add += '<div class="item' + ((data.list[i].id == userid) ? " myself" : "") + '">' + $("<p></p>").text(data.list[i].name + ": " + data.list[i].text) + '' + "</div>";
      }
      $("#chat .list").html(add);
      $("#chat .list").scrollTop(9999999);

    });




    socket.on(MSG.users_get, function (rawData) {
      var data = usersGetSchema.decode(rawData);
      // $("#alliance_menu .list").html("");

      var add = "";
      add += '<div class="item"><p>You are on: ' + body_user.alliance + '</p><button id="leave_ally">Leave</button><p>users:</p></div>';


      for (i = 0; i < data.list.length; i++) {
        add += '<div class="item' + ((data.list[i].id == userid) ? " myself" : "") + '"><p>' + ((body_user.alliance_owner == data.list[i].id) ? "Owner: " : "") + data.list[i].name + '</p>' + ((body_user.alliance_owner != data.list[i].id) ? '<button class="kick" id="' + data.list[i].id + '">Kick</button>' : "") + "</div>";
      }
      $("#alliance_menu .list").html(add);

      $("#alliance_menu .list .kick").on("click", function (e) {
        //alert($("#ally_name").val());
        var monster = {
          __empty: 0,
          id: parseInt($(this).attr("id")),
        };
        socket.emit(MSG.kick_user, coinDieSchema.encode(monster));
        var list = {
          "__empty": 0
        };
        socket.emit(MSG.users_get, aliveSchema.encode(list));

        e.preventDefault();
      });

      $("#leave_ally").on("click", function (e) {
        var monster = {
          __empty: 0,
        };
        socket.emit(MSG.ally_leave, aliveSchema.encode(monster));
        UpdateAlliances();
        e.preventDefault();
      });


    });


    socket.on(MSG.ally_get, function (rawData) {
      var data = allyGetSchema.decode(rawData)

      $("#alliance_menu .list").html("");

      var add = "";

      for (i = 0; i < data.list.length; i++) {
        add += '<div class="item"><p>' + data.list[i] + '</p><button class="join_ally" ally="' + data.list[i] + '">Join</button></div>';
      }
      $("#alliance_menu .list").html(add);
      /*if (objects[data.id] !== undefined) {

          if (userid == data.id) {
              die();
          }

          container.removeChild(objects[data.id]);
          delete objects[data.id];
      }*/


      $("#alliance_menu .list .join_ally").on("click", function (e) {
        //alert($("#ally_name").val());
        var monster = {
          __empty: 0,
          name: $(this).attr("ally"),
        };
        socket.emit(MSG.ally_join, allianceSchema.encode(monster));



        //$(this).parent().hide();
        e.preventDefault();
      });




    });

    socket.on(MSG.setWeapon, function (rawData) {
      var data = setWeaponSchema.decode(rawData);
      // alert("weapon"+objects[data.id].weapon.name)
      // alert("weapon"+ID_OBJECTS[data.w])

      if (objects[data.id].weapon.c_id != data.w) {
        setWeapon(data.id, ID_OBJECTS[data.w]);
        PlaySound("Equiping item.mp3");
      }
    });



    socket.on(MSG.receiveDamage, function (rawData) {
      var data = inflingeDamageSchema.decode(rawData);
      if (objects[data.id] != undefined) {
        var item = objects[data.id];
        if (data.life <= 0) {
          if (objects[data.id].obj && objects[data.id].obj.soundDie) {
            PlaySound(objects[data.id].obj.soundDie);
          }
        } else if (objects[data.id].obj.soundHit) {
          if (objects[data.related_id].weapon != undefined && objects[data.related_id].weapon.attacktype != "h") {
            PlaySound(objects[data.id].obj.soundHit);
          }
        }

        if (objects[data.related_id].obj.soundAttack) {
          PlaySound(objects[data.related_id].obj.soundAttack);
        }





        /*if (objects[data.id].obj.type == object_type.player || objects[data.id].obj.type == object_type.animal){
          if (data.life > item.life){
            //PlaySound("Tacking damage.mp3");
          }
          else{
            PlaySound("Tacking damage.mp3");
          }
        }*/

        item.life = data.life;

        var width_l = ((item.save_width / objects[data.id].max_life) * data.life);

        var bar_color = "green";
        if (data.life < item.max_life) {
          bar_color = "red"
        }

        item.removeChild(item.ui_life);
        var life = getDraw(bar_color);
        life.x = 0;
        life.y = -item.save_width / 2 - 2;
        life.width = width_l;
        life.height = 2;
        life.parentLayer = hudLayer;
        item.addChild(life);
        item.ui_life = life;

        if (objects[data.related_id] != 0 && objects[data.related_id] != undefined && objects[data.related_id].obj.type == object_type.player && objects[data.related_id].weapon.attacktype != "s") {
          weaponAnimation(objects[data.related_id]);
        }
        if (objects[data.id].obj.type == object_type.world) {
          if (objects[data.id].tween != undefined) {
            objects[data.id].tween.stop();
            objects[data.id].tween.start();
          } else {

            objects[data.id].tween = new TWEEN.Tween(objects[data.id])
              .to({
                x: objects[data.id].x + 0.5,
                y: objects[data.id].y + 0.5
              }, 70)
              .repeat(1)
              .yoyo(true)
              .easing(TWEEN.Easing.Quadratic.Out)
              .onComplete(function () {
                //   container.removeChild(name);
                try {
                  delete objects[data.id].tween;
                } catch (e) {}
              })
              .start();
          }
          resetEquipationLayer();
        }
      }

    });
    socket.on(MSG.event, function (rawData) {
      var data = eventSchema.decode(rawData);
      if (objects[data.id] !== undefined) {
        if (data.eventid == EVENTS.Attacked) {
          if (objects[data.id].obj.type == object_type.player) {
            weaponAnimation(objects[data.id]);
            if (objects[data.id].weapon.attacktype == "s") {
              PlaySound("Throwing Objects.mp3");
            }
          }


        } else if (data.eventid == EVENTS.PassDoor) {
          PlaySound("Passing Through Door.mp3");
        } else if (data.eventid == EVENTS.OutOfWater) {
          objects[data.id].swimming = false;
          PlaySound("Jumping Out of water.mp3");
        } else if (data.eventid == EVENTS.OnWater) {
          objects[data.id].swimming = true;
          PlaySound("Splashing Water.mp3");
        } else if (data.eventid == EVENTS.Jumped) {
          particles_array[particles_array.length] = new PIXI.particles.Emitter(
            // The PIXI.Container to put the emitter in
            // if using blend modes, it's important to put this
            // on top of a bitmap, and not use the root stage Container
            objects[data.id], [PIXI.Texture.fromImage(PARTICLE_DICT["jump"].particle)],
            // Emitter configuration, edit this to change the look
            // of the emitter
            PARTICLE_DICT["jump"].effect
          );
          PlaySound("Jump.mp3");
          particles_array[particles_array.length - 1].x = 0;
          particles_array[particles_array.length - 1].y = 0;
          particles_array[particles_array.length - 1].emit = true;
        }





      } else {
        if (data.eventid == EVENTS.NightStart) {
          window.onresize();
          $("body").addClass("is_night");
          tween = new TWEEN.Tween(ambient)
            .to({
              alpha: "1"
            }, 2000);
          //console.log("start");
          //tween.chain(tweenBack2);
          tween.start();
          dayAmbianceSound.pause();
          nightAmbianceSound.play();
        } else if (data.eventid == EVENTS.NightEnd) {
          $("body").removeClass("is_night");

          tween = new TWEEN.Tween(ambient)
            .to({
              alpha: "0"
            }, 2000);
          //console.log("end");

          //tween.chain(tweenBack2);
          tween.start();
          dayAmbianceSound.play();
          nightAmbianceSound.pause();

        }


      }
    });


    socket.on(MSG.selfUpdate, function (rawData) {
      var data = updateSelfSchema.decode(rawData);
      /*coins_text.text = "Gold: " + data.coins;
      wood_text.text = "Wood: " + data.wood;
      food_text.text = "Food: " + data.food;
      rock_text.text = "Stones: " + data.rocks;*/
      /*body_user.coins = data.coins;
      body_user.wood = data.wood;
      body_user.food = data.food;
      body_user.rocks = data.rocks;*/
      resetEquipationLayer();
      for (var i = ranking_text_container.children.length - 1; i >= 0; i--) {
        ranking_text_container.removeChild(ranking_text_container.children[i]);
      };

      //ranking_text.text = "";
      var first_player_coins_width = 0;
      var first_player_text_width = 0;
      var height = 20;
      var appeared = false;
      var last = 0;
      for (var i = 0; i < data.ranking.length; i++) {
        if (data.ranking[i] != null) {
          if (data.ranking[i].id == userid && appeared) {
            break;
          }
          style = text_style_ranking;


          if (i == 1) {
            height = 22;
          } else {
            height = 20;
          }


          if (i >= data.ranking.length - 2) {
            //console.log(i);
            style = text_style_ranking_bottom;
          }

          if (i == 0) {
            style = text_style_ranking_leader;
          }

          if (data.ranking[i].id == userid) {
            style = text_style_ranking_self;
            if (i == 0) {
              style = text_style_ranking_self_leader;
            }
            appeared = true;

          }



          var ranking_text_coins = new PIXI.UI.Text(data.ranking[i].coins.toLocaleString('en') + " \n", style);
          if (first_player_coins_width < ranking_text_coins.width) {
            first_player_coins_width = ranking_text_coins.width;
          }
          ranking_text_coins.anchorRight = 0;
          ranking_text_coins.y = i * height;
          ranking_text_coins.parentLayer = overlayFourth;

          var ranking_text = new PIXI.UI.Text(data.ranking[i].name, style);
          if (first_player_text_width < ranking_text.width) {
            first_player_text_width = ranking_text.width;
          }
          ranking_text.anchorLeft = 0;
          ranking_text.y = i * height;
          ranking_text.parentLayer = overlayFourth;

          ranking_text_container.addChild(ranking_text);

          ranking_text_container.addChild(ranking_text_coins);
          number = data.ranking[i].rank;


          last = data.ranking[i].rank;

          var ranking_number = new PIXI.UI.Text(number, style);

          ranking_number.anchorLeft = -ranking_number.width - 10;
          ranking_number.y = i * height;
          ranking_number.parentLayer = overlayFourth;

          ranking_text_container.addChild(ranking_number);
          //ranking_text.text += (i + 1) + ". " + data.ranking[i].name + ", " + data.ranking[i].coins + " \n"
        }

      }
      ranking_text_container.width = first_player_coins_width + first_player_text_width + 10;
      //ranking_text.x = width_screen - ranking_text.width - 15;





    });



    socket.on(MSG.getone, function (rawData) {
      var data = playerSchema.decode(rawData);
      getOneProcess(data);
    });
    socket.on(MSG.getonearray, function (rawData) {

      var data = getOneArraySchema.decode(rawData);

      for (var obj of data.list) {
        getOneProcess(obj);

      }
    });

    function getOneProcess(data) {
      createObject(data);

      //console.log("getone");
      if (data.id == userid) {


        $("body").removeClass("loading_game");

        body_user = objects[data.id];
        //alert("test");
        body_user.coins = 0;
        body_user.wood = 0;
        body_user.food = 0;
        body_user.rocks = 0;


        if (body_user.inventory == undefined) {
          //console.log("resetear inventario");
          body_user.inventory = {};
        }

        body_user.cooldown = 0;
        resetInventory();
        $("#overlay").hide();
        $("#ad_p").hide();
        $(".top-add").hide();
        
        $("#ui_html").show();

        tween = new TWEEN.Tween(hudLayer)
          .to({
            alpha: "1"
          }, 100);

        //tween.chain(tweenBack2);
        tween.start();
        tween = new TWEEN.Tween(overlayFourth)
          .to({
            alpha: "1"
          }, 100);

        //tween.chain(tweenBack2);
        tween.start();




        updateCraftmenu();
        setWeapon(data.id, "hand");
      } else {
        if (body_user == undefined && data.id == 130) {
          container_map.x = -data.x * container_map.scale.x + width_screen / 2;
          container_map.y = data.y * container_map.scale.y + height_screen / 2;

        }

      }
      try{
        if (objects[data.id].obj.ambienceSound) {
          objects[data.id].ambienceSoundAudio = new Audio('public/sfx/sfx/' + objects[data.id].obj.ambienceSound);
          audioSFXList.push(objects[data.id].ambienceSoundAudio);
          objects[data.id].ambienceSoundAudio.volume = savedVolumeSFX;
          objects[data.id].ambienceSoundAudio.play();
          objects[data.id].ambienceSoundAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
          }, false);
        }
      }
      catch(err){console.log(err)}


      if (objects[data.id].obj.type == object_type.player) {

        if (data.w != undefined) {
          setWeapon(data.id, ID_OBJECTS[data.w]);
        } else {
          setWeapon(data.id, "hand");
        }
      }



    }

    socket.on(MSG.getname, function (rawData) {
      var data = nameSendSchema.decode(rawData);
      if (objects[data.id] != undefined) {

        objects[data.id].name = data.name;
        objects[data.id].alliance = data.alliance;
        objects[data.id].alliance_owner = data.owner;

        if (objects[data.id].alliance == "") {
          objects[data.id].name_ui.text = data.name;
        } else {
          objects[data.id].name_ui.text = "[" + objects[data.id].alliance + "] " + data.name;
        }
        objects[data.id].name_ui.x = -objects[data.id].name_ui.width / 2;
        //objects[data.id].children[2].text = objects[data.id].alliance+ "-" + data.name;


        UpdateAlliances();
      }

    });


    /*socket.on(MSG.itemNew, function(rawData) {
      var data = itemSchema.decode(rawData);
      //console.log("getone");
      createObject(data);
    });*/



    socket.on(MSG.error, function (rawData) {
      var data = errorsSchema.decode(rawData);
      $("body").removeClass("loading_game");
      if (data.id == Errors.full) {

        refreshHosts();
        showMessage("server selected is full");
        hideMessage(1000);

        /* $.get("http://" + document.location.host + "/gethost", function(data) {
             //alert(data);
             if (data != "server-full") {
                 host = data;
                 delete objects;
                 initializeSocket(true);
             } else {

         		showMessage("All servers are full, sorry");
                 alert("All servers are full, sorry");
             }
         });*/
      }

    });


    socket.on(MSG.welcome, function (rawData) {
      var decoded = welcomeSchema.decode(rawData);
      userid = decoded.userid;
      localStorage.setItem("last_name", $("#user_name").val());
      localStorage.setItem("last_skin", $(".skins ul li.active").attr("data-name"));


      // Store
      welcomed = true;
    });


    if (join_auto == true) {
      goLogin();
    }


  }

  function goLogin() {
    setTimeout(function () {
      if (!welcomed) {
        //console.log("not welcomed");
        goLogin();
      } else {
        //console.log("welcomed");
        localStorage.setItem("last_name", $("#user_name").val());
        localStorage.setItem("last_skin", $(".skins ul li.active").attr("data-name"));

        var monster = {
          "__empty": 0,
          name: $("#user_name").val(),
          skin: $(".skins ul li.active").attr("data-name")
          //id:userid,
        };
        socket.emit(MSG.join, joinSchema.encode(monster));
        //  welcomed = false;
      }
    }, 1000);


  }

  if (localStorage.getItem("last_name") != undefined) {
    $("#user_name").val(localStorage.getItem("last_name"))
  }

  if (localStorage.getItem("last_skin") != undefined) {
    $(".skins ul li.active").removeClass("active");
    $(".skins ul li[data-name=" + localStorage.getItem("last_skin") + "]").addClass("active");
  }



  function getParticles(obj) {
    var particles_container = new PIXI.Container();
    for (var particle_id in obj.particles) {
      var particle = obj.particles[particle_id];

      if (PARTICLE_DICT[particle.id] != undefined) {
        var fire_cont = new PIXI.Container();
        fire_cont.x = 0;
        fire_cont.y = 0;

        if (particle.id == "light") {
          if (app.renderer instanceof PIXI.CanvasRenderer) {
            continue;
            //console.log("canvas");
          } else {

            //console.log("webgl");
          }
          fire_cont.parentLayer = lighting; //<-- try comment it
        } else {
          if (obj.type == object_type.player) {
            fire_cont.parentLayer = topLayer;
          } else if (obj.type == object_type.animal) {
            fire_cont.parentLayer = topLayer;
          } else if (obj.type == object_type.world) {
            fire_cont.parentLayer = bottomLayer;
          } else if (obj.type == object_type.equip) {
            fire_cont.parentLayer = topLayer;
          } else if (obj.type == object_type.build) {
            fire_cont.parentLayer = middleLayer;
          } else {
            fire_cont.parentLayer = middleLayer;
          }
          //fire_cont.parentLayer = hudLayer; //<-- try comment it
        }

        particles_container.addChild(fire_cont);


        // Create a new emitter
        particles_array[particles_array.length] = new PIXI.particles.Emitter(fire_cont, [PIXI.Texture.fromImage(PARTICLE_DICT[particle.id].particle)], PARTICLE_DICT[particle.id].effect);
        fire_cont.x = particle.x;
        fire_cont.y = particle.y;
        fire_cont.scale.x = particle.width / 100;
        fire_cont.scale.y = particle.height / 100;
        particles_array[particles_array.length - 1].emit = true;

      }

    }


    return particles_container;
  }

  function refreshHosts() {
    $.get("//" + megaserver + "/gethosts", function (data) {
      try {
        var obj = JSON.parse(data);
        hosts = obj;
        if (socket == null) {
          initializeSocket(false);
        }
      } catch (ex) {

      }
      CreateServerSelect();
    });

  }
  /****** */
  //setTimeout(function(){window.location = window.location.href},5000);
  function JoinGame() {
    joins--;
    localStorage.setItem("number_joins", joins)

    //refreshHosts();
    $("body").addClass("loading_game");

    //$("#message").hide();
    //if (!welcomed){
    initializeSocket(true);




    /*  }
        else{
          localStorage.setItem("last_name", $("#user_name").val());
          localStorage.setItem("last_skin", $(".skins ul li.active").attr("data-name"));

          var monster = {
             "__empty":0,
              name: $("#user_name").val(),
              skin: $(".skins ul li.active").attr("data-name")
              //id:userid,
          };
          socket.emit(MSG.join, joinSchema.encode(monster));

        }

*/

    /*ga('send', {
      hitType: 'event',
      eventCategory: 'Game',
      eventAction: 'join',
      eventLabel: 'Join'
    });*/
    createAllianceMenu();
  }

  function UpdateAlliances() {
    var list = {
      "__empty": 0
    };


    if (body_user.alliance == undefined || body_user.alliance == "") {
      socket.emit(MSG.ally_get, aliveSchema.encode(list));
    } else {
      $("#alliance_menu .list").html('<div class="item"><p>You are on: ' + body_user.alliance + '</p><button id="leave_ally" class="join_ally">Leave</button></div>');
      //add += '<div class="item"><p>'+data.list[i]+'</p><button class="join_ally" ally="'+data.list[i]+'">Join</button></div>';
      //socket.emit(MSG.ally_users_get, aliveSchema.encode(list));
      if (body_user.alliance_owner == userid) {
        $("#alliance_menu .list").append('<div class="item"><p>You are the owner</p></div>');
        socket.emit(MSG.users_get, aliveSchema.encode(list));
      }


      $("#leave_ally").on("click", function (e) {

        //alert($("#ally_name").val());

        var monster = {
          __empty: 0,
        };
        socket.emit(MSG.ally_leave, aliveSchema.encode(monster));
        UpdateAlliances();
        /*$("#ally_name").val("")

		*/

        //$(this).parent().hide();
        e.preventDefault();
      });






    }






  }

  $("#chat .list").on("pointerover", function (e) {

    $("#chat .list").css("overflow-y", "scroll");

    e.preventDefault();
  });
  $("#chat .list").on("pointerout", function (e) {

    $("#chat .list").css("overflow-y", "hidden");

    e.preventDefault();
  });




  $(".alliance_open").on("click", function (e) {
    $(".modal").hide();
    $("#alliance_menu").show();

    UpdateAlliances();


    e.preventDefault();
  });

  $(".chat_open").on("click", function (e) {
    $(".modal").hide();
    $("#chat").show();

    e.preventDefault();
  });

  $(".modal .close").on("click", function (e) {
    $(this).parent().hide();
    e.preventDefault();
  });
  $("#chat .close").on("click", function (e) {
    if ($(this).parent().find(".list").is(":visible")) {
      $(this).parent().find(".list").hide();
      $(this).text("Show chat");
    } else {
      $(this).parent().find(".list").show();
      $(this).text("Hide chat");
    }
    e.preventDefault();
  });
  $("#chat").on("mouseover", function (e) {
    mouseDown = -1;
    sendMouseInput(0);
    e.preventDefault();
  });

  /*randomElements = jQuery(".youtuber").get().sort(function(){
    return Math.round(Math.random())-0.5
  }).slice(0,1)
  $(randomElements).show();*/
  //console.log(randomElements);




  /*************************
   *  SOUND FX
   */

  if (savedVolumeSFX > 0.9) {
    savedVolumeSFX = 1;
  } else if (savedVolumeSFX < 0.1) {
    savedVolumeSFX = 0;
  }
  if (isNaN(savedVolumeSFX)) {
    savedVolumeSFX = 0.6;
  }

  let timeRepeatSound = 1;
  let spawnedSounds = [];

  function PlaySound(soundToPlay, canBePlayedMultipleTimes = true) {
    try{
      if (spawnedSounds[soundToPlay] == null || canBePlayedMultipleTimes) {
        let sound = new Audio('public/sfx/sfx/' + soundToPlay);
        spawnedSounds[soundToPlay] = sound;
        sound.volume = savedVolumeSFX;
        sound.play();
        sound.addEventListener("ended", function () {
          spawnedSounds[soundToPlay] = null;
          delete sound;
        });
      }
  
    }
    catch(err){
      console.log(err)
    }
  }

  try{

    var dayAmbianceSound = new Audio('public/sfx/sfx/Day Ambiance.mp3');
    dayAmbianceSound.volume = savedVolumeSFX;
    dayAmbianceSound.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  
  
  
  
    var nightAmbianceSound = new Audio('public/sfx/sfx/Night Ambiance.mp3');
    nightAmbianceSound.volume = savedVolumeSFX;
    nightAmbianceSound.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  
  
  
    /*var auraAmbianceSound = new Audio('public/sfx/sfx/Aura.mp3');
    audioSFXList.push(auraAmbianceSound);
    auraAmbianceSound.volume = savedVolumeSFX;
    auraAmbianceSound.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  */
  
  
    $("#music_menu .sfx_up").click(() => {
      if (savedVolumeSFX <= 0.9) {
        savedVolumeSFX += 0.1;
      }
      if (savedVolumeSFX > 0.9) {
        savedVolumeSFX = 1;
      }
  
      localStorage.setItem("sfx_volume", savedVolumeSFX)
      updateSFXValue()
    });
  
    $("#music_menu .sfx_down").click(() => {
      if (savedVolumeSFX >= 0.1) {
        savedVolumeSFX -= 0.1;
      }
      if (savedVolumeSFX < 0.1) {
        savedVolumeSFX = 0;
      }
      localStorage.setItem("sfx_volume", savedVolumeSFX)
      updateSFXValue()
    });
  
    function updateSFXValue() {
      if (savedVolumeSFX <= 0.01) {
        $("#music_menu .sfx_value").text("Muted");
      } else {
        $("#music_menu .sfx_value").text(Math.round(savedVolumeSFX * 100));
      }
  
      for (let sound of audioSFXList){
        sound.volume = savedVolumeSFX;
      }
  
      /*dayAmbianceSound.volume = savedVolumeSFX;
      nightAmbianceSound.volume = savedVolumeSFX;
      auraAmbianceSound.volume = savedVolumeSFX;*/
  
  
  
  
    }
  
    updateSFXValue();
  
  
  
  
  
    /*************************
     *  MUSIC
     */
     let savedVolume = localStorage.getItem("music_volume") || 0.6;

    /*var musicSFX = new Audio('public/sfx/cubee_music.mp3');
    musicSFX.volume = savedVolume;
    musicSFX.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);*/
  
  
  
    updateMusicValue();
    //musicSFX.start();
  
    $("#music_menu .music_up").click(() => {
      if (dayAmbianceSound.volume <= 0.9) {
        dayAmbianceSound.volume += 0.1;
      }
      if (nightAmbianceSound.volume <= 0.9) {
        nightAmbianceSound.volume += 0.1;
      }
      localStorage.setItem("music_volume", dayAmbianceSound.volume)
      updateMusicValue()
    });
  
    $("#music_menu .music_down").click(() => {
      if (dayAmbianceSound.volume >= 0.1) {
        dayAmbianceSound.volume -= 0.1;
      }
      if (nightAmbianceSound.volume >= 0.1) {
        nightAmbianceSound.volume -= 0.1;
      }
      localStorage.setItem("music_volume", dayAmbianceSound.volume)
      updateMusicValue()
    });
  
    function updateMusicValue() {
      if (dayAmbianceSound.volume <= 0.01) {
        $("#music_menu .music_value").text("Muted");
      } else {
        $("#music_menu .music_value").text(Math.round(dayAmbianceSound.volume * 100));
  
      }
    }
  
    $(".open-volume-menu").click(() => {
      if (!$("#music_menu").is(":visible")) {
        $("#music_menu").show();
      } else {
        $("#music_menu").hide();
      }
    });
  
  
  
    document.querySelectorAll('*').forEach(item => {
      item.addEventListener('click', event => {
        dayAmbianceSound.play();
        try{
          item.removeEventListener("click");     // Fallo
        }catch(err){

        }
      })
    })
  

  }
  catch(err){console.log(err)}





  $("#chat_send").on("click", function (e) {

    //alert($("#ally_name").val());

    var monster = {
      __empty: 0,
      text: $("#chat_text").val(),
    };
    socket.emit(MSG.send_chat, chatMessageSchema.encode(monster));
    //UpdateAlliances();
    $("#chat_text").val("")



    //$(this).parent().hide();
    e.preventDefault();
  });


  $("#create_ally").on("click", function (e) {

    //alert($("#ally_name").val());

    var monster = {
      __empty: 0,
      name: $("#ally_name").val(),
    };
    socket.emit(MSG.ally_create, allianceSchema.encode(monster));
    //UpdateAlliances();
    $("#ally_name").val("")



    //$(this).parent().hide();
    e.preventDefault();
  });

  function createAllianceMenu() {
    /* var item_container = new PIXI.Container();

		var background = new PIXI.Graphics();
        background.x = width_screen/2;
        background.y = height_screen/2;
        background.lineStyle(1, 0xFFFFFF, 1);
        background.beginFill(0x000000, 1);
        background.drawRect(-50, -150, 100, 300);
        background.endFill();


        item_container.addChild(background);
    	app.stage.addChild(item_container);*/


    /* var item_container = new PIXI.Container();
        var item_full = new PIXI.Container();
        item_full.x = x;
        item_container.x = 0;
        item_container.alpha = 0;

        item_container.interactive = true;

        // Shows hand cursor
        item_container.buttonMode = true;
        item_container.on('pointerdown', function(evt) {
            setWeapon(userid,action)
        });


        item_full.active = active;
        var coins_text = new PIXI.Text(name, text_style_equipation);
        coins_text.x = 0 - coins_text.width / 2;
        coins_text.y = 0 - coins_text.height / 2;


        var background = new PIXI.Graphics();
        background.x = 0;
        background.y = 0;
        background.lineStyle(1, 0xFFFFFF, 1);
        background.beginFill(0xFFFFFF, 0.3);
        background.drawRect(-40, -40, 80, 80);
        background.endFill();
        item_container.addChild(background);
        item_container.addChild(coins_text);*/

  }



  function lerpp(a, b, t) {
    var len = a.length;
    if (b.length != len) return;

    var x = [];
    for (var i = 0; i < len; i++)
      x.push(a[i] + t * (b[i] - a[i]));
    return x;
  }




}
// FIN INIT

// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

/*
requestAnimationFrame(animate);
var fps = 30;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

function animate(time) {
  requestAnimationFrame(animate);


  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    // update time stuffs
    TWEEN.update(time);

    for (key in particles_array) {
      //particle.emit = true;
      particles_array[key].update(delta / 1000);


      if (particles_array[key]._emit == false) {
        particles_array[key].destroy();
        particles_array.splice(key, 1);

        //delete particles_array[key];
        //break;
      }

    }

    // Just `then = now` is not enough.
    // Lets say we set fps at 10 which means
    // each frame must take 100ms
    // Now frame executes in 16ms (60fps) so
    // the loop iterates 7 times (16*7 = 112ms) until
    // delta > interval === true
    // Eventually this lowers down the FPS as
    // 112*10 = 1120ms (NOT 1000ms).
    // So we have to get rid of that extra 12ms
    // by subtracting delta (112) % interval (100).
    // Hope that makes sense.

    then = now - (delta % interval);

    // ... Code for Drawing the Frame ...
  }



}*/
// $(document).keydown(function(event) {
//   if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
//     event.preventDefault();
//   }
//   // 107 Num Key  +
//   // 109 Num Key  -
//   // 173 Min Key  hyphen/underscor Hey
//   // 61 Plus key  +/= key
// });

$(window).bind('mousewheel DOMMouseScroll', function (event) {
  if (event.ctrlKey == true) {
    event.preventDefault();
  }
});
var drag = false;

function createDragAndDropFor(target) {
  target.interactive = true;

  target.pointerdown = function (e) {
    drag = target;
  }
  target.pointerup = function (e) {
    drag = false;
  }
}