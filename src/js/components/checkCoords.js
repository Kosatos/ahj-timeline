export default function checkCoords(coords) {
    return /^(\[|\[-|-|)\d{1,3}\.\d{5},( |)(-|)\d{1,3}\.\d{5}(\]|)$/.test(
      coords
    );
  }