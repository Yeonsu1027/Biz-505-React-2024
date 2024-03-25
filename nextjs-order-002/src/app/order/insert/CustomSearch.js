import css from "@/css/order.insert.module.css";
const CustomSearch = ({ customList, setCustomList, setCustomer }) => {
  const onClickHandler = (custom) => {
    // alert(`${custom.c_code}, ${custom.c_name}, ${custom.c_tel}`);
    setCustomer(custom);
    setCustomList([]);
  };

  // 중괄호x 소괄호 : return 생략
  const viewList = customList.map((item) => (
    <li
      key={item.c_code}
      c_code={item.c_code}
      onClick={() => onClickHandler(item)}
    >
      {item.c_code},{item.c_name}
    </li>
  ));
  return <ul className={css.cust_list}>{viewList}</ul>;
};
export default CustomSearch;
