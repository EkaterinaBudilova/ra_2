

'use strict';
 const isRating = int => ((int >= 1) && (int <= 5));
 const Stars = function(num = 0) {
let st = [];
   for (let i = 0; i<num.count +1; i++) {
     st[i] = <Star />;
   }
   let rate = isRating(num.count);
   console.log(rate);
   return ( 
     <ul className="card-body-stars u-clearfix">
     {rate ? <li key = i><Star /></li> : <li> </li>}
     </ul>
  );
 }