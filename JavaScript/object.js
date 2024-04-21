// // creating an object

 let AddressBook = {
     NewAddressBooks:[],   
     name:"name",
     email:"Book@gmail.com",
     phone:"9405787154",
     address:"Bookshop",

     // Function to add new values
     addNew: function(name,email,phone,address){
         let NewAddressBook = {
             name:name,
             email:email,
             phone:phone,
             address:address
         };
     console.log(NewAddressBook);
     this.NewAddressBooks.push(NewAddressBook);
    //  this.displayaddressbook();
     },
    //  displayaddressbook : function(){
    //     for(element in AddressBook){
    //          console.log(this);
    //     } 
    //  }

};
AddressBook.addNew('Anish','anish@gmail.com',940,'Pune');
AddressBook.addNew('Anish2','anish2@gmail.com',9402,'Pune2');
// AddressBook.displayaddressbook();

AddressBook.NewAddressBooks.forEach(elemn => {
    // console.log(elemn);
    for(i in elemn){
        console.log(elemn[i]);
    }
})