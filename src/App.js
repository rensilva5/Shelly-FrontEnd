import { useEffect, useState } from "react";

function App() {
  const [deviceData, setDeviceData] = useState([]);

  // const handleData = () => {
  //   console.log("Hello world")
  // }

  useEffect(() => {
    fetch("http://192.168.15.35/rpc/Switch.GetStatus?id=0")
      // fetch("http://localhost:3002/devices")

      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // setDeviceData(data[0].name)
      });
  }, []);

  return (
    <div className="App">
      {/* {posts && <PostList posts={posts} title="all posts" />} */}
      {/* {deviceData && <deviceDataPostList posts={posts} title="all posts" />} */}
      {deviceData ? <h1>{deviceData}</h1> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
