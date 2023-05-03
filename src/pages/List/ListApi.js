import axios from "axios"

export async function fetchMotorApi(){
    const motor = await axios('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')

    return motor
}