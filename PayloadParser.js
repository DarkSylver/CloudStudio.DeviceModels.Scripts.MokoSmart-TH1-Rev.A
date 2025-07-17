function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);

    var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
    if (temperatureSensor != null){
        temperatureSensor.updateTemperatureSensorStatus(parsed.field3);
    }

    var humiditySensor = device.endpoints.byType(endpointType.humiditySensor);
    if (temperatureSensor != null){
        humiditySensor.updateHumiditySensorStatus(parsed.field4);   
    }

    device.updateDeviceRssi({ strength: -50 });
    device.updateDeviceBattery({ voltage: 2.95 });
}