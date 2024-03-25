import css from "@/css/lll.module.css";
const OrderInsert = () => {
  return (
    <section className={css.section}>
      <h1>주문번호:O01001</h1>
      <form>
        <div>
          <input placeholder="고객코드" className={css.input} />
          <button className={css.button}>검색</button>
        </div>
        <div>
          <input placeholder="상품코드" className={css.input} />
          <button className={css.button}>검색</button>
        </div>
        <div>
          <input placeholder="주문수량" className={css.input} />
          <button className={css.button}>상품추가</button>
        </div>
      </form>
      <div className={css.listdiv}>
        <h3>상품리스트</h3>
        <div className={css.list}>
          <ul className={css.name}>
            <li>상품코드사</li>
            <li>상품명</li>
            <li>주문수량</li>
          </ul>
          <ul className={css.plist}>
            <li>P0010</li>
            <li>-</li>
            <li>-</li>
          </ul>
          <ul className={css.plist}>
            <li>P0011</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default OrderInsert;
