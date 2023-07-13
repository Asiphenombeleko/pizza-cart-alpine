function amountSmall(){
    return{
        buy: false,
        buyMed : false,
        buyLrg : false,
       amount : 0,
       medAmount : 0,
       lrgAmount :0,
       totalCosts : 0,
       payAmount :"",

   //      buyPizza(){
   //      if(this.buy  == true){
   //      this.amount += 49
   //      this.totalCosts += 49
        
   //      }
   //      if(this.buyMed== true){
   //       this.medAmount = 89
   //       this.totalCosts = 89
   //      }
   //      if(this.buyLrg == true){
   //       this.lrgAmount = 129
   //       this.totalCosts = 129
   //      }
   // },
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
        if(this.payAmount>this.totalCosts){
            this.totalCosts =0;
            this.payAmount = 0.
            this.amount = 0;
            this.medAmount = 0;
            this.lrgAmount = 0;

        }
        else if(this.payAmount >= this.totalCosts){
         this.totalCosts =0;
         this.payAmount = 0
         this.amount = 0;
         this.medAmount = 0;
         this.lrgAmount = 0;
         

        }
        else{
         this.totalCosts =0;
         this.payAmount = 0
         this.amount = 0;
         this.medAmount = 0;
         this.lrgAmount = 0;

        }
       },
       paid(){
         if(this.payAmount>this.totalCosts){
            return "Payment successful!! "
         }
       },
       notEnough(){
         if(this.payAmount<this.totalCosts){
            return "Funds not enough for the purchase!"
         }
       },
       exactly(){
         if(this.payAmount== this.totalCosts){
            return "Paid with no change"
         }
       }
    }
 }





 document.addEventListener('alpine:init', ()=> {
    Alpine.data('amountSmall',amountSmall)
 })