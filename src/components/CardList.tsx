interface Product {
  id: number;
  title: string;
  images: string[];
}

const CardList : React.FC<{productList : Product[]}>= (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {props.productList.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-32 mx-auto object-contain"
          />
          <h3 className="mt-2 text-center font-semibold">{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;
