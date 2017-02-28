var React = require('react');

class CartContainer extends React.Component {
 render(){
   return (

     <div class="container">
       <div class="row">
         <nav class="navbar navbar-toggleable-md navbar-light bg-faded">        </button>
           <a class="navbar-brand" href="#">The Following Rebel</a>
           <a class="navbar-brand" href="#">T-shirts</a>
           <a class="navbar-brand" href="#">Cart</a>

       </div>
       <div class="row">
         <div>
           <div class="jumbotron">
             <h3 class="display-3">The Following Rebel!</h1>
           <p class="lead">This deal will knot be here tomorrow.</p>
           <hr class="my-4">
           </p>
         </div>
       </div>
       <ul>
         <li class="col-xs-12 col-sm-4"><img src="./images/ewok.jpg" alt="#">
         Endor Brewing Co. Est. 1984
         Walk in... Ewok out

         <div>
           <label for="quantity">Qty: </label>
           <input min="1" type="number" id="quantity" name="quantity" value="1" />

           <div class="form-group">
         </div>

         <div class="form-group">
       <label for="sel1">Select list:</label>
       <select class="form-control" id="sel1">
         <option></option>
         <option>XS</option>
         <option>S</option>
         <option>M</option>
         <option>L</option>
         <option>XL</option>
       </select>
     </div>

     <a href="#" class="btn btn-info btn-lg">
       <span class="glyphicon glyphicon-shopping-cart"></span>
       Add to Cart
     </a>

         </li>
         <li class="col-xs-12 col-sm-4"><img src="./images/hanssolo.jpg" alt="#">
         Hans going Solo .......
         Leverhosen never felt so right

         <div>
           <label for="quantity">Qty: </label>
           <input min="1" type="number" id="quantity" name="quantity" value="1" />

           <div class="form-group">
         </div>
         <div class="form-group">
       <label for="sel1">Select list:</label>
       <select class="form-control" id="sel1">
         <option></option>
         <option>XS</option>
         <option>S</option>
         <option>M</option>
         <option>L</option>
         <option>XL</option>
       </select>
       </div>

           <a href="#" class="btn btn-info btn-lg">
             <span class="glyphicon glyphicon-shopping-cart"></span>
             Add to Cart
           </a>


         </li>
         <li class="col-xs-12 col-sm-4"><img src="./images/r2d2.png" alt="#">
         It's a Pirates Life for R2D2 ....
         C3PO didnt make it in time
       <div>
         <label for="quantity">Qty: </label>
         <input min="1" type="number" id="quantity" name="quantity" value="1" />

         <div class="form-group">
       </div>
       <label for="sell">Select list:</label>
       <select class="form-control" id="sel1">
         <option></option>
         <option>XS</option>
         <option>S</option>
         <option>M</option>
         <option>L</option>
         <option>XL</option>
       </select>
     </div>



     <a href="#" class="btn btn-info btn-lg">
       <span class="glyphicon glyphicon-shopping-cart"></span>
       Add to Cart
     </a>
         </li>
       </ul>
     </div>
   </div>


  )
};



    // constructor(props) {
    //     super(props);
    //
    //     var CartCollection = new CartCollection();
    //     CartCollection.add([]);
    //
    //     var orderData = JSON.parse(localStorage.getItem('order');
    //     var order = new Order(orderData);
    //
    //     this.state = {
    //         cartCollection,
    //         order
    //     };}
    // addItemToOrder(cartItem) {
    //     var order = this.state.order;
    //
    //     var orderItem = cartItem.toJSON();
    //     order.get('items').add(orderItem);
    //
    //     localStorage.setItem('order', JSON.stringify(order.toJSON()));
    //
    //     this.setState({order});
    // }
    // placeOrder() {
    //     this.state.order.save();
    // }
    // render() {
    //     var cartList = this.state.cartCollection.map(cartItem => {
    //         return (
    //             <li key={cartItem.cid}>
    //                 <a onClick={(e) => {
    //                     e.preventDefault();
    //                     this.addItemToOrder(cartItem)
    //                 }} href="#">{menuItem.get('name')}</a>
    //                 }
    //             </li>
    //           );
    //         });
    //
    //         var orderList = this.state.order.get('items').map((items) => {
    //           return (
    //             <li>{item.get('name')}</li>
    //           )
    //         });
    //
    //         return
