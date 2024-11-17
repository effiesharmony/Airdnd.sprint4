import { httpService } from '../../services/http.service.js'

const BASE_URL = 'stay/'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(stayId) {
    return httpService.get(BASE_URL + stayId)
}

function remove(stayId) {
    return httpService.delete(BASE_URL + stayId)
}

function save(stay) {
    const method = stay._id ? 'put' : 'post'
    return httpService[method](BASE_URL, stay)
}

function getDefaultFilter() {
    return {
        minCapacity: '',
        place: '',
        availableDates: {
            start: '',
            end: ''
        },
        label: [],
    }
}

function getEmptyStay() {
    return (
        {
            name: '',
            imgUrls: [null, null, null, null, null],
            price: '',
            summary: '',
            amenities: [],
            capacity: '',
            loc: {
                country: '',
                city: '',
                address: '',
            }
        }
    )
}
