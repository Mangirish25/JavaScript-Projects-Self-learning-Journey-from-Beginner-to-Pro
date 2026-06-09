## Date Module

To get the current date:

`date = new Date()`
`Tue Jun 09 2026 21:33:39 GMT+0530 (India Standard Time)`

For specific date:

`date = new Date("2026-06-09")`
Output: `Tue Jun 09 2026 05:30:00 GMT+0530 (India Standard Time)`

`const date = new Date(2026, 6, 9)`

Output:
`Thu Jul 09 2026 00:00:00 GMT+0530 (India Standard Time)`

Months are 0 indexed means Jan = 0

```javascript
const date = new Date()

console.log(date.getFullYear());
console.log(date.getMonth()); // 0-11
console.log(date.getDate());
console.log(date.getDay()); // 0 = Sunday
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.toString())

```

```output
Output:
2026
5
9
2
21
46
18
21
Tue Jun 09 2026 21:46:18 GMT+0530 (India Standard Time)
```

Setting Date:

`date.setDate()` and similar functions