const baseUrl = 'http://localhost:8000/bikes'

export const apiRoutes = {
    getBikeTypes: `${baseUrl}/getBikeTypes`,
    getAvailable: `${baseUrl}/getAvailable`,
    getRented: `${baseUrl}/getRented`,
    addBike: `${baseUrl}/addBike`,
    addRent: `${baseUrl}/addRent`,
    deleteRent: `${baseUrl}/deleteRent`,
    deleteBike: `${baseUrl}/deleteBike`
}
