// auto
radio.setGroup(92)
radio.setTransmitPower(7)
forever(function follow_line() {
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "turn" && value == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, 255)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -255)
    } else if (name == "turn" && value == 2) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, -255)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 255)
    } else if (name == "move" && value == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, -255)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -255)
    } else if (name == "move" && value == 2) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, 255)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 255)
    }
    
})
