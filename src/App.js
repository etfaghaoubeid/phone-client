import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "./actions/phone-actions";
import Layout from "./layout";

function App() {
  const [phones, setPhones] = useState([]);
  const phonesStore = useSelector((state) => state.phones);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhones());
    setPhones(phonesStore.phones);
  }, [dispatch]);
  return (
    <Layout>
      {phonesStore.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {" "}
          {phones.map((phone) => (
            <div>
              <img
                src={phone.image}
                style={{ width: "13rem", height: "16rem" }}
              />
              <div>
                <h3>{phone.name}</h3>
                <span>{phone.price}</span>
                <p>{phone.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default App;
