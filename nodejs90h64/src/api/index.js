import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShangpinxinxiController from './Shangpinxinxi'
import ShangpinleixingController from './Shangpinleixing'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import StoreupController from './Storeup'
import NewsController from './News'
import DiscussshangpinxinxiController from './Discussshangpinxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shangpinxinxi', ShangpinxinxiController({ config, db }))

	api.use('/shangpinleixing', ShangpinleixingController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/discussshangpinxinxi', DiscussshangpinxinxiController({ config, db }))

	return api
}
