import { storageService } from '../async-storage.service'
import { userService } from '../user'
const STORAGE_KEY = 'orders'

export const orderService = {
    saveOrder,
}

function saveOrder(order) {
    if (order._id) {
        return storageService.put(STORAGE_KEY, order)
    } else {
        order.guest = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, order)
    }
}
