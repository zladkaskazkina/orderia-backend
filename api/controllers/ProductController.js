const database = require('../../config/database');

const ProductController = () => {
  //zobrazit vsechny produkty (pro kupujiciho)
  const getAll = async (req, result) => {
    try {
      const [products, metadata] = await database.query('SELECT * FROM orderia.products;');
      products.forEach(item=>{
        console.log(item);
    });
      return result.status(200).json({ products });
    } catch (err) {
      console.log(err);
      return result.status(500).json({ msg: 'Internal server error' });
    }
  };
  //pridat produkt (pro prodavajiciho)
  const addProduct = async (request, result) => {
    try {
      let data = {
        title: request.body.title, 
        description: request.body.description
      };
      let sql = "INSERT INTO orderia.products SET ?";
      const [ product, metadata ] = await database.query(sql,data);
      return result.status(200).json({ product });
    } catch (err) {
      console.log(err);
      return result.status(500).json({ msg: 'Internal server error' });
    }
  };
  //zobrazit jeden produkt 
  const getProductById = async (request, result) => {
    try {

      const id = parseInt(request.params.id);
      const [product, metadata] = await database.query('SELECT * FROM orderia.products WHERE products_id = $1', {
        bind: [id]
    });
      
   return  result.status(200).json({ product });
  } catch (err) {
    console.log(err);
    return result.status(500).json({ msg: 'Internal server error' });
  }
  };
  //zobrazit vsechny produkty jednoho prodavajiciho (pro prodavajiciho)


  //zobrazit produkty z jedne kategorii

  return {
    getAll, addProduct, getProductById 
  };
};
module.exports = ProductController;



