trigger ContextExampleTrigger on  Zumba__c  (before insert, after insert, after delete) {
    if (Trigger.isInsert) {
        if (Trigger.isBefore) {
            // Process before insert
        } else if (Trigger.isAfter) {
            // Process after insert
          //Assett__c.addError(“You have performed an insert.”);
        }        
    }
    else if (Trigger.isDelete) {
        // Process after delete
       //Assett__c.addError(“You have deleted this record.”);
        // Code
         // Code
          // Code
    }
}