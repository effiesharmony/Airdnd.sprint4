import { orderService } from '../../services/order/order.service'
import { store } from '../store'
import { ADD_ORDER, REMOVE_ORDER, SET_ORDERS } from '../reducers/order.reducer'

export async function loadOrders(filterBy = {}) {
	try {
		const orders = await orderService.query(filterBy)
		store.dispatch({ type: SET_ORDERS, orders })
	} catch (err) {
		console.error('OrderActions: Error in loadOrders', err)
		throw err
	}
}

export async function addOrder(order) {
	try {
		const addedOrder = await orderService.save(order)
		store.dispatch({ type: ADD_ORDER, order: addedOrder })
	} catch (err) {
		console.error('OrderActions: Error in addOrder', err)
		throw err
	}
}

export async function removeOrder(orderId) {
	try {
		await orderService.remove(orderId)
		store.dispatch({ type: REMOVE_ORDER, orderId })
	} catch (err) {
		console.error('OrderActions: Error in removeOrder', err)
		throw err
	}
}