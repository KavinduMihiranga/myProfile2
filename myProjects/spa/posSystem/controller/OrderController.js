disableLbl();
$('#txtOrderId').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderDate').focus();
    }
});

$('#txtOrderDate').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomer').focus();
    }
});

$('#txtOrderCustomer').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomerId').focus();
    }
});

$('#txtOrderCustomerId').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomerAddress').focus();

    }
});

$('#txtOrderItemCodes').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderItemSellName').focus();
    }
});

$('#txtOrderItemSellName').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderQuantity').focus();
    }
});

$('#txtOrderQuantity').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtQuantityOnHand').focus();
        checkQty();
    }
});

$('#txtQuantityOnHand').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtItemSellPrice').focus();
    }
});

$('#txtItemSellPrice').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtItemSellDiscount').focus();

    }
});
$('#txtItemSellDiscount').keydown(function (event) {
    if (event.key == "Enter") {
        // saveOrderItem();

        if (confirm("Do You Want To Add This Item..? ")) {

            alert("Add Order Item Successfully.!");
            saveOrderItem();

        } else {
            alert("Cancel Add Order Item !");
        }
    }
});

$('#lblCash').keyup(function () {
    setBalance();
});

$('#lblCash').keydown(function (event) {
    if (event.key == "Enter") {

        if (confirm("Do You Want To Add This Order..? ")) {

            alert("Add Order Successfully.!");
            saveOrder();
            clearAll();
        } else {
            alert("Cancel Add Order !");

        }


    }
});
// validation
var regExOrderID=/^(O00-)[0-9]{3,4}$/;
$("#txtOrderId").keyup(function () {
    let input = $("#txtOrderId").val();
    if (regExOrderID.test(input)) {
        $("#txtOrderId").css('border', '2px solid green');
        $("#errorOrderID").text("");
        $("#buttonAddOrder").prop("disabled", false);
    } else {
        $("#txtOrderId").css('border', '2px solid red');
        $("#errorOrderID").text("Wrong format : O00-001");
        $("#buttonAddOrder").prop("disabled", true);

    }
});

var regExOrderCusID = /^(C00-)[0-9]{3,4}$/;

$("#txtOrderCustomerId").keyup(function () {
    let input = $("#txtOrderCustomerId").val();
    if (regExOrderCusID.test(input)) {
        $("#txtOrderCustomerId").css('border', '2px solid green');
        $("#errorOrderCustomerID").text("");
        $("#buttonAddOrder").prop("disabled", false);
    } else {
        $("#txtOrderCustomerId").css('border', '2px solid red');
        $("#errorOrderCustomerID").text("Wrong format : C00-001");
        $("#buttonAddOrder").prop("disabled", true);

    }
});

var regExOrderCusName = /^[a-zA-Z ]+$/;

