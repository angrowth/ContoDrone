import { Product } from "../ContosoDB/model";

export const CreateInvokeResponse = (body:any) => {
    return { status: 200, body }
};

export const getInventoryStatus = (product: Product) => {
  if (Number(product.UnitsInStock) >= Number(product.ReorderLevel)) {
    return "En stock";
  } else if (Number(product.UnitsInStock) < Number(product.ReorderLevel) && Number(product.UnitsOnOrder) === 0) {
    return "Faible stock";
  } else if (Number(product.UnitsInStock) < Number(product.ReorderLevel) && Number(product.UnitsOnOrder) > 0) {
    return "En commande";
  } else if (Number(product.UnitsInStock) === 0) {
    return "En rupture de stock";
  } else {
    return "Inconnu"; //fall back
  }
}
