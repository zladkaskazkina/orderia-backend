const database = require('../../config/database');

const OrderController = () => {
  // zobrazit vsechny objednavky
  const getAll = async (req, result) => {
    try {
      const [orders, metadata] = await database.query('SELECT * FROM orderia.orders;');
      orders.forEach(item=>{
        console.log(item);
    });
      return result.status(200).json({ orders });
    } catch (err) {
      console.log(err);
      return result.status(500).json({ msg: 'Internal server error' });
    }
  };
  //pridat objednavku (pro kupujiciho po odeslani kosiku)
  const addOrder = async (request, result) => {
    try {
      let data = {
        title: request.body.title, 
        description: request.body.description
      };
      let sql = "INSERT INTO orderia.orders SET ?";
      const [ order, metadata ] = await database.query(sql,data);
      return result.status(200).json({ order });
    } catch (err) {
      console.log(err);
      return result.status(500).json({ msg: 'Internal server error' });
    }
  };
  //zobrazit jednu objednavku i jeji polozky
  const getOrderById = async (request, result) => {
    try {

      const id = parseInt(request.params.id);
      const [order, metadata] = await database.query('SELECT * FROM orderia.orders WHERE orders_id = $1', {
        bind: [id]
    });
      
   return  result.status(200).json({ order });
  } catch (err) {
    console.log(err);
    return result.status(500).json({ msg: 'Internal server error' });
  }
  };
  return {
    getAll, addOrder, getOrderById 
  };
};


module.exports = OrderController;
