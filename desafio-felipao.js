let hero = ["Luke Skywalker", 5600];

if (hero[1] <= 1000) {
  console.log(hero[0] + " está no nível Bronze!");
} else if (hero[1] > 1000 && hero[1] < 2000) {
  console.log(hero[0] + " está no nível prata!");
} else if (hero[1] > 2001 && hero[1] < 3000) {
  console.log(hero[0] + " está no nível ouro!");
} else if (hero[1] > 3001 && hero[1] < 4000) {
  console.log(hero[0] + " está no nível diamante!");
} else if (hero[1] > 4001 && hero[1] < 6000) {
  console.log(hero[0] + " está no nível imortal!");
} else if (hero[1] > 6001 && hero[1] < 10000) {
  console.log(hero[0] + " está no nível ascendente!");
} else {
  console.log(hero[0] + " está no nível radiante!");
}
