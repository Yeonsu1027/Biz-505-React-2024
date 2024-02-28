//3
import styles from "../css/MemoItem.module.css";
// 리스트한테 메모 하나씩 받음
const MemoItem = ({ memo }) => { //비었으면 리턴안함 (아직추가 안했을때)
  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.date_box}>
        <div>{memo.m_date}</div>
        <div>{memo.m_time}</div>
      </div>
      <div className={styles.memo}>{memo.m_subject}</div>
    </div>
  );
};

export default MemoItem;