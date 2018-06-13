const initialState = {
  productsInBasket : [{
    title: "Corne chasse 14cm",
    decathlon_id: 8282689,
    min_price: 9.99,
    quantity: 2,
    image_path: "828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg",
  },
  {
    title: "Corne chasse 16cm",
    decathlon_id: 8350535,
    min_price: 9.99,
    quantity: 2,
    image_path: "828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg",
  },
  {
    title: "Corne chasse 16cm",
    decathlon_id: 8282685,
    min_price: 9.99,
    quantity: 2,
    image_path: "828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg",
  }
]
}

function addOneItem(products, id) {
  return products.map(
    (oneProduct) =>
      oneProduct.decathlon_id === id
      ? {...oneProduct, quantity:oneProduct.quantity +1}
      : oneProduct
  )
}

function addMoreQte(products, article, qte) {

  let findItem = false;
  let tabState=products.map(
    function (oneProduct) {
      if (oneProduct.decathlon_id === article.decathlon_id) {
        findItem=true;
        return {...oneProduct, quantity:oneProduct.quantity + qte}
      } else {
        return oneProduct
      }
    }
  );
  if (!findItem) {
    tabState.push({
      title: article.title,
      decathlon_id: article.decathlon_id,
      min_price: article.min_price,
      quantity: qte,
      image_path: article.image_path
    });
  }
  console.log(tabState);
  return tabState;
}

function deleteOneItem(products, id) {
  return products.map(
    (oneProduct) =>
      oneProduct.decathlon_id === id
      ? {...oneProduct, quantity:oneProduct.quantity -1}
      : oneProduct
  )
}

function RemoveItem(products, id) {
  return products.filter(function(oneProduct){ return oneProduct.decathlon_id !== id });
}

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUANTITY':
      return {
        ...state,
        productsInBasket: addOneItem(state.productsInBasket,action.id)
      };

      case 'ADD_MORE_QUANTITY':
        return {
          ...state,
          productsInBasket: addMoreQte(state.productsInBasket,action.product, action.quantity)
        };

    case 'DEL_QUANTITY':
      return {
        ...state,
        productsInBasket: deleteOneItem(state.productsInBasket,action.id)
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        productsInBasket: RemoveItem(state.productsInBasket,action.id)
      };

    default:
      return state
  }
}

export default BasketReducer;
