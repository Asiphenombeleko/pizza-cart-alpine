function amountSmall(){
    return{
        buy: false,
       amount : 0,
       medAmount : 0,
       lrgAmount :0,
       totalCosts : 0,

        buyPizza(){
        if(this.buy  == true){
        this.amount = 49
        this.totalCosts = 49
        }
// if(this.buy  == true){
// this.medAmount=89
// this.totalCosts=89
// }
},
       incrementSmall() {
          this.amount += 49.00;
          this.totalCosts += 49
       },
       decrementSmall(){
          if(this.amount > 0){
             this.amount-= 49.00
             this.totalCosts -= 49
          }
       },
       incrementMedium(){
          this.medAmount += 89.00;
          this.totalCosts += 89
       },
       decrementMedium(){
          if(this.medAmount > 0){
             this.medAmount -= 89.00
             this.totalCosts -= 89
          }
       },
       incrementLarge(){
          this.lrgAmount += 129.00
          this.totalCosts += 129
       },
       decrementLarge(){
          if(this.lrgAmount > 0){
             this.lrgAmount -= 129.00
             this.totalCosts -= 129
          }
       },
       payment(){
        if(this.totalCosts> 0){
            
        }
       }
    }
 }
 document.addEventListener('alpine:init', ()=> {
    Alpine.data('amountSmall',amountSmall)
 })