import { LightningElement, track, api } from 'lwc';



export default class Detail extends LightningElement {
    
    greeting = 'World';
    
    // Ensure changes are reactive when product is updated
    @track product;

    // Private var to track @api productId
    _productId = undefined;
    
    // parent account ID
    _parentAccId = undefined;
    
    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        this._productId = value;
        this.product = bikes.find(bike => bike.fields.Id.value === value);
    }
    
    // getter for productId
    @api get productId(){
        return this._productId;
    }
    
    changeHandler(event) {
        this.greeting = event.target.value;
    }

    getReadableStatus(job) {
        return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded ";  // Noncompliant
    }

    getReadableStatus1(job) {
        if (job.isRunning()) {
          return "Running";
        }
        return job.hasErrors() ? "Failed" : "Succeeded";
      }
}