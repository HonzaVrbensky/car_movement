#auto
radio.set_group(92)
radio.set_transmit_power(7)

def follow_line():
    pass
forever(follow_line)

def on_received_value(name, value):
    if name == "turn" and value == 1:
        PCAmotor.motor_run(PCAmotor.Motors.M2, 255)
        PCAmotor.motor_run(PCAmotor.Motors.M1, -255)
    elif name == "turn" and value == 2:
        PCAmotor.motor_run(PCAmotor.Motors.M2, -255)
        PCAmotor.motor_run(PCAmotor.Motors.M1, 255)
    elif name == "move" and value == 1:
        PCAmotor.motor_run(PCAmotor.Motors.M2, -255)
        PCAmotor.motor_run(PCAmotor.Motors.M1, -255)
    elif name == "move" and value == 2:
        PCAmotor.motor_run(PCAmotor.Motors.M2, 255)
        PCAmotor.motor_run(PCAmotor.Motors.M1, 255)
radio.on_received_value(on_received_value)
