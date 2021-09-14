```javascript
function calculaNota(ex, p1, p2) {
 
  const mediaNota = (ex * 1 + p1 * 2 + p2 * 3) / (1 + 2 + 3)
  
  if (mediaNota >= 9) {
    return "A"
  }
  else if (mediaNota < 9 && mediaNota >= 7.5) {
    return "B"
  }
  else if (mediaNota < 7.5 && mediaNota >= 6) {
    return "C"
  }
  else {
    return "D"
  }
  
}

```