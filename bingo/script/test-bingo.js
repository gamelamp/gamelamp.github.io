var bingoList = [];
// Pre-Varia, 23 goals currently
bingoList[1] = [
  { name: "Build 25 houses", types: ["building"] },
  { name: "Have exactly 1337 towards population count when the game ends", types: ["population"] },
  { name: "Defeat a yellow coloured player", types: ["colour"] },
  { name: "Keep 12 stables when entering WWII", types: ["building"] },
  { name: "Steal ballistic from a Korean player", types: ["research"] }
];
bingoList[2] = [
  { name: "Have over 100k wood when the game ends", types: ["resource"] },
  { name: "Have 30k food, 30k wood, 30k gold and 30k stone when the game ends", types: ["resource"] },
  { name: "Have an army size between 500-600", types: ["army"] },
  { name: "Have an army size between 1200-1300", types: ["army"] }
];
bingoList[3] = [
  { name: "Have an army size between 2000-2050", types: ["army"] },
  { name: "Have an army size of 200 with only ships", types: ["army"] },
  { name: "Build a 3 layer wall of towers around your wonder", types: ["building"] },
  { name: "If on plains, build a castle in every corner", types: ["building"] },
  { name: "Win by only using planes", types: ["army"] }
];
bingoList[4] = [
  { name: "Win by only using tanks", types: ["army"] },
  { name: "Win by only using only cavalry", types: ["army"] },
  { name: "Nuke your entire base", types: ["building"] },
  { name: "Collect only 1 of Ice Beam or Hi-Jump Boots", types: ["icebeam", "hijump"] },  // one or the other!
  { name: "5+ Energy Tanks", types: ["energytank"] }
];
bingoList[5] = [
  { name: "4+ Energy Tanks and 15+ Power Bombs", types: ["energytank", "powerbomb"] },
  { name: "Collect 25+ Crateria Missiles or 40+ Brinstar Missiles", types: ["missile", "areamissile"] },
  { name: "Destroy at least 1 statue", types: ["statueroom"] },  // go into the statues room and witness the destruction of Kraid/Phantoon/Draygon/Ridley
  { name: "Skip Spazer", types: ["spazer"] }
];
// Pre-Speed Booster, 24 goals currently
bingoList[6] = [
  { name: "6+ Energy Tanks", types: ["energytank"] },
  { name: "2+ Reserve Tanks", types: ["reservetank"] },
  { name: "Ice Beam", types: ["icebeam"] },
  { name: "25+ Power Bombs", types: ["powerbomb"] },
  { name: "Defeat Crocomire", types: ["crocomire"] }
];
bingoList[7] = [
  { name: "Norfair Map Station", types: ["norfairmap"] },
  { name: "Wave Beam", types: ["wavebeam"] },
  { name: "Defeat Crocomire and skip Hi-Jump Boots", types: ["crocomire", "hijump"] },
  { name: "100+ Missiles", types: ["missile"] },
  { name: "7+ Energy Tanks", types: ["energytank"] }
];
bingoList[8] = [
  { name: "Skip Wave Beam", types: ["wavebeam"] },
  { name: "7+ Energy Tanks and 70+ Missiles", types: ["energytank", "missile"] },
  { name: "Grapple Beam", types: ["grapplebeam", "crocomire"] },
  { name: "Norfair Reserve Tank", types: ["reservetank"] },
  { name: "Collect Grapple Beam and skip Charge Beam", types: ["grapplebeam", "chargebeam", "crocomire"] }
];
bingoList[9] = [
  { name: "Maridia Map Station", types: ["maridiamap"] },
  { name: "30+ Power Bombs", types: ["powerbomb"] },
  { name: "125+ Missiles", types: ["missile"] },
  { name: "Collect 50 out of 75 Norfair Missiles", types: ["missile"] },
  { name: "8+ Energy Tanks", types: ["energytank"] }
];
bingoList[10] = [
  { name: "Collect only 1 of Wave Beam or Speed Booster", types: ["wavebeam", "speedbooster"] },
  { name: "Collect only 1 of Speed Booster or Grapple Beam", types: ["speedbooster", "grapplebeam"] },
  { name: "Collect only 1 of Ice Beam or Speed Booster", types: ["icebeam", "speedbooster"] },
  { name: "Collect only 1 of Wave Beam or Charge Beam", types: ["wavebeam", "chargebeam"] }
];
// Collect all of in Brinstar/Crateria/Wrecked Ship, 13 goals currently
bingoList[11] = [
  { name: "Collect all 40 Crateria Missiles", types: ["missile"] },
  { name: "Collect all 10 Wrecked Ship Super Missiles", types: ["supermissile"] },
  { name: "Crateria Power Bomb", types: ["powerbomb"] },
  { name: "Collect both Crateria Energy Tanks", types: ["energytank"] }
];
bingoList[12] = [
  { name: "Collect all 15 Brinstar Super Missiles", types: ["supermissile"] },
  { name: "Collect all 25 Brinstar Power Bombs", types: ["powerbomb"] },
  { name: "Brinstar Reserve Tank", types: ["reservetank"] },
  { name: "Collect all 15 Wrecked Ship Missiles", types: ["missile"] }
];
bingoList[13] = [
  { name: "Crateria Super Missile", types: ["supermissile"] },
  { name: "Wrecked Ship Energy Tank", types: ["energytank", "wsetroom"] },
  { name: "Wrecked Ship Reserve Tank", types: ["reservetank"] },
  { name: "Collect all 5 Brinstar Energy Tanks", types: ["energytank"] },
  { name: "Collect all 55 Brinstar Missiles", types: ["missile"] }
];
// Finish in x, 12 goals currently
bingoList[14] = [
  { name: "Finish in an Elevator", types: ["finish", "forgottenarea"] },
  { name: "Finish in X-Ray Scope room", types: ["finish"] },
  { name: "Finish in Grapple Beam room", types: ["finish"] },
  { name: "Finish in Kraid's room", types: ["finish"] },
  { name: "Finish at Landing site", types: ["finish"] },
  { name: "Finish in Metal Pirate room", types: ["finish"] }
];
bingoList[15] = [
  { name: "Finish in Springball room", types: ["finish"] },
  { name: "Finish in 'Mama Turtle' room", types: ["finish"] },
  { name: "Finish in Wrecked Ship Energy Tank room", types: ["finish", "wsetroom"] },
  { name: "Finish in Spore Spawn's room", types: ["finish"] },
  { name: "Finish near Spazer, Charge Beam, Ice Beam, Wave Beam, or Plasma Beam", types: ["finish"] },
  { name: "Finish in a Shinespark or Crystal Flash", types: ["finish"] }
];
// Pre-Gravity Suit, 24 goals currently
bingoList[16] = [
  { name: "20+ Super Missiles", types: ["supermissile"] },
  { name: "Wrecked Ship Map Station", types: ["wsmap"] },
  { name: "Collect Gauntlet Energy Tank or X-Ray Scope", types: ["energytank", "xrayscope"] },
  { name: "35+ Power Bombs", types: ["powerbomb"] },
  { name: "Fully explore the Wrecked Ship", types: ["phantoon", "gravitysuit"] }
];
bingoList[17] = [
  { name: "25+ Super Missiles", types: ["supermissile"] },
  { name: "9+ Energy Tanks", types: ["energytank"] },
  { name: "3+ Reserve Tanks", types: ["reservetank"] },
  { name: "X-Ray Scope", types: ["xrayscope"] },
  { name: "10+ Energy Tanks", types: ["energytank"] }
];
bingoList[18] = [
  { name: "30+ Super Missiles", types: ["supermissile"] },
  { name: "Visit the critters", types: ["speedbooster"] },
  { name: "Collect Gravity Suit and skip Varia Suit", types: ["gravitysuit", "variasuit"] },
  { name: "Collect Grapple Beam or Wrecked Ship Energy Tank", types: ["grapplebeam", "wsetroom"] },
  { name: "Collect X-Ray Scope and skip Grapple Beam", types: ["xrayscope", "grapplebeam"] }
];
bingoList[19] = [
  { name: "Collect only 1 of Varia Suit or Gravity Suit", types: ["variasuit", "gravitysuit"] },
  { name: "Visit Crateria-Maridia Elevator", types: ["forgottenarea"] },
  { name: "Collect X Super Missiles and 50-X Power Bombs", types: ["supermissile", "powerbomb"] },
  { name: "Collect X Energy Tanks and 11-X Reserve Tanks", types: ["energytank", "reserve"] },
  { name: "Visit all 3 Brinstar Energy Recharge Stations", types: ["energyrecharge"] }
];
bingoList[20] = [
  { name: "Crateria Map Station or Wrecked Ship Map Station", types: ["crateriamap", "wsmap"] },
  { name: "Norfair Reserve Tank or Wrecked Ship Reserve Tank", types: ["reservetank"] },
  { name: "60+ Missiles and 20+ Super Missiles", types: ["missile", "supermissile"] },
  { name: "Destroy at least 2 statues", types: ["statueroom"] }
];
// Lower Norfair/Maridia, 34 goals currently
bingoList[21] = [
  { name: "Defeat Botwoon", types: ["botwoon"] },
  { name: "Maridia Power Bomb", types: ["powerbomb"] },
  { name: "Defeat Spore Spawn and Botwoon", types: ["sporespawn", "botwoon"] },
  { name: "Springball", types: ["springball"] },
  { name: "Defeat Golden Torizo", types: ["gt"] },
  { name: "40+ Power Bombs", types: ["powerbomb"] },
  { name: "Maridia Reserve Tank", types: ["reservetank"] }
];
bingoList[22] = [
  { name: "Defeat Golden Torizo and Spore Spawn", types: ["gt", "sporespawn"] },
  { name: "Defeat Ridley", types: ["ridley"] },
  { name: "Defeat Draygon", types: ["draygon"] },
  { name: "Collect all 15 Norfair Power Bombs", types: ["powerbomb"] },
  { name: "Collect Springball or defeat Draygon", types: ["springball", "draygon", "icebeam", "grapplebeam"] },
  { name: "Defeat Crocomire and Draygon", types: ["crocomire", "draygon"] },
  { name: "4 Reserve Tanks", types: ["reservetank"] }
];
bingoList[23] = [
  { name: "Screw Attack", types: ["screwattack"] },
  { name: "Collect Plasma Beam or defeat Ridley", types: ["plasma", "ridley"] },
  { name: "Space Jump", types: ["spacejump", "draygon"] },
  { name: "Charge Beam, Spazer, Wave Beam, Ice Beam, and Plasma Beam", types: ["chargebeam", "spazer", "wavebeam", "icebeam", "plasmabeam"] },
  { name: "Norfair Super Missile", types: ["supermissile"] },
  { name: "Collect Springball and skip Ice Beam", types: ["springball", "icebeam"] },
  { name: "Collect Springball and skip Grapple Beam", types: ["springball", "grapplebeam"] }
];
bingoList[24] = [
  { name: "Plasma Beam", types: ["plasmabeam", "draygon"] },
  { name: "Defeat Crocomire and Ridley", types: ["crocomire", "ridley"] },
  { name: "Collect Plasma Beam and skip Space Jump", types: ["plasmabeam", "spacejump"] },
  { name: "Collect Space Jump and skip Hi-Jump Boots", types: ["spacejump", "hijump"] },
  { name: "Collect all 4 Norfair Energy Tanks", types: ["energytank", "ridley"] },
  { name: "Collect all 8 Maridia Missiles", types: ["missile"] },
  { name: "35+ Super Missiles", types: ["supermissile"] }
];
bingoList[25] = [
  { name: "Collect Screw Attack or defeat Botwoon", types: ["screwattack", "botwoon"] },
  { name: "Collect all 15 Maridia Super Missiles", types: ["supermissile"] },
  { name: "Collect both Maridia Energy Tanks", types: ["energytank"] },
  { name: "Collect only 1 of Plasma Beam or Screw Attack", types: ["plasmabeam", "screwattack"] },
  { name: "11+ Energy Tanks", types: ["energytank"] },
  { name: "Hi-Jump Boots, Speed Booster, and Space Jump", types: ["hijump", "speedbooster", "spacejump"] }
];

$(function() { srl.bingo(bingoList, 5); });
