import { httpService } from '../http.service'

export const orderService = {
	save,
	query,
	remove,
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





// import { httpService } from '../http.service'

// export const reviewService = {
// 	add,
// 	query,
// 	remove,
// }

// function query(filterBy) {
// 	var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
// 	return httpService.get(`review${queryStr}`)
// }

// async function remove(reviewId) {
// 	await httpService.delete(`review/${reviewId}`)
// }

// async function add({ txt, aboutUserId }) {
// 	return await httpService.post(`review`, { txt, aboutUserId })
// }