$("#txtOrderCustomer").keyup(function () {
    let input = $("#txtOrderCustomer").val();
    if (regExOrderCusName.test(input)) {
        $("#txtOrderCustomer").css('border', '2px solid green');
        $("#errorOrderCustomerName").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtOrderCustomer").css('border', '2px solid red');
        $("#errorOrderCustomerName").text("Wrong format : Type Your Name");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderCusAddress = /^[A-Za-z0-9'\.\-\s\,]+$/;

$("#txtOrderCustomerAddress").keyup(function () {
    let input = $("#txtOrderCustomerAddress").val();
    if (regExOrderCusAddress.test(input)) {
        $("#txtOrderCustomerAddress").css('border', '2px solid green');
        $("#errorOrderCustomerAddress").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtOrderCustomerAddress").css('border', '2px solid red');
        $("#errorOrderCustomerAddress").text("Wrong format : Type Your Address");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderItemCode = /^(I00-)[0-9]{3,4}$/;

$("#txtOrderItemCodes").keyup(function () {
    let input = $("#txtOrderItemCodes").val();
    if (regExOrderItemCode.test(input)) {
        $("#txtOrderItemCodes").css('border', '2px solid green');
        $("#errorOrderItemCode").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtOrderItemCodes").css('border', '2px solid red');
        $("#errorOrderItemCode").text("Wrong format : I00-001");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderItemName = /^[a-zA-Z ]+$/;

$("#txtOrderItemSellName").keyup(function () {
    let input = $("#txtOrderItemSellName").val();
    if (regExOrderItemName.test(input)) {
        $("#txtOrderItemSellName").css('border', '2px solid green');
        $("#errorOrderItemName").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtOrderItemSellName").css('border', '2px solid red');
        $("#errorOrderItemName").text("Wrong format : Type Item Name");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderItemQty = /^\d{0,8}(\.\d{1,3})?$/;

$("#txtOrderQuantity").keyup(function () {
    let input = $("#txtOrderQuantity").val();
    if (regExOrderItemQty.test(input)) {
        $("#txtOrderQuantity").css('border', '2px solid green');
        $("#errorOrderItemQty").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtOrderQuantity").css('border', '2px solid red');
        $("#errorOrderItemQty").text("Wrong format : Type Item Qty");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderItemQtyOnHand = /^\d{0,8}(\.\d{1,3})?$/;

$("#txtQuantityOnHand").keyup(function () {
    let input = $("#txtQuantityOnHand").val();
    if (regExOrderItemQtyOnHand.test(input)) {
        $("#txtQuantityOnHand").css('border', '2px solid green');
        $("#errorOrderItemQtyOnHand").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtQuantityOnHand").css('border', '2px solid red');
        $("#errorOrderItemQtyOnHand").text("Wrong format : Type Item Qty On Hand");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
var regExOrderItemPrice = /^\d{0,8}(\.\d{1,2})?$/;

$("#txtItemSellPrice").keyup(function () {
    let input = $("#txtItemSellPrice").val();
    if (regExOrderItemPrice.test(input)) {
        $("#txtItemSellPrice").css('border', '2px solid green');
        $("#errorOrderItemSellPrice").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtItemSellPrice").css('border', '2px solid red');
        $("#errorOrderItemSellPrice").text("Wrong format : Type Item Price");
        $("#buttonAddOrder").prop("disabled", true);

    }
});

var regExOrderItemDiscount = /^\d{0,8}(\.\d{1,2})?$/;

$("#txtItemSellDiscount").keyup(function () {
    let input = $("#txtItemSellDiscount").val();
    if (regExOrderItemDiscount.test(input)) {
        $("#txtItemSellDiscount").css('border', '2px solid green');
        $("#errorOrderItemSellDiscount").text("");
        $("#buttonAddOrder").prop("disabled", false);

    } else {
        $("#txtItemSellDiscount").css('border', '2px solid red');
        $("#errorOrderItemSellDiscount").text("Wrong format : Type Item Discount");
        $("#buttonAddOrder").prop("disabled", true);

    }
});
$('#txtOrderId,#txtOrderCustomerId,#txtOrderCustomer,#txtOrderCustomerAddress,#txtOrderItemCodes,#txtOrderItemSellName,#txtOrderQuantity,#txtQuantityOnHand,#txtItemSellPrice,#txtItemSellDiscount').on('keydown', function (eventObj) {
    if (eventObj.key == "Tab") {
        eventObj.preventDefault();
    }
});

function checkOrderId(){
    if ($('#txtOrderId').val(null)){
        $('#buttonAddOrder').prop('disable',true)
    }
}
//Variable

// setValueToCustomerId();
// function setValueToCustomerId(){
//     for (var i of customerDB) {
//         $('#txtOrderCustomerId').append(customerDB.orderCustomerId);
//     }
// }

//CRUD Operation


$('#btnOrderAddItem').click(function () {
    if (confirm("Do You Want To Add This Item..? ")) {

        alert("Add Order Item Successfully.!");
        saveOrderItem();

    } else {
        alert("Cancel Add Order Item !");
    }

})

function saveOrderItem() {

    $('#orderTable>tr').off("click");

    let orderItemCodes = $('#txtOrderItemCodes').val();
    let orderItemSellName = $('#txtOrderItemSellName').val();
    let orderQuantity = $('#txtOrderQuantity').val();
    let orderQuantityOnHand = $('#txtQuantityOnHand').val();
    let orderItemSellPrice = $('#txtItemSellPrice').val();
    let orderItemSellDiscount = $('#txtItemSellDiscount').val();

    let totalPrice = (orderItemSellPrice - orderItemSellDiscount) * orderQuantity;


    // $('#orderTable').empty();

    let orderDetailObject = {

        oItemCodes: orderItemCodes,
        oItemSellName: orderItemSellName,
        oQuantity: orderQuantity,
        oQuantityOnHand: orderQuantityOnHand,
        oItemSellPrice: orderItemSellPrice,
        oItemSellDiscount: orderItemSellDiscount,
        oTotalPrice: totalPrice
    };
    orderDetailDB.push(orderDetailObject);
    $('#orderTable').empty();
    for (var i of orderDetailDB) {
        let row = `<tr><td>${i.oItemCodes}</td><td>${i.oItemSellName}</td><td>${i.oItemSellPrice}</td><td>${i.oItemSellDiscount}</td><td>${i.oQuantity}</td><td>${i.oTotalPrice}</td></tr>`;
        $("#orderTable").append(row);
        $('#lblSubTotalPrice').val(totalPrice);

        let totalPrices = (orderDetailObject.oItemSellPrice - orderDetailObject.oItemSellDiscount) * orderDetailObject.oQuantity;
        let totalDiscount = (orderDetailObject.oItemSellDiscount * orderDetailObject.oQuantity);
        let totalQty = (orderDetailObject.oQuantity)


        $('#lblTotalPrice').val(totalPrices);
        $('#lblTotalDiscount').val(totalDiscount);
        $('#lblTotalQty').val(totalQty);

    }


}


$('#buttonAddOrder').click(function () {
        if (confirm("Do You Want To Add This Order..? ")) {

            alert("Add Order Successfully.!");
            saveOrder();
            clearAll();

        } else {
            alert("Cancel Add Order !");


        }

});

function saveOrder() {


    let orderId = $('#txtOrderId').val();
    let orderCustomerDate = $('#txtOrderDate').val();
    let orderCustomerName = $('#txtOrderCustomer').val();
    let orderCustomerId = $('#txtOrderCustomerId').val();
    let orderCustomerAddress = $('#txtOrderCustomerAddress').val();


    let orderItemCodes = $('#txtOrderItemCodes').val();
    let orderItemSellName = $('#txtOrderItemSellName').val();
    let orderQuantity = $('#txtOrderQuantity').val();
    let orderQuantityOnHand = $('#txtQuantityOnHand').val();
    let orderItemSellPrice = $('#txtItemSellPrice').val();
    let orderItemSellDiscount = $('#txtItemSellDiscount').val();


    let orderObject = {
        orderId: orderId,
        orderCustomerDate: orderCustomerDate,
        orderCustomerName: orderCustomerName,
        orderCustomerId: orderCustomerId,
        orderCustomerAddress: orderCustomerAddress,

        orderItemCodes: orderItemCodes,
        orderItemSellName: orderItemSellName,
        orderQuantity: orderQuantity,
        orderQuantityOnHand: orderQuantityOnHand,
        orderItemSellPrice: orderItemSellPrice,
        orderItemSellDiscount: orderItemSellDiscount

    };

    orderDB.push(orderObject);
    //
    // let totalPrice = (orderObject.orderItemSellPrice - orderObject.orderItemSellDiscount) * orderObject.orderQuantity;
    // let totalDiscount = (orderObject.orderItemSellDiscount * orderObject.orderQuantity);
    // let totalQty = (orderObject.orderQuantity)
    //
    // $('#lblTotalPrice').val(totalPrice);
    // $('#lblTotalDiscount').val(totalDiscount);
    // $('#lblTotalQty').val(totalQty);


    checkOrderId();

    let totalPrice=$('#lblSubTotalPrice').val();
    let totalCash=$('#lblCash').val();
    if (totalPrice>totalCash){
        $('#orderTable').remove();
        alert("Add Order Successfully.!");
    }else{
       // alert("Check Your cash");
        $('#buttonAddOrder').prop('disable', true)
    }
    // searchCash();

}

function searchCash() {
    let totalPrice=$('#lblSubTotalPrice').value();
    let totalCash=$('#lblCash').value();
    if (totalPrice>totalCash){
        $('#orderTable').remove();
        alert("Add Order Successfully.!");
        clearAll();
    }else if(totalPrice<totalCash){
        alert("Check Your cash");
        $('#buttonAddOrder').prop('disable', true)
    }else{

    }
}

function searchOrderCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}


$('#txtOrderCustomerId').keydown(function () {
    var searchID = $('#txtOrderCustomerId').val();
    var response = searchOrderCustomer(searchID);
    if (response) {
        $('#txtOrderCustomer').val(response.name);
        $('#txtOrderCustomerAddress').val(response.address);

    }

});

function searchOrderItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            return itemDB[i];
        }
    }
}


$('#txtOrderItemCodes').keydown(function () {
    var searchID = $('#txtOrderItemCodes').val();
    var response = searchOrderItem(searchID);
    if (response) {
        $('#txtOrderItemSellName').val(response.name);
        $('#txtQuantityOnHand').val(response.qty);
        $('#txtItemSellPrice').val(response.price);

    }

});

function clearAll() {
    $('#txtOrderId,#txtOrderCustomerId,#txtOrderCustomer,#txtOrderCustomerAddress,#txtOrderItemCodes,#txtOrderItemSellName,#txtQuantityOnHand,#txtOrderQuantity,#txtItemSellPrice,#txtItemSellDiscount,#lblTotalQty,#lblTotalPrice,#lblTotalDiscount,#lblSubTotalPrice,#lblBalance,#lblCash').val("");
    $('#txtOrderId,#txtOrderCustomerId,#txtOrderCustomer,#txtOrderCustomerAddress,#txtOrderItemCodes,#txtOrderItemSellName,#txtQuantityOnHand,#txtOrderQuantity,#txtItemSellPrice,#txtItemSellDiscount,#lblTotalQty,#lblTotalPrice,#lblTotalDiscount,#lblSubTotalPrice,#lblBalance,#lblCash').css('border', '2px solid #ced4da');
    $('#txtOrderId').focus();
    // $("#buttonAddOrder").attr('disabled', true);

}

$('#lblCash').keyup(function () {
    $('#lblBalance').prop('disabled',false);
    setBalance();
    $('#lblBalance').prop('disabled',true);
});

function setBalance() {
    let total = $('#lblTotalPrice').val();
    let cash = $('#lblCash').val();

        if (total < cash) {
            $('#lblBalance').val($('#lblCash').val()-$('#lblTotalPrice').val());
        }
            $('#buttonAddOrder').prop('disable', true)

}

function disableLbl() {
    $('#lblTotalPrice').prop('disabled',true);
    $('#lblTotalDiscount').prop('disabled',true);
    $('#lblSubTotalPrice').prop('disabled',true);
    $('#lblTotalQty').prop('disabled',true);

}
$('#txtOrderQuantity').keyup(function (event) {
    if (event.key=='Enter'){
        checkQty();
    }
})

function checkQty() {
    // let qty=$('#txtOrderQuantity').val();
    // let qtyOnHand=$('#txtQuantityOnHand').val();
    if ($('#txtOrderQuantity').val()>$('#txtQuantityOnHand').val()){
        alert('Quantity lowest')
        $('#txtOrderQuantity').val("");
    }
}

function searchOrder(code){
    for (let i = 0; i < orderDB; i++) {
        if (orderDetailDB[i].code==code){
            return orderDB[i];
        }
    }
}
$('#txtOrderId').keyup(function () {
    let searchOrderCode = $('#txtOrderId').val();
    let responseOrder = searchOrder(searchOrderCode);
    if (responseOrder){

        $("td:eq(0)").add(responseOrder.oItemCodes);
        $("td:eq(1)").add(responseOrder.oItemSellName);
        $("td:eq(2)").add(responseOrder.oItemSellPrice);
        $("td:eq(3)").add(responseOrder.oItemSellDiscount);

    }
})

