import { useEffect, useState } from "react";
import { getData } from "./services/device";

const Device = () => {
    const [deviceData, setDeviceData] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await getData()
            setDeviceData(response)
        }
        fetchData()
    }, []);
    console.log('front', deviceData)
    return (
        <div>
            <h2>{deviceData.voltage}</h2>
        </div>
    );
}
 
export default Device;