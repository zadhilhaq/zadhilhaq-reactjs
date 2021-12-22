import {  Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";
import bendera from './img/bendera.jpg'
const Home = () =>{
    return (
        <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <Image src={bendera} fluid />

      <hr />
      <Outlet />
    </div>
    )
}
export default Home