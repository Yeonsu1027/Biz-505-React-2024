const ProductSearch = ({ productList }) => {
  const viewList = productList.map((item) => (
    <li>
      {item.p_code}, {item.p_name}
    </li>
  ));
  return <ul>{viewList}</ul>;
};

export default ProductSearch;
