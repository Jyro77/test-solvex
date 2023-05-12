import { Route, Switch } from "wouter";
import Nav from "./component/Nav";
import Supermarket from "./component/supermarket/Supermarket";
import AddSupermarket from "./component/supermarket/AddSupermarket";
import { MarketView } from "./component/supermarket/MarketView";
import { EditSupermarket } from "./component/supermarket/EditSupermarket";
import Brand from "./component/Brand/Brand";
import BrandView from "./component/Brand/BrandView";
import AddBrand from "./component/Brand/AddBrand";
import EditBrand from "./component/Brand/EditBrand";

function App() {
    return (
        <div className='bg-zinc-800 text-white h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <Nav />
                <Route path='/supermarket' component={Supermarket} />
                <Switch>
                    <Route path='/supermarket/add' component={AddSupermarket} />
                    <Route path='/supermarket/:id' component={MarketView} />
                </Switch>
                <Route
                    path='/supermarket/:id/edit'
                    component={EditSupermarket}
                />

                <Route path='/brand' component={Brand} />
                <Switch>
                    <Route path='/brand/add' component={AddBrand} />
                    <Route path='/brand/:id' component={BrandView} />
                </Switch>
                <Route path='/brand/:id/edit' component={EditBrand} />
            </div>
        </div>
    );
}

export default App;
