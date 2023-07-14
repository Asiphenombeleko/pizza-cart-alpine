function amountSmall() {
  return {
    buy: false,
    buyMed: false,
    buyLrg: false,
    amount: 0,
    medAmount: 0,
    lrgAmount: 0,
    totalCosts: 0,
    change : 0,
    payAmount: 0,
    message: "",
    showCheckout: true,
    showPay: false,

    incrementSmall() {
      this.amount += 49.0;
      this.totalCosts += 49;
    },
    decrementSmall() {
      if (this.amount > 0) {
        this.amount -= 49.0;
        this.totalCosts -= 49;
      }
    },
    incrementMedium() {
      this.medAmount += 89.0;
      this.totalCosts += 89;
    },
    decrementMedium() {
      if (this.medAmount > 0) {
        this.medAmount -= 89.0;
        this.totalCosts -= 89;
      }
    },
    incrementLarge() {
      this.lrgAmount += 129.0;
      this.totalCosts += 129;
    },
    decrementLarge() {
      if (this.lrgAmount > 0) {
        this.lrgAmount -= 129.0;
        this.totalCosts -= 129;
      }
    },

    payment() {
       this.paid()
      if(!isNaN(this.payAmount)){
      if (this.payAmount > this.totalCosts) {
        this.totalCosts = 0;
        this.payAmount = 0;
        this.amount = 0;
        this.medAmount = 0;
        this.lrgAmount = 0;
      } else if (this.payAmount >= this.totalCosts) {
        this.totalCosts = 0;
        this.payAmount = 0;
        this.amount = 0;
        this.medAmount = 0;
        this.lrgAmount = 0;
      } }
      else {
         
      }
      this.toggleButtons()
    },
    paid() {
     if (isNaN(this.payAmount)){
      this.message = "Please enter numerical values!!"
     }
      else if (this.payAmount > this.totalCosts) {
        this.change = this.payAmount - this.totalCosts
       this.message = "Payment successful!! Your change is "+ "R"+ this.change.toFixed(2);
      } else if (this.payAmount < this.totalCosts) {
      this.message = "Funds not enough for the purchase!";
      } else if(this.totalCosts == 0){
         this.message = "Please add a pizza to the cart!!"
      }
      else{

         this.message = "Paid with no change";
      }
      const myTimeout = setTimeout(()=>{
         this.message = ""
      }, 5000);
    },
    toggleButtons() {
      if (this.showPay == true) {
        this.showPay = false;
      } else {
        this.showPay = true;
      }
      if (this.showCheckout == true) {
        this.showCheckout = false;
      } else {
        this.showCheckout = true;
      }
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("amountSmall", amountSmall);
});
