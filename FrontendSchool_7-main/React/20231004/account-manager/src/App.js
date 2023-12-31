import IncomeInput from "./containers/IncomeInput/IncomeInput.jsx";
import ExpenseList from "./containers/ExpensList/ExpenseList.jsx";
import ExpenseInput from "./containers/ExpenseInput/ExpenseInput.jsx";
import ExpenseTotal from "./containers/ExpenseTotal/ExpenseTotal.jsx";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 월급을 입력  */}
        <IncomeInput />
      </header>
      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력 */}
        지출 input
        <ExpenseInput />
        <div>
          {/* 사용자가 그동안 구입한 상품의 목록이 랜더링 */}
          지출 기록
          <ExpenseList />
          <div>
            지출 총합
            {/* 사용자가 구입한 상품의 지출액 총합 */}
            <ExpenseTotal />
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;

// containers 는 redux와 통신하는 컴포넌트들
// components 는 일반적인 react 컴포넌트들
