var orbitals = [
  {
    periods: "1234567",
    size: 2,
    name: "s"
  },
  {
    periods: "234567",
    size: 6,
    name: "p"
  },
  {
    periods: "3456",
    size: 10,
    name: "d"
  },
  {
    periods: "45",
    size: 14,
    name: "f"
  }
]


function getOrbitals(atomic_number) {
  var output = "";
  for (var i = 1; i <= 8; i++) {
    var x = Math.min(i, 4);
    var y = Math.max(i - 3, 1);
    while (x > 0 && y <= 7) {
      var orbital = orbitals[x-1];
      if (orbital.periods.indexOf(y) !== -1) {
        output += y;
        output += orbital.name;
        output += Math.min(atomic_number, orbital.size);
        if (atomic_number <= orbital.size) {
          return output;
        }
        atomic_number -= orbital.size;
        output += " ";
      }
      x--;
      y++;
    }
  }
}
console.log(getOrbitals(process.argv[process.argv.length - 1]));
