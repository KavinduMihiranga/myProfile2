function CustomerDTO(id,name,address,phoneNumber) {
    var __id=id;
    var __name=name;
    var __address=address;
    var __phoneNumber=phoneNumber;
}
let cc=new CustomerDTO();

function customerDTO(id,name,address,phoneNumber) {
    var __id=id;
    var __name=name;
    var __address=address;
    var __phoneNumber=phoneNumber;

    this.getCustomerID=function () {
        return __id
    }
    this.getCustomerName=function () {
        return __name
    }
    this.getCustomerAddress=function () {
        return __address
    }
    this.getCustomerPhoneNumber=function () {
        return __phoneNumber
    }
}