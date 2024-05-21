import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
/*
ContextProvider
React 의 Driling Props 를 회피하기 위한 Global State 를 관리하는 도구
*/

// Context 생성하기
const UserContext = createContext();

/*
react 의 userContext() hook 함수를 사용자정의(커스텀)하여
UserContext 에 저장된 state 를 사용할 수 있도록 도와주는 함수
함수이름이 반드시 use**() 으로 시작해야 한다
 */
const useUserContext = () => {
  return useContext(UserContext);
};

// Provider 생성하기
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  //UserContext.Provider를 사용하여 user와 setUser를 context의 값으로 제공

  const onFetchUser = useCallback(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const json = await res.json();
      setUser(json.username);
    };
    fetchUser();
  }, []);

  useEffect(onFetchUser, [onFetchUser]);

  return (
    <UserContext.Provider value={{ user, setUser, onFetchUser }}>
      {children}
    </UserContext.Provider>
  ); // UserContext.Provider로 감싼 모든 자식 컴포넌트는
  // user 상태와 setUser 함수를 사용할 수 있게된다
  // UserContext 에서 Provider 추출
};

export { UserContextProvider, useUserContext };
