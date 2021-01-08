export type bike_type = {
    bike_type_id: number
    type: string
}

type bikeGeneral = {
    name: string
    price: number
}

export type bikeForRent = {
    bike_id: number
    type: string
} & bikeGeneral

export type bikeForAdd = {
    bike_type_id: number
} & bikeGeneral

export type rentedBike = {
    rent_id: number
    rent_start_datetime: Date
    type: string
} & bikeGeneral
