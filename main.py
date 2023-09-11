moist = 0
ljus = 0
temp = 0
radio.set_group(137)
radio.set_transmit_power(0)

def on_forever():
    global temp, ljus, moist
    temp = input.temperature() - 5
    ljus = input.light_level()
    moist = 0
    basic.show_number(temp)
    basic.show_number(ljus)
    basic.show_number(moist)
    radio.send_string("" + String.from_char_code(2 ** 16 - 1) + String.from_char_code(2 ** 16 - 1) + String.from_char_code(temp) + String.from_char_code(ljus) + String.from_char_code(moist))
    basic.pause(5000)
    basic.pause(5000)
basic.forever(on_forever)
