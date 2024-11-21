import { httpService } from '../http.service'

export const orderService = {
	save,
	query,
	remove,
	getUserOrders,
	getHostOrders
}

function query(filterBy = {}) {
	const queryStr = Object.keys(filterBy).map(key => `${key}=${filterBy[key]}`).join('&')
	return httpService.get(`order?${queryStr}`)
}

function remove(orderId) {
	return httpService.delete(`order/${orderId}`)
}

function save(order) {
	return httpService.post('order', order)
}

function getUserOrders(userId) {
	return httpService.get(`order/user-orders/${userId}`)
}

function getHostOrders(hostId) {
	return httpService.get(`order/${hostId}/host-orders`)
}