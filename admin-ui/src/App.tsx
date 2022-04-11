import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DealershipList } from "./dealership/DealershipList";
import { DealershipCreate } from "./dealership/DealershipCreate";
import { DealershipEdit } from "./dealership/DealershipEdit";
import { DealershipShow } from "./dealership/DealershipShow";
import { BlockerList } from "./blocker/BlockerList";
import { BlockerCreate } from "./blocker/BlockerCreate";
import { BlockerEdit } from "./blocker/BlockerEdit";
import { BlockerShow } from "./blocker/BlockerShow";
import { DeliveryBayList } from "./deliveryBay/DeliveryBayList";
import { DeliveryBayCreate } from "./deliveryBay/DeliveryBayCreate";
import { DeliveryBayEdit } from "./deliveryBay/DeliveryBayEdit";
import { DeliveryBayShow } from "./deliveryBay/DeliveryBayShow";
import { ExperiencePackageList } from "./experiencePackage/ExperiencePackageList";
import { ExperiencePackageCreate } from "./experiencePackage/ExperiencePackageCreate";
import { ExperiencePackageEdit } from "./experiencePackage/ExperiencePackageEdit";
import { ExperiencePackageShow } from "./experiencePackage/ExperiencePackageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PDE1405 Porsche Delivery Experience Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Dealership"
          list={DealershipList}
          edit={DealershipEdit}
          create={DealershipCreate}
          show={DealershipShow}
        />
        <Resource
          name="Blocker"
          list={BlockerList}
          edit={BlockerEdit}
          create={BlockerCreate}
          show={BlockerShow}
        />
        <Resource
          name="DeliveryBay"
          list={DeliveryBayList}
          edit={DeliveryBayEdit}
          create={DeliveryBayCreate}
          show={DeliveryBayShow}
        />
        <Resource
          name="ExperiencePackage"
          list={ExperiencePackageList}
          edit={ExperiencePackageEdit}
          create={ExperiencePackageCreate}
          show={ExperiencePackageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
