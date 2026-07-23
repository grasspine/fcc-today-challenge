function playGame(p1, p2) {
  let t1 = 0;
  let t2 = 0;
  let ta = 0;

  for (let i = 0; i < p1.length; i++) {
    const strat = p1[i] + p2[i];

    switch (strat) {
      case ('CC'):
        ta += 3;
        break;
      case ('DD'):
        ta += 1;
        break;
      case ('DC'):
        t1 += 5;
        break;
      case ('CD'):
        t2 += 5;
        break;

      default:
        break;
    }
  }
  // const res = ([...p1]).reduce((acc, n, index) => {
  //   console.log(n)
  //   const strat = n + p2[index];
  //   switch (strat) {
  //     case ('CC'):
  //       acc += 3;
  //       break;
  //     case ('DD'):
  //       acc += 1;
  //       break;
  //     case ('DC'):
  //       t1 += 5;
  //       break;
  //     case ('CD'):
  //       t2 += 5;
  //       break;

  //     default:
  //       break;
  //   }
  // })

  // console.log(ta)
  console.log([t1 + ta, t2 + ta])
  return [t1 + ta, t2 + ta];
}

playGame("CCCC", "CCCC")
// should return [12, 12].
playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD")
//  should return [24, 34].