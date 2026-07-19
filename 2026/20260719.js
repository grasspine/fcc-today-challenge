function elevatorStops(currentFloor, stops) {
  console.log('stops', stops)
  const planStops = [];

  const diffStops = stops.map(n => Math.abs(currentFloor - n))
  console.log('diffs', diffStops)

  const minDist = Math.min(...diffStops)
  console.log('min dist', minDist)

  let idx = diffStops.indexOf(minDist);
  const indices = [];
  while (idx !== -1) {
    indices.push(idx);
    idx = diffStops.indexOf(minDist, idx + 1);
  }

  const shortPos = indices.length > 1 ? indices[1] : indices[0];
  console.log('shortpos', shortPos)

  currentFloor = stops[shortPos];
  planStops.push(...(stops.splice(shortPos, 1)))
  console.log(planStops)

  console.log(currentFloor, stops, '\n');
  if (stops.length >= 1) {
    planStops.push(...(elevatorStops(currentFloor, stops)));
  }
  console.log('end', planStops)
  return planStops;
}




// elevatorStops(5, [2, 8, 3, 9])
// [3, 2, 8, 9]
elevatorStops(6, [2, 10, 8, 3, 1, 9])
// [8, 9, 10, 3, 2, 1]