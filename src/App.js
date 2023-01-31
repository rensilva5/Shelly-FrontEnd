// import { useEffect } from 'react'; // pending to be used.
import { useEffect, useState } from 'react';
import './App.css';
// import Device from './data';
// import PostList from './posts/PostList'; // second option to fetch for data

function App() {
  const [deviceData, setDeviceData] = useState([])

  // const postCollectorRef = collection(db, 'json/') / pending to be used.
  // const handleData = () => {
  //   console.log("Hello world")
  // }
  useEffect(() => {
    // fetch("http://192.168.15.35/#/json")
    fetch("http://192.168.15.35/rpc/Switch.GetStatus?id=0")
    // fetch("http://localhost:3002/devices")
    
    .then(res => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      // setDeviceData(data[0].name)
    })
  }, [])
  //   fetch("http://192.168.15.35/#/json", {  // http://192.168.15.35/rpc/Shelly.GetStatus
  //     method: "GET",
  //     headers: {
  //       'Accept': 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(response =>
  //     console.log(JSON.stringify(response)))
  // }

//or
  
// useEffect(() => {
//   const getJson = async () => {
//     const data = await getDocs(postCollectorRef)
//     setDataList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
//   };
// })

  return (
    <div className="App">
      {/* {posts && <PostList posts={posts} title="all posts" />} */}
      {/* {deviceData && <deviceDataPostList posts={posts} title="all posts" />} */}
      {/* below part of the second option */}
      {/* <PostList /> */}
      {/* <h1>Test</h1> */}
      {deviceData ? ( <h1>{deviceData}</h1> ) : (<h1>Loading</h1>)}
      
</div>
  )}

export default App;