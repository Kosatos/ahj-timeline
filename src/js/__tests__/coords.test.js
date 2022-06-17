import checkCoords from '../components/checkCoords';

const trueCoords = [
  '51.50851, -0.12572',
  '51.50851,-0.12572',
  '[51.50851, -0.12572]',
];

const falseCoords = [
  '45,56785,33.22435',
  '45.56785,  33.22435',
  '45.56785 33.22435',
  '[45,5678545,33.2243555]',
];

test.each(trueCoords)(
  `checkCoords should return true, if coords is correct`,
  (coords) => {
    expect(checkCoords(coords)).toBeTruthy();
  }
);

test.each(falseCoords)(
  `checkCoords should return false, if coords is incorrect`,
  (coords) => {
    expect(checkCoords(coords)).toBeFalsy();
  }
);
