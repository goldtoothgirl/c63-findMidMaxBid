// const findMaxBid = function(bids){
//   let maxBid = bids[0],
//       minBid = bids[0]
//   for(let i = 0; i < bids.length; i++){
//     for(let j = 0; j < bids.length; j++){
//       if(bids[i] > bids[j] && bids[i] > maxBid ){ 
//         maxBid = bids[i]
//        }else if(bids[i] < bids[j] && bids[i] < minBid){
//          minBid = bids[i]
//        }
//     }  
//   }
//   return [minBid, maxBid]
// }

// const allBids = [2,7,3,1,4,5,5]
// console.log(findMaxBid(allBids))


const findMaxBid = function(bids){
    let maxBid = bids[0]
    for(let i = 0; i < bids.length; i++){
      if(bids[i] > maxBid){
        maxBid = bids[i]
      }
    }
    return maxBid
  }
  
  const allBids = [1,2,7,3,4,5,5]
  console.log(findMaxBid(allBids))